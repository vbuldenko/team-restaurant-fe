import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from "axios";

// Custom instance of Axios
const axiosClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || "http://localhost:3001",
  // timeout: 10000, // Set a timeout for requests (in milliseconds)
  headers: {
    "Content-Type": "application/json",
  },
});

axiosClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);
axiosClient.interceptors.response.use(onResponseSuccess, onResponseError);

function onResponseSuccess(response: AxiosResponse) {
  return response.data;
}

let isRefreshing = false;
let failedQueue: Array<(token: string | null) => void> = [];

// Handle the queued requests after the token refresh
const processQueue = (error: AxiosError | null, token: string | null) => {
  failedQueue.forEach((cb) => cb(token));
  failedQueue = [];
};

// Handle the response error
async function onResponseError(error: AxiosError): Promise<any> {
  const originalRequest = error.config as AxiosRequestConfig & {
    _retry?: boolean;
  };

  // If the error is not due to unauthorized access or retry has already been attempted, reject the promise
  if (error.response?.status !== 401 || originalRequest._retry) {
    return Promise.reject(error);
  }

  // If a refresh is in progress, queue this request
  if (isRefreshing) {
    return new Promise((resolve) => {
      failedQueue.push((token) => {
        if (token) {
          originalRequest.headers["Authorization"] = `Bearer ${token}`;
          resolve(axiosClient(originalRequest));
        } else {
          resolve(Promise.reject(error));
        }
      });
    });
  }

  // Set retry flag and mark refresh as in progress
  originalRequest._retry = true;
  isRefreshing = true;

  try {
    // Refresh the access token
    const { accessToken } = await authService.refresh();
    accessTokenService.save(accessToken);

    // Update default headers and process queued requests
    axiosClient.defaults.headers.common["Authorization"] =
      `Bearer ${accessToken}`;

    processQueue(null, accessToken);

    // Retry the original request with the new token
    originalRequest.headers["Authorization"] = `Bearer ${accessToken}`;
    return axiosClient(originalRequest);
  } catch (refreshError) {
    // Process the queue with error and reject original request
    processQueue(refreshError, null);
    return Promise.reject(refreshError);
  } finally {
    // Reset the refreshing flag
    isRefreshing = false;
  }
}

export default axiosClient;
