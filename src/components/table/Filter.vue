<template>
  <div
    class="filter-wrap"
    :class="{
      double: props.line === 'double',
      small: props.size === 'sm',
      xSmall: props.size === 'xs',
    }"
  >
    <div class="filter-wrap-left">
      <div
        class="filter-prefix"
        v-if="count && props.selectionType === 'checkbox'"
      >
        <div class="filter-prefix-text">
          <strong>{{ count }}</strong> 개 선택 됨
        </div>
        <slot name="count-buttons">
          <template v-if="!props.onlyCount">
            <div class="filter-prefix-btns">
              <a-button class="secondary">
                <Icon size="md" color="default">
                  <template #name>edit</template>
                </Icon>
              </a-button>
              <a-button class="secondary">
                <Icon size="md" color="error">
                  <template #name>delete</template>
                </Icon>
              </a-button>
            </div>
          </template>
        </slot>
      </div>
      <div class="filter-center" :class="{ 'border-top': props.borderTop }">
        <template v-if="props.data.length">
          <a-popover
            v-model:open="popoverOpen"
            trigger="click"
            placement="bottomLeft"
            overlayClassName="no-arrow"
          >
            <template #content>
              <div class="filter-popover">
                <div class="filter-item">
                  <a-flex vertical gap="8">
                    <a-button
                      v-for="col in columns.filter(
                        (col: Column) =>
                          col.dataIndex !== 'setting' && col.filterSearch
                      )"
                      :key="col.dataIndex"
                      class="ghost"
                      @click.stop.prevent="handleColumnSelect(col, $event)"
                    >
                      <a-flex gap="8">
                        {{ col.title }}

                        <template v-if="col.isOrFilter">
                          <div class="or-text">OR</div>
                        </template>
                      </a-flex>
                      <Icon size="md" color="default">
                        <template #name>keyboard_arrow_right</template>
                      </Icon>
                    </a-button>
                  </a-flex>
                </div>
              </div>
            </template>
            <a-input
              ref="inputRef"
              placeholder="항목 이름 또는 값을 입력해 주세요."
              allow-clear
              v-model:value="searchValue"
              @keyup.enter="handleSearch"
              @compositionend="handleCompositionEnd"
            >
              <template #prefix>
                <div class="filter-select-icon">
                  <Icon size="md" color="default">
                    <template #name>{{
                      props.filterIcon ? 'filter_list' : 'search'
                    }}</template>
                  </Icon>
                </div>
                <div class="filter-tags" v-if="selectedFilters.length">
                  <a-tag
                    v-for="filter in selectedFilters"
                    :key="filter.id"
                    closable
                    @close="removeFilter(filter)"
                    class="close small"
                  >
                    <p class="tag-wrap-text">
                      {{
                        filter.column
                          ? `${filter.column}: ${filter.value}`
                          : filter.value
                      }}
                    </p>
                  </a-tag>
                </div>
                <slot name="tags"></slot>
              </template>
              <template #clearIcon>
                <Icon size="md" color="default" fill>
                  <template #name>close</template>
                </Icon>
              </template>
            </a-input>
          </a-popover>

          <!-- 두 번째 popover: 항목 선택 (절대 위치) -->
          <a-popover
            v-model:open="secondPopoverOpen"
            trigger="manual"
            :overlayStyle="{
              position: 'fixed',
              left: `${secondPopoverPosition.left}px`,
              top: `${secondPopoverPosition.top}px`,
            }"
            overlayClassName="no-arrow"
          >
            <!-- 트리거가 필요하지만 사실상 안 쓰이므로 dummy span -->
            <template #default>
              <span style="display: none"></span>
            </template>

            <template #content>
              <div class="filter-popover">
                <div class="filter-item">
                  <a-flex vertical gap="8">
                    <template v-if="selectedColumn?.dataIndex === 'tag'">
                      <a-flex gap="8" vertical>
                        <a-tag
                          v-for="item in columnItems"
                          :key="item"
                          class="blue medium"
                          @click.stop="handleItemSelect(item)"
                        >
                          <p class="tag-wrap-text">{{ item }}</p>
                        </a-tag>
                      </a-flex>
                    </template>
                    <template v-else>
                      <a-button
                        v-for="item in columnItems"
                        :key="item"
                        class="ghost"
                        @click.stop="handleItemSelect(item)"
                      >
                        {{ item }}
                      </a-button>
                    </template>
                  </a-flex>
                </div>
              </div>
            </template>
          </a-popover>
        </template>
        <template v-else>
          <a-input
            ref="inputRef"
            placeholder="항목 이름 또는 값을 입력해 주세요."
            allow-clear
            v-model:value="searchValue"
            @keyup.enter="handleSearch"
            @compositionend="handleCompositionEnd"
          >
            <template #prefix>
              <div class="filter-select-icon">
                <Icon size="md" color="default">
                  <template #name>{{
                    props.filterIcon ? 'filter_list' : 'search'
                  }}</template>
                </Icon>
              </div>
              <div class="filter-tags" v-if="selectedFilters.length">
                <a-tag
                  v-for="filter in selectedFilters"
                  :key="filter.id"
                  closable
                  @close="removeFilter(filter)"
                >
                  <p class="tag-wrap-text">
                    {{
                      filter.column
                        ? `${filter.column}: ${filter.value}`
                        : filter.value
                    }}
                  </p>
                </a-tag>
              </div>
              <slot name="tags"></slot>
            </template>
            <template #clearIcon>
              <Icon size="md" color="default" fill>
                <template #name>close</template>
              </Icon>
            </template>
          </a-input>
        </template>
      </div>
    </div>
    <!-- 원하는 버튼 삽입 -->
    <div
      class="filter-suffix"
      v-if="hasButtonContent || props.fixedColumn >= 0"
    >
      <slot name="buttons"> </slot>
      <div
        class="filter-suffix-addbtn"
        v-if="props.refresh || props.fixedColumn >= 0"
      >
        <a-popover
          placement="bottomRight"
          trigger="click"
          overlayClassName="rowfix-wrap"
          v-if="props.fixedColumn >= 0"
        >
          <template #content>
            <ul class="rowfix-list">
              <li
                class="rowfix-item"
                :class="selectedItem === 1 ? 'selected' : ''"
                @click="applyClearColumns"
              >
                열 고정 없음
              </li>
              <li
                class="rowfix-item"
                :class="selectedItem === 2 ? 'selected' : ''"
              >
                <a-input
                  size="small"
                  v-model:value="fixedColumnInput"
                  :placeholder="columnPlaceholder"
                  @input="handleInputChange"
                  @pressEnter="applyFixedColumns"
                />
                <span> 열까지 고정 </span>
              </li>
            </ul>
          </template>
          <a-button class="ghost">
            <RowfixIcon :active="selectedItem === 2" />
          </a-button>
        </a-popover>
        <a-button class="ghost" @click="handleResetFilter" v-if="props.refresh">
          <Icon size="md" color="default" fill>
            <template #name>refresh</template>
          </Icon>
        </a-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {
  ref,
  computed,
  nextTick,
  watch,
  onMounted,
  onBeforeUnmount,
  useSlots,
} from 'vue';
import { Icon } from '../icons';
import RowfixIcon from '@/components/icons/RowfixIcon.vue';

