import { http } from "../utils/http";
import { httpRespond } from "./type";
import { VueCatalogueTree } from "@/types/study";

// 获取vuejs挑战的目录
export const getVuejsCatalogue = (): Promise<httpRespond<VueCatalogueTree[]>> => {
  return http.request("get", "/api/getVuejsCatalogue");
};
