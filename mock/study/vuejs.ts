import { MockMethod } from "vite-plugin-mock";
import { resultSuccess } from '../_util';
import { VueCatalogueTree } from "@/types/study";

const catalogueList: VueCatalogueTree[] = [
  {
    label: 'introduction',
  },
  {
    label: 'warm-up',
    children: [
      {
        label: '1・Hello World'
      },
    ],
  },
  {
    label: 'easy',
    children: [
      {
        label: '2・ref family'
      },
      {
        label: '3・losing-reactivity'
      },
    ],
  },
  {
    label: 'medium',
    children: [
      {
        label: '7・Raw API'
      },
      {
        label: '8・effectScope API'
      },
    ],
  },
  {
    label: 'hard',
    children: [
      {
        label: '22・custom element'
      },
      {
        label: '23・custom ref'
      },
    ],
  },
]

export default [
  {
    url: "/api/getVuejsCatalogue",
    method: "get",
    response: () => {
      return resultSuccess<VueCatalogueTree[]>(catalogueList, { message: '获取成功！' });
    }
  }
] as MockMethod[];
