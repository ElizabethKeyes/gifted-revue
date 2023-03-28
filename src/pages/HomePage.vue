<template>
  <div class="container-fluid">
    <section class="row max-height">
      <Sidenav />
      <div class="col-8">
        <section class="row">
          <div class="col-4" v-for="gift in gifts" :key="gift.id">
            <GiftCard :giftProp="gift" />
          </div>
        </section>
      </div>
    </section>
  </div>
</template>

<script>
import { AppState } from '../AppState.js'
import { logger } from "../utils/Logger.js";
import { giftsService } from '../services/GiftsService.js';
import { onMounted, computed } from "vue";


export default {

  setup() {
    async function getGifts() {
      try {
        await giftsService.getGifts()
      } catch (error) {
        logger.log(error.message)
      }
    }
    onMounted(() => {
      getGifts()
    })

    return {
      gifts: computed(() => AppState.gifts)
    }
  }
}
</script>

<style scoped lang="scss">
.home {
  display: grid;
  height: 80vh;
  place-content: center;
  text-align: center;
  user-select: none;

  .home-card {
    width: 50vw;

    >img {
      height: 200px;
      max-width: 200px;
      width: 100%;
      object-fit: contain;
      object-position: center;
    }
  }
}

.max-height {
  height: 100vh
}
</style>
