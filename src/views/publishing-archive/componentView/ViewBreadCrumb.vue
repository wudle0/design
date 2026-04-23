<template>
  <TopTitle
    title="브레드 크럼 (Bread-crumb)"
    text="네비게이터와 cloud view 버튼을 제외한 전체 너비에서 글자수 너비가 80% 이상이면 줄임 처리됩니다.
      줄임 처리 될 시 첫 번째 depth와 마지막 2개의 depth만 표시되며, ... 버튼을 통해 나머지 depth를 확인할 수 있습니다."
  />
  <TheBreadCrumb :route="breadRoute" />
</template>

<script lang="ts" setup>
import TheBreadCrumb from '@/components/navigations/TheBreadCrumb.vue';
import { TopTitle } from '@/components/layouts';
import { ref } from 'vue';

const breadRoute = ref([
  { path: '/', name: '1depth', disabled: true },
  { path: '/', name: '2depth' },
  { path: '/', name: '3depth' },
  { path: '/', name: '4depth' },
  { path: '/', name: '5depth' },
  { path: '/', name: '6depth' },
]);
</script>
