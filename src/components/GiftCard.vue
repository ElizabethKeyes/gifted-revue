<template>
  <div class="my-card d-flex flex-column justify-content-between">
    <img v-if="giftProp.opened == true" :src="giftProp.url" class="mb-2">
    <img v-else src="../assets/img/closed-gift.jpg" class="selectable closed-img" @click="toggleGift(giftProp.id)">
    <h6 v-if="giftProp.opened == true" class="text-center mb-3">{{ giftProp.tag }}</h6>
    <div class="d-flex justify-content-between">
      <button v-if="giftProp.opened == true" title="Close Gift" class="btn btn-outline-success small-button"
        @click="toggleGift(giftProp.id)"><i class="mdi mdi-gift"></i></button>
      <button v-if="giftProp.opened == true" title="Delete Gift" class="btn btn-outline-danger small-button"
        @click="deleteGift(giftProp.id)"><i class="mdi mdi-delete"></i></button>
    </div>
  </div>
</template>
<script>
import { popScopeId } from "vue";
import { Gift } from "../models/Gift.js";
import { giftsService } from "../services/GiftsService.js";
import { logger } from "../utils/Logger.js";
import Pop from "../utils/Pop.js";

export default {
  props: {
    giftProp: { type: Gift, required: true }
  },
  setup() {
    return {
      async toggleGift(giftId) {
        try {
          await giftsService.toggleGift(giftId)
        } catch (error) {
          logger.log(error)
          Pop.error(error)
        }
      },

      async deleteGift(giftId) {
        try {
          if (await Pop.confirm('Are you sure you want to delete this gift?')) {
            await giftsService.deleteGift(giftId)
          }
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
.my-card {
  height: 40vh;
  border-radius: 5px;
  background-color: whitesmoke;
  margin-top: 1em;
  margin-bottom: 1em;
}

.closed-img {
  height: 40vh
}

img {
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  object-fit: cover;
  object-position: center;
  height: 25vh;
  width: 100%
}

.small-button {
  width: 4vw;
  margin-right: .3em;
  margin-left: .3em;
  margin-bottom: .3em;
}
</style>