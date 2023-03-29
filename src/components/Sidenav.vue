<template>
  <div class="col-4 bg-success">
    <h1 class="mb-5 mt-2">Gifted</h1>
    <form @submit.prevent="addGift()">
      <label for="tag">Tag</label>
      <input type="text" class="form-control mb-3" v-model="editable.tag">
      <label for="url">URL</label>
      <input type="url" class="form-control mb-3" v-model="editable.url">
      <div class="text-end">
        <button class="btn btn-info" type="submit">Submit</button>
      </div>
    </form>
    <hr>
    <form @submit.prevent="searchGiphy()">
      <label for="search">Search GIFs</label>
      <div class="d-flex">
        <input type="text" class="form-control inline-input" v-model="editable.query">
        <button class="btn btn-info inline-button"><i class="mdi mdi-magnify"></i></button>
      </div>
    </form>
    <section class="row">
      <div class="col-6 p-3" v-for="g in returnedGifts">
        <img :src="g.images.downsized.url" :alt="g.title" class="giphy-list">
      </div>
    </section>
  </div>
</template>


<script>
import { ref, computed } from 'vue';
import { AppState } from "../AppState.js";
import { giftsService } from "../services/GiftsService.js";
import { logger } from "../utils/Logger.js";
import Pop from "../utils/Pop.js";

export default {

  setup() {
    const editable = ref({})


    return {
      editable,
      returnedGifts: computed(() => AppState.returnedGifts),
      async addGift() {
        try {
          const form = window.event.target
          form.reset()
          const giftData = editable._rawValue
          await giftsService.addGift(giftData)
        } catch (error) {
          logger.log(error.message)
          Pop.error(error)
        }
      },

      async searchGiphy() {
        try {
          const form = window.event.target
          form.reset()
          const query = editable._rawValue.query
          console.log(query);
          await giftsService.searchGiphy(query)
        } catch (error) {
          logger.log(error.message)
          Pop.error(error)
        }
      }

    };
  },
};
</script>


<style>
.inline-input {
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px
}

.inline-button {
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px
}

.giphy-list {
  filter: drop-shadow(0px 0px 6px black);
  border-radius: 5px
}
</style>