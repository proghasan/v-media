<script lang="ts" setup>
import type Result from "@/types/Result";
import FilePreviewer from "@/components/FilePreviewer.vue";

export interface Props {
  attachment?: Result;
}

const prop = defineProps<Props>();
const emit = defineEmits(["remove"]);
const remove = (index: number | undefined) => {
  emit("remove", index);
};
</script>
<template>
  <div v-if="prop.attachment" class="v-media-card">
    <div class="v-media-card-thumb">
      <FilePreviewer :src="prop.attachment.fileSrc" />
    </div>
    <div class="v-media-card-body">
      <div class="v-media-item text-uppercase">
        {{ prop.attachment.fileName }}
      </div>
      <div class="v-media-item">{{ prop.attachment.fileSize }} KB</div>
      <button class="button-link" @click.prevent="remove(prop?.attachment?.id)">
        Remove
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.v-media-card {
  font-size: var(--v-media-attachment-font-size);
  margin-top: 0;
  margin-bottom: 0;
  flex-grow: 1;
  min-width: 0;

  .v-media-card-body {
    margin-top: 0;
    margin-bottom: 0;
    flex-grow: 1;
    min-width: 0;
    color: var(--v-media-text-color);
    --text-opacity: 1;
    padding: 0px 10px;

    .v-media-item {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      --text-opacity: 1;
      color: var(--v-media-text-color);
    }
  }
}
</style>
