import { createProdMockServer } from "vite-plugin-mock/es/createProdMockServer";
import userMock from "../mock/user";
import asyncRoutesMock from "../mock/asyncRoutes";
import mapMock from "../mock/map";
import vuejsMock from '../mock/study/vuejs'

export const mockModules = [...userMock, ...asyncRoutesMock, ...mapMock, ...vuejsMock];

export function setupProdMockServer() {
  createProdMockServer(mockModules);
}
