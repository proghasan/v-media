<script lang="ts" setup>
import VMedia from "@/components/VMedia.vue";
import { ref } from "vue";

const removeEvent = (id: string) => {};
const form = ref({
  media: null,
});
// const medias = "";
// const medias =
//   "https://i2.wp.com/beebom.com/wp-content/uploads/2016/01/Reverse-Image-Search-Engines-Apps-And-Its-Uses-2016.jpg";
const medias = [
  "https://i2.wp.com/beebom.com/wp-content/uploads/2016/01/Reverse-Image-Search-Engines-Apps-And-Its-Uses-2016.jpg",
  "https://i2.wp.com/beebom.com/wp-content/uploads/2016/01/Reverse-Image-Search-Engines-Apps-And-Its-Uses-2016.jpg",
  "https://i2.wp.com/beebom.com/wp-content/uploads/2016/01/Reverse-Image-Search-Engines-Apps-And-Its-Uses-2016.jpg",
  // "https://i2.wp.com/beebom.com/wp-content/uploads/2016/01/Reverse-Image-Search-Engines-Apps-And-Its-Uses-2016.jpg",
  // "https://i2.wp.com/beebom.com/wp-content/uploads/2016/01/Reverse-Image-Search-Engines-Apps-And-Its-Uses-2016.jpg",
  // "https://i2.wp.com/beebom.com/wp-content/uploads/2016/01/Reverse-Image-Search-Engines-Apps-And-Its-Uses-2016.jpg",
  // "https://i2.wp.com/beebom.com/wp-content/uploads/2016/01/Reverse-Image-Search-Engines-Apps-And-Its-Uses-2016.jpg",
  // "https://i2.wp.com/beebom.com/wp-content/uploads/2016/01/Reverse-Image-Search-Engines-Apps-And-Its-Uses-2016.jpg",
  // "https://i2.wp.com/beebom.com/wp-content/uploads/2016/01/Reverse-Image-Search-Engines-Apps-And-Its-Uses-2016.jpg",
  // "https://i2.wp.com/beebom.com/wp-content/uploads/2016/01/Reverse-Image-Search-Engines-Apps-And-Its-Uses-2016.jpg",
];
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 mx-auto">
        <h1 class="text-center">User Form</h1>
        {{ form.media }}
        <form>
          <div class="mb-3">
            <label class="form-label">Full name</label>
            <input class="form-control" type="text" />
          </div>
          <div class="mb-3">
            <label class="form-label">File</label>
            <v-media />
          </div>
          <button class="btn btn-primary" type="submit">Save & Change</button>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
