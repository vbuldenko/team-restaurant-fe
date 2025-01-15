import axiosClient from "../api/axiosClient";
import { Dish } from "../types/Dish";

function getAll(): Promise<Dish[]> {
  return axiosClient.get("/dishes?page=0&size=20");
}

function add(newTraining: Partial<Dish>): Promise<Dish> {
  return axiosClient.post(`/dishes`, newTraining);
}

function update(dishId: number, updatedDish: Partial<Dish>): Promise<Dish> {
  return axiosClient.put(`/dishes/${dishId}`, updatedDish);
}

function remove(dishId: number): Promise<void> {
  return axiosClient.delete(`/dishes/${dishId}`);
}

export const menuService = {
  getAll,
  add,
  update,
  remove,
};
