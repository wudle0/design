<template>
  <div class="page-container">
    <div class="main-panel">
      <div class="panel-header">
        <BasicTitle
          level="panel"
          title="차트 예시"
          :backbutton="true"
          :tooltip="{ title: '툴크 예시', icon: 'info' }"
          :tags="[
            { text: 'success', color: 'green' },
            { text: 'warning', color: 'red' },
          ]"
        >
          <template #extra>
            <a-button class="btn-date-refresh">
              <Icon color="default" size="md" fill>
                <template #name>refresh</template>
              </Icon>
              <p class="item-date-text">yyyy.mm.dd hh:mm:ss 기준</p>
            </a-button>
          </template>
        </BasicTitle>
      </div>

      <div class="panel-body">
        <div class="main-content">
          <div class="content">
            <div class="content-body">
              <a-row :gutter="16">
                <!-- ✅ Doughnut Chart -->
                <a-col :span="6">
                  <a-card :bordered="true">
                    <template #title>
                      <div class="title-group">
                        <div class="group-items">
                          <Icon color="default" size="md" fill>
                            <template #name>donut_large</template>
                          </Icon>
                          <a-typography-title :level="3">
                            Doughnut Chart
                          </a-typography-title>
                          <div class="tag-wrap">
                            <a-tag class="green small">
                              <p class="tag-wrap-text">SUCCESS</p>
                            </a-tag>
                          </div>
                        </div>
                      </div>
                    </template>
                    <a-flex vertical>
                      <div class="chart-wrap">
                        <Echart
                          :chart-data="doughnutOption1"
                          style="height: 212px"
                          :unit="'단위 : Core'"
                        />
                        <div class="chart-list">
                          <a-flex gap="4">
                            <span class="unit">Used</span>
                            <span class="unit-number">9 Core</span>
                          </a-flex>
                          <a-flex gap="4">
                            <span class="unit">Total</span>
                            <span class="unit-number">999 Core</span>
                          </a-flex>
                        </div>
                      </div>
                      <ChartLegend
                        :lists="[doughnutLegendList]"
                        size="medium"
                        @clickLegendItem="
                          (index: number) => toggleLegend(index)
                        "
                      />
                    </a-flex>
                  </a-card>
                </a-col>
                <a-col :span="6">
                  <a-card :bordered="true">
                    <template #title>
                      <div class="title-group">
                        <div class="group-items">
                          <Icon color="default" size="md" fill>
                            <template #name>donut_large</template>
                          </Icon>
                          <a-typography-title :level="3">
                            Doughnut Chart
                          </a-typography-title>
                          <div class="tag-wrap">
                            <a-tag class="green small">
                              <p class="tag-wrap-text">SUCCESS</p>
                            </a-tag>
                          </div>
                        </div>
                      </div>
                    </template>
                    <a-flex vertical>
                      <div class="chart-wrap">
                        <Echart
                          :chart-data="doughnutOption2"
                          style="height: 212px"
                          :unit="'단위 : Core'"
                        />
                        <div class="chart-list" :style="{ top: chartListTop2 }">
                          <a-flex gap="4">
                            <span class="unit">Used</span>
                            <span class="unit-number">9 Core</span>
                          </a-flex>
                          <a-flex gap="4">
                            <span class="unit">Total</span>
                            <span class="unit-number">999 Core</span>
                          </a-flex>
                        </div>
                      </div>
                      <ChartLegend
                        :lists="[doughnutLegendList]"
                        size="medium"
                        @clickLegendItem="
                          (index: number) => toggleLegend(index)
                        "
                      />
                    </a-flex>
                  </a-card>
                </a-col>
              </a-row>

              <a-row :gutter="16" style="margin-top: 20px">
                <a-col :span="6">
                  <a-card :bordered="true">
                    <template #title>
                      <div class="title-group">
                        <div class="group-items">
                          <Icon color="default" size="md" fill>
                            <template #name>donut_large</template>
                          </Icon>
                          <a-typography-title :level="3">
                            Doughnut Chart
                          </a-typography-title>
                          <div class="tag-wrap">
                            <a-tag class="green small">
                              <p class="tag-wrap-text">SUCCESS</p>
                            </a-tag>
                          </div>
                        </div>
                      </div>
                    </template>
                    <div class="chart-wrap">
                      <Echart
                        :chart-data="doughnutOption3"
                        style="height: 242px"
                        :unit="'단위 : Core'"
                      />
                      <div class="chart-list" :style="{ top: chartListTop3 }">
                        <a-flex gap="4">
                          <span class="unit">Used</span>
                          <span class="unit-number">9 Core</span>
                        </a-flex>
                        <a-flex gap="4">
                          <span class="unit">Total</span>
                          <span class="unit-number">999 Core</span>
                        </a-flex>
                      </div>
                    </div>
                  </a-card>
                </a-col>
              </a-row>

              <a-row :gutter="16" style="margin-top: 20px">
                <a-col :span="6">
                  <a-card :bordered="true">
                    <template #title>
                      <div class="title-group">
                        <div class="group-items">
                          <Icon color="default" size="md" fill>
                            <template #name>pie_chart</template>
                          </Icon>
                          <a-typography-title :level="3">
                            Pie Chart Example
                          </a-typography-title>
                          <div class="tag-wrap">
                            <a-tag class="blue small">
                              <p class="tag-wrap-text">PIE</p>
                            </a-tag>
                          </div>
                        </div>
                      </div>
                    </template>
                    <div class="chart-wrap">
                      <Echart
                        :chart-data="pieOption"
                        style="height: 212px"
                        :unit="'단위 : %'"
                      />
                      <div class="chart-list" :style="{ top: chartListTopPie }">
                        <a-flex gap="4">
                          <span class="unit-number">888.88</span>
                          <span class="unit">/ 999.99 Core</span>
                        </a-flex>
                      </div>
                    </div>
                  </a-card>
                </a-col>
              </a-row>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue';
