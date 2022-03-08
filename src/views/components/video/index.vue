<script setup lang="ts">
import { onMounted } from "vue";
import Player from "xgplayer/dist/simple_player";
import volume from "xgplayer/es/controls/volume";
import screenShot from "xgplayer/es/controls/screenShot";
import { deviceDetection } from "@/utils/deviceDetection";
import playbackRate from "xgplayer/es/controls/playbackRate";

onMounted(() => {
  new Player({
    // 选择器和视频源是播放器必须提供的配置项，缺一不可。
    id: "mse",
    // 音量，参考值：0 ~ 1，默认静音
    volume: 0,
    // 自动播放
    autoplay: false,
    // 循环播放
    // loop: true,
    screenShot: true,
    // 视频源
    url: "https://sf1-hscdn-tos.pstatp.com/obj/media-fe/xgplayer_doc_video/mp4/xgplayer-demo-720p.mp4",
    // 封面图
    poster:
      "https://s2.pstatp.com/cdn/expire-1-M/byted-player-videos/1.0.0/poster.jpg",
    // 流式布局
    fluid: deviceDetection(),
    controlPlugins: [volume, playbackRate, screenShot],
    // 倍速播放,传入倍速可选数组
    playbackRate: [0.5, 0.75, 1, 1.5, 2],
    // defaultPlaybackRate: 1.5,
  });
});
</script>

<template>
  <div class="video-container">
    <el-card>
      <template #header>
        <div class="card-header">
          <span class="font-medium"
            >视频组件，采用开源的<el-link
              href="https://v2.h5player.bytedance.com"
              target="_blank"
              style="font-size: 16px; margin: 0 4px 5px"
              >西瓜播放器</el-link
            ></span
          >
        </div>
      </template>
      <div id="mse"></div>
    </el-card>
  </div>
</template>

<style lang="scss" scoped>
.video-container {
  #mse {
    flex: auto;
  }
}
</style>