interface Props {
  size?: 'xs' | 'sm' | 'md';
  line?: 'single' | 'double';
  filterIcon?: boolean;
  selectCount?: number;
  value?: string;
  fixedColumn?: number;
  columns?: Column[];
  data?: Record<string, any>[];
  selectionType?: 'checkbox' | 'radio';
  refresh?: boolean;
  borderTop?: boolean;
  onlyCount?: boolean;
}

interface Column {
  title: string;
  dataIndex: string;
  filterSearch?: boolean;
  [key: string]: any;
  isOrFilter?: boolean;
}

interface Filter {
  id: number;
  column: string;
  columnKey: string;
  value: any;
}

const props = withDefaults(defineProps<Props>(), {
  size: 'md',
  line: 'single',
  filterIcon: false,
  selectCount: 0,
  value: '',
  fixedColumn: -1,
  columns: () => [],
  data: () => [],
  selectionType: 'checkbox',
  refresh: false,
});

const emit = defineEmits([
  'update:value',
  'search',
  'filter',
  'changeFixed',
  'reset',
]);

const slots = useSlots();
const searchValue = ref(props.value);
const popoverOpen = ref(false);
const selectedColumn = ref<Column | null>(null);
const selectedFilters = ref<Filter[]>([]);
const searchResults = ref<any[]>([]);
const inputRef = ref(null);

