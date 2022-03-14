import { PropType } from "vue";
import { propTypes } from "@/utils/propTypes";
export const countToProps = {
  startVal: propTypes.number.def(0),
  endVal: propTypes.number.def(2020),
  // 持续时间
  duration: propTypes.number.def(1300),
  // 是否自动播放
  autoplay: propTypes.bool.def(true),
  // 小数位
  decimals: {
    type: Number as PropType<number>,
    required: false,
    default: 0,
    validator(value: number) {
      return value >= 0;
    }
  },
  color: propTypes.string.def(),
  fontSize: propTypes.string.def(),
  // 小数
  decimal: propTypes.string.def("."),
  // 分隔符
  separator: propTypes.string.def(","),
  // 前缀
  prefix: propTypes.string.def(""),
  // 后缀
  suffix: propTypes.string.def(""),
  // 是否 ease 平滑
  useEasing: propTypes.bool.def(true),
  // 平滑函数
  easingFn: {
    type: Function as PropType<
      (t: number, b: number, c: number, d: number) => number
    >,
    default(t: number, b: number, c: number, d: number) {
      return (c * (-Math.pow(2, (-10 * t) / d) + 1) * 1024) / 1023 + b;
    }
  }
};
