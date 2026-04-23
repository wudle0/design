<template>
  <div class="sider-content">
    <a-layout-sider
      v-model:collapsed="collapsed"
      :trigger="null"
      width="320"
      collapsed-width="12"
      collapsible
    >
      <a-tooltip overlayClassName="plain" v-if="collapsed">
        <template #title> 상세 사이드바 열기 </template>
        <a-button
          class="trigger ghost btn-toggle-sider open"
          @click.stop="toggleSidebar"
        >
          <template #icon>
            <Icon size="xs" color="default">
              <template #name>arrow_right</template>
            </Icon>
          </template>
        </a-button>
      </a-tooltip>
      <div class="content-header">
        <slot name="header" :onToggle="toggleSidebar" :collapsed="collapsed">
        </slot>
      </div>
      <div class="content-body scroll-container">
        <slot name="body">
          <!-- 섹션 영역 -->
        </slot>
      </div>
    </a-layout-sider>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue';
import { Icon } from '@/components/icons';

const collapsed = ref(false);

// watch(collapsed, (newVal) => {
//   console.log('collapsed changed:', newVal);
// });

const toggleSidebar = () => {
  // console.log('current :', collapsed.value);
  collapsed.value = !collapsed.value;
  // console.log('change :', collapsed.value);
};
</script>
