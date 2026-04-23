<template>
  <div class="page-container list">
    <div class="main-panel">
      <!-- 패널 타이틀 영역 -->
      <div class="panel-header">
        <BasicTitle
          level="panel"
          title="panel-header ((panel(page) tiitle component)"
          description="page description"
          :tooltip="{ title: '패널 타이틀 컴포넌트 도움말 툴팁', icon: 'info' }"
          :tags="[
            { text: 'success', color: 'green' },
            { text: 'warning', color: 'red' },
          ]"
        >
          <template #extra>
            <a-button class="primary"> primary </a-button>
            <a-button class="secondary">secondary</a-button>
            <a-button class="secondary danger">secondary danger</a-button>
            <a-button class="tertiary" disabled>tertiary disabled</a-button>
          </template>
        </BasicTitle>
      </div>
      <!-- 패널 컨텐츠 영역 -->
      <div class="panel-body">
        <!-- 중앙 컨텐츠 (가변) -->
        <div class="main-content">
          <div class="content">
            <!-- <div class="content-header">
                  <BasicTitle
                    level="content"
                    title="content title component (타이틀이 있을 경우 삽입)"
                    :tooltip="{
                      title: 'content title component 도움말 툴팁',
                      icon: 'info',
                    }"
                  >
                    <template #extra>
                      <a-button class="secondary">Tab-function</a-button>
                    </template>
                  </BasicTitle>
                </div> -->
            <div class="segment-wrap">
              <a-segmented v-model:value="value" :options="data" />
            </div>
            <!-- content-body 스크롤이 필요한 경우 scroll-container 클래스 추가 -->
            <div class="content-body scroll-container">
              <Table
                :columns="secondColumns"
                :data="secondData"
                :show-filter="true"
                :show-pagination="true"
                sticky
                noPadding
              >
                <template #empty>
                  <NoData
                    title="상세 데이터가 없습니다"
                    text="데이터를 선택해 주세요"
                  >
                    <template #icon>
                      <Icon size="md" color="brand" fill>
                        <template #name>info</template>
                      </Icon>
                    </template>
                  </NoData>
                </template>
                <!-- 설정 예시 -->
                <template #setting="{ record }">
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
                <template #expandedRowRender>
                  <Table :columns="innerColumns" :data="innerData">
                    <template #expandedRowRender>
                      <Table :columns="innerColumns" :data="innerData">
                        <template #expandedRowRender>
                          <Table :columns="innerColumns" :data="innerData">
                            <template #expandedRowRender>
                              <Table
                                :columns="innerColumns"
                                :data="innerData"
                                :selectable="true"
                                v-model:selectedKeys="selectedKeys"
                              />
                            </template>
                          </Table>
                        </template>
                      </Table>
                    </template>
                  </Table>
                </template>
              </Table>
            </div>
          </div>
        </div>
      </div>
    </div>
    <TheFilterPanel size="xs" />
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive, watch } from 'vue';
import { Icon } from '@/components/icons';
import {
  TheFilterPanel,
  BasicTitle,
  BasicEllipsisText,
} from '@/components/layouts';
import { NoData } from '@/components/no-data';
import { useRouter } from 'vue-router';
import { Table, Filter } from '@/components/table';

const router = useRouter();
const activeKey = ref('1');

const formState = reactive({
  name: '',
  nameError: '',
  selected: null,
});

// Segmented
const data = reactive([
  'Segment-1',
  'Segment-2',
  'Segment-3',
  'Segment-4',
  'Segment-5',
]);
const value = ref(data[0]);

/* Table */
interface Column {
  title: string;
  dataIndex: string;
  ellipsis?: boolean;
  filterSearch?: boolean;
  sorter?: boolean;
  filters?: { text: string; value: string }[];
  width?: number;
  align?: string;
  fixed?: boolean | 'left' | 'right';
  isOrFilter?: boolean;
}

const selectedKeys = ref<string[]>([]);
const fixedColumnCount = ref(0);

