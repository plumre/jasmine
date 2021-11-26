<template>
  <div id="appointment">
    <h3>appointment</h3>
    <router-view></router-view>
    <events-with-dialog></events-with-dialog>
  </div>
</template>

<script>
import EventsWithDialog from "@/components/calendar/EventsWithDialog";

export default {
  name: "Appointment",
  components: {
    EventsWithDialog
  }
}
</script>

<style scoped>

</style>