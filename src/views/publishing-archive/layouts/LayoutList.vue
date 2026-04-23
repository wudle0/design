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
            <!-- <div class="segment-wrap">
                  <a-segmented v-model:value="value" :options="data" />
                </div> -->
            <div class="content-body">
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
              >
                <template #empty>
                  <!-- 노데이터 -->
                  <NoData>
                    <template #button>
                      <a-button class="primary ant-empty-btn">
                        <Icon size="md" color="default" fill>
                          <template #name>add</template>
                        </Icon>
                        생성
                      </a-button>
                    </template>
                  </NoData>
                </template>
                <!-- 필터 내부 버튼 -->
                <template #filter-buttons>
                  <a-range-picker format="YYYY-MM-DD ">
                    <template #suffixIcon>
                      <Icon size="md" color="default">
                        <template #name></template>
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
                    <a-flex gap="4" justify="space-between">
                      <span class="help-text">{{ column.title }}</span>
                      <a-tooltip autoAdjustOverflow>
                        <template #title>
                          <div class="ant-tooltip-head">Header</div>
                          <dl class="ant-tooltip-list">
                            <div class="ant-tooltip-list-item">
                              <dt>삭제됨</dt>
                              <dd>
                                <a-tag class="down small">
                                  <p class="tag-wrap-text">DELETED</p>
                                </a-tag>
                              </dd>
                            </div>
                            <div class="ant-tooltip-list-item">
                              <dt>사용 불가</dt>
                              <dd>
                                <a-tag class="down small">
                                  <p class="tag-wrap-text">DEACTIVATED</p>
                                </a-tag>
                              </dd>
                            </div>
                            <div class="ant-tooltip-list-item">
                              <dt>업로드 에러</dt>
                              <dd>
                                <a-tag class="red small">
                                  <p class="tag-wrap-text">KILLED</p>
                                </a-tag>
                              </dd>
                            </div>
                            <div class="ant-tooltip-list-item">
                              <dt>업로드 대기 중</dt>
                              <dd>
                                <a-tag class="blue small">
                                  <p class="tag-wrap-text">KQUEUEDILLED</p>
                                </a-tag>
                              </dd>
                            </div>
                            <div class="ant-tooltip-list-item">
                              <dt>업로드 중</dt>
                              <dd>
                                <a-tag class="blue small">
                                  <p class="tag-wrap-text">UPLOADING</p>
                                </a-tag>
                              </dd>
                            </div>
                            <div class="ant-tooltip-list-item">
                              <dt>저장 중</dt>
                              <dd>
                                <a-tag class="blue small">
                                  <p class="tag-wrap-text">SAVING</p>
                                </a-tag>
                              </dd>
                            </div>
                            <div class="ant-tooltip-list-item">
                              <dt>사용 중</dt>
                              <dd>
                                <a-tag class="blue small">
                                  <p class="tag-wrap-text">IMPORTING</p>
                                </a-tag>
                              </dd>
                            </div>
                            <div class="ant-tooltip-list-item">
                              <dt>삭제 중</dt>
                              <dd>
                                <a-tag class="blue small">
                                  <p class="tag-wrap-text">PENDING_DELETE</p>
                                </a-tag>
                              </dd>
                            </div>
                            <div class="ant-tooltip-list-item">
                              <dt>준비 완료</dt>
                              <dd>
                                <a-tag class="green small">
                                  <p class="tag-wrap-text">ACTIVE</p>
                                </a-tag>
                              </dd>
                            </div>
                            <div class="ant-tooltip-list-item">
                              <dt>유지 보수 모드</dt>
                              <dd>
                                <a-tag class="orange small">
                                  <p class="tag-wrap-text">MAINTENANCE</p>
                                </a-tag>
                              </dd>
                            </div>
                          </dl>
                        </template>
                        <Icon size="md" color="default">
                          <template #name>help</template>
                        </Icon>
                      </a-tooltip>
                    </a-flex>
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
                          <a-select-option value="a"
                            >Select Item 01</a-select-option
                          >
                          <a-select-option value="b"
                            >Select Item 02</a-select-option
                          >
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
                          v-for="(item, index) in record?.tag"
                          :key="index"
                        >
                          <p class="tag-wrap-text">{{ item }}</p>
                        </a-tag>
                        <a-tag class="gray small">
                          <p class="tag-wrap-text">+N</p>
                        </a-tag>
                      </div>
                    </div>
                  </template>
                  <template v-else-if="column.dataIndex === 'progress'">
                    <div class="progress-box gray">
                      <a-progress
                        :percent="100"
                        :size="8"
                        :format="formatText"
                      />
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
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive, watch, computed } from 'vue';
import { Icon } from '@/components/icons';
import { BasicTitle, BasicEllipsisText } from '@/components/layouts';
import { NoData } from '@/components/no-data';
import { useRouter } from 'vue-router';
import { Table, Filter } from '@/components/table';

const formState = reactive({
  name: '',
  nameError: '',
  checkedValueDefault: [] as string[],
  selected: 'a',
  radioValue: 'a',
  textarea: '',
  switched: '',
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
const selectedRowKeys = ref<string[]>([]);
const fixedColumnCount = ref(0);

/**
 * 선택 (체크박스, 라디오) 관련
 */
const tableRowSelection = computed(() =>
  selectedRowKeys !== undefined
    ? {
        type: 'checkbox',
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
    tag: ['tag1', 'tag2', 'tag3'],
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
