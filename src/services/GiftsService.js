import { AppState } from "../AppState.js"
import { Gift } from "../models/Gift.js"
import { sandboxGiftsApi } from "./AxiosService.js"

class GiftsService {
  async getGifts() {
    const res = await sandboxGiftsApi.get('')
    AppState.gifts = res.data.map(g => new Gift(g))
    console.log('RES.DATA', res.data)
    console.log('[CLASSED GIFTS]', AppState.gifts)
  }
}

export const giftsService = new GiftsService()