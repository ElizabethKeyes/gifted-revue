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
    <form>
      <label for="search">Search GIFs</label>
      <div class="d-flex">
        <input type="text" class="form-control inline-input">
        <button class="btn btn-info inline-button"><i class="mdi mdi-magnify"></i></button>
      </div>
    </form>
  </div>
</template>


<script>
import { ref } from 'vue';
import { giftsService } from "../services/GiftsService.js";
import { logger } from "../utils/Logger.js";
import Pop from "../utils/Pop.js";

export default {

  setup() {
    const editable = ref({})



    return {
      editable,
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
</style>