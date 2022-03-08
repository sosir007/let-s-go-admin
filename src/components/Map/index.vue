<script setup lang="ts">
import AMapLoader from "@amap/amap-jsapi-loader";
import { reactive, getCurrentInstance, onBeforeMount, onUnmounted } from "vue";
import { mapJson } from "@/api/mock";
import { deviceDetection } from "@/utils/deviceDetection";
// import car from "../../assets/images/car.png";
import square from "../../assets/images/square.jpeg";

export interface MapConfigureInter {
  on: Fn;
  destroy?: Fn;
  clearEvents?: Fn;
  addControl?: Fn;
  getCenter?: Fn;
  setCenter?: Fn;
  setZoom?: Fn;
  plugin?: Fn;
}

type resultType = {
  info: Array<undefined>;
};

let MarkerCluster;
let map: MapConfigureInter;

const instance = getCurrentInstance();

const mapSet = reactive({
  loading: deviceDetection() ? false : true
});

const info = reactive({
  name: "天一广场",
  address: "浙江省宁波市海曙区中山东路188号",
  phone: "(0574)87683088",
  time: "10:00-22:00",
  imageUrl: square
});

// 地图创建完成(动画关闭)
const complete = (): void => {
  if (map) {
    map.on("complete", () => {
      mapSet.loading = false;
    });
  }
};

onBeforeMount(() => {
  if (!instance) return;
  let { MapConfigure } = instance.appContext.config.globalProperties.$config;
  let { options } = MapConfigure;

  AMapLoader.load({
    key: MapConfigure.amapKey,
    version: "2.0",
    plugins: ["AMap.MarkerCluster"],
    AMapUI: {
      // https://lbs.amap.com/demo/amap-ui/demos/amapui-amaploader/amapui-amaploader1/
      version: "1.1",
      plugins: ["overlay/SimpleMarker", "overlay/SimpleInfoWindow"]
    }
  })
    .then(AMap => {
      // 创建地图实例
      map = new AMap.Map(instance.refs.mapview, options);

      // 显示标记点
      // https://lbs.amap.com/api/amap-ui/reference-amap-ui/overlay/simplemarker
      let marker = new AMapUI.SimpleMarker({
        //前景文字
        // iconLabel: "天一广场",
        //自定义图标地址
        iconStyle: {
          src: "http://webapi.amap.com/theme/v1.3/markers/b/mark_r.png",
          style: {
            width: "20px",
            height: "30px"
          }
        },
        // iconStyle: "lightblue",
        //设置基点偏移
        // offset: new AMap.Pixel(0, -30),
        // showPositionPoint: true,
        map: map,
        position: map.getCenter()
      });

      // 地图中添加地图操作ToolBar插件
      // https://lbs.amap.com/api/javascript-api/reference/map-control/
      map.plugin(
        [
          "AMap.ToolBar",
          "AMap.MapType",
          "AMap.Geolocation",
          "AMap.Scale",
          "AMap.ControlBar"
        ],
        // [],
        () => {
          // 地图工具条插件，可以用来控制地图的缩放和平移
          map.addControl(new AMap.ToolBar());
          // 地图类型切换插件，用来切换固定的几个常用图层
          map.addControl(
            new AMap.MapType({
              defaultType: 0
            })
          );
          // 比例尺插件, 位于地图右下角
          map.addControl(new AMap.Scale());
          // map.addControl(new AMap.Geolocation());
          map.addControl(new AMap.ControlBar());
        }
      );

      // https://lbs.amap.com/api/amap-ui/reference-amap-ui/infowindow/simpleinfowindow/
      let infoWindow = new AMapUI.SimpleInfoWindow({
        infoTitle: `<span style="font-size: 14px;">${info.name}</span>`,
        infoBody: instance.refs.infoWindow.innerHTML,
        offset: new AMap.Pixel(0, -40)
        // position: map.getCenter(),
      });
      infoWindow.open(map, map.getCenter());

      const openInfoWin = () => {
        infoWindow.open(map, map.getCenter());
      };

      //marker 点击时打开
      marker.on("click", function () {
        openInfoWin();
      });

      // MarkerCluster = new AMap.MarkerCluster(map, [], {
      //   // 聚合网格像素大小
      //   gridSize: 80,
      //   maxZoom: 14,
      //   renderMarker(ctx) {
      //     let { marker, data } = ctx;
      //     if (Array.isArray(data) && data[0]) {
      //       var { driver, plateNumber, orientation } = data[0];
      //       var content = `<img style="transform: scale(1) rotate(${
      //         360 - Number(orientation)
      //       }deg);" src='${car}' />`;
      //       marker.setContent(content);
      //       marker.setLabel({
      //         direction: "bottom",
      //         //设置文本标注偏移量
      //         offset: new AMap.Pixel(-4, 0),
      //         //设置文本标注内容
      //         content: `<div> ${plateNumber}(${driver})</div>`
      //       });
      //       marker.setOffset(new AMap.Pixel(-18, -10));
      //       marker.on("click", ({ lnglat }) => {
      //         map.setZoom(13); //设置地图层级
      //         map.setCenter(lnglat);
      //       });
      //     }
      //   }
      // });

      // 获取模拟车辆信息;
      // mapJson()
      //   .then((res: resultType) => {
      //     let points: object = res.info.map((v: any) => {
      //       return {
      //         lnglat: [v.lng, v.lat],
      //         ...v
      //       };
      //     });
      //     if (MarkerCluster) MarkerCluster.setData(points);
      //   })
      //   .catch(err => {
      //     console.log("err:", err);
      //   });

      map.add(infoWindow); //添加图层到地图
      complete();
    })
    .catch(() => {
      mapSet.loading = false;
      throw "地图加载失败，请重新加载";
    });
});

onUnmounted(() => {
  if (map) {
    // 销毁地图实例
    map.destroy() && map.clearEvents("click");
  }
});
</script>

<template>
  <div id="mapview" ref="mapview" v-loading="mapSet.loading">
    <!--自定义窗体-->
    <div class="info" ref="infoWindow">
      <!-- <div class="info-head">{{ info.name }}</div> -->
      <div style="display: flex; align-items: center">
        <div
          class="info-img-wrap"
          style="width: 120px; height: 80px; margin-right: 5px"
        >
          <img
            class="info-logo"
            style="width: 100%; height: 100%"
            :src="info.imageUrl"
            :alt="info.name"
          />
        </div>
        <div style="font-size: 12px">
          <p>地址：{{ info.address }}</p>
          <p>电话：{{ info.phone }}</p>
          <p>营业时间： {{ info.time }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#mapview {
  height: calc(100vh - 86px);
}

/*--自定义窗体的样式---*/
.info {
  position: relative;
  border: solid 1px silver;
  max-width: 270px;
  display: none;
}

:deep(.amap-marker-label) {
  border: none !important;
}
</style>
