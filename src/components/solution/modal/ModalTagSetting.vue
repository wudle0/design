<template>
  <Modal
    :open="props.open"
    :ok-close="props.okClose"
    ok-text="적용"
    cancel-text="취소"
    size="small"
    :notification="{
      title: '태그 설정',
      variant: '적용',
    }"
  >
    <template #title>
      <BasicTitle level="modal" title="태그 설정" />
    </template>
    <template #content>
      <a-form :model="formState" autocomplete="off" layout="vertical">
        <CreateTag
          v-model:modelValue="formState.selectedTagValues"
          label="태그"
          :maxTags="5"
          placeholder="태그를 설정해 주세요."
          helperText="태그는 최대 5개까지 설정 가능합니다."
        />
      </a-form>
    </template>
  </Modal>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { BasicTitle } from '@/components/layouts';
import { Modal } from '@/components/popup';
import { CreateTag } from '@/components/solution';

// Props
const props = defineProps({
  open: { type: Boolean, default: false },
  okClose: { type: Function, default: () => {} },
});

// Form state
const formState = ref({
  selectedTagValues: [] as string[],
});
</script>
