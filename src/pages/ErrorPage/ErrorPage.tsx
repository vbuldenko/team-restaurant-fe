import { isRouteErrorResponse, Link } from "react-router";
import { Route } from "./+types/root";

export default function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  if (isRouteErrorResponse(error)) {
    return (
      <>
        <h1>
          {error.status} {error.statusText}
        </h1>
        <p>{error.data}</p>
      </>
    );
  } else if (error instanceof Error) {
    return (
      <div>
        <h1>Error</h1>
        <p>{error.message}</p>
        <p>The stack trace is:</p>
        <pre>{error.stack}</pre>
      </div>
    );
  } else {
    return (
      <div className="container py-24 flex flex-col gap-2">
        <h1>Unknown Error</h1>
        <Link
          to="/"
          className="error-page__link bg-orange-300 text-white rounded-md px-4 py-2 self-start"
        >
          Go back home
        </Link>
      </div>
    );
  }
}
