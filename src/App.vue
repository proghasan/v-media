<script lang="ts" setup>
import VMediaAttachment from "./components/VMediaAttachment.vue";

const removeEvent = (id: string) => {
  console.log("remove id", id);
};
const allMedia = (files: string | File) => {
  console.log(files);
};
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 mx-auto">
        <h1 class="text-center">User Form</h1>
        <form>
          <div class="mb-3">
            <label class="form-label">Full name</label>
            <input class="form-control" type="text" />
          </div>
          <div class="mb-3">
            <label class="form-label">File</label>
            <VMediaAttachment
              :rules="{
                accept: ['image/png', 'image/jpeg', 'application/pdf'],
                maxSizeInKB: 1024,
                allowMultiple: true,
              }"
              @mediaHandel="allMedia"
              @remove="removeEvent"
            />
          </div>
          <button class="btn btn-primary" type="submit">Save & Change</button>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
.app {
  /*width: 500px;*/
  /*border: 1px solid red;*/
  /*overflow: hidden;*/
}
</style>
