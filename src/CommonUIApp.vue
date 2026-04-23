<template>
  <a-style-provider :transformers="[legacyLogicalPropertiesTransformer]">
    <a-config-provider
      :theme="{ token }"
      :getPopupContainer="getPopupContainer"
      :renderEmpty="renderEmpty"
      :wave="{ disabled: true }"
    >
      <main id="archive">
        <component :is="layoutComponent" />
      </main>
    </a-config-provider>
  </a-style-provider>
</template>

<script lang="ts" setup>
import { h, computed, provide } from 'vue';
import { useRoute } from 'vue-router';
import { legacyLogicalPropertiesTransformer } from 'ant-design-vue';
import { useCss } from '@/hooks/theme/useCss';
import { NoData } from '@/components/no-data';
import { Layout } from '@/components/layouts';
import NotFound from '@/views/NotFound.vue';

const token = {
  screenSMMin: 0,
  screenSMMax: 1439,
  screenMDMin: 1440,
};

const getPopupContainer = (triggerNode: HTMLElement | null): HTMLElement => {
  return (
    triggerNode?.closest('.main-panel') ||
    triggerNode?.closest('#archive') ||
    document.body
  );
};

const onKeyPressNumberOnly = (e: KeyboardEvent) => {
  const isAllowed = /^[0-9]$/;
  if (!isAllowed.test(e.key)) {
    e.preventDefault();
  }
};

provide('onKeyPressNumberOnly', onKeyPressNumberOnly);

const renderEmpty = () => h(NoData, { variant: 'button' });

const route = useRoute();

const layoutComponent = computed(() => {
  if (route.meta.layout === 'not-found') return NotFound;
  return Layout;
});

useCss();
</script>
