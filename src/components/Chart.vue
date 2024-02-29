/* App.vue */
<script>
  export default {
    data() {
      return {
        chart: null,
        options: {
          animationEnabled: true,
          title: {
          },
          data: [{
            type: "funnel",
            indexLabel: "{name}: {y}",
            valueRepresents: "area",
            dataPoints: [
              { y: 10000, name: "Jami lidlar" },
              { y: 8200, name: "Sifatli lidlar" },
              { y: 2500, name: "Kursga yozilganlar" },
              { y: 480, name: "To'lov qilganlar" }
            ]
          }]
        },
        styleOptions: {
          width: "100%",
          height: "360px"
        }
      }
    }
  }
</script>
  
<template>
    <CanvasJSChart :options="options" :style="styleOptions" />
</template>                              