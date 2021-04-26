<template>
  <div class="jobs container">
    <div class="row">
      <div class="col">
        <h2>Jobs</h2>
        <div class="row">
          <Job v-for="job in state.jobs" :key="job.id" :job="job" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted, reactive } from 'vue'
import Job from '../components/JobComponent'
import { jobsService } from '../services/JobsService'
import { AppState } from '../AppState'

export default {
  name: 'JobsPage',
  setup() {
    const state = reactive({
      jobs: computed(() => AppState.jobs)
    })

    onMounted(async() => {
      try {
        await jobsService.getJobs()
        state.loading = false
      } catch (error) {
        console.error(error)
      }
    })
    return {
      state
    }
  },
  component: Job
}
</script>

<style>
</style>