const isComposing = ref(false);

//두번째 선택 항목
const secondPopoverOpen = ref(false);
const secondPopoverPosition = ref({ left: 0, top: 0 });
const secondPopoverColumn = ref<Column | null>(null);

// 선택 개수
const count = computed(() => props.selectCount ?? 0);

// 컬럼 최대 개수를 계산하는 computed 속성
const maxColumnCount = computed(() => props.columns?.length ?? 0);
const columnPlaceholder = computed((): string => `1~${maxColumnCount.value}`);

// 버튼 슬롯에 실제 내용이 있는지 확인
const hasButtonContent = computed(() => {
  const slotContent = slots.buttons?.();
  if (!slotContent || slotContent.length === 0) return false;

  // 각 노드를 확인하여 실제 내용이 있는지 체크
  return slotContent.some((node) => {
    // Fragment 노드인 경우 children 확인
    if (node.children && Array.isArray(node.children)) {
      return node.children.length > 0;
    }
    // 텍스트 노드인 경우 빈 문자열이 아닌지 확인
    if (typeof node.children === 'string') {
      return node.children.trim() !== '';
    }
    // 컴포넌트 노드인 경우 true
    return node.type && typeof node.type !== 'symbol';
  });
});

// 현재 선택된 컬럼의 고유한 항목들
const columnItems = ref<any[]>([]);

// 셀 값 검색 헬퍼 함수
const searchInCellValue = (cellValue: any, searchText: string): boolean => {
  if (cellValue === undefined || cellValue === null) {
    return false;
  }

  const lowerSearchText = String(searchText).toLowerCase();

  // 배열인 경우 각 요소에서 검색
  if (Array.isArray(cellValue)) {
    return cellValue.some((item) => {
      if (typeof item === 'object' && item?.name) {
        return String(item.name).toLowerCase().includes(lowerSearchText);
      } else {
        return String(item).toLowerCase().includes(lowerSearchText);
      }
    });
  }

  // 객체이고 name 속성이 있는 경우 name에서 검색
  if (typeof cellValue === 'object' && cellValue?.name) {
    return String(cellValue.name).toLowerCase().includes(lowerSearchText);
  }

  // 일반 값인 경우
  return String(cellValue).toLowerCase().includes(lowerSearchText);
};

// 데이터 필터링 함수
const filterData = () => {
  if (selectedFilters.value.length === 0) {
    return props.data;
  }

  return props.data.filter((row) => {
    // 필터 조건을 모두 만족하면 포함 (AND)
    return selectedFilters.value.every((filter) => {
      if (filter.columnKey === 'search') {
        // 검색어 필터: filterSearch가 true인 모든 컬럼에서 검색
        const searchColumns = props.columns.filter((col) => col.filterSearch);
        return searchColumns.some((col) => {
          const cellValue = row[col.dataIndex];
          return searchInCellValue(cellValue, filter.value);
        });
      } else {
        // 컬럼 선택 필터: 특정 컬럼에서만 검색
        const cellValue = row[filter.columnKey];
        return searchInCellValue(cellValue, filter.value);
      }
    });
  });
};

