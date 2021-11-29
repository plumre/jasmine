<template>
  <div id="appointment">
    <h3>appointment</h3>
<!--    <router-view></router-view>-->
    <div id="appointment-header">
      <el-button @click="showForm = true">新增预约</el-button>
    </div>
    <events-with-dialog></events-with-dialog>
    <appointment-form :showDialog="showForm" @onResetShowFrom="resetShowFrom"></appointment-form>
  </div>
</template>

<script>
import EventsWithDialog from "components/calendar/EventsWithDialog";
import AppointmentForm from "components/AppointmentForm";

export default {
  name: "Appointment",
  components: {
    EventsWithDialog,
    AppointmentForm
  },
  data() {
    return {
      showForm: false
    }
  },
  methods: {
    resetShowFrom() {
      this.showForm = false;
    }
  }

}
</script>

<style scoped>

</style>