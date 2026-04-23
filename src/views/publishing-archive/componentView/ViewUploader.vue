<template>
  <TopTitle
    title="Uploader"
    text="Uploader는 사용자가 로컬 환경(PC, 모바일 등)에서 파일을 선택하고, 이를 시스템에 업로드할 수 있도록 지원하는 컴포넌트 입니다.
이미지, 문서, 영상 등 다양한 파일 유형을 지원하며, 업로드 과정의 상태, 제한, 피드백을 제공합니다.
드래그하여 파일 업로드 시 업로드 필드 형태가 변경됩니다."
  />
  <a-form
    :model="formState"
    autocomplete="off"
    layout="vertical"
    style="gap: 32px"
  >
    <!--is-include-label 클래스 안붙으면 라벨 밖으로 빠짐 -->
    <a-form-item :rules="[{ required: true }]" label="기본 업로더">
      <!-- :custom-request="dummyRequest"  테스트용-->
      <a-upload
        v-model:file-list="formState.fileList"
        name="file"
        :headers="headers"
        :progress="progress"
        :show-upload-list="true"
        :multiple="true"
        @change="handleChange"
        :custom-request="dummyRequest"
      >
        <template #default>
          <div
            class="custom-upload"
            :class="{ 'drag-hover': isDragging }"
            @dragover.prevent="handleDragOver"
            @dragleave.prevent="handleDragLeave"
            @drop.prevent="handleDrop"
          >
            <div class="upload-inner">
              <Icon size="md" color="default">
                <template #name>cloud_upload</template>
              </Icon>
              첨부할 파일을 끌어다 놓거나, <a class="upload-link">찾아보기</a>
            </div>
            <p class="drop-hint typography-display-1" v-if="isDragging">
              Drop files here
            </p>
          </div>
        </template>

        <template #itemRender="{ file, actions }">
          <a-flex class="render-list">
            <div class="left">
              <Icon size="xs" color="default">
                <template #name>attach_file</template>
              </Icon>

              <a-tooltip :title="file.name">
                <span
                  :class="{
                    error: file.status === 'error',
                    uploading: file.status === 'uploading',
                  }"
                >
                  {{ file.name }}
                </span>
              </a-tooltip>
            </div>

            <div
              class="right"
              :class="{
                error: file.status === 'error',
                uploading: file.status === 'uploading',
              }"
            >
              {{ formatSize(file.size) }}

              <a-button class="ghost small" @click="actions.remove">
                <Icon size="xs" color="default">
                  <template #name>delete</template>
                </Icon>
              </a-button>
            </div>
          </a-flex>

          <a-progress
            v-if="file.status === 'uploading'"
            :percent="file.percent"
            :show-info="false"
            :size="8"
          />
        </template>
      </a-upload>
    </a-form-item>

    <a-form-item
      :rules="[{ required: true }]"
      class="is-include-label"
      :validate-status="hasError ? 'error' : ''"
    >
      <template #label>
        include label, 유효성 예시
        <a-tooltip>
          <template #title>
            도움말 아이콘 도움말 아이콘 도움말 아이콘 도움말 아이콘 도움말
            아이콘 도움말 아이콘 도움말 아이콘
          </template>
          <span class="icon">
            <Icon size="xs" color="default">
              <template #name>info</template>
            </Icon>
          </span>
        </a-tooltip>
      </template>
      <template #help v-if="hasError">
        <a-flex gap="4">
          <Icon size="xs" color="error" fill>
            <template #name>info</template>
          </Icon>
          Error Text</a-flex
        >
        <p class="helper">Helper Text</p>
      </template>

      <!-- :custom-request="dummyRequest"  테스트용-->
      <a-upload
        v-model:file-list="formState.fileList"
        name="file"
        :headers="headers"
        :progress="progress"
        :show-upload-list="true"
        :multiple="true"
        @change="handleChange"
        :custom-request="dummyRequest"
      >
        <template #default>
          <div
            class="custom-upload"
            :class="{ 'drag-hover': isDragging }"
            @dragover.prevent="handleDragOver"
            @dragleave.prevent="handleDragLeave"
            @drop.prevent="handleDrop"
          >
            <div class="upload-inner">
              <Icon size="md" color="default">
                <template #name>cloud_upload</template>
              </Icon>
              첨부할 파일을 끌어다 놓거나, <a class="upload-link">찾아보기</a>
            </div>
            <p class="drop-hint typography-display-1" v-if="isDragging">
              Drop files here
            </p>
          </div>
        </template>

        <template #itemRender="{ file, actions }">
          <a-flex class="render-list">
            <div class="left">
              <Icon size="xs" color="default">
                <template #name>attach_file</template>
              </Icon>

              <a-tooltip :title="file.name">
                <span
                  :class="{
                    error: file.status === 'error',
                    uploading: file.status === 'uploading',
                  }"
                >
                  {{ file.name }}
                </span>
              </a-tooltip>
            </div>

            <div
              class="right"
              :class="{
                error: file.status === 'error',
                uploading: file.status === 'uploading',
              }"
            >
              {{ formatSize(file.size) }}

              <a-button class="ghost small" @click="actions.remove">
                <Icon size="xs" color="default">
                  <template #name>delete</template>
                </Icon>
              </a-button>
            </div>
          </a-flex>

          <a-progress
            v-if="file.status === 'uploading'"
            :percent="file.percent"
            :show-info="false"
            :size="8"
          />
        </template>
      </a-upload>
    </a-form-item>
  </a-form>
</template>

<script lang="ts" setup>
import { ref, reactive, computed } from 'vue';
import { Icon } from '@/components/icons';
import { TopTitle } from '@/components/layouts';
import type { UploadChangeParam } from 'ant-design-vue';
import type { UploadFile } from 'ant-design-vue';

const headers = { authorization: 'authorization-text' };
const isDragging = ref(false);

const formState = reactive({
  fileList: [] as UploadFile[],
});

// 성공 테스트용
const dummyRequest = ({
  file,
  onSuccess,
  onError,
  onProgress,
}: {
  file: File;
  onSuccess: () => void;
  onError: () => void;
  onProgress: (event: { percent: number }) => void;
}) => {
  let percent = 0;

  const interval = setInterval(() => {
    percent += 25;

    onProgress({ percent });

    if (percent >= 100) {
      clearInterval(interval);
      if (Math.random() < 0.8) {
        onSuccess();
      } else {
        onError();
      }
    }
  }, 300);
};

const handleChange = (info: UploadChangeParam) => {
  formState.fileList = info.fileList;
};

const handleDragOver = () => {
  isDragging.value = true;
};

const handleDragLeave = () => {
  isDragging.value = false;
};

const handleDrop = () => {
  isDragging.value = false;
};

const formatSize = (size: number) => {
  if (size == null) return '';
  if (size < 1024) return size + ' B';
  else if (size < 1024 * 1024) return (size / 1024).toFixed(1) + ' KB';
  else return (size / (1024 * 1024)).toFixed(1) + ' MB';
};

const progress = {
  strokeWidth: 8,
  showInfo: false,
  format: () => '',
};

const hasError = computed(() => {
  const list = formState.fileList;
  // 파일 리스트가 비어있으면 → 에러 아님
  if (!Array.isArray(list) || list.length === 0) return false;
  // 하나라도 에러 상태인 파일이 있으면 에러
  return list.some((file) => file.status === 'error');
});
</script>
