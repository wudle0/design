<template>
  <TopTitle
    title="스텝 (custom-step)"
    text="진행 상황과 위치를 알 수 있으며, 이동이 가능한 구간에 대해 클릭 이벤트를 제공합니다.
    각각의 스텝은 최소 너비값을 갖고 있는 반응형 컨테이너로 부모 컨테이너가 데이터 개수 최소 너비값 초과 시 스크롤됩니다.
    
    스텝은 브라우저 너비 1440 미만일 경우 가로(horizon) 형태로 노출됩니다."
  />
  <Step :steps="steps" :current="0" />
  <a-divider style="margin: 20px 0" />
  <TopTitle
    title="스텝 (custom-step) read-only"
    text="스텝 이동 불가한 케이스로 진행 상황에 대해 읽기만 가능하며, 화살표 아이콘이 제거됩니다."
  />

  <Step :steps="steps2" readonly :current="2" />
</template>
<script lang="ts" setup>
import { Icon } from '@/components/icons';
import { TopTitle } from '@/components/layouts';
import { Step } from '@/components/step';

// Step 컴포넌트는 descriptipon 데이터 포함 여부와 관계없이 노출되지 않음
const steps = [
  { title: 'step name', status: 'finish' },
  { title: 'step name', status: 'error' },
  { title: 'step name', status: 'process' },
  {
    title: 'step name step name step name step name step name',
    status: 'wait',
    description:
      'description description description description description description description description description description description description description description description',
  },
  {
    title: 'step name',
    status: 'wait',
    description: 'description',
  },
  {
    title: 'step name',
    status: 'wait',
    description: 'description',
  },
  {
    title: 'step name',
    status: 'wait',
    description: 'description',
  },
  {
    title: 'step name',
    status: 'wait',
    description: 'description',
  },
  { title: 'wait', status: 'wait' },
];
const steps2 = [
  { title: 'step name', status: 'finish', description: 'description ' },
  { title: 'step name', status: 'error', description: 'description' },
  {
    title: 'step name step name step name step name step name',
    status: 'wait',
    description: 'description description description description description',
  },
  { title: 'wait', status: 'wait' },
];
</script>
