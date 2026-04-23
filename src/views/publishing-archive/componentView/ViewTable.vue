<template>
  <a-flex vertical>
    <!-- 기본 테이블 -->
    <TopTitle title="일반 테이블" text="범용적으로 사용되는 테이블입니다." />
    <Table
      :columns="columns"
      :data="baseData"
      :show-filter="true"
      :show-pagination="true"
      :row-selection="tableRowSelection"
      :count="selectedRowKeys.length"
      v-model:selectedKeys="selectedRowKeys"
      sticky
      noPadding
      layout="auto"
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
        <!-- 말줄임 셀 -->
        <template v-if="column.dataIndex === 'date'">
          <div
            class="ellipsis-cell"
            :style="{ width: column.width - 32 + 'px' }"
          >
            <a-tooltip>
              <template #title>
                <p class="ellipsis-cell-text">{{ record.date }}</p>
              </template>
              <p class="ellipsis-cell-text">{{ record.date }}</p>
            </a-tooltip>

            <a-button class="ghost small">
              <Icon size="md" color="default">
                <template #name>content_copy</template>
              </Icon>
            </a-button>
          </div>
        </template>
        <!-- edit icon 포함 셀 -->
        <template v-else-if="column.dataIndex === 'name'">
          <a-flex justify="space-between" align="center">
            <span>{{ record.name }}</span>
            <Icon size="md" color="default" class="edit-icon">
              <template #name>edit</template>
            </Icon>
          </a-flex>
        </template>
        <!-- 인풋 셀 -->
        <template v-else-if="column.dataIndex === 'inner'">
          <a-flex vertical gap="2" class="ant-table-inner">
            <a-form-item>
              <!-- <a-input
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
              </a-input> -->
              <a-input-number
                v-model:value="formState.number"
                placeholder="{label}을(를) 입력해 주세요."
              >
              </a-input-number>
              <!-- disabled 예시 -->
              <!-- <a-input-number
                v-model:value="formState.number"
                placeholder="{label}을(를) 입력해 주세요."
                disabled
              >
              </a-input-number> -->
              <!-- 에러시 사용 -->
              <!-- <div class="caption-wrap error">
                <Icon fill size="xs" color="error">
                  <template #name>error</template>
                </Icon>
                <p class="caption-wrap-text">Error Text</p>
              </div> -->
            </a-form-item>
          </a-flex>
        </template>
        <!-- select 셀 -->
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
              <!-- 에러시 사용 -->
              <!-- <div class="caption-wrap error">
                <Icon fill size="xs" color="error">
                  <template #name>error</template>
                </Icon>
                <p class="caption-wrap-text">Error Text</p>
              </div> -->
            </a-form-item>
          </a-flex>
        </template>
        <!-- <template v-else-if="column.dataIndex === 'inputSel'">
          <a-flex vertical gap="2" class="ant-table-inner double">
            <a-input
              v-model:value="formState.name"
              placeholder="Placeholder"
              type="text"
            >
            </a-input>
            <a-select
              v-model:value="formState.selected"
              placeholder="Placeholder"
            >
              <a-select-option value="a">Select Item 01</a-select-option>
              <a-select-option value="b">Select Item 02</a-select-option>
            </a-select>
          </a-flex>
        </template> -->
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
        <!-- 다중 tag 셀 -->
        <template v-else-if="column.dataIndex === 'tag'">
          <div class="ant-table-double-inner">
            <a-flex gap="4">
              <a-tooltip overlayClassName="plain" autoAdjustOverflow>
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
                </div>
              </a-tooltip>
              <a-tooltip overlayClassName="plain" autoAdjustOverflow>
                <template #title>
                  <a-flex vertical gap="4">
                    <span v-for="item in record?.tag?.slice(3)">
                      {{ item }}
                    </span>
                  </a-flex>
                </template>
                <div class="tag-wrap">
                  <a-tag class="gray small" v-if="record?.tag?.length > 3">
                    <p class="tag-wrap-text">+{{ record?.tag?.length - 3 }}</p>
                  </a-tag>
                </div>
              </a-tooltip>
            </a-flex>
          </div>
        </template>
        <!-- progress 셀 -->
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

    <TopTitle
      title="테이블 필터 없는 경우"
      text="단독으로 사용 될 수 있습니다."
      style="margin-top: 40px"
    />
    <Table
      :columns="columns"
      :data="baseData"
      :show-filter="false"
      :show-pagination="true"
      :row-selection="tableRowSelection"
      :count="selectedRowKeys.length"
      v-model:selectedKeys="selectedRowKeys"
      sticky
      noPadding
      layout="auto"
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
      <!-- 필터x, 카운트 버튼 -->
      <template #count-buttons>
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
                disabled
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

    <!-- 확장 테이블 -->
    <TopTitle
      title="확장 테이블"
      text="테이블 내 컴포넌트가 들어가는 확장 테이블입니다."
      style="margin-top: 40px"
    />

    <Table
      :columns="secondColumns"
      :data="secondData"
      :show-filter="true"
      :show-pagination="true"
      noPadding
    >
      <template #empty>
        <NoData text="검색 결과가 없습니다.">
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
            <Table
              :columns="innerColumns"
              :data="innerData"
              :scroll="{ x: 'max-content' }"
            >
              <template #expandedRowRender>
                <Table
                  :columns="innerColumns"
                  :data="innerData"
                  :scroll="{ x: 'max-content' }"
                >
                  <template #expandedRowRender>
                    <Table
                      :columns="innerColumns"
                      :data="innerData"
                      :selectable="true"
                      v-model:selectedKeys="selectedRowKeys"
                      :scroll="{ x: 'max-content' }"
                    />
                  </template>
                </Table>
              </template>
            </Table>
          </template>
        </Table>
      </template>
    </Table>

    <!-- add 테이블 -->
    <TopTitle
      title="Add 테이블"
      text="사용자가 행을 더하고 삭제할 수 있는 테이블입니다."
      style="margin-top: 40px"
    />
    <div class="add-table" style="max-width: 800px">
      <Table
        :columns="addColumns"
        :data="addData"
        noPadding
        :scroll="{ x: 'max-content' }"
      >
        <template #empty>
          <NoData text="검색 결과가 없습니다.">
            <template #icon>
              <Icon size="md" color="brand" fill>
                <template #name>info</template>
              </Icon>
            </template>
          </NoData>
        </template>
        <template #headerCell="{ column }">
          <template v-if="column?.dataIndex === 'setting'"> </template>
        </template>
        <template #bodyCell="{ column, text, record }">
          <!-- <template v-if="column.dataIndex === 'label'">
          <a-flex justify="space-between" align="center">
            <span>{{ record.name }}</span>
            <Icon size="md" color="default" class="edit-icon">
              <template #name>edit</template>
            </Icon>
          </a-flex>
        </template> -->
          <template v-if="column.dataIndex === 'label'">
            <a-flex gap="16" class="ant-table-inner">
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
          <template v-if="column.dataIndex === 'label2'">
            <a-flex gap="16" class="ant-table-inner">
              <a-form-item>
                <a-input
                  v-model:value="formState.name"
                  placeholder="Placeholder"
                  type="text"
                />
                <!-- <div class="caption-wrap error">
                  <Icon fill size="xs" color="error">
                    <template #name>error</template>
                  </Icon>
                  <p class="caption-wrap-text">
                    Error Text<br />
                    오버플로우의 경우 아이콘은 상단 고정
                  </p>
                </div> -->
              </a-form-item>
            </a-flex>
          </template>
          <template v-else-if="column.dataIndex === 'setting'">
            <a-button
              class="ghost btn-setting"
              @click="handleDelete(record.key)"
              :disabled="addData.length === 1"
            >
              <Icon size="md" color="default">
                <template #name>delete</template>
              </Icon>
            </a-button>
          </template>
          <template v-else>
            {{ text }}
          </template>
        </template>
      </Table>
      <a-flex class="add-table-btns">
        <div class="add-table-btn left">
          <Icon size="xs" color="brand" fill>
            <template #name>add</template>
          </Icon>
          <a-button class="link accent" @click="handleAdd">Add Row</a-button>
        </div>
      </a-flex>
    </div>

    <!-- 알림 관리 테이블 -->
    <TopTitle
      title="알림 테이블"
      text="읽음/안읽음 상태를 표시하는 알림 테이블입니다."
      style="margin-top: 40px"
    />
    <div class="notification-table">
      <Table
        :rowClassName="getRowClassName"
        :columns="notificationColumns"
        :data="notificationData"
        :show-filter="false"
        :show-pagination="false"
        noPadding
        :scroll="{ x: '100%' }"
      >
        <template #bodyCell="{ column, text, record }">
          <template v-if="column.dataIndex === 'name'">
            <template v-if="record.read === false">
              <span class="unread-label">(읽지 않음)</span>
              {{ text }}
            </template>
            <template v-else>
              {{ text }}
            </template>
          </template>
          <template v-else>
            {{ text }}
          </template>
        </template>
      </Table>
    </div>
  </a-flex>
