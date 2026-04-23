<template>
  <Modal
    :open="props.open"
    :ok-close="props.okClose"
    :ok-text="props.okText"
    cancel-text="취소"
    size="small"
    :notification="{
      title: '부트스트랩 토큰',
      variant: props.type === 'get' ? '가져오기' : '생성',
    }"
  >
    <template #alert>
      <Alert
        variant="info"
        :description="
          props.type === 'get'
            ? '생성된 부트스트랩 토큰을 가져오려면, 클러스터명을 입력하고, 미러링이 활성화될 풀을 선택한 후, 생성된 토큰을 입력하고 가져오기 버튼을 클릭하세요.'
            : '부트스트랩 토큰을 생성하려면, 클러스터명을 입력하고, 미러링이 활성화될 풀을 선택한 후, 생성 버튼을 클릭하세요.'
        "
        vertical
        banner
        :closable="true"
      />
    </template>
    <template #title>
      <BasicTitle
        level="modal"
        :title="
          props.type === 'get'
            ? '부트스트랩 토큰 가져오기'
            : '부트스트랩 토큰 생성'
        "
      />
    </template>
    <template #content>
      <a-form :model="formState" autocomplete="off" layout="vertical">
        <a-form-item :rules="[{ required: true }]" label="클러스터명">
          <a-input
            v-model:value="formState.clusterName"
            placeholder="클러스터명을 입력해 주세요."
            type="text"
          />
        </a-form-item>
        <template v-if="props.type === 'get'">
          <a-form-item :rules="[{ required: true }]" label="미러링">
            <a-select
              v-model:value="formState.selectMirroring"
              placeholder="미러링을 선택해 주세요."
            >
              <a-select-option value="a">양방향</a-select-option>
              <a-select-option value="b">단방향</a-select-option>
            </a-select>
          </a-form-item>
        </template>

        <a-form-item :rules="[{ required: true }]" label="풀">
          <a-checkbox-group
            v-model:value="formState.checkedPool"
            class="box-checkbox"
          >
            <a-checkbox value="a">rbd-pool </a-checkbox>
            <a-checkbox value="b">nvmeof-pool</a-checkbox>
            <a-checkbox value="c">mirror_pool</a-checkbox>
          </a-checkbox-group>
        </a-form-item>

        <a-form-item :rules="[{ required: true }]" label="토큰">
          <a-textarea
            v-model:value="formState.tokenArea"
            placeholder="토큰을 입력해 주세요."
            :rows="3"
            v-if="props.type === 'get'"
          />
          <a-flex gap="8" vertical class="w-100" v-else>
            <a-button
              class="primary small w-min-content"
              @click="handleCreateToken"
              :disabled="isButtonDisabled"
            >
              <template #icon>
                <Icon size="xs" color="default">
                  <template #name>{{
                    isTokenCreate ? 'refresh' : 'add'
                  }}</template>
                </Icon>
              </template>
              생성
            </a-button>
            <template v-if="isTokenCreate">
              <a-input
                v-model:value="formState.token"
                placeholder="토큰이 생성됩니다."
                type="text"
                readonly
              >
                <template #suffix>
                  <CopyButton :textToCopy="formState.token" />
                </template>
              </a-input>
            </template>
          </a-flex>
        </a-form-item>
      </a-form>
    </template>
  </Modal>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue';
import { BasicTitle } from '@/components/layouts';
import { Modal } from '@/components/popup';
import { Icon } from '@/components/icons';
import { Alert } from '@/components/alert';
import { CopyButton } from '@/components/solution/common';

// Props
const props = defineProps({
  open: { type: Boolean, default: false },
  okText: { type: String, default: '확인' },
  okClose: { type: Function, default: () => {} },
  type: { type: String, default: 'create' }, // 'create' or 'get'
});

// Form state
const formState = ref({
  clusterName: '',
  checkedPool: [],
  selectMirroring: null,
  token: '',
  tokenArea: '',
});

const isTokenCreate = ref(false);

// 클러스터명, 풀 선택 여부에 따라 버튼 비활성화
const isButtonDisabled = computed(() => {
  if (props.type === 'get') {
    return !formState.value.clusterName || !formState.value.tokenArea;
  }
  return (
    !formState.value.clusterName || formState.value.checkedPool.length === 0
  );
});

const handleCreateToken = () => {
  isTokenCreate.value = true;
  formState.value.token =
    'efJMmsgnfgnvbbv21321bvn51gfMDRFEDSh5nfgdnxcv12nb3vxcn3gfxnv12nb3vxcn3gf3gf54dgs2nb3vxcn3gfxn2nb3vxcn3gfxn2nb3vxcn3gfxn2nb3vxcn3gfxn2nb3vxcn3gfxn2nb3vxcn3';
};
</script>
