<template>
  <div class="events-split">
<!--    <button @click="minCellWidth = minCellWidth ? 0 : 400">
      {{ minCellWidth ? 'min cell width: 400px' : 'Add min cell width' }}
    </button>
    <button @click="minSplitWidth = minSplitWidth ? 0 : 200">
      {{ minSplitWidth ? 'min split width: 200px' : 'Add min split width' }}
    </button>
    <button @click="stickySplitLabels = !stickySplitLabels">
      Sticky Split Labels
    </button>
    <button @click="splitDays[1].hide = !splitDays[1].hide">
      Show/Hide Dad
    </button>-->

    <vue-cal selected-date="2021-11-26"
             :time-from="7 * 60"
             :time-step="30"
             :disable-views="['years', 'year', 'month']"
             editable-events
             :events="events"
             :split-days="splitDays"
             :sticky-split-labels="stickySplitLabels"
             :min-cell-width="minCellWidth"
             :min-split-width="minSplitWidth"
             locale="zh-cn"
    >
    </vue-cal>
  </div>
</template>

<script>
import VueCal from "vue-cal";
import "vue-cal/dist/i18n/zh-cn.js";
import "vue-cal/dist/vuecal.css";

export default {
  name: "EventsSplit",
  components: {
    VueCal
  },
  data() {
    return {
      selectedEvent: {},
      showDialog: false,
      stickySplitLabels: false,
      minCellWidth: 600,
      minSplitWidth: 0,
      splitDays: [
        // The id property is added automatically if none (starting from 1), but you can set a custom one.
        // If you need to toggle the splits, you must set the id explicitly.
        { id: 1, class: 'col-1', label: '张馨之' },
        { id: 2, class: 'col-2', label: '赵鹅', hide: false },
        { id: 3, class: 'col-3', label: '孙维鑫' },
        { id: 4, class: 'col-4', label: '罗娟' },
        { id: 5, class: 'col-5', label: '如花' },
        { id: 6, class: 'col-6', label: '唐伯虎' },
        { id: 6, class: 'col-6', label: '秋香' }
      ],
      events: [
        {
          start: '2021-11-26 08:30',
          end: '2021-11-26 10:30',
          title: '【正畸】王笑笑',
          content: '<i class="v-icon material-icons">' +
              '患者：王笑笑<br>' +
              '性别：女<br>' +
              '年龄：28<br>' +
              '医生：张馨之<br>' +
              '</i>',
          class: 'health',
          split: 1 // Has to match the id of the split you have set (or integers if none).
        },
        {
          start: '2021-11-26 09:00',
          end: '2021-11-26 10:00',
          title: '【洁牙】李云',
          content: '<i class="v-icon material-icons">' +
              '患者：李云<br>' +
              '性别：女<br>' +
              '年龄：29<br>' +
              '医生：赵鹅<br>' +
              '</i>',
          class: 'health',
          split: 2 // Has to match the id of the split you have set (or integers if none).
        },
        {
          start: '2021-11-26 08:00',
          end: '2021-11-26 10:00',
          title: '【种植】赵霞',
          content: '<i class="v-icon material-icons">' +
              '患者：赵霞<br>' +
              '性别：女<br>' +
              '年龄：58<br>' +
              '医生：孙维鑫<br>' +
              '</i>',
          class: 'health',
          split: 3 // Has to match the id of the split you have set (or integers if none).
        },
        {
          start: '2021-11-26 11:00',
          end: '2021-11-26 12:00',
          title: '【拔牙】吕布',
          content: '<i class="v-icon material-icons">' +
              '患者：吕布<br>' +
              '性别：男<br>' +
              '年龄：38<br>' +
              '医生：张馨之<br>' +
              '</i>',
          class: 'health',
          split: 1 // Has to match the id of the split you have set (or integers if none).
        },
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


</style>

<style>

/* You can easily set a different style for each split of your days. */
.vuecal__cell-split.col-2 {background-color: rgba(221, 238, 255, 0.5);}
.vuecal__cell-split.col-1 {background-color: rgba(255, 232, 251, 0.5);}
.vuecal__cell-split.col-3 {background-color: rgba(221, 255, 239, 0.5);}
.vuecal__cell-split.col-4 {background-color: rgba(255, 250, 196, 0.5);}
.vuecal__cell-split.col-5 {background-color: rgba(255, 206, 178, 0.5);}
.vuecal__cell-split .split-label {color: rgba(0, 0, 0, 0.1);font-size: 26px;}

/* Different color for different event types. */
.vuecal__event.leisure {background-color: rgba(253, 156, 66, 0.9);border: 1px solid rgb(233, 136, 46);color: #fff;}
.vuecal__event.health {background-color: rgba(164, 230, 210, 0.9);border: 1px solid rgb(144, 210, 190);}
.vuecal__event.sport {background-color: rgba(255, 102, 102, 0.9);border: 1px solid rgb(235, 82, 82);color: #fff;}
</style>