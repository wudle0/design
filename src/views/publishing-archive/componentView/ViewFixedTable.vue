<template>
  <a-flex vertical>
    <!-- 기본 테이블 -->
    <TopTitle
      title="열 고정 테이블"
      text="상단 필터에 열 고정 기능이 있는 테이블입니다."
    />
    <Table
      :columns="columns"
      :data="baseData"
      :show-filter="true"
      :show-pagination="true"
      :row-selection="tableRowSelection"
      v-model:selectedKeys="selectedRowKeys"
      v-model:fixedColumn="fixedColumnCount"
      sticky
      noPadding
      refresh
    >
      <template #empty>
        <!-- 노데이터 -->
        <NoData text="검색 결과가 없습니다.">
          <template #icon>
            <Icon size="md" color="brand" fill>
              <template #name>info</template>
            </Icon>
          </template>
        </NoData>
      </template>
      <!-- 필터 내부 버튼 -->
      <template #filter-buttons>
        <a-range-picker format="YYYY-MM-DD">
          <template #suffixIcon>
            <Icon size="md" color="default">
              <template #name>calendar_month</template>
            </Icon>
          </template>
        </a-range-picker>
        <a-button class="secondary">
          <Icon size="md" color="default">
            <template #name>download</template>
          </Icon>
          엑셀 다운로드
        </a-button>
        <a-button class="primary">
          <Icon size="md" color="inverse" fill>
            <template #name>add</template>
          </Icon>
          생성
        </a-button>
      </template>
      <template #headerCell="{ column }">
        <template v-if="column?.dataIndex === 'status'">
          <StatusHeader solution="contrabass" statusType="instance" />
        </template>
        <template v-else>
          {{ column.title }}
        </template>
      </template>
      <template #bodyCell="{ column, text, record }">
        <template v-if="column.dataIndex === 'name'">
          <a-flex justify="space-between" align="center">
            <span>{{ record.name }}</span>
            <Icon size="md" color="default" class="edit-icon">
              <template #name>edit</template>
            </Icon>
          </a-flex>
        </template>
        <template v-else-if="column.dataIndex === 'inner'">
          <a-flex gap="16" class="ant-table-inner">
            <a-form-item>
              <a-input
                v-model:value="formState.name"
                placeholder="Placeholder"
                type="text"
                allow-clear
              >
                <template #suffix v-if="formState.name">
                  <a-button class="secondary small">완료</a-button>
                </template>
                <template #clearIcon>
                  <Icon size="md" color="default" fill>
                    <template #name>cancel</template>
                  </Icon>
                </template>
              </a-input>
            </a-form-item>
          </a-flex>
        </template>
        <template v-else-if="column.dataIndex === 'select'">
          <a-flex class="ant-table-inner error">
            <a-form-item>
              <a-select
                v-model:value="formState.selected"
                placeholder="Placeholder"
              >
                <a-select-option value="a">Select Item 01</a-select-option>
                <a-select-option value="b">Select Item 02</a-select-option>
              </a-select>
            </a-form-item>
          </a-flex>
        </template>
        <template v-else-if="column.dataIndex === 'status'">
          <div class="ant-table-double-inner">
            <div class="tag-wrap">
              <a-tag
                class="small"
                :class="{
                  blue: record?.status === 'RUN',
                  red: record?.status === 'ERROR',
                }"
              >
                <p class="tag-wrap-text">{{ record?.status }}</p>
              </a-tag>
            </div>
          </div>
        </template>
        <template v-else-if="column.dataIndex === 'tag'">
          <div class="ant-table-double-inner">
            <div class="tag-wrap">
              <a-tag
                class="small"
                :class="{
                  blue: record?.tag[index] === 'tag1',
                  red: record?.tag[index] === 'tag2',
                  orange: record?.tag[index] === 'tag3',
                }"
                v-for="(item, index) in record?.tag?.slice(0, 3)"
                :key="index"
              >
                <p class="tag-wrap-text">{{ item }}</p>
              </a-tag>
              <a-tooltip overlayClassName="plain" autoAdjustOverflow>
                <template #title>
                  <a-flex vertical gap="4">
                    <span v-for="item in record?.tag?.slice(3)">
                      {{ item }}
                    </span>
                  </a-flex>
                </template>
                <a-tag class="gray small" v-if="record?.tag?.length > 3">
                  <p class="tag-wrap-text">+{{ record?.tag?.length - 3 }}</p>
                </a-tag>
              </a-tooltip>
            </div>
          </div>
        </template>
        <template v-else-if="column.dataIndex === 'progress'">
          <div class="progress-box gray">
            <a-progress :percent="100" :size="8" :format="formatText" />
            <!-- <a-progress :percent="100" :size="8" :show-info="false" /> -->
            <!-- <div class="ant-progress-label">
              <span class="ant-progress-label-item"> Label </span>
              <span class="ant-progress-label-item">
                Label
                <span class="require">*</span>
              </span>
              <span class="ant-progress-label-item">
                <span>
                  <div class="tag-wrap">
                    <a-tag class="bullet blue">
                      <p class="tag-wrap-text">Label</p>
                    </a-tag>
                  </div>
                </span>
              </span>
            </div> -->
          </div>
        </template>
        <template v-else-if="column.dataIndex === 'link'">
          <router-link :to="record?.link?.path">
            <a-button class="link">{{ record?.link?.name }}</a-button>
          </router-link>
        </template>
        <template v-else-if="column.dataIndex === 'accentLink'">
          <router-link :to="record.accentLink">
            <a-button class="link accent">중요 링크</a-button>
          </router-link>
        </template>
        <template v-else-if="column.dataIndex === 'setting'">
          <a-dropdown>
            <template #overlay>
              <a-menu>
                <a-menu-item key="1">수정</a-menu-item>
                <a-menu-item key="2">삭제</a-menu-item>
              </a-menu>
            </template>
            <a-button class="ghost btn-setting">
              <Icon size="md" color="default" fill>
                <template #name>more_horiz</template>
              </Icon>
            </a-button>
          </a-dropdown>
        </template>
        <template v-else>
          {{ text }}
        </template>
      </template>
    </Table>
  </a-flex>
