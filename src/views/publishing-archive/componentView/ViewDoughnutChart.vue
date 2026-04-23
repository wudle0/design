<template>
  <TopTitle
    title="Doughnut Chart"
    text="Doughnut Chart는 다양한 범례 형태(스크롤, 리스트, 테이블)를 표시할 수 있습니다.<br/> 도넛 사이즈는 props에 pieRadius 디자인 피그마에 있는 크기 반으로 나눈 사이즈 넣고 왼쪽은 그 사이즈의 -30px 삽입 / 작은 사이즈는 -20px"
  />

  <!-- 범례 없음 -->
  <a-row :gutter="16">
    <a-col :span="6">
      <DoughnutChart
        height="248px"
        :doughnutData="doughnutData1"
        graphicTextPosition="33%"
        graphicTextContent="58%"
        graphicTextSize="lg"
        :pieRadius="['86px', '116px']"
        :centerFirstValue="9"
        centerFirstValueUnit="MiB"
        :centerSecondaryValue="100"
        centerSecondaryValueUnit="MiB"
      >
        <template #title>
          <div class="title-group">
            <div class="group-items">
              <Icon color="default" size="md" fill>
                <template #name>donut_large</template>
              </Icon>
              <a-typography-title :level="3"> 범례 : 없음 </a-typography-title>
              <div class="tag-wrap">
                <a-tag class="small green">
                  <p class="tag-wrap-text">tag</p>
                </a-tag>
              </div>
            </div>
          </div>
        </template>
      </DoughnutChart>
    </a-col>
    <a-col :span="6">
      <DoughnutChart
        height="248px"
        :doughnutData="doughnutData1"
        legendSize="scroll"
        :showCenterValues="false"
        graphicTextPosition="43%"
        :pieRadius="['46px', '66px']"
      >
        <template #title>
          <div class="title-group">
            <div class="group-items">
              <Icon color="default" size="md" fill>
                <template #name>donut_large</template>
              </Icon>
              <a-typography-title :level="3"> 범례 : 있음 </a-typography-title>
              <div class="tag-wrap">
                <a-tag class="small green">
                  <p class="tag-wrap-text">tag</p>
                </a-tag>
              </div>
            </div>
          </div>
        </template>
      </DoughnutChart>
    </a-col>

    <a-col :span="6">
      <DoughnutChart
        height="248px"
        :doughnutData="doughnutData1"
        :showGraphic="false"
        :showCenterValues="false"
        :pieRadius="['86px', '116px']"
      >
        <template #title>
          <div class="title-group">
            <div class="group-items">
              <Icon color="default" size="md" fill>
                <template #name>donut_large</template>
              </Icon>
              <a-typography-title :level="3">
                가운데 텍스트 노출 false
              </a-typography-title>
              <div class="tag-wrap">
                <a-tag class="small green">
                  <p class="tag-wrap-text">tag</p>
                </a-tag>
              </div>
            </div>
          </div>
        </template>
      </DoughnutChart>
    </a-col>
    <a-col :span="6">
      <DoughnutChart
        height="100%"
        :doughnutData="doughnutData3"
        :showGraphic="true"
        :showCenterValues="true"
        graphicTextPosition="42%"
        graphicTextContent="98%"
        graphicTextSize="md"
        :pieCenter="['50%', '67%']"
        :pieRadius="['86px', '116px']"
        :startAngle="180"
        :endAngle="360"
        chartListTop="30px"
      >
        <template #title>
          <div class="title-group">
            <div class="group-items">
              <Icon color="default" size="md" fill>
                <template #name>donut_large</template>
              </Icon>
              <a-typography-title :level="3">
                반원 도넛 차트
              </a-typography-title>
              <div class="tag-wrap">
                <a-tag class="small green">
                  <p class="tag-wrap-text">tag</p>
                </a-tag>
              </div>
            </div>
          </div>
        </template>
      </DoughnutChart>
    </a-col>
  </a-row>
  <a-row :gutter="16" style="margin-top: 40px">
    <a-col :span="6">
      <DoughnutChart
        height="360px"
        :doughnutData="doughnutData1"
        :pieRadius="['36%', '50%']"
        graphicTextPosition="40%"
      >
        <template #title>
          <div class="title-group">
            <div class="group-items">
              <Icon color="default" size="md" fill>
                <template #name>donut_large</template>
              </Icon>
              <a-typography-title :level="3">
                범례 : 없고 위아래 여백 길 때
              </a-typography-title>
              <div class="tag-wrap">
                <a-tag class="small green">
                  <p class="tag-wrap-text">tag</p>
                </a-tag>
              </div>
            </div>
          </div>
        </template>
      </DoughnutChart>
    </a-col>
  </a-row>
  <a-row :gutter="16" style="margin-top: 40px">
    <a-col :span="6">
      <DoughnutChart
        height="300px"
        :doughnutData="doughnutData1"
        legendSize="scroll"
        orient="vertical"
        :showCenterValues="false"
        graphicTextPosition="45%"
        :pieRadius="['46px', '66px']"
      >
        <template #title>
          <div class="title-group">
            <div class="group-items">
              <Icon color="default" size="md" fill>
                <template #name>donut_large</template>
              </Icon>
              <a-typography-title :level="3">
                범례 : 우측 (스크롤 리스트)
              </a-typography-title>
              <div class="tag-wrap">
                <a-tag class="small green">
                  <p class="tag-wrap-text">tag</p>
                </a-tag>
              </div>
            </div>
          </div>
        </template>
      </DoughnutChart>
    </a-col>
    <a-col :span="6">
      <DoughnutChart
        height="100%"
        :doughnutData="doughnutData1"
        unit="단위 : Core"
        legendSize="scroll"
        :pieRadius="['31px', '51px']"
        graphicTextSize="sm"
        graphicTextPosition="48%"
        :showCenterValues="false"
      >
        <template #title>
          <div class="title-group">
            <div class="group-items">
              <Icon color="default" size="md" fill>
                <template #name>donut_large</template>
              </Icon>
              <a-typography-title :level="3">
                범례 : 하단 (스크롤 리스트)
              </a-typography-title>
              <div class="tag-wrap">
                <a-tag class="small green">
                  <p class="tag-wrap-text">tag</p>
                </a-tag>
              </div>
            </div>
          </div>
        </template>
      </DoughnutChart>
    </a-col>
    <a-col :span="6">
      <DoughnutChart
        :doughnutData="doughnutData2"
        height="100%"
        legendSize="small"
        graphicTextPosition="40%"
      >
        <template #title>
          <div class="title-group">
            <div class="group-items">
              <Icon color="default" size="md" fill>
                <template #name>donut_large</template>
              </Icon>
              <a-typography-title :level="3">
                범례 : 우측 (커스텀 리스트)
              </a-typography-title>
              <div class="tag-wrap">
                <a-tag class="small red">
                  <p class="tag-wrap-text">tag</p>
                </a-tag>
              </div>
            </div>
          </div>
        </template>
      </DoughnutChart>
    </a-col>
    <a-col :span="6">
      <DoughnutChart
        :doughnutData="doughnutData2"
        height="100%"
        legendSize="small"
        orient="vertical"
      >
        <template #title>
          <div class="title-group">
            <div class="group-items">
              <Icon color="default" size="md" fill>
                <template #name>donut_large</template>
              </Icon>
              <a-typography-title :level="3">
                범례 : 하단 (커스텀 리스트)
              </a-typography-title>
              <div class="tag-wrap">
                <a-tag class="small red">
                  <p class="tag-wrap-text">tag</p>
                </a-tag>
              </div>
            </div>
          </div>
        </template>
      </DoughnutChart>
    </a-col>
  </a-row>
  <a-row :gutter="16" style="margin-top: 40px">
    <a-col :span="12">
      <DoughnutChart
        :doughnutData="doughnutData1"
        height="200px"
        tableSize="large"
      >
        <template #title>
          <div class="title-group">
            <div class="group-items">
              <Icon color="default" size="md" fill>
                <template #name>donut_large</template>
              </Icon>
              <a-typography-title :level="3">
                범례 : 우측 (테이블 리스트)
              </a-typography-title>
              <div class="tag-wrap">
                <a-tag class="small green">
                  <p class="tag-wrap-text">tag</p>
                </a-tag>
              </div>
            </div>
          </div>
        </template>
      </DoughnutChart>
    </a-col>
    <a-col :span="12">
      <DoughnutChart :doughnutData="doughnutData1" height="100%">
        <template #title>
          <div class="title-group">
            <div class="group-items">
              <Icon color="default" size="md" fill>
                <template #name>donut_large</template>
              </Icon>
              <a-typography-title :level="3"> 범례 : 없음 </a-typography-title>
              <div class="tag-wrap">
                <a-tag class="small green">
                  <p class="tag-wrap-text">tag</p>
                </a-tag>
              </div>
            </div>
          </div>
        </template>
      </DoughnutChart>
    </a-col>
  </a-row>
  <a-row :gutter="16" style="margin-top: 40px">
    <a-col :span="12">
      <DoughnutChart
        :doughnutData="doughnutData3"
        height="300px"
        legendSize="small"
      >
        <template #title>
          <div class="title-group">
            <div class="group-items">
              <Icon color="default" size="md" fill>
                <template #name>donut_large</template>
              </Icon>
              <a-typography-title :level="3">
                범례 : 우측 (커스텀 리스트)
              </a-typography-title>
              <div class="tag-wrap">
                <a-tag class="small red">
                  <p class="tag-wrap-text">tag</p>
                </a-tag>
              </div>
            </div>
          </div>
        </template>
      </DoughnutChart>
    </a-col>
  </a-row>
</template>

<script lang="ts" setup>
import { reactive } from 'vue';
import { TopTitle } from '@/components/layouts';
import { DoughnutChart } from '@/components/chart';
import { Icon } from '@/components/icons';

const doughnutData1 = reactive({
  name: ['Category A', 'Category B', 'Category C', 'Category D', 'Category E'],
  data: [12, 15, 10, 8, 20],
});

const doughnutData2 = reactive({
  name: [
    'Category 1',
    'Category 2',
    'Category 3',
    'Category 4',
    'Category 5',
    'Category 6',
    'Category 7',
    'Category 8',
    'Category 9',
  ],
  data: [12, 15, 10, 8, 20, 16, 9, 22, 18],
});

const doughnutData3 = reactive({
  name: ['Category X', 'Category Y', 'Category Z'],
  data: [50, 30, 20],
});
</script>
