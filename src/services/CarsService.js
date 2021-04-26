import { AppState } from '../AppState.js'
// REVIEW router gets imported directly from the router file
import router from '../router/index.js'
import { api } from './AxiosService.js'

class CarsService {
  async getCars() {
    const res = await api.get('cars')
    AppState.cars = res.data
  }

  async getCarById(id) {
    const res = await api.get('cars/' + id)
    AppState.activeCar = res.data
  }

  async createCar(newCar) {
    const res = await api.post('cars', newCar)
    AppState.cars.push(res.data)
    // everytime a car is created, we will change pages
    router.push({ name: 'CarDetails', params: { id: res.data.id } })
  }

  async bid(car) {
    await api.put('cars/' + car.id, car)
  }

  async deleteCar(id) {
    await api.delete('cars/' + id)
    AppState.cars = AppState.cars.filter(car => car.id !== id)
  }
}

export const carsService = new CarsService()
