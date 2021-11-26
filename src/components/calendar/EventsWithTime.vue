<template>
  <div class="events-with-time">
    <vue-cal selected-date="2018-11-19"
             :time-from="9 * 60"
             :time-to="23 * 60"
             :disable-views="['years', 'year', 'month']"
             hide-weekends
             :events="events">
    </vue-cal>
  </div>
</template>

<script>
import VueCal from "vue-cal";
import "vue-cal/dist/i18n/zh-cn.js";
import "vue-cal/dist/vuecal.css";

export default {
  name: "EventsWithTime",
  components: {
    VueCal
  },
  data() {
    return {
      events: [
        {
          start: '2018-11-16 10:30',
          end: '2018-11-16 11:30',
          // You can also define event dates with Javascript Date objects:
          // start: new Date(2018, 11 - 1, 16, 10, 30),
          // end: new Date(2018, 11 - 1, 16, 11, 30),
          title: 'Doctor appointment',
          content: '<i class="v-icon material-icons">local_hospital</i>',
          class: 'health'
        },
      ]
    }
  }
}
</script>

<style scoped>

</style>