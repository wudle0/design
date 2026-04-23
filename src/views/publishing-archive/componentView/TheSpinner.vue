<template>
  <TopTitle
    title="스피너 / 스켈레톤"
    text="스피너는 기본 스피너와 오케스트로 로고(옵션)를 활용한 커스텀 스피너 2개의 타입을 제공합니다.
    스켈레톤은 실제 콘텐츠가 로딩되기 전, 해당 위치에 임시로 표시되는 시각적 플레이스홀더(Placeholder)를 의미합니다.
    
       "
  />
  <div class="form-item-group-title">
    <a-typography-title :level="3"> 스피너 </a-typography-title>
  </div>
  <a-spin />

  <div class="form-item-group-title">
    <a-typography-title :level="3"> 스피너 (custom-logo) </a-typography-title>
  </div>
  <a-spin class="custom-logo">
    <template #indicator>
      <div class="lgoo-wrap">
        <div class="logo"></div>
      </div>
    </template>
  </a-spin>
  <div class="form-item-group-title">
    <a-typography-title :level="3"> Skeleton </a-typography-title>
  </div>
  <a-skeleton />
</template>
<script lang="ts" setup>
import { reactive, computed } from 'vue';
import { Icon } from '@/components/icons';
import { TopTitle } from '@/components/layouts';
</script>
<style scoped>
.ant-divider.size-large {
  margin: 20px 0 !important;
}
.form-item-group-title {
  margin: 20px 0;
}
</style>
