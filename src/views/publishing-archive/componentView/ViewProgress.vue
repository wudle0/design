<template>
  <a-flex vertical gap="8" style="max-width: 800px">
    <TopTitle
      title="프로그레스 (Progress)"
      text="progress는 5개의 고정 색상을 가지며 일반 타입과 divide 타입, Label 타입으로 나뉩니다."
    />
    <a-flex
      vertical
      gap="8"
      style="padding: 12px; border: 1px solid var(--border-default-01)"
    >
      <h3
        class="ant-typography"
        style="
          border-bottom: 1px solid var(--border-default-01);
          padding-bottom: 4px;
        "
      >
        label progress
      </h3>
      <div class="progress-box green">
        <a-progress :percent="50" :size="12" :show-info="false" />
        <div class="ant-progress-label">
          <span class="ant-progress-label-item"> Label </span>
          <span class="ant-progress-label-item">
            Label
            <span class="require">*</span>
          </span>
          <span class="ant-progress-label-item">
            <span>
              <div class="tag-wrap">
                <a-tag class="bullet blue">
                  <p class="tag-wrap-text">Label</p>
                </a-tag>
              </div>
            </span>
          </span>
        </div>
      </div>
      <div class="progress-box blue">
        <a-progress :percent="50" :size="12" :show-info="false" />
        <div class="ant-progress-label right">
          <span class="ant-progress-label-item"> Label </span>
          <span class="ant-progress-label-item">
            Label
            <span class="require">*</span>
          </span>
          <span class="ant-progress-label-item">
            <span>
              <div class="tag-wrap">
                <a-tag class="bullet blue">
                  <p class="tag-wrap-text">Label</p>
                </a-tag>
              </div>
            </span>
          </span>
        </div>
      </div>
      <div class="progress-box orange">
        <a-progress :percent="50" :size="12" :show-info="false" />
        <div class="ant-progress-label double">
          <div class="label-group">
            <span class="ant-progress-label-item"> Label </span>
            <span class="ant-progress-label-item">
              Label
              <span class="require">*</span>
            </span>
            <span class="ant-progress-label-item">
              <span>
                <div class="tag-wrap">
                  <a-tag class="bullet blue">
                    <p class="tag-wrap-text">Label</p>
                  </a-tag>
                </div>
              </span>
            </span>
          </div>
          <div class="label-group">
            <span class="ant-progress-label-item"> Label </span>
            <span class="ant-progress-label-item">
              Label
              <span class="require">*</span>
            </span>
            <span class="ant-progress-label-item">
              <span>
                <div class="tag-wrap">
                  <a-tag class="bullet blue">
                    <p class="tag-wrap-text">Label</p>
                  </a-tag>
                </div>
              </span>
            </span>
          </div>
        </div>
      </div>
    </a-flex>
    <a-flex
      vertical
      gap="8"
      style="padding: 12px; border: 1px solid var(--border-subtle-01)"
    >
      <h3
        class="ant-typography"
        style="
          border-bottom: 1px solid var(--border-default-01);
          padding-bottom: 4px;
        "
      >
        bar-only progress
      </h3>
      <div class="progress-box green">
        <a-progress :percent="20" :show-info="false" :size="12" />
      </div>
      <div class="progress-box blue">
        <a-progress :percent="40" :show-info="false" :size="12" />
      </div>
      <div class="progress-box orange">
        <a-progress :percent="60" :show-info="false" :size="12" />
      </div>
      <div class="progress-box red">
        <a-progress :percent="80" :show-info="false" :size="12" />
      </div>
      <div class="progress-box gray">
        <a-progress :percent="100" :show-info="false" :size="12" />
      </div>
      <div class="progress-box green">
        <a-progress :percent="20" :show-info="false" :size="8" />
      </div>
      <div class="progress-box blue">
        <a-progress :percent="40" :show-info="false" :size="8" />
      </div>
      <div class="progress-box orange">
        <a-progress :percent="60" :show-info="false" :size="8" />
      </div>
      <div class="progress-box red">
        <a-progress :percent="80" :show-info="false" :size="8" />
      </div>
      <div class="progress-box gray">
        <a-progress :percent="100" :show-info="false" :size="8" />
      </div>
    </a-flex>
    <a-flex
      vertical
      gap="8"
      style="padding: 12px; border: 1px solid var(--border-subtle-01)"
    >
      <h3
        class="ant-typography"
        style="
          border-bottom: 1px solid var(--border-default-01);
          padding-bottom: 4px;
        "
      >
        default progress
      </h3>
      <div class="progress-box green">
        <a-progress :percent="88.88" :size="12" :format="formatText" />
      </div>
      <div class="progress-box blue">
        <a-progress :percent="40" :size="12" />
      </div>
      <div class="progress-box orange">
        <a-progress :percent="60" :size="12" />
      </div>
      <div class="progress-box red">
        <a-progress :percent="80" :size="12" />
      </div>
      <div class="progress-box gray">
        <a-progress :percent="100" :size="12" :format="formatText" />
      </div>
      <div class="progress-box green">
        <a-progress :percent="20" :size="8" />
      </div>
      <div class="progress-box blue">
        <a-progress :percent="40" :size="8" />
      </div>
      <div class="progress-box orange">
        <a-progress :percent="60" :size="8" />
      </div>
      <div class="progress-box red">
        <a-progress :percent="80" :size="8" />
      </div>
      <div class="progress-box gray">
        <a-progress :percent="100" :size="8" :format="formatText" />
      </div>
    </a-flex>
    <a-flex
      vertical
      gap="8"
      style="padding: 12px; border: 1px solid var(--border-subtle-01)"
    >
      <h3
        class="ant-typography"
        style="
          border-bottom: 1px solid var(--border-default-01);
          padding-bottom: 4px;
        "
      >
        divide progress
      </h3>
      <div class="progress-box green">
        <a-progress :percent="20" :size="12" class="divide-5" />
      </div>
      <div class="progress-box blue">
        <a-progress :percent="40" :size="12" class="divide-5" />
      </div>
      <div class="progress-box orange">
        <a-progress :percent="60" :size="12" class="divide-10" />
      </div>
      <div class="progress-box red">
        <a-progress :percent="80" :size="12" class="divide-10" />
      </div>
      <div class="progress-box gray">
        <a-progress
          :percent="100"
          :size="12"
          class="divide-10"
          :format="formatText"
        />
      </div>
      <div class="progress-box green">
        <a-progress :percent="20" :size="8" class="divide-5" />
      </div>
      <div class="progress-box blue">
        <a-progress :percent="40" :size="8" class="divide-5" />
      </div>
      <div class="progress-box orange">
        <a-progress :percent="60" :size="8" class="divide-10" />
      </div>
      <div class="progress-box red">
        <a-progress :percent="80" :size="8" class="divide-10" />
      </div>
      <div class="progress-box gray">
        <a-progress
          :percent="100"
          :size="8"
          class="divide-10"
          :format="formatText"
        />
      </div>
    </a-flex>

    <a-flex
      vertical
      gap="8"
      style="padding: 12px; border: 1px solid var(--border-subtle-01)"
    >
      <h3
        class="ant-typography"
        style="
          border-bottom: 1px solid var(--border-default-01);
          padding-bottom: 4px;
        "
      >
        divide progress 바 색상이 나타내는 데이터가 퍼센트가 아니라 “개수(N of
        M)”일 때 사용.
      </h3>
      <div class="progress-box green">
        <ProgressDivide
          :current="3"
          :total="4"
          :size="12"
          :show-percent="true"
        />
      </div>
      <div class="progress-box blue">
        <ProgressDivide
          :current="10"
          :total="10"
          :size="12"
          :show-percent="false"
        />
      </div>
      <div class="progress-box orange">
        <ProgressDivide
          :current="2"
          :total="6"
          :size="24"
          :show-percent="false"
        />
      </div>
      <div class="progress-box red">
        <ProgressDivide
          :current="3"
          :total="7"
          :size="12"
          :show-percent="true"
        />
      </div>
      <div class="progress-box gray">
        <ProgressDivide
          :current="4"
          :total="4"
          :size="12"
          :show-percent="true"
        />
      </div>
      <div class="progress-box green">
        <ProgressDivide
          :current="4"
          :total="4"
          :size="12"
          :show-percent="false"
          :show-count-right="true"
        />
      </div>
    </a-flex>
  </a-flex>
</template>
<script lang="ts" setup>
import { TopTitle } from '@/components/layouts';
import { ProgressDivide } from '@/components/progress';

const formatText = (percent: number) => `${percent}%`;
</script>
