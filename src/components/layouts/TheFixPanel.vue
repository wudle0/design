<template>
  <!-- 가이드 패널, 필터 패널 -->
  <div :class="['right-fix-panel', panelSizeClass]">
    <!-- 패널 타이틀 영역 -->
    <div class="panel-header">
      <slot name="title"> </slot>
    </div>

    <!-- 패널(컨텐츠) 영역 -->
    <div class="panel-body">
      <div class="main-content">
        <div class="content-header">
          <slot name="header"> </slot>
        </div>
        <div class="content-body">
          <slot name="body">
            <!-- 섹션 영역 -->
          </slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';

// 1. props 선언
const props = defineProps<{
  size?: 'xs' | 'sm' | 'md' | 'lg';
}>();

// 2. size -> class 변환
const panelSizeClass = computed(() => {
  return props.size ? `panel-size-${props.size}` : '';
});
</script>
