<template>
  <img :src="giphyProp?.images.downsized.url" :alt="giphyProp?.title" class="giphy-list"
    @click="populateURL(giphyProp.id)">
</template>
<script>
import { computed } from "vue";
import { AppState } from "../AppState.js";

export default {
  props: {
    giphyProp: { required: true }
  },
  setup() {
    return {
      giftURL: computed(() => AppState.giftURL),

      populateURL(giftId) {
        const foundGift = AppState.returnedGifts.find(g => g.id == giftId)
        AppState.giftURL = foundGift.images.downsized.url
        document.getElementById('url').value = AppState.giftURL
      }
    };
  },
};
</script>
<style></style>