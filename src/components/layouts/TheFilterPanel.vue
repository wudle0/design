<template>
  <!-- 가이드 패널, 필터 패널 -->
  <div :class="['right-fix-panel', panelSizeClass]">
    <!-- 패널 타이틀 영역 -->
    <div class="panel-header">
      <slot name="title">
        <BasicTitle
          level="panel"
          title="panel-header (title component)"
          :tooltip="{
            title: 'panel(page) tiitle component 도움말 툴팁',
            icon: 'info',
          }"
        >
          <template #extra>
            <a-button class="tertiary">
              <template #icon>
                <Icon size="md" color="default" fill>
                  <template #name>refresh</template>
                </Icon>
              </template>
              초기화
            </a-button>
          </template>
        </BasicTitle>
      </slot>
    </div>

    <!-- 패널(컨텐츠) 영역 -->
    <div class="panel-body">
      <div class="main-content">
        <div class="content-header">
          <slot name="header"> </slot>
        </div>
        <div class="content-body pd-0">
          <slot name="body">
            <!-- 섹션 영역 -->
            <Filter size="medium" />
            <a-form :model="formState" autocomplete="off" layout="vertical">
              <BasicTitle
                level="form"
                title="form title component"
                description="description"
                :tooltip="{
                  title: '폼 타이틀 컴포넌트 도움말 툴팁',
                  icon: 'info',
                }"
              />
              <!-- 수직 정렬일 경우 form-item-group 제외 (생성에서만 사용) -->
              <a-form-item :rules="[{ required: true }]" label="label">
                <a-checkbox-group
                  v-model:value="formState.checkedValueDefault"
                  class="vertical"
                >
                  <a-checkbox value="a">vertical check 1</a-checkbox>
                  <a-checkbox value="b">vertical check 2</a-checkbox>
                  <a-checkbox value="c">vertical check 3</a-checkbox>
                  <a-checkbox value="d" disabled>vertical check 4</a-checkbox>
                  <a-checkbox value="e" disabled>vertical check 5</a-checkbox>
                </a-checkbox-group>
              </a-form-item>
              <a-form-item :rules="[{ required: true }]" label="label">
                <a-checkbox-group
                  v-model:value="formState.checkedValueDefault"
                  class="vertical"
                >
                  <a-checkbox value="a">vertical check 1</a-checkbox>
                  <a-checkbox value="b">vertical check 2</a-checkbox>
                  <a-checkbox value="c">vertical check 3</a-checkbox>
                  <a-checkbox value="d" disabled>vertical check 4</a-checkbox>
                  <a-checkbox value="e" disabled>vertical check 5</a-checkbox>
                </a-checkbox-group>
              </a-form-item>
              <a-form-item :rules="[{ required: true }]" label="label">
                <a-radio-group v-model:value="formState.radioValue">
                  <a-radio value="a">radio button default a </a-radio>
                  <a-radio value="b">radio button default b</a-radio>
                  <a-radio value="c">radio button default c</a-radio>
                  <a-radio value="d">radio button default d</a-radio>
                  <a-radio value="e">radio button default e</a-radio>
                </a-radio-group>
              </a-form-item>
              <a-form-item :rules="[{ required: true }]" label="label">
                <a-radio-group v-model:value="formState.radioValue">
                  <a-radio value="a">radio button default a </a-radio>
                  <a-radio value="b">radio button default b</a-radio>
                  <a-radio value="c">radio button default c</a-radio>
                  <a-radio value="d">radio button default d</a-radio>
                  <a-radio value="e">radio button default e</a-radio>
                </a-radio-group>
              </a-form-item>
            </a-form>
          </slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, reactive } from 'vue';
import { Icon } from '@/components/icons';
import { BasicTitle, BasicEllipsisText } from '@/components/layouts';
import { Filter } from '@/components/table';

// formState
const formState = reactive({
  name: '',
  checkedValueDefault: [] as string[],
  selected: 'a',
  radioValue: 'a',
  textarea: '',
  switched: '',
});

// 1. props 선언
const props = defineProps<{
  size?: 'xs' | 'sm' | 'md' | 'lg';
}>();

// 2. size -> class 변환
const panelSizeClass = computed(() => {
  return props.size ? `panel-size-${props.size}` : '';
});
</script>
