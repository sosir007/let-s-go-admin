import { createProdMockServer } from "vite-plugin-mock/es/createProdMockServer";
import userMock from "../mock/user";
import asyncRoutesMock from "../mock/asyncRoutes";

export const mockModules = [...userMock, ...asyncRoutesMock];

export function setupProdMockServer() {
  createProdMockServer(mockModules);
}
