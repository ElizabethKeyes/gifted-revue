import { AppState } from "../AppState.js"
import { Gift } from "../models/Gift.js"
import { sandboxGiftsApi } from "./AxiosService.js"

class GiftsService {
  async getGifts() {
    const res = await sandboxGiftsApi.get('')
    AppState.gifts = res.data.map(g => new Gift(g))
  }

  async addGift(giftData) {
    const res = await sandboxGiftsApi.post('', giftData)
    AppState.gifts = [new Gift(res.data), ...AppState.gifts]
  }

  async openGift(giftId) {
    const foundGift = AppState.gifts.find(g => g.id == giftId)
    const foundIndex = AppState.gifts.findIndex(g => g.id == giftId)
    foundGift.opened = true
    const res = await sandboxGiftsApi.put(giftId, foundGift)
    AppState.gifts.splice(foundIndex, 1, new Gift(res.data))
  }

  async deleteGift(giftId) {
    const res = await sandboxGiftsApi.delete(giftId)
    AppState.gifts = AppState.gifts.filter(g => g.id != giftId)
  }
}

export const giftsService = new GiftsService()