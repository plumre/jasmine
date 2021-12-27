<template>
  <div id="cash">
    <h3>cash</h3>
    <treatment-card></treatment-card>
  </div>
</template>

<script>
import TreatmentCard from "components/TreatmentCard";

export default {
  name: "Cash",
  components: {
    TreatmentCard
  }
}
</script>

<style scoped>
#cash .treatment-card {
  margin-bottom: 90px;
}
</style>