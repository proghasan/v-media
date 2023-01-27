<script lang="ts" setup>
import type Result from "@/types/Result";
import FilePreviewer from "@/components/FilePreviewer.vue";
import RemoveIcon from "@/assets/icons/RemoveIcon.vue";

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
    <FilePreviewer :src="prop.attachment.fileSrc" />
    <div class="overlay">
      <div class="content">
        <RemoveIcon @click.prevent="remove(prop?.attachment?.id)" />
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.scroll-preview-wrapper {
  display: flex;
  overflow-x: auto;
  overflow-y: hidden;
  min-width: 100%;

  .v-media-card {
    border: 0.5px dashed var(--v-media-hover-border-color);
    //width: 5rem;
    margin-right: 5px;
    display: flex;
    justify-content: center;
    position: relative;
    //overflow: hidden;

    &:hover {
      //overflow: hidden;

      .overlay {
        opacity: 0.93;
      }
    }

    .overlay {
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      width: 100%;
      height: 100%;
      opacity: 0;
      background: white;
      transition: opacity 0.5s ease-in-out;
      cursor: pointer;

      .content {
        position: absolute;

        svg {
          width: 30px;
        }
      }
    }
  }
}
</style>
