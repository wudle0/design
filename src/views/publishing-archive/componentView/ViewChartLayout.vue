<template>
  <TopTitle
    title="차트 리스트 & 테이블"
    text="차트 내부에서만 사용되는 리스트와 테이블입니다."
  />
  <a-flex vertical gap="52">
    <!-- 차트 리스트 -->
    <a-flex style="width: 100%; gap: 16px">
      <ChartLegend :lists="[legendList]" size="small" />
      <ChartLegend :lists="[legendList, legendList]" size="small" />
    </a-flex>
    <a-flex style="width: 100%; gap: 16px">
      <ChartLegend :lists="[legendList]" size="medium" />
      <ChartLegend :lists="[legendList, legendList]" size="medium" />
    </a-flex>
    <a-flex style="width: 100%; gap: 16px">
      <ChartLegend :lists="[legendList]" size="large" />
      <ChartLegend :lists="[legendList, legendList]" size="large" />
    </a-flex>

    <!-- 차트 테이블 -->
    <a-flex vertical style="width: 100%">
      <Table
        :show-filter="true"
        :columns="multiColumns"
        :data="multiData"
        noPadding
        add
        class="chart-table medium"
      >
        <template #bodyCell="{ column, record }">
          <template v-if="column.dataIndex === 'label'">
            <div class="chart-table-cell">
              <span class="chart-table-text">
                <div class="chart-color-box" :class="'color' + record.key" />
                {{ record.label }}
              </span>
            </div>
          </template>
        </template>
      </Table>
    </a-flex>
  </a-flex>
  <TopTitle
    title="읽기 전용 차트 테이블"
    text="차트와 테이블이 연동되어 있지 않은 읽기 전용 테이블입니다."
    style="margin-top: 50px"
  />
  <!-- 읽기 전용 차트 -->
  <a-row :gutter="16">
    <a-col :span="8">
      <a-card size="small" :bordered="true" class="chart-card">
        <template #title>
          <div class="title-group">
            <div class="group-items">
              <a-typography-title :level="3" class="item-title">
                <BasicEllipsisText text="전체 vCPU 할당량" />
              </a-typography-title>
            </div>
          </div>
        </template>
        <a-flex vertical>
          <DoughnutChart
            height="180px"
            :doughnutData="doughnutData"
            :showGraphic="true"
            :showCenterValues="true"
            graphicTextPosition="42%"
            graphicTextContent="98%"
            graphicTextSize="28"
            :pieCenter="['50%', '80%']"
            :pieRadius="['86px', '116px']"
            :startAngle="180"
            :endAngle="360"
            chartListTop="30px"
            :fillGap="true"
          />
          <Table
            :columns="columns"
            :data="baseData"
            sticky
            noPadding
            :scroll="{ y: '144px' }"
          >
            <template #bodyCell="{ column, record }">
              <template v-if="column?.dataIndex === 'default'">
                <div class="between-cell">
                  <a-button class="link between-cell-value">
                    {{ record.default[0] }}
                  </a-button>
                  <span class="between-cell-text">
                    {{ record.default[1] }}
                  </span>
                </div>
              </template>
            </template>
          </Table>
        </a-flex>
      </a-card>
    </a-col>
  </a-row>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue';
import { TopTitle, BasicEllipsisText } from '@/components/layouts';
import { Table } from '@/components/table';
import { ChartLegend } from '@/components/chart';
import { DoughnutChart } from '@/components/chart';

/**
 * 차트 리스트
 */
const legendList = Array.from({ length: 20 }, (_, i) => ({
  key: String(i + 1),
  label: `Legend${i + 1}`,
  value: '50%',
}));

/**
 * 차트 테이블
 */
const multiColumns = ref([
  {
    title: 'Label',
    dataIndex: 'label',
    filterSearch: true,
  },
  {
    title: 'Value',
    dataIndex: 'value',
    filterSearch: true,
    align: 'right',
  },
  {
    title: 'Value2',
    dataIndex: 'value2',
    filterSearch: true,
    align: 'right',
  },
  {
    title: 'Value3',
    dataIndex: 'value3',
    filterSearch: true,
    align: 'right',
  },
  {
    title: 'Value4',
    dataIndex: 'value4',
    filterSearch: true,
    align: 'right',
  },
]);
const multiData = [
  ...Array.from({ length: 20 }, (_, i) => {
    const index = i + 1;
    return {
      key: String(index),
      label: 'Legend' + Number(i + 1),
      value: '50%',
      value2: '50%',
      value3: '50%',
      value4: '50%',
    };
  }),
];

/**
 * 읽기 전용 차트
 */
const columns = ref([
  {
    title: '인스턴스 사용량 Top 10',
    dataIndex: 'default',
  },
]);
const baseData = [
  ...Array.from({ length: 10 }, (_, i) => {
    const index = i + 1;
    return {
      key: String(index),
      default: [
        'VM-NameVM-NameVM-NameVM-NameVM-NameVM-NameVM-NameVM-Name',
        '99 / 100%',
      ],
    };
  }),
];
const doughnutData = reactive({
  name: ['Category X'],
  data: [50],
});
</script>
