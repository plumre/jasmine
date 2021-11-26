<template>
  <div class="events-delete-edit">
    <vue-cal selected-date="2018-11-19"
             :time-from="10 * 60"
             :time-to="23 * 60"
             :disable-views="['years', 'year']"
             hide-view-selector
             hide-weekends
             :editable-events="{ title: true, drag: false, resize: true, delete: true, create: false }"
             :events="events"
             class="vuecal--full-height-delete">
    </vue-cal>
  </div>
</template>

<script>
import VueCal from "vue-cal";
import "vue-cal/dist/i18n/zh-cn.js";
import "vue-cal/dist/vuecal.css";
import {fruit_snack} from "common/const";

export default {
  name: "EventsDeleteAndEdit",
  components: {
    VueCal
  },
  data() {
    return {
      selectedEvent: {},
      showDialog: false,
      events: [
        {
          start: '2018-11-20 10:00',
          end: '2018-11-20 11:30',
          title: 'Boring event',
          content: '<i class="icon material-icons">block</i><br>I am not draggable, not resizable and not deletable.',
          class: 'blue-event',
          deletable: true,
          resizable: true,
          draggable: true
        },
        {
          start: '2018-11-20 14:00',
          end: '2018-11-20 17:30',
          title: 'Boring event',
          content: '<i class="icon material-icons">block</i><br>I am not draggable, not resizable and not deletable.',
          class: 'blue-event',
          deletable: false,
          resizable: false,
          draggable: false
        },
        // other events.
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

.vuecal__event {background-color: rgba(76, 172, 175, 0.35);}



</style>