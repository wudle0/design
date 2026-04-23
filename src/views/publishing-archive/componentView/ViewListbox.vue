<template>
  <a-flex vertical gap="8">
    <TopTitle
      title="리스트 박스 (Listbox)"
      text="transfer 형태로 데이터를 선택할 수 있으며 collapse와 일반 형태로 나뉩니다."
    />
    <article class="listbox-wrap" style="width: 800px">
      <Filter filterIcon />
      <div class="listbox-group">
        <div class="listbox-list">
          <a-collapse
            v-model:activeKey="activeKey1"
            :collapsible="isCollapseMode ? '' : 'disabled'"
            :bordered="false"
          >
            <template #expandIcon="{ isActive }" v-if="isCollapseMode">
              <span :class="{ rotate: isActive }">
                <Icon size="md" color="default">
                  <template #name>keyboard_arrow_right</template>
                </Icon>
              </span>
            </template>
            <a-collapse-panel key="a1" tabIndex="0">
              <template #header>
                <Icon color="default" v-if="!isCollapseMode">
                  <template #name>counter_1</template>
                </Icon>
                Category A <span class="number">총 99</span>
              </template>
              <div class="listbox-list-body">
                <div class="title-box">
                  <a-checkbox
                    v-model:checked="listState.checkAll"
                    :indeterminate="listState.indeterminate"
                    @change="onCheckAllChange"
                  >
                    전체 선택(다수 선택 기능)
                    <span class="description">{{
                      listState.checkedList.length
                    }}</span>
                  </a-checkbox>
                </div>
                <div class="item-box">
                  <a-checkbox-group v-model:value="listState.checkedList">
                    <a-checkbox
                      v-for="option in plainOptions"
                      :key="option.value"
                      :value="option.value"
                    >
                      <div class="ellipsis-box">
                        <span class="label">{{ option.label }}</span>
                        <span class="description">{{
                          option.description
                        }}</span>
                      </div>
                      <a-tag
                        v-if="option.state"
                        :class="[['small', tagStateConverter(option.state)]]"
                      >
                        <p class="tag-wrap-text">
                          {{ option.state.toUpperCase() }}
                        </p>
                      </a-tag>
                    </a-checkbox>
                  </a-checkbox-group>
                </div>
              </div>
            </a-collapse-panel>
          </a-collapse>
        </div>
        <div class="listbox-list">
          <a-collapse
            v-model:activeKey="activeKey2"
            :collapsible="isCollapseMode ? '' : 'disabled'"
            :bordered="false"
          >
            <template #expandIcon="{ isActive }" v-if="isCollapseMode">
              <span :class="{ rotate: isActive }">
                <Icon size="md" color="default">
                  <template #name>keyboard_arrow_right</template>
                </Icon>
              </span>
            </template>
            <a-collapse-panel key="b1" tabIndex="0">
              <template #header>
                <Icon color="default" v-if="!isCollapseMode">
                  <template #name>counter_2</template>
                </Icon>
                Category A <span class="number">총 99</span>
              </template>
              <div class="listbox-list-body" v-if="selectedList.length">
                <div class="title-box">
                  <span class="spacing-indent">그룹명 (optional)</span>
                </div>
                <div class="item-box">
                  <span
                    class="spacing-indent"
                    v-for="(item, index) in selectedList"
                    :key="index"
                  >
                    <div class="ellipsis-box">
                      <span class="label">{{ item.label }}</span>
                      <span class="description">{{ item.description }}</span>
                    </div>
                    <a-flex gap="6" align="center">
                      <a-tag
                        v-if="item.state"
                        :class="[['small', tagStateConverter(item.state)]]"
                      >
                        <p class="tag-wrap-text">
                          {{ item.state.toUpperCase() }}
                        </p>
                      </a-tag>
                      <a-button class="auto" @click="handleDelete(item.value)">
                        <Icon color="default">
                          <template #name>close</template>
                        </Icon>
                      </a-button>
                    </a-flex>
                  </span>
                </div>
              </div>
              <div class="listbox-list-body" v-else>
                <NoData
                  title="선택된 {카테고리/데이터명}이(가) 없습니다."
                  text="{카테고리/데이터명}을(를) 먼저 선택해 주세요."
                >
                  <template #icon>
                    <Icon size="md" color="brand" fill>
                      <template #name>info</template>
                    </Icon>
                  </template>
                </NoData>
              </div>
            </a-collapse-panel>
          </a-collapse>
        </div>
      </div>
    </article>
  </a-flex>
</template>

<script lang="ts" setup>
import { ref, reactive, computed, watch } from 'vue';
import { Icon } from '@/components/icons';
import { NoData } from '@/components/no-data';
import { TopTitle } from '@/components/layouts';
import { Filter } from '@/components/table';

const activeKey1 = ref<string[]>(['a1']);
const activeKey2 = ref<string[]>(['b1']);

const isCollapseMode = ref(true);

const plainOptions = [
  {
    label: 'Option1',
    value: 'value1',
    state: 'info',
    description:
      '옵션 부가 설명 및 최대 1줄까지 가능함 옵션 부가 설명 및 최대 1줄까지 가능함',
  },
  {
    label: 'Option2',
    value: 'value2',
    state: 'warning',
    description: 'Description',
  },
  {
    label: 'Option3',
    value: 'value3',
    state: 'default',
    description: 'Description',
  },
  {
    label: 'Option4',
    value: 'value4',
    state: 'success',
    description: 'Description',
  },
  {
    label: 'Option5',
    value: 'value5',
    state: 'error',
    description: 'Description',
  },
  {
    label: 'Option6',
    value: 'value6',
  },
  {
    label: 'Option7',
    value: 'value7',
  },
];

const listState = reactive({
  indeterminate: false,
  checkAll: false,
  checkedList: [] as string[],
});

const selectedList = computed(() => {
  return listState.checkedList
    .map((val) => plainOptions.find((option) => option.value === val))
    .filter((option): option is (typeof plainOptions)[number] => !!option);
});

const onCheckAllChange = (e: { target: { checked: boolean } }) => {
  Object.assign(listState, {
    checkedList: e.target.checked
      ? plainOptions.map((option) => option.value)
      : [],
    indeterminate: true,
  });
};

const handleDelete = (value: string) => {
  listState.checkedList = listState.checkedList.filter(
    (item) => item !== value
  );
  listState.indeterminate =
    !!listState.checkedList.length &&
    listState.checkedList.length < plainOptions.length;
  listState.checkAll = listState.checkedList.length === plainOptions.length;
};

watch(
  () => listState.checkedList,
  (val) => {
    listState.indeterminate = !!val.length && val.length < plainOptions.length;
    listState.checkAll = val.length === plainOptions.length;
  }
);

const tagStateConverter = (state: string) => {
  return (
    {
      info: 'blue',
      warning: 'orange',
      success: 'green',
      error: 'red',
      default: 'gray',
    }[state] || ''
  );
};
</script>
