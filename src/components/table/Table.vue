<template>
  <a-flex
    vertical
    class="table-content"
    :class="{ 'sticky-pagination': sticky }"
  >
    <div
      class="table-count"
      v-if="
        !showFilter && props.count && props.rowSelection?.type === 'checkbox'
      "
    >
      <div class="table-count-text">
        <strong>{{ props.count }}</strong>
        <span> 개 선택 됨</span>
      </div>

      <div class="table-count-btns">
        <slot name="count-buttons" />
      </div>
    </div>

    <a-form autocomplete="off" layout="vertical" :class="{ 'pd-0': noPadding }">
      <a-table
        :columns="props.columns"
        :data-source="paginatedData"
        :loading="props.loading"
        :pagination="false"
        :locale="customSortMessages"
        :scroll="computedScroll"
        :row-selection="props.rowSelection"
        :row-key="(record: any) => record.key"
        :tableLayout="props.layout"
        :bordered="props.bordered"
        :show-header="props.showHeader"
        @change="handleTableChange"
        :rowClassName="props.rowClassName"
        :expandedRowKeys="props.expandedRowKeys"
        @expand="handleExpand"
      >
        <!-- 확장 슬롯 -->
        <template
          #expandedRowRender="{ record }"
          v-if="$slots.expandedRowRender"
        >
          <slot name="expandedRowRender" :record="record" />
        </template>

        <!-- 헤더셀 -->
        <template #headerCell="{ column }">
          <slot name="headerCell" :column="column" />
        </template>

        <!-- 바디셀 -->
        <template #bodyCell="{ column, text, record }">
          <template v-if="$slots[column.dataIndex]">
            <component
              :is="$slots[column.dataIndex]"
              :text="text"
              :record="record"
              :column="column"
            />
          </template>
          <template v-else-if="$slots.bodyCell">
            <slot
              name="bodyCell"
              :column="column"
              :text="text"
              :record="record"
            />
          </template>
          <template v-else>
            {{ text }}
          </template>
        </template>

        <!-- 빈 데이터 -->
        <template #emptyText>
          <slot name="empty">
            <!-- 사용자 미정의 시 기본값 표시 -->
            <NoData />
          </slot>
        </template>

        <!-- 필터 -->
        <template #title v-if="showFilter">
          <Filter
            filterIcon
            :size="props.filterSize"
            :selectCount="props.selectedKeys ? props.selectedKeys.length : 0"
            :columns="props.columns"
            :data="props.data"
            :line="props.line"
            :refresh="props.refresh"
            @filter="handleFilterConditionsChange"
            @search="handleFilterChange"
            @reset="handleFilterReset"
            :fixedColumn="props.fixedColumn"
            @changeFixed="handleFixedChange"
            :selectionType="props.rowSelection?.type || 'checkbox'"
            :borderTop="props.borderTop"
            :onlyCount="props.onlyCount"
          >
            <template #buttons>
              <slot name="filter-buttons" />
            </template>

            <template #count-buttons>
              <slot name="count-buttons" />
            </template>
          </Filter>
        </template>
      </a-table>
      <!-- 커스텀 페이지네이션 -->
      <Pagination
        v-if="showPagination && total"
        v-model:current="current"
        v-model:pageSize="pageSize"
        :total="total"
        @update:current="handlePageChange"
        @update:pageSize="handlePageSizeChange"
        :hideSelect="props.hideSelect"
      />
    </a-form>
  </a-flex>
</template>
<script lang="ts" setup>
import { ref, computed, watch, watchEffect } from 'vue';
import { NoData } from '@/components/no-data';
import { Filter, Pagination } from '@/components/table';
import { Icon } from '@/components/icons';

interface Column {
  title: string;
  dataIndex: string;
  ellipsis?: boolean;
  filterSearch?: boolean;
  width?: number;
  sorter?: boolean;
  filters?: { text: string; value: string }[];
  align?: string;
  fixed?: string | boolean;
}
interface Props {
  // 기본 테이블 설정
  columns: Column[]; // 열 정보
  data: Record<string, any>[]; // 데이터
  loading?: boolean; // 로딩 여부
  bordered?: boolean; // 테두리 여부
  sticky?: boolean; // 페이지네이션 스티키 필요할 경우
  showHeader?: boolean; // 헤더 표시 여부
  rowClassName?: (record: any, index: number) => string; // record 값 등 조건부 행별 클래스 부여 필요할 경우

  // 스크롤 관련
  scroll?: { x?: number | string; y?: number | string }; // 스크롤 기준값

  // 선택 관련 (체크박스, 라디오)
  selectedKeys?: string[]; // 키 값
  count?: number; // 필터 미사용시 선택한 아이템 개수

  // 필터 관련
  showFilter?: boolean; // 필터 표시
  filterSize?: 'xs' | 'sm' | 'md'; // 필터 크기
  line?: 'single' | 'double'; // 필터 라인 타입 (1줄, 2줄)
  refresh?: boolean; // 필터 새로고침 버튼 여부
  borderTop?: boolean; // 필터 테두리 상단 여부
  onlyCount?: boolean; // 아이템 선택 시 버튼 없이 카운트만 표시하는 경우

