<script  setup lang="ts">
import { PropType, ref } from "vue";

export interface Props {
    src: string
}

const props = defineProps<Props>();

</script>

<template>
    <div class="v-media-thumb">
        <img :src="props.src" />
    </div>
</template>
<style scoped lang="scss">
.v-media-thumb {
    margin: 0 1rem 0 0;
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