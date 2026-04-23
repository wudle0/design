<template>
  <TopTitle
    title="Pie Chart"
    text="Pie Chart는 다양한 범례 형태(스크롤, 리스트, 테이블)를 표시할 수 있습니다.<br/> 사이즈는 props에 pieRadius 디자인 피그마에 있는 크기 반으로 나눈 사이즈 삽입 "
  />

  <!-- 범례 없음 -->
  <a-row :gutter="16">
    <a-col :span="6">
      <PieChart height="248px" :pieData="pieData1" :pieRadius="'108px'">
        <template #title>
          <div class="title-group">
            <div class="group-items">
              <Icon color="default" size="md" fill>
                <template #name>pie_chart</template>
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
      </PieChart>
    </a-col>
    <a-col :span="6">
      <PieChart
        height="248px"
        :pieData="pieData1"
        legendSize="scroll"
        :pieCenter="['50%', '47%']"
        :pieRadius="'66px'"
      >
        <template #title>
          <div class="title-group">
            <div class="group-items">
              <Icon color="default" size="md" fill>
                <template #name>pie_chart</template>
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
      </PieChart>
    </a-col>
  </a-row>
  <a-row :gutter="16" style="margin-top: 40px">
    <a-col :span="6">
      <PieChart height="360px" :pieData="pieData1" :pieRadius="'100px'">
        <template #title>
          <div class="title-group">
            <div class="group-items">
              <Icon color="default" size="md" fill>
                <template #name>pie_chart</template>
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
      </PieChart>
    </a-col>
  </a-row>
  <a-row :gutter="16" style="margin-top: 40px">
    <a-col :span="6">
      <PieChart
        height="300px"
        :pieData="pieData1"
        legendSize="scroll"
        orient="vertical"
        :pieRadius="'68px'"
      >
        <template #title>
          <div class="title-group">
            <div class="group-items">
              <Icon color="default" size="md" fill>
                <template #name>pie_chart</template>
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
      </PieChart>
    </a-col>
    <a-col :span="6">
      <PieChart
        height="100%"
        :pieData="pieData1"
        unit="단위 : %"
        legendSize="scroll"
        :pieRadius="'66px'"
      >
        <template #title>
          <div class="title-group">
            <div class="group-items">
              <Icon color="default" size="md" fill>
                <template #name>pie_chart</template>
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
      </PieChart>
    </a-col>
    <a-col :span="6">
      <PieChart :pieData="pieData2" height="100%" legendSize="small">
        <template #title>
          <div class="title-group">
            <div class="group-items">
              <Icon color="default" size="md" fill>
                <template #name>pie_chart</template>
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
      </PieChart>
    </a-col>
    <a-col :span="6">
      <PieChart
        :pieData="pieData2"
        height="100%"
        legendSize="small"
        orient="vertical"
      >
        <template #title>
          <div class="title-group">
            <div class="group-items">
              <Icon color="default" size="md" fill>
                <template #name>pie_chart</template>
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
      </PieChart>
    </a-col>
  </a-row>
  <a-row :gutter="16" style="margin-top: 40px">
    <a-col :span="12">
      <PieChart :pieData="pieData1" height="200px" tableSize="large">
        <template #title>
          <div class="title-group">
            <div class="group-items">
              <Icon color="default" size="md" fill>
                <template #name>pie_chart</template>
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
      </PieChart>
    </a-col>
    <a-col :span="12">
      <PieChart :pieData="pieData1" height="100%">
        <template #title>
          <div class="title-group">
            <div class="group-items">
              <Icon color="default" size="md" fill>
                <template #name>pie_chart</template>
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
      </PieChart>
    </a-col>
  </a-row>
  <a-row :gutter="16" style="margin-top: 40px">
    <a-col :span="12">
      <PieChart :pieData="pieData3" height="300px" legendSize="small">
        <template #title>
          <div class="title-group">
            <div class="group-items">
              <Icon color="default" size="md" fill>
                <template #name>pie_chart</template>
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
      </PieChart>
    </a-col>
  </a-row>
</template>

<script lang="ts" setup>
import { reactive } from 'vue';
import { TopTitle } from '@/components/layouts';
import { PieChart } from '@/components/chart';
import { Icon } from '@/components/icons';

const pieData1 = reactive({
  name: ['Category A', 'Category B', 'Category C', 'Category D', 'Category E'],
  data: [12, 15, 10, 8, 20],
});

const pieData2 = reactive({
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

const pieData3 = reactive({
  name: ['Category X', 'Category Y', 'Category Z'],
  data: [50, 30, 20],
});
</script>
