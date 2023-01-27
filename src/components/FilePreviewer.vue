<script lang="ts" setup>
export interface Props {
  src?: string;
}

const props = defineProps<Props>();
</script>

<template>
  <div class="v-media-thumb">
    <img :src="props.src" />
  </div>
</template>
<style lang="scss" scoped>
.v-media-wrapper {
  display: flex;
}

.v-media-thumb {
  position: relative;
  flex: none;
  width: 5rem;
  height: 5rem;

  img {
    width: 100%;
    aspect-ratio: 1/1;
    object-fit: cover;
  }
}
</style>
