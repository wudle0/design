<template>
  <TopTitle
    title="필터 (Filter)"
    text="일반 사이즈와 small 사이즈가 있으며 single line과 double line으로 나뉩니다.
    버튼은 slot으로 추가할 수 있으며 열 고정의 경우 addfix=true를 추가합니다.
    테이블에서 사용될 경우 selectCount값을 넘겨 카운트된 행의 개수를 표시할 수 있습니다."
  />
  <a-flex vertical gap="50">
    <!-- 기본 -->
    <Filter />
    <!-- 테이블 기본 -->
    <Filter filterIcon>
      <template #buttons>
        <a-range-picker format="YYYY-MM-DD">
          <template #suffixIcon>
            <Icon size="md" color="default">
              <template #name>calendar_month</template>
            </Icon>
          </template>
        </a-range-picker>
        <a-button class="secondary">
          <Icon size="md" color="default">
            <template #name>download</template>
          </Icon>
          엑셀 다운로드
        </a-button>
        <a-button class="primary">
          <Icon size="md" color="inverse" fill>
            <template #name>add</template>
          </Icon>
          생성
        </a-button>
      </template>
    </Filter>
    <!-- 테이블 double line -->
    <Filter filterIcon line="double">
      <template #buttons>
        <a-range-picker format="YYYY-MM-DD">
          <template #suffixIcon>
            <Icon size="md" color="default">
              <template #name>calendar_month</template>
            </Icon>
          </template>
        </a-range-picker>
        <a-button class="secondary">
          <Icon size="md" color="default">
            <template #name>download</template>
          </Icon>
          엑셀 다운로드
        </a-button>
        <a-button class="primary">
          <Icon size="md" color="inverse" fill>
            <template #name>add</template>
          </Icon>
          생성
        </a-button>
      </template>
    </Filter>
    <!-- 열고정 테이블 기본 -->
    <Filter filterIcon addfix>
      <template #buttons>
        <a-range-picker format="YYYY-MM-DD">
          <template #suffixIcon>
            <Icon size="md" color="default">
              <template #name>calendar_month</template>
            </Icon>
          </template>
        </a-range-picker>
        <a-button class="secondary">
          <Icon size="md" color="default">
            <template #name>download</template>
          </Icon>
          엑셀 다운로드
        </a-button>
        <a-button class="primary">
          <Icon size="md" color="inverse" fill>
            <template #name>add</template>
          </Icon>
          생성
        </a-button>
      </template>
    </Filter>
    <!-- 열고정 테이블 double line -->
    <Filter filterIcon addfix line="double">
      <template #buttons>
        <a-range-picker format="YYYY-MM-DD">
          <template #suffixIcon>
            <Icon size="md" color="default">
              <template #name>calendar_month</template>
            </Icon>
          </template>
        </a-range-picker>
        <a-button class="secondary">
          <Icon size="md" color="default">
            <template #name>download</template>
          </Icon>
          엑셀 다운로드
        </a-button>
        <a-button class="primary">
          <Icon size="md" color="inverse" fill>
            <template #name>add</template>
          </Icon>
          생성
        </a-button>
      </template>
    </Filter>
    <!-- small -->
    <Filter size="small" />
  </a-flex>
</template>
<script lang="ts" setup>
import { Filter } from '@/components/table';
import { TopTitle } from '@/components/layouts';
import { Icon } from '@/components/icons';
</script>
