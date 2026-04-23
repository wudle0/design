<template>
  <a-flex vertical gap="8">
    <TopTitle
      title="Material 아이콘"
      text="material icon의 네이밍을 따릅니다. (컴포낸트 내 이름 삽입)"
    />
    <a-flex gap="8" vertical>
      <a-flex gap="8" wrap="wrap">
        <Icon size="xs">
          <template #name>home</template>
        </Icon>
        <Icon size="md">
          <template #name>home</template>
        </Icon>
        <Icon size="xl">
          <template #name>home</template>
        </Icon>
      </a-flex>
      <a-flex gap="8" wrap="wrap">
        <Icon>
          <template #name>home</template>
        </Icon>
        <Icon color="default">
          <template #name>home</template>
        </Icon>
        <Icon color="subtle">
          <template #name>home</template>
        </Icon>
        <Icon color="brand">
          <template #name>home</template>
        </Icon>
        <Icon color="on-color">
          <template #name>home</template>
        </Icon>
        <Icon color="inverse">
          <template #name>home</template>
        </Icon>
        <Icon color="error">
          <template #name>home</template>
        </Icon>
        <Icon color="warning">
          <template #name>home</template>
        </Icon>
        <Icon color="success">
          <template #name>home</template>
        </Icon>
        <Icon color="info">
          <template #name>home</template>
        </Icon>
      </a-flex>
      <a-flex gap="8" wrap="wrap">
        <Icon disabled>
          <template #name>home</template>
        </Icon>
        <Icon disabled color="brand">
          <template #name>home</template>
        </Icon>
      </a-flex>
    </a-flex>
    <TopTitle
      title="커스텀 아이콘"
      text="각 솔루션 별로 필요시 추가 가능.
      components/icon 폴더 내에 존재합니다. (테마별색상 적용)"
      style="margin-top: 20px"
    />
    <a-flex gap="8" vertical>
      <a-typography-text class="typography-body-2">Storage</a-typography-text>
      <a-flex gap="8" wrap="wrap">
        <StorageIcon />
        <StorageIcon on />
        <StorageIcon small />
        <StorageIcon on small />
        <StorageIcon light />
        <StorageIcon light on />
        <StorageIcon light small />
        <StorageIcon light on small />
      </a-flex>
      <a-typography-text class="typography-body-2">Security</a-typography-text>
      <a-flex gap="8" wrap="wrap">
        <SecurityIcon />
        <SecurityIcon on />
        <SecurityIcon small />
        <SecurityIcon on small />
        <SecurityIcon light />
        <SecurityIcon light on />
        <SecurityIcon light small />
        <SecurityIcon light on small />
      </a-flex>
      <a-typography-text class="typography-body-2">Database</a-typography-text>
      <a-flex gap="8" wrap="wrap">
        <DatabaseIcon />
        <DatabaseIcon on />
        <DatabaseIcon small />
        <DatabaseIcon on small />
        <DatabaseIcon light />
        <DatabaseIcon light on />
        <DatabaseIcon light small />
        <DatabaseIcon light on small />
      </a-flex>
      <a-typography-text class="typography-body-2">Container</a-typography-text>
      <a-flex gap="8" wrap="wrap">
        <ContainerIcon />
        <ContainerIcon on />
        <ContainerIcon small />
        <ContainerIcon on small />
        <ContainerIcon light />
        <ContainerIcon light on />
        <ContainerIcon light small />
        <ContainerIcon light on small />
      </a-flex>
      <a-typography-text class="typography-body-2">Network</a-typography-text>
      <a-flex gap="8" wrap="wrap">
        <NetworkIcon />
        <NetworkIcon on />
        <NetworkIcon small />
        <NetworkIcon on small />
        <NetworkIcon light />
        <NetworkIcon light on />
        <NetworkIcon light small />
        <NetworkIcon light on small />
      </a-flex>
      <a-typography-text class="typography-body-2">Computing</a-typography-text>
      <a-flex gap="8" wrap="wrap">
        <ComputingIcon />
        <ComputingIcon on />
        <ComputingIcon small />
        <ComputingIcon on small />
        <ComputingIcon light />
        <ComputingIcon light on />
        <ComputingIcon light small />
        <ComputingIcon light on small />
      </a-flex>
      <a-typography-text class="typography-body-2">Rowfix</a-typography-text>
      <a-flex gap="8" wrap="wrap">
        <RowfixIcon size="small" />
        <RowfixIcon />
        <RowfixIcon size="large" />
        <RowfixIcon active />
      </a-flex>
      <a-typography-text class="typography-body-2">CloudView</a-typography-text>
      <a-flex gap="8" wrap="wrap">
        <CloudViewIcon size="small" />
        <CloudViewIcon />
        <CloudViewIcon size="large" />
      </a-flex>
      <a-typography-text class="typography-body-2"
        >Observability</a-typography-text
      >
      <a-flex gap="8" wrap="wrap">
        <ObservabilityIcon size="small" />
        <ObservabilityIcon />
        <ObservabilityIcon size="large" />
      </a-flex>
    </a-flex>
  </a-flex>
</template>
<script lang="ts" setup>
import {
  Icon,
  StorageIcon,
  SecurityIcon,
  DatabaseIcon,
  ContainerIcon,
  NetworkIcon,
  ComputingIcon,
  RowfixIcon,
  CloudViewIcon,
  ObservabilityIcon,
} from '@/components/icons';
import { TopTitle } from '@/components/layouts';
</script>
