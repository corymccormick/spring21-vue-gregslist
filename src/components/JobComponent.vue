<template>
  <div class="job col">
    <router-link :to="{ name: 'JobDetails', params: { id: job.id}}">
      <div class="card shadow">
        <div class="card-body">
          <h4 class="card-title">
            {{ job.company }} - {{ job.title }}
          </h4>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Job',
  props: {
    job: {
      type: Object,
      required: true
    }
  },
  setup() {
    return {}
  },
  components: {}

}
</script>

<style>

</style>
