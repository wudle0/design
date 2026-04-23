<template>
  <TopTitle
    title="Line Chart"
    text="Line Chart는 기본 가로형 그래프로 표시할 수 있으며, 범례는 스크롤 형태 / 리스트 형태(small, medium, large) / 테이블 형태로 표시할 수 있습니다."
  />
  <!-- 범례 우측 -->
  <a-row :gutter="16">
    <a-col :span="6">
      <LineChart
        height="300px"
        :lineData="lineData1"
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
      </LineChart>
    </a-col>
    <a-col :span="6">
      <LineChart
        height="100%"
        :lineData="lineData1"
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
      </LineChart>
    </a-col>
    <a-col :span="6">
      <LineChart :lineData="lineData2" height="100%" legendSize="small">
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
      </LineChart>
    </a-col>
    <a-col :span="6">
      <LineChart
        :lineData="lineData2"
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
      </LineChart>
    </a-col>
  </a-row>
  <a-row :gutter="16" style="margin-top: 40px">
    <a-col :span="12">
      <LineChart height="200px" :lineData="lineData1" tableSize="large">
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
      </LineChart>
    </a-col>
    <a-col :span="12">
      <LineChart height="100%" :lineData="lineData1">
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
      </LineChart>
    </a-col>
  </a-row>
  <a-row :gutter="16" style="margin-top: 40px">
    <a-col :span="6">
      <LineChart
        height="300px"
        :lineData="lineData1"
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
      </LineChart>
    </a-col>
    <a-col :span="6">
      <LineChart
        height="100%"
        :lineData="lineData1"
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
      </LineChart>
    </a-col>
    <a-col :span="6">
      <LineChart
        :lineData="lineData2"
        height="100%"
        legendSize="small"
        vertical
      >
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
      </LineChart>
    </a-col>
    <a-col :span="6">
      <LineChart
        :lineData="lineData2"
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
      </LineChart>
    </a-col>
  </a-row>
  <a-row :gutter="16" style="margin-top: 40px">
    <a-col :span="12">
      <LineChart
        height="200px"
        :lineData="lineData1"
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
      </LineChart>
    </a-col>
    <a-col :span="12">
      <LineChart
        height="200px"
        :lineData="lineData1"
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
      </LineChart>
    </a-col>
  </a-row>
  <a-row :gutter="16" style="margin-top: 40px">
    <a-col :span="12">
      <LineChart height="200px" :lineData="lineData1" tableSize="large">
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
      </LineChart>
    </a-col>
    <a-col :span="12">
      <LineChart
        height="200px"
        :lineData="lineData1"
        tableSize="large"
        vertical
      >
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
      </LineChart>
    </a-col>
  </a-row>
  <a-row :gutter="16" style="margin-top: 40px">
    <a-col :span="12">
      <LineChart height="300px" :lineData="lineData1">
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
      </LineChart>
    </a-col>
    <a-col :span="12">
      <LineChart height="300px" :lineData="lineData1" vertical>
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
      </LineChart>
    </a-col>
  </a-row>

  <!-- 범례 하단 -->
  <a-row
    :gutter="16"
    style="margin-top: 60px; padding-top: 40px; border-top: 4px solid #e1e1e1"
  >
    <a-col :span="6">
      <LineChart
        :lineData="lineData2"
        height="400px"
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
                범례 : 하단 / 차트 : 가로 (small)
              </a-typography-title>
              <div class="tag-wrap">
                <a-tag class="small red">
                  <p class="tag-wrap-text">tag</p>
                </a-tag>
              </div>
            </div>
          </div>
        </template>
      </LineChart>
    </a-col>
    <a-col :span="6">
      <LineChart
        :lineData="lineData2"
        height="100%"
        legendSize="medium"
        orient="vertical"
        multiLine
      >
        <template #title>
          <div class="title-group">
            <div class="group-items">
              <Icon color="default" size="md" fill>
                <template #name>bar_chart</template>
              </Icon>
              <a-typography-title :level="3">
                범례 : 하단 / 차트 : 가로 (medium)
              </a-typography-title>
              <div class="tag-wrap">
                <a-tag class="small red">
                  <p class="tag-wrap-text">tag</p>
                </a-tag>
              </div>
            </div>
          </div>
        </template>
      </LineChart>
    </a-col>
    <a-col :span="6">
      <LineChart
        :lineData="lineData2"
        height="100%"
        legendSize="large"
        orient="vertical"
      >
        <template #title>
          <div class="title-group">
            <div class="group-items">
              <Icon color="default" size="md" fill>
                <template #name>bar_chart</template>
              </Icon>
              <a-typography-title :level="3">
                범례 : 하단 / 차트 : 가로 (large)
              </a-typography-title>
              <div class="tag-wrap">
                <a-tag class="small red">
                  <p class="tag-wrap-text">tag</p>
                </a-tag>
              </div>
            </div>
          </div>
        </template>
      </LineChart>
    </a-col>
  </a-row>
  <a-row
    :gutter="16"
    style="margin-top: 60px; padding-top: 40px; border-top: 4px solid #e1e1e1"
  >
    <a-col :span="6">
      <LineChart
        :lineData="lineData2"
        height="300px"
        legendSize="large"
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
                <a-tag class="small red">
                  <p class="tag-wrap-text">tag</p>
                </a-tag>
              </div>
            </div>
          </div>
        </template>
      </LineChart>
    </a-col>
    <a-col :span="6">
      <LineChart
        :lineData="lineData2"
        height="300px"
        legendSize="large"
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
                <a-tag class="small red">
                  <p class="tag-wrap-text">tag</p>
                </a-tag>
              </div>
            </div>
          </div>
        </template>
      </LineChart>
    </a-col>
  </a-row>
</template>

<script lang="ts" setup>
import { reactive } from 'vue';
import { TopTitle } from '@/components/layouts';
import { LineChart } from '@/components/chart';
import { Icon } from '@/components/icons';

const lineData1 = reactive({
  xAxis: ['05', '06', '07', '08', '09', '10', '11', '12', '13'],
  name: ['CPU 사용량', '메모리 사용량'],
  data: [
    [60, 30, 80, 60, 70, 30, 50, 90, 20], // CPU 사용량
    [20, 35, 25, 40, 45, 67, 34, 78, 82], // 메모리 사용량
  ],
});

const lineData2 = reactive({
  xAxis: ['05', '06', '07', '08', '09', '10', '11', '12', '13'],
  name: [
    'CPU 사용량',
    '메모리 사용량',
    'Disk IO',
    'Network In',
    'Network Out',
    'File Descriptor',
    'Thread 수',
  ],
  data: [
    [60, 30, 80, 60, 70, 30, 50, 90, 20], // CPU 사용량
    [20, 35, 25, 40, 45, 67, 34, 78, 82], // 메모리 사용량
    [18, 28, 22, 35, 31, 38, 30, 40, 33],
    [25, 30, 27, 32, 29, 34, 31, 36, 33],
    [15, 22, 18, 25, 21, 26, 23, 28, 25],
    [40, 50, 48, 55, 53, 58, 54, 60, 57],
    [65, 58, 70, 60, 75, 62, 78, 64, 80],
  ],
});
</script>
