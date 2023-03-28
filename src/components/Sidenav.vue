<template>
  <div class="col-4 bg-success">
    <h1 class="mb-5 mt-2">Gifted</h1>
    <form>
      <label for="tag">Tag</label>
      <input type="text" class="form-control mb-3">
      <label for="url">URL</label>
      <input type="url" class="form-control mb-3">
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
export default {
  setup() {

    // const editable = ref({})

    return {

      // editable


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