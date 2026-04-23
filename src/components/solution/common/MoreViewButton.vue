<template>
  <div class="d-block">
    <a-button class="secondary small btn-moreview" @click="handleClick">
      {{ isExpanded ? '접기' : '더보기' }}
    </a-button>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, defineEmits, withDefaults } from 'vue';

const props = withDefaults(
  defineProps<{
    isExpanded: boolean;
  }>(),
  {
    isExpanded: false,
  }
);

const emit = defineEmits<{
  'update:isExpanded': [value: boolean];
}>();

const handleClick = () => {
  emit('update:isExpanded', !props.isExpanded);
};
</script>
