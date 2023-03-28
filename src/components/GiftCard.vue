<template>
  <div class="my-card">
    <img :src="giftProp.url" class="mb-2">
    <h6 class="text-center">{{ giftProp.tag }}</h6>
  </div>
</template>
<script>
import { Gift } from "../models/Gift.js";

export default {
  props: {
    giftProp: { type: Gift, required: true }
  },
  setup() {
    return {};
  },
};
</script>
<style>
.my-card {
  height: 35vh;
  border-radius: 5px;
  background-color: whitesmoke;
  margin-top: 1em;
  margin-bottom: 1em;
}

img {
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  object-fit: cover;
  object-position: center;
  height: 25vh;
  width: 100%
}
</style>