<template>
  <TopTitle
    title="Bar Chart"
    text="Bar Chart는 세로형 그래프와 가로형 그래프를 표시할 수 있으며, 범례는 스크롤 형태 / 리스트 형태(small, medium, large) / 테이블 형태로 표시할 수 있습니다.<br/><br/> 범례 : 우측 정렬 / 하단 정렬  <br/> 차트 : 가로 정렬 / 세로 정렬"
  />

  <!-- 범례 우측 -->
  <a-row :gutter="16">
    <a-col :span="6">
      <BarChart
        height="300px"
        :barData="barData1"
        unit="단위 : Core"
        legendSize="scroll"
        orient="vertical"
      >
        <template #title>
          <div class="title-group">
            <div class="group-items">
              <Icon color="default" size="md" fill>
                <template #name>bar_chart</template>
              </Icon>
              <a-typography-title :level="3">
                범례 : 우측 / 차트 : 가로 (스크롤 리스트)
              </a-typography-title>
              <div class="tag-wrap">
                <a-tag class="small green">
                  <p class="tag-wrap-text">tag</p>
                </a-tag>
              </div>
            </div>
          </div>
        </template>
      </BarChart>
    </a-col>
    <a-col :span="6">
      <BarChart
        height="100%"
        :barData="barData1"
        unit="단위 : Core"
        legendSize="scroll"
      >
        <template #title>
          <div class="title-group">
            <div class="group-items">
              <Icon color="default" size="md" fill>
                <template #name>bar_chart</template>
              </Icon>
              <a-typography-title :level="3">
                범례 : 하단 / 차트 : 가로 (스크롤 리스트)
              </a-typography-title>
              <div class="tag-wrap">
                <a-tag class="small green">
                  <p class="tag-wrap-text">tag</p>
                </a-tag>
              </div>
            </div>
          </div>
        </template>
      </BarChart>
    </a-col>
    <a-col :span="6">
      <BarChart :barData="barData2" height="100%" legendSize="small">
        <template #title>
          <div class="title-group">
            <div class="group-items">
              <Icon color="default" size="md" fill>
                <template #name>bar_chart</template>
              </Icon>
              <a-typography-title :level="3">
                범례 : 우측 / 차트 : 가로 (커스텀 리스트)
              </a-typography-title>
              <div class="tag-wrap">
                <a-tag class="small red">
                  <p class="tag-wrap-text">tag</p>
                </a-tag>
              </div>
            </div>
          </div>
        </template>
      </BarChart>
    </a-col>
    <a-col :span="6">
      <BarChart
        :barData="barData2"
        height="100%"
        legendSize="small"
        orient="vertical"
      >
        <template #title>
          <div class="title-group">
            <div class="group-items">
              <Icon color="default" size="md" fill>
                <template #name>bar_chart</template>
              </Icon>
              <a-typography-title :level="3">
                범례 : 하단 / 차트 : 가로 (커스텀 리스트)
              </a-typography-title>
              <div class="tag-wrap">
                <a-tag class="small red">
                  <p class="tag-wrap-text">tag</p>
                </a-tag>
              </div>
            </div>
          </div>
        </template>
      </BarChart>
    </a-col>
  </a-row>
  <a-row :gutter="16" style="margin-top: 40px">
    <a-col :span="12">
      <BarChart height="200px" :barData="barData1" tableSize="large">
        <template #title>
          <div class="title-group">
            <div class="group-items">
              <Icon color="default" size="md" fill>
                <template #name>bar_chart</template>
              </Icon>
              <a-typography-title :level="3">
                범례 : 우측 (테이블 리스트) / 차트 : 가로
              </a-typography-title>
              <div class="tag-wrap">
                <a-tag class="small green">
                  <p class="tag-wrap-text">tag</p>
                </a-tag>
              </div>
            </div>
          </div>
        </template>
      </BarChart>
    </a-col>
    <a-col :span="12">
      <BarChart height="100%" :barData="barData1">
        <template #title>
          <div class="title-group">
            <div class="group-items">
              <Icon color="default" size="md" fill>
                <template #name>bar_chart</template>
              </Icon>
              <a-typography-title :level="3">
                범례 : 없음 / 차트 : 가로
              </a-typography-title>
              <div class="tag-wrap">
                <a-tag class="small green">
                  <p class="tag-wrap-text">tag</p>
                </a-tag>
              </div>
            </div>
          </div>
        </template>
      </BarChart>
    </a-col>
  </a-row>
  <a-row :gutter="16" style="margin-top: 40px">
    <a-col :span="6">
      <BarChart
        height="300px"
        :barData="barData1"
        unit="단위 : Core"
        legendSize="scroll"
        orient="vertical"
        vertical
      >
        <template #title>
          <div class="title-group">
            <div class="group-items">
              <Icon color="default" size="md" fill>
                <template #name>bar_chart</template>
              </Icon>
              <a-typography-title :level="3">
                범례 : 우측 / 차트 : 세로 (스크롤 리스트)
              </a-typography-title>
              <div class="tag-wrap">
                <a-tag class="small green">
                  <p class="tag-wrap-text">tag</p>
                </a-tag>
              </div>
            </div>
          </div>
        </template>
      </BarChart>
    </a-col>
    <a-col :span="6">
      <BarChart
        height="100%"
        :barData="barData1"
        unit="단위 : Core"
        legendSize="scroll"
        vertical
      >
        <template #title>
          <div class="title-group">
            <div class="group-items">
              <Icon color="default" size="md" fill>
                <template #name>bar_chart</template>
              </Icon>
              <a-typography-title :level="3">
                범례 : 하단 / 차트 : 세로 (스크롤 리스트)
              </a-typography-title>
              <div class="tag-wrap">
                <a-tag class="small green">
                  <p class="tag-wrap-text">tag</p>
                </a-tag>
              </div>
            </div>
          </div>
        </template>
      </BarChart>
    </a-col>
    <a-col :span="6">
      <BarChart :barData="barData2" height="100%" legendSize="small" vertical>
        <template #title>
          <div class="title-group">
            <div class="group-items">
              <Icon color="default" size="md" fill>
                <template #name>bar_chart</template>
              </Icon>
              <a-typography-title :level="3">
                범례 : 우측 / 차트 : 세로 (커스텀 리스트)
              </a-typography-title>
              <div class="tag-wrap">
                <a-tag class="small red">
                  <p class="tag-wrap-text">tag</p>
                </a-tag>
              </div>
            </div>
          </div>
        </template>
      </BarChart>
    </a-col>
    <a-col :span="6">
      <BarChart
        :barData="barData2"
        height="100%"
        legendSize="small"
        vertical
        orient="vertical"
      >
        <template #title>
          <div class="title-group">
            <div class="group-items">
              <Icon color="default" size="md" fill>
                <template #name>bar_chart</template>
              </Icon>
              <a-typography-title :level="3">
                범례 : 하단 / 차트 : 세로 (커스텀 리스트)
              </a-typography-title>
              <div class="tag-wrap">
                <a-tag class="small red">
                  <p class="tag-wrap-text">tag</p>
                </a-tag>
              </div>
            </div>
          </div>
        </template>
      </BarChart>
    </a-col>
  </a-row>
  <a-row :gutter="16" style="margin-top: 40px">
    <a-col :span="12">
      <BarChart
        height="200px"
        :barData="barData1"
        tableSize="large"
        orient="vertical"
      >
        <template #title>
          <div class="title-group">
            <div class="group-items">
              <Icon color="default" size="md" fill>
                <template #name>bar_chart</template>
              </Icon>
              <a-typography-title :level="3">
                범례 : 하단 (테이블 리스트) / 차트 : 가로
              </a-typography-title>
              <div class="tag-wrap">
                <a-tag class="small green">
                  <p class="tag-wrap-text">tag</p>
                </a-tag>
              </div>
            </div>
          </div>
        </template>
      </BarChart>
    </a-col>
    <a-col :span="12">
      <BarChart
        height="200px"
        :barData="barData1"
        tableSize="large"
        orient="vertical"
        vertical
      >
        <template #title>
          <div class="title-group">
            <div class="group-items">
              <Icon color="default" size="md" fill>
                <template #name>bar_chart</template>
              </Icon>
              <a-typography-title :level="3">
                범례 : 하단 (테이블 리스트) / 차트 : 세로
              </a-typography-title>
              <div class="tag-wrap">
                <a-tag class="small green">
                  <p class="tag-wrap-text">tag</p>
                </a-tag>
              </div>
            </div>
          </div>
        </template>
      </BarChart>
    </a-col>
  </a-row>
  <a-row :gutter="16" style="margin-top: 40px">
    <a-col :span="12">
      <BarChart height="200px" :barData="barData1" tableSize="large">
        <template #title>
          <div class="title-group">
            <div class="group-items">
              <Icon color="default" size="md" fill>
                <template #name>bar_chart</template>
              </Icon>
              <a-typography-title :level="3">
                범례 : 우측 (테이블 리스트) / 차트 : 가로
              </a-typography-title>
              <div class="tag-wrap">
                <a-tag class="small green">
                  <p class="tag-wrap-text">tag</p>
                </a-tag>
              </div>
            </div>
          </div>
        </template>
      </BarChart>
    </a-col>
    <a-col :span="12">
      <BarChart height="200px" :barData="barData1" tableSize="large" vertical>
        <template #title>
          <div class="title-group">
            <div class="group-items">
              <Icon color="default" size="md" fill>
                <template #name>bar_chart</template>
              </Icon>
              <a-typography-title :level="3">
                범례 : 우측 (테이블 리스트) / 차트 : 세로
              </a-typography-title>
              <div class="tag-wrap">
                <a-tag class="small green">
                  <p class="tag-wrap-text">tag</p>
                </a-tag>
              </div>
            </div>
          </div>
        </template>
      </BarChart>
    </a-col>
  </a-row>
  <a-row :gutter="16" style="margin-top: 40px">
    <a-col :span="12">
      <BarChart height="300px" :barData="barData1">
        <template #title>
          <div class="title-group">
            <div class="group-items">
              <Icon color="default" size="md" fill>
                <template #name>bar_chart</template>
              </Icon>
              <a-typography-title :level="3">
                범례 : 없음 / 차트 : 가로
              </a-typography-title>
              <div class="tag-wrap">
                <a-tag class="small green">
                  <p class="tag-wrap-text">tag</p>
                </a-tag>
              </div>
            </div>
          </div>
        </template>
      </BarChart>
    </a-col>
    <a-col :span="12">
      <BarChart height="300px" :barData="barData1" vertical>
        <template #title>
          <div class="title-group">
            <div class="group-items">
              <Icon color="default" size="md" fill>
                <template #name>bar_chart</template>
              </Icon>
              <a-typography-title :level="3">
                범례 : 없음 / 차트 : 세로
              </a-typography-title>
              <div class="tag-wrap">
                <a-tag class="small green">
                  <p class="tag-wrap-text">tag</p>
                </a-tag>
              </div>
            </div>
          </div>
        </template>
      </BarChart>
    </a-col>
  </a-row>

  <!-- 범례 하단 -->
  <a-row
    :gutter="16"
    style="margin-top: 60px; padding-top: 40px; border-top: 4px solid #e1e1e1"
  >
    <a-col :span="12">
      <BarChart
        :barData="barData2"
        height="800px"
        legendSize="small"
        orient="vertical"
        chartType="group"
      >
        <template #title>
          <div class="title-group">
            <div class="group-items">
              <Icon color="default" size="md" fill>
                <template #name>bar_chart</template>
              </Icon>
              <a-typography-title :level="3">
                범례 : 하단 / 차트 : 가로 (small) 그룹형
              </a-typography-title>
              <div class="tag-wrap">
                <a-tag class="small red">
                  <p class="tag-wrap-text">tag</p>
                </a-tag>
              </div>
            </div>
          </div>
        </template>
      </BarChart>
    </a-col>
    <a-col :span="12">
      <BarChart
        height="300px"
        :barData="barData2"
        unit="단위 : Core"
        legendSize="scroll"
        orient="vertical"
        vertical
        chartType="group"
      >
        <template #title>
          <div class="title-group">
            <div class="group-items">
              <Icon color="default" size="md" fill>
                <template #name>bar_chart</template>
              </Icon>
              <a-typography-title :level="3">
                범례 : 우측 / 차트 : 세로 (스크롤 리스트) 그룹형
              </a-typography-title>
              <div class="tag-wrap">
                <a-tag class="small green">
                  <p class="tag-wrap-text">tag</p>
                </a-tag>
              </div>
            </div>
          </div>
        </template>
      </BarChart>
    </a-col>
  </a-row>
  <a-row :gutter="16" style="margin-top: 40px">
    <a-col :span="6">
      <BarChart
        height="300px"
        :barData="barData3"
        unit="단위 : Core"
        legendSize="scroll"
        orient="vertical"
      >
        <template #title>
          <div class="title-group">
            <div class="group-items">
              <Icon color="default" size="md" fill>
                <template #name>bar_chart</template>
              </Icon>
              <a-typography-title :level="3">
                데이터가 그룹이 아닐 때
              </a-typography-title>
              <div class="tag-wrap">
                <a-tag class="small green">
                  <p class="tag-wrap-text">tag</p>
                </a-tag>
              </div>
            </div>
          </div>
        </template>
      </BarChart>
    </a-col>
    <a-col :span="6">
      <a-card size="small" :bordered="true" class="chart-card">
        <template #title>
          <div class="title-group">
            <div class="group-items">
              <a-typography-title :level="3" class="item-title">
                <BasicEllipsisText text="읽기 전용 테이블 사용 시" />
              </a-typography-title>
            </div>
          </div>
        </template>
        <a-flex vertical>
          <BarChart height="180px" :barData="barData3" />
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
    <a-col :span="6">
      <BarChart
        height="300px"
        :barData="barData3"
        unit="단위 : Core"
        legendSize="scroll"
        orient="vertical"
        hideXAxis
      >
        <template #title>
          <div class="title-group">
            <div class="group-items">
              <Icon color="default" size="md" fill>
                <template #name>bar_chart</template>
              </Icon>
              <a-typography-title :level="3"> xAxis 숨김 </a-typography-title>
              <div class="tag-wrap">
                <a-tag class="small green">
                  <p class="tag-wrap-text">tag</p>
                </a-tag>
              </div>
            </div>
          </div>
        </template>
      </BarChart>
    </a-col>
    <a-col :span="6">
      <BarChart
        height="300px"
        :barData="barData3"
        unit="단위 : Core"
        legendSize="scroll"
        orient="vertical"
        hideYAxis
      >
        <template #title>
          <div class="title-group">
            <div class="group-items">
              <Icon color="default" size="md" fill>
                <template #name>bar_chart</template>
              </Icon>
              <a-typography-title :level="3"> yAxis 숨김 </a-typography-title>
              <div class="tag-wrap">
                <a-tag class="small green">
                  <p class="tag-wrap-text">tag</p>
                </a-tag>
              </div>
            </div>
          </div>
        </template>
      </BarChart>
    </a-col>
  </a-row>
  <a-row :gutter="16" style="margin-top: 40px">
    <a-col :span="12">
      <a-card size="small" class="traffic-bar-chart">
        <template #title>
          <a-flex gap="16">
            <template
              v-for="(statusName, index) in trafficBarData.name"
              :key="index"
            >
              <a-flex vertical gap="4">
                <a-typography-text class="typography-label-4">
                  {{ statusName }}
                </a-typography-text>
                <a-flex gap="4">
                  <a-tag
                    class="traffic"
                    :style="{
                      '--tag-traffic-color':
                        defaultChartColors[index % defaultChartColors.length],
                    }"
                  >
                    <p class="tag-wrap-text">
                      {{ trafficBarData.legendValues[index] }}
                    </p>
                  </a-tag>
                </a-flex>
              </a-flex>
              <a-divider
                v-if="index < trafficBarData.name.length - 1"
                type="vertical"
                class="status-divider"
              />
            </template>
          </a-flex>
        </template>
        <BarChart
          :barData="trafficBarData"
          height="25px"
          :bordered="false"
          :hideAxis="true"
          :trafficTooltip="true"
          :customGrid="{
            left: 16,
            right: 16,
            top: 0,
            bottom: 13,
            containLabel: false,
          }"
        />
      </a-card>
    </a-col>
  </a-row>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue';
