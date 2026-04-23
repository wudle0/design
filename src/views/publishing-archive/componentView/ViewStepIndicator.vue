<template>
  <TopTitle
    title="스텝 인디케이터 (custom-step-indicator)"
    text="Step과 달리 클릭 이벤트가 별도로 존재하지 않으며 디스크립션이 추가로 제공됩니다.
    각각의 스텝은 최소 너비값을 갖고 있는 반응형 컨테이너로 부모 컨테이너가 데이터 개수 최소 너비값 초과 시 스크롤됩니다.
    
    스텝 인디게이터는 브라우저 너비과 별개로 기본으로 vertical 형태를 제공하며,
    horizon=true 일 경우 가로 형태로 노출됩니다."
  />
  <StepIndicator :steps="steps" :current="0" />
  <a-divider style="margin: 20px 0" />
  <StepIndicator :steps="steps2" horizon :current="2" />
</template>
<script lang="ts" setup>
import { TopTitle } from '@/components/layouts';
import { StepIndicator } from '@/components/step';

const steps = [
  { title: 'step name', status: 'process', description: 'description ' },
  { title: 'step name', status: 'wait', description: 'description' },
  { title: 'step name', status: 'wait', description: 'description' },
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