// 검색 처리 함수 (엔터키를 눌렀을 때만 실행)
const handleSearch = (e: KeyboardEvent) => {
  // IME 입력 중이면 무시
  if (e.isComposing || isComposing.value) {
    return;
  }

  if (!searchValue.value) return;

  // 검색어를 태그로 추가
  const searchFilter: Filter = {
    id: Date.now(),
    column: '',
    columnKey: 'search',
    value: searchValue.value.trim(), // 앞뒤 공백 제거
  };
  selectedFilters.value.push(searchFilter);

  // 모든 필터 조건으로 데이터 필터링
  const filteredData = filterData();
  emit('search', filteredData);
  emit('filter', selectedFilters.value);
  searchValue.value = '';
  popoverOpen.value = false;
};

// IME 입력 완료 이벤트
const handleCompositionEnd = () => {
  isComposing.value = false;
};

// 컬럼 선택 처리
const handleColumnSelect = (column: Column, event: MouseEvent) => {
  popoverOpen.value = true;
  selectedColumn.value = column;
  secondPopoverColumn.value = column;

  const target = event.currentTarget as HTMLElement;
  const rect = target.getBoundingClientRect();
  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;

  // 팝오버 크기
  const popoverWidth = 200;
  const popoverHeight = 300;

  // 기본 위치 계산 (버튼의 오른쪽에 배치)
  let left = rect.right + 8;
  let top = rect.top;

  if (left + popoverWidth > viewportWidth) {
    left = rect.left - popoverWidth - 8;
  }

  if (top + popoverHeight > viewportHeight) {
    top = Math.max(0, viewportHeight - popoverHeight - 8);
  }

  if (top < 0) {
    top = 8;
  }

  if (left < 0) {
    left = 8;
  }

  secondPopoverPosition.value = {
    left: left + 4,
    top: top,
  };

  // 컬럼의 고유 항목들 추출
  const uniqueItems = new Set<any>();
  props.data.forEach((row) => {
    const value = row[column.dataIndex];
    if (value !== undefined && value !== null) {
      if (Array.isArray(value)) {
        // 배열인 경우 각 요소를 개별적으로 추가
        value.forEach((item) => uniqueItems.add(item));
      } else if (typeof value === 'object' && value.name) {
        // 객체이고 name 속성이 있는 경우 name만 추출
        uniqueItems.add(value.name);
      } else {
        uniqueItems.add(value);
      }
    }
  });
  columnItems.value = Array.from(uniqueItems);

  // 팝오버 열기 (reset 후 재오픈)
  secondPopoverOpen.value = false;
  nextTick(() => {
    secondPopoverOpen.value = true;
  });
};

// 항목 선택 처리
const handleItemSelect = (item: any) => {
  if (!selectedColumn.value) return;

  // 검색어를 태그로 추가
  const searchFilter: Filter = {
    id: Date.now(),
    column: selectedColumn.value.title,
    columnKey: selectedColumn.value.dataIndex,
    value: item,
  };
  selectedFilters.value.push(searchFilter);
  selectedColumn.value = null;
  searchValue.value = '';
  popoverOpen.value = false;
  secondPopoverOpen.value = false;

  const filteredData = filterData();
  emit('search', filteredData);
  emit('filter', selectedFilters.value);
};

// 필터 제거
const removeFilter = (filter: Filter) => {
  selectedFilters.value = selectedFilters.value.filter(
    (f) => f.id !== filter.id
  );

  // 남은 필터 조건으로 데이터 다시 필터링
  const filteredData = filterData();
  emit('search', filteredData);
  emit('filter', selectedFilters.value);
};

// 필터 및 테이블 초기화
const handleResetFilter = () => {
  // 모든 필터 상태 초기화
  selectedFilters.value = [];
  searchValue.value = '';
  selectedColumn.value = null;

  // 팝오버 상태 초기화
  popoverOpen.value = false;
  secondPopoverOpen.value = false;

  // 고정 컬럼 초기화
  fixedColumnInput.value = '';
  selectedItem.value = 0;

  // 부모 컴포넌트에 초기화 알림
  emit('search', props.data); // 원본 데이터로 복원
  emit('filter', []);
  emit('changeFixed', 0);
  emit('reset');
};

