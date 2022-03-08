import { createProdMockServer } from "vite-plugin-mock/es/createProdMockServer";
import userMock from "../mock/user";
import asyncRoutesMock from "../mock/asyncRoutes";
import mapMock from "../mock/map";

export const mockModules = [...userMock, ...asyncRoutesMock, ...mapMock];

export function setupProdMockServer() {
  createProdMockServer(mockModules);
}
