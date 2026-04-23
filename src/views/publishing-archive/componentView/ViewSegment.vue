<template>
  <!-- <a-typography-title class="typography-display-1">
    segment - 단독
  </a-typography-title>
  <a-segmented v-model:value="value" :options="data" />
  <a-divider /> -->

  <TopTitle
    title="세그먼트"
    text="레이아웃(템플릿) 삽입 시 segment-wrap 부모 컨테이너 내부에 삽입하며, segment-wrap 은 여백과 border-bottom 을 포함하고 있습니다."
  />

  <div class="segment-wrap">
    <a-segmented v-model:value="value" :options="data" />
  </div>
</template>
<script lang="ts" setup>
import { reactive, ref } from 'vue';
import { TopTitle } from '@/components/layouts';

const data = reactive([
  'Segment-1',
  'Segment-2',
  'Segment-3',
  'Segment-4',
  'Segment-5',
]);
const value = ref(data[0]);
</script>
