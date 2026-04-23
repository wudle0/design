<template>
  <a-button class="ghost btn-copy" @click="copyText">
    <Icon :size="size" color="default">
      <template #name>content_copy</template>
    </Icon>
  </a-button>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';
import { openNotification } from '@/hooks/notification/useNotification';
import { Icon } from '@/components/icons';

const props = defineProps({
  textToCopy: {
    type: String,
    required: true,
  },
  size: {
    type: String,
    default: 'md',
    validator: (value: string) => ['xs', 'sm', 'md', 'lg'].includes(value),
  },
});

const copyText = async () => {
  try {
    // 텍스트가 비어있는지 확인
    if (!props.textToCopy?.trim()) {
      openNotification({
        title: '복사할 내용이 없습니다.',
        iconName: 'error',
      });
      return;
    }

    // 클립보드에 복사
    await navigator.clipboard.writeText(props.textToCopy);
    openNotification({
      title: '복사되었습니다.',
      iconName: 'check_circle',
    });
  } catch (error) {
    // 실패
    openNotification({
      title: '복사에 실패했습니다.',
      iconName: 'error',
    });
  }
};
</script>
