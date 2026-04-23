<template>
  <div class="tag-wrap">
    <a-tag
      class="small"
      :class="{
        gray: item.stat === 'default',
        red: item.stat === 'error',
        down: item.stat === 'down',
        blue: item.stat === 'info',
        green: item.stat === 'success',
        orange: item.stat === 'warning',
      }"
    >
      <p class="tag-wrap-text">{{ value }}</p>
    </a-tag>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed, type Ref } from 'vue';
import statusConfig from '@/assets/data/statusConfig.json';

interface StatusItem {
  key: number;
  title: string;
  stat: 'default' | 'success' | 'error' | 'info' | 'warning';
  text: string;
}
type SystemType = 'contrabass' | 'viola' | 'ceph';

// contrabass에 들어가는 상태 타입
const CONTRABASS_KEYS = [
  'image',
  'instance',
  'instancePower',
  'instanceProject',
  'segment',
  'router',
  'fluid',
  'operating',
  'provisioning',
  'admin',
  'volume',
  'volumeSnap',
  'volumeGroup',
  'replica',
  'volumeGroupSnap',
  'volumeBackup',
  'share',
  'stack',
  'resource',
  'event',
  'rack',
  'hypervisor',
  'baremetal',
  'switch',
  'storage',
  'rackStatus',
  'physical',
  'virtual',
  'hostBackup',
  'hostUsage',
  'hostOperate',

  'project',
  'ipRange',
  'port',
  'interface',
] as const;

// viola에 들어가는 상태 타입
const VIOLA_KEYS = [
  'cluster',
  'node',
  'clusterConnection',
  'nodeDetail',
  'namespace',
  'backup',
  'backupRestore',
  'pod',
  'container',
  'podDetail',
  'deployment',
  'deploymentDetail',
  'daemonset',
  'statefulset',
  'replicaset',
  'job',
  'jobDetail',
  'hpaDetail',
  'vpaDetail',
  'hpaSchedule',
  'pvclaim',
  'pvolume',
  'release',
] as const;

// ceph에 들어가는 상태 타입
const CEPH_KEYS = ['test', 'imageMirroring'] as const;

type ContrabassKey = (typeof CONTRABASS_KEYS)[number];
type ViolaKey = (typeof VIOLA_KEYS)[number];
type CephKey = (typeof CEPH_KEYS)[number];
type DataKey = ContrabassKey | ViolaKey | CephKey;

const props = defineProps<{
  statusType: DataKey;
  title?: string;
  scroll?: boolean;
  solution?: SystemType;
  value?: string;
}>();

const statusList = computed(() => {
  const systemType = props.solution || 'contrabass';
  const systemData = statusConfig[systemType];

  if (!systemData) {
    console.error(`System type "${systemType}" not found in statusConfig`);
    return [];
  }

  const data = systemData[props.statusType as keyof typeof systemData];

  if (!data) {
    console.error(
      `Status type "${props.statusType}" not found in ${systemType} config`
    );
    return [];
  }

  return data as StatusItem[];
});

// props.value와 일치하는 상태 항목을 찾아 반환
const item = computed(() => {
  if (!props.value) return { stat: 'default' as const };

  const matchingItem = statusList.value.find(
    (status) => status.text === props.value
  );

  return matchingItem || { stat: 'default' as const };
});
</script>
