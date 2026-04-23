<template>
  <div class="container okestro-archive">
    <TheLNB />
    <div class="main-container">
      <TheHeader :cloudview="true" />
      <a-flex class="inner-scroll-container">
        <template v-if="route.path.includes('layout')">
          <router-view />
        </template>
        <template v-else>
          <div class="page-container">
            <div class="main-panel">
              <div class="panel-body">
                <div class="main-content">
                  <div class="content-body" style="padding: 16px">
                    <router-view v-slot="{ Component }">
                      <keep-alive>
                        <component :is="Component" />
                      </keep-alive>
                    </router-view>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </template>
      </a-flex>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { TheLNB, TheHeader } from '@/components/navigations';
import { useRoute } from 'vue-router';

const route = useRoute();
</script>