import { BasicTitle, BasicEllipsisText } from '@/components/layouts';
import { Icon } from '@/components/icons';
import { Echart, ChartLegend } from '@/components/chart';

//차트 사이즈 조절 후 위치 조정 필요할 때 !!!!!!! 가운데 텍스트 위치 조정
const chartListTop2 = '10px';
const chartListTop3 = '15px';
const chartListTopPie = '40px';

const doughnutOption1 = ref({
  tooltip: { trigger: 'item', formatter: '{b}: {c} ({d}%)' },
  legend: {
    orient: 'horizontal',
    type: 'scroll',
    itemWidth: 4,
    itemHeight: 10,
    pageIconSize: 6,
    show: false,
  },
  series: [
    {
      name: 'Example Doughnut',
      type: 'pie',
      center: ['50%', '50%'],
      radius: ['66', '97'],
      data: [
        { value: 25, name: 'Category A' },
        { value: 25, name: 'Category B' },
        { value: 25, name: 'Category C' },
        { value: 25, name: 'Category D' },
      ],
      itemStyle: { borderColor: '#fff', borderWidth: 2 },
      label: { show: false },
    },
  ],
  graphic: [
    {
      type: 'text',
      left: 'center',
      top: '35%',
      style: {
        text: '100%',
        textAlign: 'center',
        fill: '#38393b',
        fontSize: 28,
        fontWeight: '700',
        fontFamily: 'Pretendard JP',
      },
    },
  ],
});

