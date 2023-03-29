import { AppState } from "../AppState.js"
import { Gift } from "../models/Gift.js"
import { Giphy, sandboxGiftsApi } from "./AxiosService.js"

class GiftsService {
  async getGifts() {
    const res = await sandboxGiftsApi.get('')
    AppState.gifts = res.data.map(g => new Gift(g))
  }

  async addGift(giftData) {
    const res = await sandboxGiftsApi.post('', giftData)
    AppState.gifts = [new Gift(res.data), ...AppState.gifts]
  }

  async toggleGift(giftId) {
    const foundGift = AppState.gifts.find(g => g.id == giftId)
    const foundIndex = AppState.gifts.findIndex(g => g.id == giftId)
    foundGift.opened = !foundGift.opened
    if (foundGift.opened == true) {
      const res = await sandboxGiftsApi.put(giftId, foundGift)
      AppState.gifts.splice(foundIndex, 1, new Gift(res.data))
    }
  }

  async deleteGift(giftId) {
    const res = await sandboxGiftsApi.delete(giftId)
    AppState.gifts = AppState.gifts.filter(g => g.id != giftId)
  }

  async searchGiphy(query) {
    let res = await Giphy.get(`search`, {
      params: {
        rating: 'pg',
        lang: 'en',
        q: query,
        limit: 10
      }
    })
    console.log(res.data)
    AppState.returnedGifts = res.data.data
    console.log(AppState.returnedGifts)

  }
}

export const giftsService = new GiftsService()