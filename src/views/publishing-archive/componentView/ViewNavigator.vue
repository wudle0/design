<template>
  <TopTitle
    title="네비게이터 (Navigator)"
    text="1depth 클릭 시 그에 맞는 2depth가 표시됩니다"
  />
  <TheNavigator />
</template>
<script lang="ts" setup>
import { TopTitle } from '@/components/layouts';
import TheNavigator from '@/components/navigations/TheNavigator.vue';
</script>