const columns = ref<Column[]>([
  {
    title: '이름',
    dataIndex: 'name',
    ellipsis: true,
    filterSearch: true,
  },
  {
    title: '프로젝트',
    dataIndex: 'project',
    sorter: true,
    ellipsis: true,
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
    title: '아이콘',
    dataIndex: 'icon',
    sorter: true,
    filterSearch: true,
  },
  {
    title: '체크 레이블',
    dataIndex: 'checkLabel',
    sorter: true,
    filterSearch: true,
  },
  {
    title: '버튼',
    dataIndex: 'button',
    sorter: true,
  },
  {
    title: '기본',
    dataIndex: 'default',
    sorter: true,
    filterSearch: true,
  },
  {
    title: 'numeric',
    dataIndex: 'numeric',
    sorter: true,
    filterSearch: true,
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
    name: '테이블1',
    project: '프로젝트',
    gender: 'male',
    icon: 'icon',
    checkLabel: 'checkLabel',
    button: 'button',
    default: 'default',
    numeric: 'numeric',
    inner: '',
  },
  {
    key: '2',
    name: '테이블2',
    project: '프로젝트',
    gender: 'female',
    inner: '',
    icon: 'icon',
    checkLabel: 'checkLabel',
    button: 'button',
    default: 'default',
    numeric: 'numeric',
  },
  {
    key: '3',
    name: '테이블3',
    project: '프로젝트',
    gender: 'male',
    inner: '',
    icon: 'icon',
    checkLabel: 'checkLabel',
    button: 'button',
    default: 'default',
    numeric: 'numeric',
  },
  ...Array.from({ length: 95 }, (_, i) => {
    const index = i + 6;
    return {
      key: String(index),
      name: '테이블',
      project: '프로젝트',
      gender: 'male',
      inner: '',
      icon: 'icon',
      checkLabel: 'checkLabel',
      button: 'button',
      default: 'default',
      numeric: 'numeric',
    };
  }),
];

// fixedColumnCount 변경 감지해서 columns 업데이트
watch(fixedColumnCount, (newCount) => {
  columns.value = columns.value.map((col, index) => {
    // 이미 fixed: 'right'인 컬럼은 그대로 두기
    if (col.fixed === 'right') return { ...col, fixed: 'right' };
    // 나머지는 왼쪽 고정 처리
    return {
      ...col,
      fixed: index < newCount ? 'left' : false,
    };
  });
});
const formatText = (percent: number) => `${percent}%`;

// 확장 테이블 데이터
const secondColumns = ref([
  {
    title: '이름',
    dataIndex: 'name',
    ellipsis: true,
    filterSearch: true,
  },
  {
    title: '프로젝트',
    dataIndex: 'project',
    sorter: true,
    ellipsis: true,
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
    title: '아이콘',
    dataIndex: 'icon',
    sorter: true,
    filterSearch: true,
  },
  {
    title: '체크 레이블',
    dataIndex: 'checkLabel',
    sorter: true,
    filterSearch: true,
  },
  {
    title: '버튼',
    dataIndex: 'button',
    sorter: true,
  },
  {
    title: '기본',
    dataIndex: 'default',
    sorter: true,
    filterSearch: true,
  },
  {
    title: 'numeric',
    dataIndex: 'numeric',
    sorter: true,
    filterSearch: true,
  },
  {
    title: '작업',
    dataIndex: 'setting',
    width: 58,
    align: 'center',
    fixed: 'right',
  },
]);
const secondData = [
  {
    key: '1',
    name: '테이블1',
    project: '프로젝트',
    gender: 'male',
    icon: 'icon',
    checkLabel: 'checkLabel',
    button: 'button',
    default: 'default',
    numeric: 'numeric',
    inner: '',
  },
  {
    key: '2',
    name: '테이블2',
    project: '프로젝트',
    gender: 'female',
    inner: '',
    icon: 'icon',
    checkLabel: 'checkLabel',
    button: 'button',
    default: 'default',
    numeric: 'numeric',
  },
  {
    key: '3',
    name: '테이블3',
    project: '프로젝트',
    gender: 'male',
    inner: '',
    icon: 'icon',
    checkLabel: 'checkLabel',
    button: 'button',
    default: 'default',
    numeric: 'numeric',
  },
  ...Array.from({ length: 95 }, (_, i) => {
    const index = i + 6;
    return {
      key: String(index),
      name: '테이블',
      project: '프로젝트',
      gender: 'male',
      inner: '',
      icon: 'icon',
      checkLabel: 'checkLabel',
      button: 'button',
      default: 'default',
      numeric: 'numeric',
    };
  }),
];

// 내부 테이블 데이터
const innerColumns = ref([
  {
    title: '상세 이름',
    dataIndex: 'detailName',
    ellipsis: true,
  },
  {
    title: '상세 설명',
    dataIndex: 'description',
    ellipsis: true,
  },
  {
    title: '상태',
    dataIndex: 'status',
    ellipsis: true,
  },
]);
const innerData = ref([
  {
    key: '1',
    detailName: '상세 데이터 1',
    description: '설명 1',
    status: '활성',
  },
  {
    key: '2',
    detailName: '상세 데이터 2',
    description: '설명 2',
    status: '비활성',
  },
]);
</script>
