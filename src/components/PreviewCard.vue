<script lang="ts" setup>
import type Result from "@/types/Result";
import FilePreviewer from "@/components/FilePreviewer.vue";

export interface Props {
  attachment: Result;
}

const prop = defineProps<Props>();
const emit = defineEmits(["remove"]);
const remove = (index: number) => {
  emit("remove", index);
};
</script>
<template>
  <FilePreviewer :src="prop.attachment.fileSrc" />
  <div class="v-media-properties">
    <div class="v-media-property text-uppercase">
      {{ prop.attachment.fileName }}
    </div>
    <div class="v-media-property">{{ prop.attachment.fileSize }} KB</div>
    <div class="v-media-property">
      <button class="button-link" @click.prevent="remove(prop.attachment.id)">
        Remove
      </button>
    </div>
  </div>
</template>

<style scoped></style>