</template>

<script lang="ts" setup>
import { ref, reactive, watch, computed } from 'vue';
import { Icon } from '@/components/icons';
import { NoData } from '@/components/no-data';
import { Table, StatusHeader } from '@/components/table';
import { TopTitle } from '@/components/layouts';

// 테이블 상태 관리
const selectedRowKeys = ref<string[]>([]);

const fixedColumnCount = ref(0);

const formState = reactive({
  name: '',
  nameError: '',
  selected: null,
});

/**
 * 선택 (체크박스, 라디오) 관련
 */
const tableRowSelection = computed(() =>
  selectedRowKeys !== undefined
    ? {
        type: 'radio',
        columnWidth: 52,
        selectedRowKeys: selectedRowKeys.value,
        onChange: (keys: string[]) => {
          selectedRowKeys.value = keys;
        },
      }
    : undefined
);

// 메인 테이블 데이터
const columns = ref([
  {
    title: '기본',
    dataIndex: 'default',
    filterSearch: true,
  },
  {
    title: '이름',
    dataIndex: 'name',
    sorter: true,
    ellipsis: true,
  },
  {
    title: 'numeric',
    dataIndex: 'numeric',
    sorter: true,
    filterSearch: true,
    align: 'right',
  },
  {
    title: '날짜',
    dataIndex: 'date',
    sorter: true,
    filterSearch: true,
  },
  {
    title: '성별',
    dataIndex: 'gender',
    isOrFilter: true,
    sorter: true,
    filters: [
      { text: 'Male', value: 'male' },
      { text: 'Female', value: 'female' },
      { text: 'XX', value: 'xx' },
      { text: 'XY', value: 'xy' },
    ],
    ellipsis: true,
    filterSearch: true,
  },
  {
    title: '상태',
    dataIndex: 'status',
    filterSearch: true,
  },
  {
    title: '다중 태그',
    dataIndex: 'tag',
    sorter: true,
    filterSearch: true,
  },
  {
    title: '인풋 셀',
    dataIndex: 'inner',
    sorter: true,
  },
  {
    title: '셀렉트 셀',
    dataIndex: 'select',
    sorter: true,
  },
  {
    title: '진행',
    dataIndex: 'progress',
    sorter: true,
    filterSearch: true,
  },
  {
    title: '링크',
    dataIndex: 'link',
    sorter: true,
    filterSearch: true,
  },
  {
    title: '중요 링크',
    dataIndex: 'accentLink',
    sorter: true,
  },
  {
    title: '작업',
    dataIndex: 'setting',
    width: 58,
    align: 'center',
    fixed: 'right',
  },
]);
const baseData = [
  {
    key: '1',
    default: 'default',
    name: '테이블1',
    numeric: 22,
    date: 'YYYY-MM-DD hh:mm:ss',
    gender: 'female',
    status: 'ERROR',
    tag: ['tag1', 'tag2', 'tag3', 'tag4', 'tag5', 'tag6'],
    inner: '',
    progress: 50,
    link: { name: 'daemonset1', path: '/' },
    accentLink: '/',
  },
  {
    key: '2',
    default: 'default',
    name: '테이블2',
    numeric: 23,
    date: 'YYYY-MM-DD hh:mm:ss',
    gender: 'female',
    status: 'RUN',
    tag: ['tag1', 'tag2'],
    inner: '',
    progress: 50,
    link: { name: 'daemonset2', path: '/' },
    accentLink: '/',
  },
  {
    key: '3',
    default: 'default',
    name: '테이블3',
    numeric: 25,
    date: 'YYYY-MM-DD hh:mm:ss',
    gender: 'male',
    status: 'RUN',
    tag: ['tag1', 'tag2'],
    inner: '',
    progress: 50,
    link: { name: 'daemonset3', path: '/' },
    accentLink: '/',
  },
  ...Array.from({ length: 95 }, (_, i) => {
    const index = i + 6;
    return {
      key: String(index),
      default: 'default',
      name: '테이블',
      numeric: 22,
      date: 'YYYY-MM-DD hh:mm:ss',
      gender: 'male',
      status: 'RUN',
      tag: ['tag1', 'tag2'],
      inner: '',
      progress: 50,
      link: { name: 'daemonset4', path: '/' },
      accentLink: '/',
    };
  }),
];

// fixedColumnCount 변경 감지해서 columns 업데이트
watch(fixedColumnCount, (newCount) => {
  columns.value.forEach((col, index) => {
    // 이미 fixed: 'right'인 컬럼은 그대로 두기
    if (col.fixed === 'right') return;
    // 나머지는 왼쪽 고정 처리
    col.fixed = index < newCount ? 'left' : undefined;
  });
});

const formatText = (percent: number) => `${percent}%`;
</script>
