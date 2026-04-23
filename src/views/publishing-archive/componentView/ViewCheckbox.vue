<template>
  <TopTitle
    title="체크박스"
    text="체크박스는 수직, 수평, 또는 그룹형 수직 배열(5개 단위)로 구성할 수 있습니다."
  />
  <a-form
    :model="formState"
    autocomplete="off"
    layout="vertical"
    style="gap: 32px"
  >
    <a-form-item :rules="[{ required: true }]" label="기본 체크박스 수직 배치">
      <a-checkbox-group
        v-model:value="formState.checkedValueDefault"
        class="box-checkbox"
      >
        <a-checkbox value="a">vertical check 1 </a-checkbox>
        <a-checkbox value="b">vertical check 2</a-checkbox>
        <a-checkbox value="c">vertical check 3</a-checkbox>
        <a-checkbox value="d" disabled>vertical check 4</a-checkbox>
        <a-checkbox value="e" disabled>vertical check 5</a-checkbox>
      </a-checkbox-group>
    </a-form-item>

    <!-- <a-form-item
      :rules="[{ required: true }]"
      label=" 체크박스 5개 이상 그룹형 배치"
    >
      <a-checkbox-group
        v-model:value="formState.checkedValueDefault"
        class="horizontal"
      >
        <a-checkbox value="a"> check 1 </a-checkbox>
        <a-checkbox value="b"> check 2</a-checkbox>
        <a-checkbox value="c"> check 3</a-checkbox>
        <a-checkbox value="d"> check 4</a-checkbox>
        <a-checkbox value="e"> check 5</a-checkbox>
        <a-checkbox value="f"> check 6</a-checkbox>
        <a-checkbox value="g"> check 7</a-checkbox>
        <a-checkbox value="h"> check 8</a-checkbox>
        <a-checkbox value="i"> check 9</a-checkbox>
      </a-checkbox-group>
    </a-form-item> -->

    <a-form-item
      :rules="[{ required: true }]"
      label="각 개별 항목 도움말 필요한 경우"
    >
      <a-checkbox-group v-model:value="formState.checkedValueDefault">
        <a-checkbox value="a"
          >vertical check 1
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
          </a-tooltip></a-checkbox
        >
        <a-checkbox value="b">vertical check 2</a-checkbox>
        <a-checkbox value="c">vertical check 3</a-checkbox>
        <a-checkbox value="d" disabled>vertical check 4</a-checkbox>
        <a-checkbox value="e" disabled>vertical check 5</a-checkbox>
      </a-checkbox-group>
    </a-form-item>

    <a-form-item :rules="[{ required: true }]" validate-status="error">
      <template #label>
        도움말 아이콘, 유효성 체크 예시
        <a-tooltip>
          <template #title>
            도움말 아이콘 도움말 아이콘 도움말 아이콘 도움말 아이콘 도움말
            아이콘 도움말 아이콘 도움말 아이콘 도움말 아이콘 도움말 아이콘
            도움말 아이콘 도움말 아이콘 도움말 아이콘 도움말 아이콘
          </template>
          <span class="icon">
            <Icon size="xs" color="default">
              <template #name>info</template>
            </Icon>
          </span>
        </a-tooltip></template
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
      <a-checkbox-group v-model:value="formState.checkedValueError">
        <a-checkbox value="a" status="error">vertical check 1</a-checkbox>
        <a-checkbox value="b">vertical check 2</a-checkbox>
        <a-checkbox value="c">vertical check 3</a-checkbox>
        <a-checkbox value="d">vertical check 4</a-checkbox>
        <a-checkbox value="e">vertical check 5</a-checkbox>
      </a-checkbox-group>
    </a-form-item>

    <a-form-item :rules="[{ required: true }]" label="전체 선택">
      <div class="d-grid">
        <a-checkbox
          :checked="isAllChecked"
          :indeterminate="isIndeterminate"
          @change="onCheckAllChange"
          >전체 선택</a-checkbox
        >
        <a-checkbox-group
          v-model:value="formState.checkedValueAll"
          :options="checkboxOptions"
        />
      </div>
    </a-form-item>

    <a-form-item :rules="[{ required: true }]" label="Label (Optional)">
      <a-checkbox-group
        v-model:value="formState.checkedValueHorizontal"
        class="horizontal"
      >
        <a-checkbox value="a">default check 1</a-checkbox>
        <a-checkbox value="b">default check 2</a-checkbox>
        <a-checkbox value="c">default check 3</a-checkbox>
        <a-checkbox value="d">default check 4</a-checkbox>
        <a-checkbox value="e">default check 5</a-checkbox>
        <a-checkbox value="f">default check 6</a-checkbox>
        <a-checkbox value="g">default check 7</a-checkbox>
        <a-checkbox value="h">default check 8</a-checkbox>
        <a-checkbox value="i">default check 9</a-checkbox>
        <a-checkbox value="j">default check 10</a-checkbox>

        <a-checkbox value="k">default check 11</a-checkbox>
        <a-checkbox value="l">default check 12</a-checkbox>
        <a-checkbox value="m">default check 13</a-checkbox>
        <a-checkbox value="n">default check 14</a-checkbox>
        <a-checkbox value="o">default check 15</a-checkbox>
        <a-checkbox value="p">default check 16</a-checkbox>
        <a-checkbox value="q">default check 17</a-checkbox>
      </a-checkbox-group>
    </a-form-item>

    <a-form-item
      :rules="[{ required: true }]"
      label="체크박스 박스 형태(솔루션본부에만 쓰임)"
    >
      <a-checkbox-group v-model:value="formState.checkedValueBox">
        <a-checkbox
          v-for="item in checkboxCardOptions"
          :key="item.value"
          :value="item.value"
          class="checkbox-container"
        >
          <div class="checkbox-contents">
            <div class="title">
              <Icon size="md" color="default" v-if="item.value === 'a'">
                <template #name>info</template>
              </Icon>
              <span>{{ item.label }}</span>
            </div>
            <div class="description">
              {{ item.description }}
            </div>

            <a-tag class="blue small">
              <Icon size="md" color="default" fill>
                <template #name>add</template>
              </Icon>
              <p class="tag-wrap-text">태그</p>
            </a-tag>
          </div>
        </a-checkbox>
      </a-checkbox-group>
    </a-form-item>
  </a-form>