const doughnutOption2 = ref({
  tooltip: { trigger: 'item', formatter: '{b}: {c} ({d}%)' },
  legend: {
    orient: 'horizontal',
    type: 'scroll',
    itemWidth: 10,
    itemHeight: 10,
    pageIconSize: 6,
    show: true,
    bottom: 0,
  },
  series: [
    {
      name: 'Example Doughnut',
      type: 'pie',
      center: ['50%', '46%'],
      radius: ['55', '80'],
      data: [
        { value: 25, name: 'Category A' },
        { value: 25, name: 'Category B' },
        { value: 25, name: 'Category C' },
        { value: 25, name: 'Category d' },
        { value: 25, name: 'Category e' },
        { value: 25, name: 'Category f' },
        { value: 25, name: 'Category g' },
        { value: 25, name: 'Category h' },
      ],
      itemStyle: { borderColor: '#fff', borderWidth: 2 },
      label: { show: false },
    },
  ],
  graphic: [
    {
      type: 'text',
      left: 'center',
      top: '32%',
      style: {
        text: '100%',
        textAlign: 'center',
        fill: '#38393b',
        fontSize: 28,
        fontWeight: '700',
        fontFamily: 'Pretendard JP',
      },
    },
  ],
});
const doughnutOption3 = ref({
  tooltip: { trigger: 'item', formatter: '{b}: {c} ({d}%)' },
  legend: {
    orient: 'horizontal',
    type: 'scroll',
    itemWidth: 10,
    itemHeight: 10,
    pageIconSize: 6,
    show: true,
    bottom: 0,
  },
  series: [
    {
      name: 'Example Doughnut',
      type: 'pie',
      center: ['50%', '46%'],
      radius: ['66', '97'],
      data: [
        { value: 25, name: 'Category A' },
        { value: 25, name: 'Category B' },
        { value: 25, name: 'Category C' },
        { value: 25, name: 'Category D' },
      ],
      itemStyle: { borderColor: '#fff', borderWidth: 2 },
      label: { show: false },
    },
  ],
  graphic: [
    {
      type: 'text',
      left: 'center',
      top: '35%',
      style: {
        text: '100%',
        textAlign: 'center',
        fill: '#38393b',
        fontSize: 28,
        fontWeight: '700',
        fontFamily: 'Pretendard JP',
      },
    },
  ],
});

const pieOption = ref({
  tooltip: { trigger: 'item', formatter: '{b}: {c} ({d}%)' },
  legend: {
    show: false,
    // orient: 'horizontal',
    // type: 'scroll',
    // itemWidth: 10,
    // itemHeight: 10,
    // pageIconSize: 6,
    // bottom: 0,
  },

  series: [
    {
      name: 'Example Pie',
      type: 'pie',
      center: ['50%', '72%'],
      radius: ['70', '100'],
      startAngle: 180,
      endAngle: 360,
      data: [
        { value: 25, name: 'Category A' },
        { value: 25, name: 'Category B' },
        { value: 25, name: 'Category C' },
        { value: 25, name: 'Category D' },
      ],
      itemStyle: { borderColor: '#fff', borderWidth: 2 },
      label: { show: false },
    },
  ],
  graphic: [
    {
      type: 'text',
      left: 'center',
      top: '50%',
      style: {
        text: '88%',
        textAlign: 'center',
        fill: '#38393b',
        fontSize: 28,
        fontWeight: '700',
        fontFamily: 'Pretendard JP',
      },
    },
  ],
});

const originalData = ref([
  { value: 20, name: 'Category A' },
  { value: 30, name: 'Category B' },
  { value: 25, name: 'Category C' },
  { value: 25, name: 'Category D' },
]);
const visibility = ref([true, true, true, true]);

const doughnutLegendList = computed(() =>
  originalData.value.map((item, i) => ({
    key: String(i + 1),
    label: item.name,
    value: String(item.value),
    visible: visibility.value[i],
  }))
);

function toggleLegend(index: number) {
  visibility.value[index] = !visibility.value[index];
  doughnutOption1.value.series[0].data = originalData.value.map((item, i) => ({
    ...item,
    value: visibility.value[i] ? item.value : 0,
  }));
}

// const pieLegendList = computed(() =>
//   pieOption.value.series[0].data.map((item, i) => ({
//     key: String(i + 1),
//     label: item.name,
//     value: String(item.value),
//   }))
// );
</script>
