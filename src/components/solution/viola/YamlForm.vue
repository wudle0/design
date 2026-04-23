<template>
  <div>
    <div class="form-item-group">
      <a-flex class="form-item required">
        <a-flex class="item-label">
          <BasicTitle level="label" title="클러스터" />
        </a-flex>
        <a-flex class="item-ant-form">
          <a-form-item :rules="[{ required: true }]">
            <a-select
              v-model:value="formState.volumeMode"
              placeholder="클러스터를 선택해 주세요."
              :disabled="props.mode === 'edit'"
            >
              <a-select-option value="Cluster">Cluster1</a-select-option>
              <a-select-option value="Block">Cluster2</a-select-option>
            </a-select>
          </a-form-item>
        </a-flex>
      </a-flex>
    </div>

    <!-- YAML 에디터 -->
    <div class="form-item-group">
      <a-flex class="form-item required">
        <a-flex class="item-label">
          <BasicTitle level="label" title="YAML" />
        </a-flex>
        <a-flex class="item-ant-form">
          <section class="section">
            <div class="section-body">
              <img
                src="@/styles/assets/images/yaml.png"
                alt="yaml"
                class="yaml"
              />
            </div>
          </section>
          <a-button class="secondary"> YAML 유효성 검사 </a-button>
          <div class="editor-view yaml">
            <div class="inner-editor">
              if you choose to ignore these errors, turn validation off with
              --validate=false
            </div>
          </div>
        </a-flex>
      </a-flex>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, watch } from 'vue';
import BasicTitle from '@/components/layouts/BasicTitle.vue';

// Props
interface Props {
  mode?: 'create' | 'edit';
  initialYaml?: string;
  initialCluster?: string;
}

const props = withDefaults(defineProps<Props>(), {
  mode: 'create',
  initialYaml: '',
  initialCluster: '',
});

// Reactive data
const selectedCluster = ref(props.initialCluster || '');

// formState
const formState = reactive({
  volumeMode: 'Cluster',
});
</script>
