<template>
  <TopTitle
    title="Radio"
    text="라디오는 제공된 여러 선택 중 하나만 선택할 때 사용되며, 최대 5개의 옵션까지 나열하는 것을 권장합니다."
  />
  <a-form autocomplete="off" layout="vertical" style="gap: 32px">
    <a-form-item
      :rules="[{ required: true }]"
      label="기본 라디오박스"
      validate-status="error"
    >
      <template #help>
        <a-flex gap="4">
          <Icon size="xs" color="error" fill>
            <template #name>info</template>
          </Icon>
          Error Text</a-flex
        >
        <p class="helper">Helper Text</p>
      </template>
      <a-radio-group v-model:value="formState.radioValue">
        <a-radio value="a">radio button default a </a-radio>
        <a-radio value="b">radio button default b</a-radio>
        <a-radio value="c">radio button default c</a-radio>
        <a-radio value="d">radio button default d</a-radio>
        <a-radio value="e">radio button default e</a-radio>
      </a-radio-group>
    </a-form-item>
    <a-form-item
      :rules="[{ required: true }]"
      label="각 개별 항목 도움말 필요한 경우"
    >
      <a-radio-group v-model:value="formState.radioValue">
        <a-radio value="a"
          >vertical radio 1
          <a-tooltip>
            <template #title>
              도움말 아이콘 도움말 아이콘 도움말 아이콘 도움말 아이콘 도움말
              아이콘 도움말 아이콘 도움말 아이콘
            </template>
            <span class="icon">
              <Icon size="md" color="default">
                <template #name>info</template>
              </Icon>
            </span>
          </a-tooltip></a-radio
        >
        <a-radio value="b">vertical radio 2</a-radio>
        <a-radio value="c">vertical radio 3</a-radio>
        <a-radio value="d">vertical radio 4</a-radio>
        <a-radio value="e">vertical radio 5</a-radio>
      </a-radio-group>
    </a-form-item>

    <a-form-item
      :rules="[{ required: false }]"
      label="인풋 같이 있는 라디오박스 "
    >
      <a-radio-group v-model:value="formState.radioValue">
        <a-radio value="a">라디오 a</a-radio>
        <a-radio value="b">라디오 b</a-radio>
        <a-radio value="c">라디오 c</a-radio>
        <a-radio value="d">라디오 d</a-radio>
        <a-radio value="e">기타</a-radio>
        <a-input
          v-if="formState.radioValue === 'e'"
          placeholder="Placeholder text"
          type="text"
        />
      </a-radio-group>
    </a-form-item>

    <a-form-item :rules="[{ required: false }]" label="horizontal">
      <a-radio-group v-model:value="formState.radioValue" class="horizontal">
        <a-radio value="a" disabled>라디오 a</a-radio>
        <a-radio value="b" disabled>라디오 b</a-radio>
        <a-radio value="c">라디오 c</a-radio>
        <a-radio value="d">라디오 d</a-radio>
        <a-radio value="e">라디오 eeeeee</a-radio>
      </a-radio-group>
    </a-form-item>

    <a-form-item
      :rules="[{ required: false }]"
      label="라디오박스 박스 형태"
      extra="라디오박스 박 형태에서는 타이틀은 필수 사용이며, 상세 설명은 선택적으로 사용됩니다."
    >
      <a-radio-group v-model:value="formState.radioValue">
        <a-radio
          v-for="item in radioCardOptions"
          :key="item.value"
          :value="item.value"
          class="radio-container"
        >
          <div class="radio-contents">
            <div class="title">
              <Icon size="md" color="default" v-if="item.value === 'a'">
                <template #name>how_to_reg</template>
              </Icon>
              <span>{{ item.label }}</span>
            </div>
            <div class="description">
              {{ item.description }}
            </div>
          </div>
        </a-radio>
      </a-radio-group>
    </a-form-item>

    <a-form-item
      :rules="[{ required: false }]"
      label="description 없음 (따로 뭐 할건 없음..)"
      validate-status="error"
      class="is-include-label"
    >
      <template #help>
        <p class="helper">Helper Text</p>
      </template>
      <a-radio-group v-model:value="formState.radioValue">
        <a-radio
          v-for="item in radioCardOptions"
          :key="item.value"
          :value="item.value"
          class="radio-container"
        >
          <div class="radio-contents">
            <div class="title">
              <Icon size="md" color="default" v-if="item.value === 'a'">
                <template #name>how_to_reg</template>
              </Icon>
              <span>{{ item.label }}</span>
            </div>
          </div>
        </a-radio>
      </a-radio-group>
    </a-form-item>
  </a-form>
</template>
<script lang="ts" setup>
import { reactive } from 'vue';
import { Icon } from '@/components/icons';
import { TopTitle } from '@/components/layouts';

const formState = reactive({
  name: '',
  radioValue: 'a',
});
const radioCardOptions = [
  {
    value: 'a',
    label: 'Title Title ',
    description:
      'Description  Description Description  DDescription  DDescription  DDescription  DDescription  DDescription  DDescription  DDescription  D',
  },

  // { value: 'a', label: 'TitleTitleTitleTitleTitleTitle Title Title Title Title Title A', description: 'Description A' },
  { value: 'b', label: 'Title B', description: 'Description B' },
  { value: 'c', label: 'Title c', description: 'Description c' },
  { value: 'd', label: 'Title d', description: 'Description d' },
  { value: 'e', label: 'Title e', description: 'Description e' },
  { value: 'f', label: 'Title f', description: 'Description f' },
];
</script>
