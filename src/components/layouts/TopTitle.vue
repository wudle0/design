<template>
  <a-flex
    vertical
    :gap="props.text ? 8 : 0"
    style="
      margin-bottom: 12px;
      padding-bottom: 12px;
      border-bottom: 1px solid var(--border-default-01);
    "
  >
    <h2 class="ant-typography">{{ props.title }}</h2>
    <small
      class="typography-label-5 ant-typography-secondary"
      v-html="formattedText"
      style="width: 100%"
    />
  </a-flex>
</template>

<script lang="ts" setup>
import { computed } from 'vue';

const props = defineProps({
  title: { type: String, default: '제목' },
  text: { type: String, default: '' },
});

// 줄바꿈 문자(\n)를 <br>로 변환
const formattedText = computed(() => {
  return props.text.replace(/\n/g, '<br />');
});
</script>