import { TopTitle, BasicEllipsisText } from '@/components/layouts';
import { BarChart } from '@/components/chart';
import { Table } from '@/components/table';
import { Icon } from '@/components/icons';

function makeTrafficBarData() {
  const baseName = 'VM-NameVM-NameVM-NameVM-NameVM-NameVM-NameVM-NameVM-Name';
  const names = Array.from({ length: 5 }, (_, i) => `${baseName}-${i + 1}`);
  const value = 1000;
  const values = Array(5).fill(value);
  return {
    xAxis: ['HA'],
    name: names,
    data: values.map((v) => [v]),
    legendValues: values,
  };
}

const trafficBarData = reactive(makeTrafficBarData());

// ECharts 테마 색상 배열
const defaultChartColors = [
  'var(--chart-default-01)',
  'var(--chart-default-02)',
  'var(--chart-default-03)',
  'var(--chart-default-04)',
  'var(--chart-default-05)',
];

const barData1 = reactive({
  xAxis: ['A', 'B', 'C'],
  name: ['Legend 1', 'Legend 2', 'Legend 3', 'Legend 4', 'Legend 5'],
  data: [
    [12, 20, 10],
    [15, 25, 8],
    [10, 18, 12],
    [8, 22, 15],
    [20, 16, 9],
  ],
});

const barData2 = reactive({
  xAxis: ['A', 'B', 'C'],
  name: [
    'Legend 1',
    'Legend 2',
    'Legend 3',
    'Legend 4',
    'Legend 5',
    'Legend 6',
    'Legend 7',
    'Legend 8',
    'Legend 9',
  ],
  data: [
    [12, 20, 10],
    [15, 25, 8],
    [10, 18, 12],
    [8, 22, 15],
    [20, 16, 9],
    [20, 16, 9],
    [20, 16, 9],
    [20, 16, 9],
    [20, 16, 9],
  ],
});

const barData3 = reactive({
  xAxis: ['A', 'B', 'C'],
  name: ['Legend 1', 'Legend 2', 'Legend 3'],
  data: [1, 2, 3],
});

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
</script>
