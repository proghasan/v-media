<script lang="ts" setup>
import PlusIcon from "./icons/PlusIcon.vue";
import { PropType, ref, watch } from "vue";
import type Rules from "@/types/Rules";
import { useAttachment } from "@/composable/useAttachment";
import SingleAttachmentCard from "@/components/PreviewCard.vue";

const props = defineProps({
  rules: {
    type: Object as PropType<Rules>,
    required: false,
    default: () => {
      return {
        allowMultiple: false,
        accept: ["image/png", "image/jpeg", "application/pdf", "video/mp4"],
        maxSizeInKB: 1024,
      };
    },
  },
});
const emit = defineEmits(["remove", "mediaHandel"]);
const { setAttachment, selectedFiles, remove } = useAttachment();

const active = ref(false);
const attachment = ref("");
const toggleActive = () => {
  active.value = !active.value;
};
const clickHandel = (): void => {
  attachment.value.click();
};
const dropHandel = (event: DragEvent): void => {
  const files = event.dataTransfer?.files;
  setAttachment(files, props.rules);
};
const onFileChange = (event: Event): void => {
  const target = event.target as HTMLInputElement;
  const files = target && target.files ? target.files : undefined;
  setAttachment(files, props.rules);
};
const removeAttachment = (index: number) => {
  remove(index);
  emit("remove", index);
};
watch(selectedFiles, () => {
  emit("mediaHandel", selectedFiles.value);
});
</script>
<template>
  <div class="v-media-attachment-wrapper">
    <template v-if="selectedFiles && selectedFiles.length > 0">
      <div
        v-for="(attachment, key) in selectedFiles"
        :key="key"
        class="v-media-item"
      >
        <SingleAttachmentCard
          :attachment="attachment"
          @remove="removeAttachment"
        />
      </div>
    </template>
    <div
      v-else
      :class="{
        'has-error': selectedFiles.length > 0 && selectedFiles[0].isError,
      }"
      class="v-media-attachment"
      @click="clickHandel"
      @dragover.prevent
      @dragenter.prevent="toggleActive"
      @dragleave.prevent="toggleActive"
      @drop.prevent="dropHandel"
    >
      <div class="icon">
        <PlusIcon />
      </div>
      <div class="text">
        Select or Drag 1 file | PNG,JPG,PDF | &lt;
        {{ props.rules.maxSizeInKB }}KB
      </div>
      <input
        v-if="props.rules.allowMultiple"
        id="attachment"
        ref="attachment"
        :accept="props.rules.accept"
        hidden
        multiple
        name="attachment"
        type="file"
        @change="onFileChange"
      />
      <input
        v-else
        id="attachment"
        ref="attachment"
        :accept="props.rules.accept"
        hidden
        name="attachment"
        type="file"
        @change="onFileChange"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.v-media-attachment-wrapper {
  .v-media-attachment {
    width: 100%;
    border: 1px dashed var(--v-media-border-color);
    border-width: var(--v-media-border-width);
    display: flex;
    align-items: center;
    justify-content: flex-start;
    background: var(--v-media-attachment-bg);
    height: 70px;
    cursor: pointer;
    font-size: var(--v-media-attachment-font-size);
    color: var(--v-media-text-color);
    transition: all var(--v-media-duration) ease;

    &:hover {
      background: var(--v-media-attachment-hover-bg);
      border: 2px dashed var(--v-media-attachment-hover-border-color);
      border-width: var(--v-media-border-width);
    }

    .icon {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0 15px 0 25px;

      svg {
        width: 25px;
      }
    }

    .text {
      display: inline-block;
      white-space: nowrap;
      overflow: hidden !important;
      text-overflow: ellipsis;
    }
  }

  .has-error {
    border: 1px dashed var(--v-media-error-color);
    border-width: var(--v-media-border-width);
    color: red;
  }

  .v-media-item {
    display: flex;
    align-items: center;
    min-width: 0;

    .v-media-properties {
      font-size: var(--v-media-attachment-font-size);
      margin-top: 0;
      margin-bottom: 0;
      flex-grow: 1;
      min-width: 0;

      .v-media-property {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        --text-opacity: 1;
        color: var(--v-media-text-color);
      }
    }
  }
}
</style>
