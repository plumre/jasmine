<template>
  <div class="events-with-dialog">
    <vue-cal selected-date="2018-11-19"
             :time-from="9 * 60"
             :time-to="19 * 60"
             :disable-views="['years', 'year']"
             :events="events"
             :on-event-click="onEventClick" locale="zh-cn">
    </vue-cal>
    <el-dialog :visible.sync="showDialog">
      <el-card>
        <template slot="header">
          <div class="card-header">
            <span><i :class="selectedEvent.icon" style="margin-right: 5px"/>{{ selectedEvent.title }}</span>
            <strong>{{ selectedEvent.start && selectedEvent.start.format('DD/MM/YYYY') }}</strong>
          </div>
        </template>

        <div class="card-text">
          <p v-html="selectedEvent.contentFull"/>
          <strong>Event details:</strong>
          <ul>
            <li>Event starts at: {{ selectedEvent.start && selectedEvent.start.formatTime() }}</li>
            <li>Event ends at: {{ selectedEvent.end && selectedEvent.end.formatTime() }}</li>
          </ul>
        </div>
      </el-card>
    </el-dialog>
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

.vuecal__event {
  cursor: pointer;
}

.vuecal__event-title {
  font-size: 1.2em;
  font-weight: bold;
  margin: 4px 0 8px;
}

.vuecal__event-time {
  display: inline-block;
  margin-bottom: 12px;
  padding-bottom: 12px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
}

.vuecal__event-content {
  font-style: italic;
}


</style>