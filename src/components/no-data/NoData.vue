<template>
  <div class="nodata-wrap">
    <a-empty :image="false">
      <template #description>
        <div class="ant-empty-box">
          <h3 class="ant-empty-title">
            <slot name="icon"> </slot>
            {{ props.title }}
          </h3>

          <p class="ant-empty-text" v-if="!props.description">
            {{ props.text ? props.text : defaultText }}
          </p>

          <a-flex class="ant-empty-bubble" v-if="props.description">
            <p>
              {{ props.text ? props.text : defaultText }}
            </p>
            <slot name="link"></slot>
          </a-flex>
        </div>
      </template>
      <slot class="ant-empty-btn" name="button"></slot>
    </a-empty>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';

interface Props {
  title?: string;
  text?: string;
  description?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  title: '검색 결과',
  text: '',
  description: false,
});

const defaultText = ref(
  props.description ? '현재 설정된 정보가 없습니다.' : '검색 결과가 없습니다.'
);
</script>
