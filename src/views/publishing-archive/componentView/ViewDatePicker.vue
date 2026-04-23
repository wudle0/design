<template>
  <TopTitle
    title="DatePicker"
    text="날짜선택 컴포넌트는 사용자가 표준화되고 직관적인 방식으로 날짜를 선택하고, 경우에 따라 시간을 선택할 수 있습니다.
Preset: 좌측에 위치하며, 날짜 선택의 편의성을 위해 자주 사용하는 기간을 제공되며 선택 영역 입니다.
DatePicker: 날짜 선택 영역으로 년, 월, 일 또는 기간을 선택할 수 있는 캘린더 형태의 컴포넌트 입니다."
  />

  <a-flex gap="32" vertical>
    <a-flex gap="4" vertical>
      <h2 class="ant-typography">기본 DatePicker</h2>
      <a-date-picker format="YYYY-MM-DD">
        <template #suffixIcon>
          <Icon size="md" color="default">
            <template #name>calendar_month</template>
          </Icon>
        </template>
      </a-date-picker></a-flex
    >

    <a-flex gap="4" vertical>
      <h2 class="ant-typography">YearMonth</h2>
      <a-date-picker picker="month">
        <template #suffixIcon>
          <Icon size="md" color="default">
            <template #name>calendar_month</template>
          </Icon>
        </template>
      </a-date-picker>
    </a-flex>

    <a-flex gap="4" vertical>
      <h2 class="ant-typography">Date-time</h2>
      <a-range-picker format="YYYY-MM-DD HH:mm:ss" show-time>
        <template #suffixIcon>
          <Icon size="md" color="default">
            <template #name>calendar_month</template>
          </Icon>
        </template>
      </a-range-picker>
    </a-flex>

    <a-flex gap="4" vertical>
      <h2 class="ant-typography">Date-duration</h2>
      <div class="ant-picker-container is-include-label">
        <label class="floating-label">라벨 위치</label>
        <a-range-picker format="YYYY-MM-DD" class="custom-outline-picker">
          <template #suffixIcon>
            <Icon size="md" color="default">
              <template #name>calendar_month</template>
            </Icon>
          </template>
        </a-range-picker>
      </div>
    </a-flex>

    <a-flex gap="4" vertical>
      <h2 class="ant-typography">Preset</h2>
      <a-date-picker :presets="presets" format="YYYY-MM-DD HH:mm:ss" show-time>
        <template #suffixIcon>
          <Icon size="md" color="default">
            <template #name>calendar_month</template>
          </Icon>
        </template>
      </a-date-picker>
    </a-flex>
  </a-flex>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import dayjs from 'dayjs';
import { Icon } from '@/components/icons';
import { TopTitle } from '@/components/layouts';

const type = ref<any>('time');

const presets = ref([
  { label: 'Preset-01', value: dayjs().add(-1, 'd') },
  { label: 'Preset-02', value: dayjs().add(-7, 'd') },
  { label: 'Preset-03', value: dayjs().add(-1, 'month') },
]);
</script>
