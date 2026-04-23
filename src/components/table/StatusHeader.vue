<template>
  <a-flex gap="4" justify="space-between" align="center">
    <span class="help-text">{{ props.title ? props.title : '상태' }}</span>
    <a-tooltip autoAdjustOverflow>
      <template #title>
        <div class="ant-tooltip-head">
          {{ props.title ? props.title : '상태' }}
        </div>
        <dl class="ant-tooltip-list">
          <div
            class="ant-tooltip-list-item"
            v-for="item in statusList"
            :key="item.key"
          >
            <dt>{{ item.title }}</dt>
            <dd>
              <!-- viola의 pod일 때는 Icon + text 형태 -->
              <template
                v-if="props.solution === 'viola' && props.statusType === 'pod'"
              >
                <a-flex gap="4" align="center">
                  <Icon
                    size="xs"
                    :color="
                      item.stat === 'success'
                        ? 'success'
                        : item.stat === 'info'
                          ? 'info'
                          : item.stat === 'error'
                            ? 'error'
                            : item.stat === 'warning'
                              ? 'warning'
                              : 'default'
                    "
                    fill
                  >
                    <template #name>fiber_manual_record</template>
                  </Icon>
                  <span>{{ item.text }}</span>
                </a-flex>
              </template>
              <!-- 기본적으로는 tag 형태 -->
              <template v-else>
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
                  <p class="tag-wrap-text">{{ item.text }}</p>
                </a-tag>
              </template>
            </dd>
          </div>
        </dl>
      </template>
      <Icon size="md" color="default">
        <template #name>help</template>
      </Icon>
    </a-tooltip>
  </a-flex>
</template>

<script lang="ts" setup>
import { ref, computed, type Ref } from 'vue';
import statusConfig from '@/assets/data/statusConfig.json';
import { Icon } from '@/components/icons';

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
const CEPH_KEYS = ['test'] as const;

type ContrabassKey = (typeof CONTRABASS_KEYS)[number];
type ViolaKey = (typeof VIOLA_KEYS)[number];
type CephKey = (typeof CEPH_KEYS)[number];
type DataKey = ContrabassKey | ViolaKey | CephKey;

const props = defineProps<{
  statusType: DataKey;
  title?: string;
  scroll?: boolean;
  solution?: SystemType;
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
</script>