</template>

<script lang="ts" setup>
import { ref, reactive, computed } from 'vue';
import { Icon } from '@/components/icons';
import { NoData } from '@/components/no-data';
import { Table, StatusHeader } from '@/components/table';
import { TopTitle, BasicEllipsisText } from '@/components/layouts';

// 테이블 상태 관리
const selectedRowKeys = ref<string[]>([]);

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
    width: 200,
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
  // {
  //   title: '인풋 + 셀렉트 셀',
  //   dataIndex: 'inputSel',
  //   sorter: true,
  // },
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
    className: 'text-wrap-column',
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
    tag: ['tag1tag1tag1tag1tag1', 'tag2', 'tag3', 'tag4', 'tag5', 'tag6'],
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

// add 테이블 데이터 및 기능
const addColumns = ref([
  {
    title: 'label',
    dataIndex: 'label',
    ellipsis: true,
  },
  {
    title: 'label2',
    dataIndex: 'label2',
    ellipsis: true,
  },
  {
    title: '작업',
    dataIndex: 'setting',
    width: 58,
    align: 'center',
    fixed: 'right',
  },
]);
const addData = ref([
  {
    key: '1',
    label: '',
    label2: '',
  },
  {
    key: '2',
    label: '',
    label2: '',
  },
]);
const count = computed(() => addData.value.length + 1);
const handleAdd = () => {
  const newData = {
    key: `${count.value}`,
    label: '',
    label2: '',
  };
  addData.value.push(newData);
};
const handleDelete = (key: string) => {
  const indexToRemove = addData.value.findIndex((item) => item.key === key);
  if (indexToRemove !== -1) {
    addData.value.splice(indexToRemove, 1);
  }
};
//

