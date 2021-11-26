<template>
  <div class="events-with-indicator">
    <vue-cal selected-date="2018-11-19"
             xsmall
             :time-from="10 * 60"
             :disable-views="['day']"
             events-count-on-year-view
             active-view="month"
             :events="events">
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

.vuecal__cell-events-count {
  width: 18px;
  height: 2px;
  color: transparent;
}

/* Dot indicator */
.vuecal__cell-events-count {
  width: 4px;
  min-width: 0;
  height: 4px;
  padding: 0;
  color: transparent;
}

/* Cell background indicator */
.vuecal__cell--has-events {background-color: #fffacd;}
.vuecal__cell-events-count {display: none;}


</style>