  // 페이지네이션 관련
  showPagination?: boolean; // 페이지네이션 표시
  pageSize?: number; // 페이지당 아이템 개수
  currentPage?: number; // 현재 페이지
  hideSelect?: boolean; // 페이지당 아이템 개수 버튼 숨김

  // 사이즈(padding) 관련
  noPadding?: boolean; // 기본 간격 16 제거

  // 열 고정 관련
  fixedColumn?: number; // 열 고정 개수

  // 행 선택 관련
  rowSelection?: any;

  // 테이블 레이아웃 관련
  layout?: 'fixed' | 'auto';

  // 확장 행 관련
  expandedRowKeys?: string[];
}
const props = withDefaults(defineProps<Props>(), {
  columns: () => [],
  data: () => [],
  loading: false,
  bordered: false,
  scroll: () => ({ x: undefined }),
  line: 'single',
  refresh: false,
  showFilter: false,
  filterSize: 'md',
  showPagination: false,
  showHeader: true,
  pageSize: 20,
  currentPage: 1,
  noPadding: false,
  fixedColumn: undefined,
  rowSelection: undefined,
  count: 0,
  layout: 'fixed',
  rowClassName: undefined,
  hideSelect: false,
  expandedRowKeys: undefined,
});

// layout이 auto일 때만 max-content 사용, fixed일 때는 undefined로 설정
const computedScroll = computed(() => {
  if (props.layout === 'auto') {
    return { x: 'max-content' };
  }
  return props.scroll;
});

const emit = defineEmits<{
  (e: 'update:selectedKeys', keys: string[]): void;
  (e: 'update:currentPage', page: number): void;
  (e: 'update:pageSize', size: number): void;
  (e: 'filter', filters: Filter[]): void;
  (e: 'create'): void;
  (e: 'update:fixedColumn', count: number): void;
  (e: 'expand', expanded: boolean, record: any): void;
}>();

/**
 * pagination
 */
const current = ref(props.currentPage);
const pageSize = ref(props.pageSize);
const filteredData = ref<Record<string, any>[]>([]);
const total = computed(() => filteredData.value.length);
const paginatedData = computed(() => {
  const start = (current.value - 1) * pageSize.value;
  const end = start + pageSize.value;
  return filteredData.value.slice(start, end);
});

watchEffect(() => {
  filteredData.value = [...props.data];
});

// props의 currentPage와 pageSize 변경 감지
watch(
  () => props.currentPage,
  (newPage) => {
    if (props.currentPage !== undefined) {
      current.value = newPage;
    }
  }
);

watch(
  () => props.pageSize,
  (newSize) => {
    if (props.pageSize !== undefined) {
      pageSize.value = newSize;
    }
  }
);

// 페이지네이션 이벤트 핸들러
const handlePageChange = (page: number) => {
  current.value = page;
  if (props.currentPage !== undefined) {
    emit('update:currentPage', page);
  }
  emit('update:selectedKeys', []);
};
const handlePageSizeChange = (size: number) => {
  pageSize.value = size;
  if (props.pageSize !== undefined) {
    emit('update:pageSize', size);
  }
};

/**
 * 필터
 */
const customSortMessages = {
  triggerDesc: '내림차순 정렬',
  triggerAsc: '오름차순 정렬',
  cancelSort: '정렬 취소',
  filterConfirm: '확인',
  filterReset: '초기화',
};

interface Filter {
  id: number;
  column: string;
  columnKey: string;
  value: string;
}
const handleTableChange = (pagination: any, filters: any, sorter: any) => {
  if (current.value !== pagination.current) {
    emit('update:selectedKeys', []);
  }

  let data = [...props.data];
  // 필터 적용
  Object.keys(filters).forEach((key) => {
    if (filters[key] && filters[key].length > 0) {
      data = data.filter((item) => filters[key].includes(item[key]));
    }
  });

  // 정렬 적용
  if (sorter.field && sorter.order) {
    data.sort((a, b) => {
      const compareA = a[sorter.field];
      const compareB = b[sorter.field];

      if (sorter.order === 'ascend') {
        return compareA > compareB ? 1 : -1;
      }
      return compareA < compareB ? 1 : -1;
    });
  }

  filteredData.value = data;
  current.value = 1; // 필터 변경 시 페이지 초기화
  emit('update:currentPage', 1);
};
const handleFilterChange = (filteredResult: any[]) => {
  filteredData.value = [...filteredResult];
  current.value = 1;
  emit('update:currentPage', 1);
  emit('update:selectedKeys', []);
};

const handleFilterConditionsChange = (filterConditions: Filter[]) => {
  // 필터 조건 변경 시 부모에게 알림 (데이터 필터링은 @search에서 처리)
  emit('filter', filterConditions);
};

const handleFilterReset = () => {
  // 필터 초기화 시 원본 데이터로 복원하고 페이지 1로 이동
  filteredData.value = [...props.data];
  current.value = 1;
  emit('update:currentPage', 1);
  emit('update:selectedKeys', []);
};

const handleFixedChange = (count: number) => {
  emit('update:fixedColumn', count);
};

const handleExpand = (expanded: boolean, record: any) => {
  emit('expand', expanded, record);
};
</script>