const formatText = (percent: number) => `${percent}%`;

const getRowClassName = (record: any) => {
  if (record.read === true) {
    return 'read-bg';
  }
  if (record.read === false) {
    return 'unread-row';
  }
  return '';
};

// 알림 테이블 예시 데이터 (읽음/안읽음)
const notificationColumns = [
  { title: '알림 메시지', dataIndex: 'name', ellipsis: true },
  { title: '알림일시', dataIndex: 'date', sorter: true, width: '174px' },
];
const notificationData = [
  {
    key: '1',
    name: 'Combined from similar events): Successfully pulled image "busybox"combined from similar events): Successfully pulled image "busybox"',
    date: 'yyyy-mm-dd hh:mm',
    read: false,
  },
  {
    key: '2',
    name: 'combined from similar events): Successfully pulled image',
    date: 'yyyy-mm-dd hh:mm',
    read: true,
  },
  {
    key: '3',
    name: 'combined from similar events): Successfully pulled image',
    date: 'yyyy-mm-dd hh:mm',
    read: false,
  },
  {
    key: '4',
    name: 'combined from similar events): Successfully pulled image',
    date: 'yyyy-mm-dd hh:mm',
    read: false,
  },
  {
    key: '5',
    name: 'combined from similar events): Successfully pulled image',
    date: 'yyyy-mm-dd hh:mm',
    read: false,
  },
  {
    key: '6',
    name: 'combined from similar events): Successfully pulled image',
    date: 'yyyy-mm-dd hh:mm',
    read: true,
  },
  {
    key: '5',
    name: 'combined from similar events): Successfully pulled image',
    date: 'yyyy-mm-dd hh:mm',
    read: false,
  },
  {
    key: '6',
    name: 'combined from similar events): Successfully pulled image',
    date: 'yyyy-mm-dd hh:mm',
    read: false,
  },
  {
    key: '5',
    name: 'combined from similar events): Successfully pulled image',
    date: 'yyyy-mm-dd hh:mm',
    read: false,
  },
];
</script>
