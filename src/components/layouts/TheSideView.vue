<template>
  <div class="side-view-content">
    <div class="content-header">
      <slot name="header"> </slot>
    </div>
    <div class="content-body scroll-container">
      <slot name="body">
        <!-- 섹션 영역 -->
      </slot>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
</script>
