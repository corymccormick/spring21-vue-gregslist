<template>
  <div class="job-details">
    <h1>Hello From Jobs!</h1>
    {{ route.params.id }}
    {{ state.job }}
    <button type="button" class="btn btn-danger" @click="deleteJob">
      Delete
    </button>
  </div>
</template>

<script>
import { useRoute, useRouter } from 'vue-router'
import { AppState } from '../AppState'
import { reactive, computed, onMounted } from 'vue'
import { jobsService } from '../services/JobsService'

export default {
  name: 'JobDetails',
  setup() {
    const route = useRoute()
    const router = useRouter()
    const state = reactive({
      job: computed(() => AppState.activeJob)
    })
    // REVIEW
    onMounted(async() => {
      try {
        await jobsService.getJobById(route.params.id)
      } catch (error) {
        console.error(error)
      }
    })

    return {
      route,
      state,
      async deleteJob() {
        try {
          await jobsService.deleteJob(state.job.id)
          AppState.activeJob = null
          router.push({ name: 'Jobs' })
        } catch (error) {
          console.error(error)
        }
      }
    }
  },
  components: {}
}
</script>

<style>

</style>
