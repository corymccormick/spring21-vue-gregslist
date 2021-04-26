<template>
  <div class="car-details">
    <h1>Hello From Car Details!</h1>
    {{ route.params.id }}
    {{ state.car }}
    <button type="button" class="btn btn-danger" @click="deleteCar">
      Delete
    </button>
  </div>
</template>

<script>
import { useRoute, useRouter } from 'vue-router'
import { AppState } from '../AppState'
import { reactive, computed, onMounted } from 'vue'
import { carsService } from '../services/CarsService'

export default {
  name: 'CarDetails',
  setup() {
    // ROUTE is the current page info
    const route = useRoute()
    // ROUTER is the toolset of changing routes automatically
    const router = useRouter()
    const state = reactive({
      // REVIEW what does computed do here
      car: computed(() => AppState.activeCar)
    })

    onMounted(async() => {
      try {
        await carsService.getCarById(route.params.id)
      } catch (error) {
        console.error(error)
      }
    })

    return {
      route,
      state,
      async deleteCar() {
        try {
          await carsService.deleteCar(state.car.id)
          // Router is a toolset, here used to change the page after the delete is completed
          // returning the user to the cars page
          AppState.activeCar = null
          router.push({ name: 'Cars' })
        } catch (error) {
          console.error(error)
        }
      }
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
