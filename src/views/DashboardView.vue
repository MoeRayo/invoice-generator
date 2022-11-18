<template>
  <div class="">
    <TheDashboardNav />
    <TheDashboardBody/>
  </div>
</template>

<script>
import TheDashboardNav from "@/components/TheDashboardNav.vue";
import TheDashboardBody from "@/components/TheDashboardBody.vue";

export default {
  name: 'dashboard',
  components: {
    TheDashboardNav,
    TheDashboardBody,
  }
};
</script>
