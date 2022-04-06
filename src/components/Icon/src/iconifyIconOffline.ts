import { h, defineComponent } from "vue";
import { Icon as IconifyIcon, addIcon } from "@iconify/vue/dist/offline";

// element-plus icon
import Check from "@iconify-icons/ep/check";
import Close from "@iconify-icons/ep/close";
import CloseBold from "@iconify-icons/ep/close-bold";
import ArrowDown from "@iconify-icons/ep/arrow-down";
import RefreshRight from "@iconify-icons/ep/refresh-right";
import videoPlay from "@iconify-icons/ep/video-play";
import Edit from "@iconify-icons/ep/edit";
addIcon("check", Check);
addIcon("close", Close);
addIcon("close-bold", CloseBold);
addIcon("arrow-down", ArrowDown);
addIcon("refresh-right", RefreshRight);
addIcon("video-play", videoPlay);
addIcon("edit", Edit);

// remixicon
import arrowRightSLine from "@iconify-icons/ri/arrow-right-s-line";
import arrowLeftSLine from "@iconify-icons/ri/arrow-left-s-line";
addIcon("arrow-right-s-line", arrowRightSLine);
addIcon("arrow-left-s-line", arrowLeftSLine);

// Iconify Icon在Vue里离线使用（用于内网环境）https://docs.iconify.design/icon-components/vue/offline.html
export default defineComponent({
  name: "IconifyIcon",
  components: { IconifyIcon },
  props: {
    icon: {
      type: String,
      default: ""
    }
  },
  render() {
    const attrs = this.$attrs;
    return h(
      IconifyIcon,
      {
        icon: `${this.icon}`,
        ...attrs
      },
      {
        default: () => []
      }
    );
  }
});
