<template>
  <div class="events-on-month-view">
    <vue-cal
        hide-view-selector
        hide-title-bar
        hide-weekends
        :time-from="10 * 60"
        :time-to="16 * 60"
        :disable-views="['years', 'year', 'month', 'day']"
        :editable-events="{ title: false, drag: false, resize: true, delete: true, create: true }"
        :drag-to-create-threshold="0">
    </vue-cal>
  </div>
</template>

<script>
import VueCal from "vue-cal";
import "vue-cal/dist/i18n/zh-cn.js";
import "vue-cal/dist/vuecal.css";
import {fruit_snack} from "common/const";

export default {
  name: "EventsWithDialog",
  components: {
    VueCal
  },
  data() {
    return {
      selectedEvent: {},
      showDialog: false,
      events: [
        {
          start: '2018-11-20 14:00',
          end: '2018-11-20 18:00',
          title: 'Need to go shopping',
          icon: fruit_snack[1],// Custom attribute.
          content: 'Click to see my shopping list',
          contentFull: 'My shopping list is rather long:<br><ul><li>Avocados</li><li>Tomatoes</li><li>Potatoes</li><li>Mangoes</li></ul>', // Custom attribute.
          class: 'leisure'
        },
        {
          start: '2018-11-22 10:00',
          end: '2018-11-22 15:00',
          title: 'Golf with John',
          icon: fruit_snack[2], // Custom attribute.
          content: 'Do I need to tell how many holes?',
          contentFull: 'Okay.<br>It will be a 18 hole golf course.', // Custom attribute.
          class: 'sport'
        }
      ]
    }
  },
  methods: {
    onEventClick(event, e) {

      console.log('a', event, e);
      this.selectedEvent = event
      this.showDialog = true

      // Prevent navigating to narrower view (default vue-cal behavior).
      e.stopPropagation()
    }
  }
}
</script>

<style scoped>

.vuecal--month-view .vuecal__cell {height: 80px;}

.vuecal--month-view .vuecal__cell-content {
  justify-content: flex-start;
  height: 100%;
  align-items: flex-end;
}

.vuecal--month-view .vuecal__cell-date {padding: 4px;}
.vuecal--month-view .vuecal__no-event {display: none;}


</style>