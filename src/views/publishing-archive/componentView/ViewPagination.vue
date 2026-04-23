<template>
  <Pagination
    :total="total"
    :current="current"
    :pageSize="pageSize"
    @update:current="onUpdateCurrent"
    @update:pageSize="onUpdatePageSize"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Pagination } from '@/components/table';

const total = ref(89);
const current = ref(1);
const pageSize = ref(20);

const emit = defineEmits(['update:current', 'update:pageSize']);

function onUpdateCurrent(val: number) {
  emit('update:current', val);
}
function onUpdatePageSize(val: number) {
  emit('update:pageSize', val);
}
</script>
