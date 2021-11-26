<template>
  <div class="cale">
    <!--

activeView:             [String],          default: 'week'
allDayBarHeight:        [String, Number],  default: '25px'
cellClickHold:          [Boolean],         default: true
cellContextmenu:        [Boolean],         default: false
clickToNavigate:        [Boolean],         default: false
dblclickToNavigate:     [Boolean],         default: true
disableDatePrototypes:  [Boolean],         default: false
disableDays:            [Array],           default: []
disableViews:           [Array],           default: []
dragToCreateEvent:      [Boolean],         default: true
dragToCreateThreshold:  [Number],          default: 15
editableEvents:         [Boolean, Object], default: false
events:                 [Array],           default: []
eventsCountOnYearView:  [Boolean],         default: false
eventsOnMonthView:      [Boolean, String], default: false
hideBody:               [Boolean],         default: false
hideTitleBar:           [Boolean],         default: false
hideViewSelector:       [Boolean],         default: false
hideWeekdays:           [Array],           default: []
hideWeekends:           [Boolean],         default: false
locale:                 [String],          default: 'en'
maxDate:                [String, Date],    default: ''
minCellWidth:           [Number],          default: 0 // In pixels.
minDate:                [String, Date],    default: ''
minEventWidth:          [Number],          default: 0 // In percent.
minSplitWidth:          [Number],          default: 0 // In pixels.
onEventClick:           [Function],        default: null
onEventCreate:          [Function],        default: null
onEventDblclick:        [Function],        default: null
overlapsPerTimeStep:    [Boolean],         default: false
resizeX:                [Boolean],         default: false
selectedDate:           [String, Date],    default: ''
showAllDayEvents:       [Boolean, String], default: false
showWeekNumbers:        [Boolean, String], default: false
small:                  [Boolean],         default: false
snapToTime:             [Number],          default: null
specialHours:           [Object],          default: {}
splitDays:              [Array],           default: []
startWeekOnSunday:      [Boolean],         default: false
stickySplitLabels:      [Boolean],         default: false
time:                   [Boolean],         default: true
timeCellHeight:         [Number],          default: 40 // In pixels.
timeFormat:             [String],          default: ''
timeFrom:               [Number],          default: 0 // In minutes.
timeStep:               [Number],          default: 30 // In minutes.
timeTo:                 [Number],          default: 24 * 60 // In minutes.
todayButton:            [Boolean],         default: false
transitions:            [Boolean],         default: true
twelveHour:             [Boolean],         default: false
xsmall:                 [Boolean],         default: false
watchRealTime:          [Boolean],         default: false


 -->

    <vue-cal
        activeView="week"
        allDayBarHeight="25px"
        :cellClickHold="true"
        :cellContextmenu="false"
        :clickToNavigate="false"
        :dblclickToNavigate="true"
        :disableDatePrototypes="false"
        :disableDays="[17, 18]"
        :disableViews="[17, 18]"
        :dragToCreateEvent="true"
        :editableEvents="false"
        :events="events"
        :hideTitleBar="true"
        :timeFrom="8 * 60"
        :timeTo="22 * 60"
        :time-step="30"
        :onEventClick="eventClick"
        locale="zh-cn"
    />
  </div>
</template>

<script>
import VueCal from "vue-cal";
import "vue-cal/dist/i18n/zh-cn.js";
import "vue-cal/dist/vuecal.css";

export default {
  name: "Abcs",
  components: {
    VueCal,
  },
  data() {
    return {
      name: "AppointmentCalendar",
      data() {
        return {

        }
      },
      events: [
        {
          start: "2021-11-18 11:00:00",
          end: "2021-11-18 11:45:00",
          title: "Need to go shopping",
          content: '<i class="v-icon material-icons">shopping_cart</i>',
          class: "leisure",
        },
        {
          start: "2021-11-18 13:00:00",
          end: "2021-11-18 13:45:00",
          title: "正畸",
          content: '<i class="v-icon material-icons">韩梅梅在诊疗室1进行正畸</i>',
          class: "leisure",
        },
      ],
    };
  },

  methods: {
    eventClick(event) {
      console.log('event click ...', event);
    }
  }
};
</script>

<style scoped>

</style>
