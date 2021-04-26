import { AppState } from '../AppState.js'
// REVIEW router gets imported directly from the router file
import router from '../router/index.js'
import { api } from './AxiosService.js'

class JobsService {
  async getJobs() {
    const res = await api.get('jobs')
    AppState.cars = res.data
  }

  async getJobById(id) {
    const res = await api.get('jobs/' + id)
    AppState.activJob = res.data
  }

  async createJob(newJob) {
    const res = await api.post('cars', newJob)
    AppState.jobs.push(res.data)
    // everytime a car is created, we will change pages
    router.push({ name: 'JobDetails', params: { id: res.data.id } })
  }

  async deleteJob(id) {
    await api.delete('jobs/' + id)
    AppState.cars = AppState.jobs.filter(job => job.id !== id)
  }
}

export const jobsService = new JobsService()
