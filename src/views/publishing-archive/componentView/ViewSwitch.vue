<template>
  <TopTitle
    title="Switch"
    text="switch는 단일 선택 옵션의 상태를 즉각 전환할 수 있는 제어 인터페이스입니다.
    라벨을 좌측 또는 우측, 혹은 양쪽에 배치할 수 있습니다.
특히 On/Off, 활성화/비활성화처럼 상태를 명확하게 전달해야 하는 경우, 좌/우 라벨을 동시에 사용하는 방식이 유용합니다.
또한, 정보 구성 방식에 따라 라벨을 스위치 상단에 위치할 수 있으며, 이 경우에는 토글 단독 사용이 가능합니다. 단, 라벨 없이 스위치를 단독으로 사용하는 것을 불가합니다."
  />
  <a-form autocomplete="off" layout="vertical" style="gap: 32px">
    <a-form-item
      :rules="[{ required: false }]"
      validate-status="error"
      label="switch"
    >
      <!--ant-switch-text 들어갈 시 a-flex gap=6, align="center" 필수! -->
      <a-flex gap="6" align="center">
        <a-switch v-model:checked="formState.switched" />
        <span class="ant-switch-text">Label</span>
      </a-flex>
    </a-form-item>
    <a-form-item :rules="[{ required: true }]" label="알림 상태 (small 사이즈)">
      <!--ant-switch-text 들어갈 시 a-flex gap=6 필수! -->
      <a-flex gap="6" align="center">
        <span class="ant-switch-text">On</span>
        <a-switch v-model:checked="formState.switched" size="small" />
        <span class="ant-switch-text">Off</span>
      </a-flex>
    </a-form-item>

    <!-- 삭제 -->
    <!-- <a-form-item :rules="[{ required: false }]" label="Icon">
      <template #help>
        <p class="helper">
          토글 내 아이콘은 기본 사이즈에만 사용 가능하며 선택적으로 사용됩니다.
        </p>
      </template>
      <a-switch v-model:checked="formState.switched">
        <template #checkedChildren
          ><Icon size="xs" color="on-color">
            <template #name>check</template>
          </Icon></template
        >
        <template #unCheckedChildren
          ><Icon size="xs" color="default">
            <template #name>close</template>
          </Icon></template
        >
      </a-switch></a-form-item
    > -->

    <a-form-item :rules="[{ required: false }]" label="Disabled">
      <a-switch v-model:checked="formState.switched" disabled> </a-switch
    ></a-form-item>
  </a-form>
</template>
<script lang="ts" setup>
import { ref, reactive } from 'vue';
import { Icon } from '@/components/icons';
import { TopTitle } from '@/components/layouts';

const formState = reactive({
  switched: '',
});
</script>