</template>

<script lang="ts" setup>
import { reactive, computed } from 'vue';
import { Icon } from '@/components/icons';
import { TopTitle } from '@/components/layouts';

const formState = reactive({
  checkedValueDefault: [] as string[],
  checkedValueWithDescription: [] as string[],
  checkedValueError: [] as string[],
  checkedValueAll: [] as string[],
  checkedValueHorizontal: [] as string[],
  checkedValueBox: [] as string[],
});

const checkboxOptions = [
  { label: 'vertical check 1', value: 'a' },
  { label: 'vertical check 2', value: 'b' },
  { label: 'vertical check 3', value: 'c' },
  { label: 'vertical check 4', value: 'd' },
  { label: 'vertical check 5', value: 'e', disabled: true },
];

const checkboxCardOptions = [
  {
    value: 'a',
    label: 'Value placeholder Value placeholder Value placeholder',
    description: 'Description  Desc Description  Description  ',
  },
  {
    value: 'b',
    label: 'Title B',
    description: 'Description B',
  },
  { value: 'c', label: 'Title c', description: 'Description c' },
  { value: 'd', label: 'Title d', description: 'Description d' },
  { value: 'e', label: 'Title e', description: 'Description e' },
  { value: 'f', label: 'Title f', description: 'Description f' },
];

const allValues = checkboxOptions
  .filter((opt) => !opt.disabled)
  .map((opt) => opt.value);

const isAllChecked = computed(
  () => formState.checkedValueAll.length === allValues.length
);

const isIndeterminate = computed(
  () =>
    formState.checkedValueAll.length > 0 &&
    formState.checkedValueAll.length < allValues.length
);

function onCheckAllChange(e: any) {
  formState.checkedValueAll = e.target.checked ? [...allValues] : [];
}
</script>
