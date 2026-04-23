<template>
  <div class="page-container">
    <div class="main-panel">
      <div class="panel-header">
        <BasicTitle
          level="panel"
          title="차트 예시"
          :backbutton="true"
          :tooltip="{ title: '툴팁 예시', icon: 'info' }"
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
                <!-- ✅ Pie Chart -->
                <a-col :span="6">
                  <a-card :bordered="true">
                    <template #title>
                      <div class="title-group">
                        <div class="group-items">
                          <Icon color="default" size="md" fill>
                            <template #name>pie_chart</template>
                          </Icon>
                          <a-typography-title :level="3">
                            Pie Chart
                          </a-typography-title>
                          <div class="tag-wrap">
                            <a-tag class="green small">
                              <p class="tag-wrap-text">PIE</p>
                            </a-tag>
                          </div>
                        </div>
                      </div>
                    </template>
                    <a-flex vertical>
                      <Echart
                        :chart-data="charts.pie.option.value"
                        style="height: 208px"
                        :unit="'단위 : %'"
                      />
                      <ChartLegend
                        :lists="[pieLegendList]"
                        size="medium"
                        @clickLegendItem="
                          (index: number) => toggleLegend('pie', index)
                        "
                      />
                    </a-flex>
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
import { ref, computed, Ref } from 'vue';
import { BasicTitle } from '@/components/layouts';
import { Icon } from '@/components/icons';
import { Echart, ChartLegend } from '@/components/chart';

interface PieDataItem {
  name: string;
  value: number;
}

interface ChartConfig<T> {
  option: Ref<any>;
  originalData: Ref<T[]>;
  visibility: Ref<boolean[]>;
}

const charts: Record<'pie', ChartConfig<PieDataItem>> = {
  pie: {
    option: ref({
      tooltip: { trigger: 'item', formatter: '{b}: {c} ({d}%)' },
      legend: { show: false },
      series: [
        {
          name: 'Example Pie',
          type: 'pie',
          radius: '60%',
          data: [
            { value: 40, name: 'Category A' },
            { value: 25, name: 'Category B' },
            { value: 20, name: 'Category C' },
            { value: 15, name: 'Category D' },
          ],
          itemStyle: { borderColor: '#fff', borderWidth: 2 },
          label: { show: false },
        },
      ],
    }),
    originalData: ref([]),
    visibility: ref([]),
  },
};

// 초기 originalData 및 visibility 설정
const chart = charts.pie;
chart.originalData.value = chart.option.value.series[0].data.map((item) => ({
  ...item,
}));
chart.visibility.value = chart.originalData.value.map(() => true);

const pieLegendList = computed(() =>
  chart.originalData.value.map((item, i) => ({
    key: String(i + 1),
    label: item.name,
    value: String(item.value),
    visible: chart.visibility.value[i],
  }))
);

function toggleLegend(chartType: 'pie', index: number) {
  const chart = charts[chartType];
  chart.visibility.value[index] = !chart.visibility.value[index];
  chart.option.value.series[0].data = chart.originalData.value.map(
    (item, i) => ({
      ...item,
      value: chart.visibility.value[i] ? item.value : 0,
    })
  );
}
</script>