// 열 고정
const fixedColumnInput = ref(
  props.fixedColumn > 0 ? props.fixedColumn.toString() : ''
);
const selectedItem = ref(0);

// 입력값이 변경될 때마다 바로 적용
const handleInputChange = (e: Event) => {
  const target = e.target as HTMLInputElement;
  const value = target.value;

  // 빈 값이면 고정 해제
  if (!value) {
    fixedColumnInput.value = '0';
    emit('changeFixed', 0);
    return;
  }

  const parsed = parseInt(value, 10);
  if (!isNaN(parsed) && parsed >= 0 && parsed <= maxColumnCount.value) {
    selectedItem.value = 2;
    emit('changeFixed', parsed);
  } else {
    // 범위를 벗어나면 0으로 설정
    fixedColumnInput.value = '0';
    emit('changeFixed', 0);
  }
};

function applyFixedColumns() {
  const parsed = parseInt(fixedColumnInput.value, 10);

  // 유효한 숫자이고 범위 내인 경우에만 적용
  if (!isNaN(parsed) && parsed >= 0 && parsed <= maxColumnCount.value) {
    selectedItem.value = 2;
    emit('changeFixed', parsed);
  } else {
    // 범위를 벗어나면 0으로 설정
    fixedColumnInput.value = '0';
    emit('changeFixed', 0);
  }
}

function applyClearColumns() {
  selectedItem.value = 1;
  fixedColumnInput.value = '0';
  emit('changeFixed', 0);
}

watch(
  () => props.fixedColumn,
  (val) => {
    if (val > 0) fixedColumnInput.value = val.toString();
    else fixedColumnInput.value = '';
  }
);

onMounted(() => {
  document.addEventListener('click', handleOutsideClick);
  window.addEventListener('scroll', handleTableScroll, { passive: true });
});
onBeforeUnmount(() => {
  document.removeEventListener('click', handleOutsideClick);
  window.removeEventListener('scroll', handleTableScroll);
});

let lastScrollLeft = 0;
function handleTableScroll(event: Event) {
  const target = event.target as HTMLElement;
  const currentScrollLeft = target.scrollLeft;

  // 좌우 스크롤 감지
  const isHorizontalScroll = lastScrollLeft !== currentScrollLeft;
  lastScrollLeft = currentScrollLeft;

  if (secondPopoverOpen.value && isHorizontalScroll) {
    // 스크롤 시 팝오버 위치 재계산
    if (selectedColumn.value) {
      const filterButtons = document.querySelectorAll(
        '.filter-popover .ant-btn'
      );
      const targetButton = Array.from(filterButtons).find((btn) => {
        const btnText = btn.textContent?.trim();
        return btnText === selectedColumn.value?.title;
      });

      if (targetButton) {
        const rect = targetButton.getBoundingClientRect();
        const viewportWidth = window.innerWidth;
        const popoverWidth = 200;

        let left = rect.right + 8;
        if (left + popoverWidth > viewportWidth) {
          left = rect.left - popoverWidth - 8;
        }
        if (left < 0) {
          left = 8;
        }

        secondPopoverPosition.value.left = left;
      }
    }
  }
}

const handleOutsideClick = (e: MouseEvent) => {
  if (!secondPopoverOpen.value) return;

  const target = e.target as HTMLElement;

  // 아래 조건에 해당하지 않으면 팝오버 닫기
  const isTriggerArea = target.closest('.filter-wrap'); // 트리거 버튼 영역
  const isPopoverCandidate = target.closest('.ant-popover'); // 전체 팝오버 내부 (antd가 렌더링한)

  if (!isTriggerArea && !isPopoverCandidate) {
    secondPopoverOpen.value = false;
  }
};
</script>
