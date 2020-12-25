<template>
  <div id="quantityData"></div>
</template>

<script>
import { Chart, registerShape } from '@antv/g2';
export default {
  data() {
    return {
      data: [
        { item: "男", count: 45 },
        { item: "女", count: 53 }
      ]
    };
  },
  methods: {
    createChart() {
      const chart = new Chart({
        container: "quantityData",
        autoFit: true,
        height: 210
      });
      const sliceNumber = 0.01;
      registerShape("interval", "slice-shape", {
        draw(cfg, container) {
          const points = cfg.points;
          let path = [];
          path.push(["M", points[0].x, points[0].y]);
          path.push(["L", points[1].x, points[1].y - sliceNumber]);
          path.push(["L", points[2].x, points[2].y - sliceNumber]);
          path.push(["L", points[3].x, points[3].y]);
          path.push("Z");
          path = this.parsePath(path);
          return container.addShape("path", {
            attrs: {
              fill: cfg.color,
              path
            }
          });
        }
      });
        
      chart.data(this.data);
      chart.tooltip({
        showTitle: false,
        showMarkers: false
      });
      chart.legend({
        itemName: {
          style: {
            fill: "#fff",
            fontSize: 16,
            lineHeight: 18
          }
        },
        marker: {
          style: {
            r: 8
          }
        }
      });
      chart
        .interval()
        .adjust("stack")
        .position("value")
        .color("type")
        .shape("slice-shape");

      chart.render();
    }
  },
  mounted() {
    this.createChart();
  }
};
</script>

<style lang="scss" scoped>
.quantityData {
  padding: 12px 20px;
  .top-tools {
    display: flex;
    justify-content: space-between;
    align-items: center;
    h3 {
      font-size: 16px;
      height: 16px;
      line-height: 16px;
      padding-left: 10px;
      border-left: 4px solid #00ffee;
      margin-bottom: 20px;
    }
  }
}
</style>