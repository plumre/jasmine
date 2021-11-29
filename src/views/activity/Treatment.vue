<template>
  <div id="treatment">
    <h3>treatment</h3>
    <treatment-card></treatment-card>
    <treatment-card></treatment-card>
    <treatment-card></treatment-card>
  </div>
</template>

<script>

import TreatmentCard from "components/TreatmentCard";

export default {
  name: "Treatment",
  components: {
    TreatmentCard
  }
}
</script>

<style scoped>

#treatment .treatment-card {
   margin-bottom: 90px;
}
</style>