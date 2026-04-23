<template>
  <a-popover
    placement="rightBottom"
    trigger="click"
    overlayClassName="no-arrow"
  >
    <template #content>
      <div class="profile-wrap">
        <div class="profile-head">
          <a-typography-title :level="3"> Profile </a-typography-title>
        </div>
        <div class="profile-body">
          <div class="profile-body-info">
            <a-avatar>
              <template #icon>
                <Icon color="brand" size="xl" fill>
                  <template #name>account_circle</template>
                </Icon>
              </template>
            </a-avatar>
            <a-flex :gap="2" vertical>
              <a-typography-text class="typography-label-2">
                {User-id}
              </a-typography-text>
              <a-typography-text class="typography-label-5">
                {권한}
              </a-typography-text>
            </a-flex>
          </div>
          <a-menu class="profile-body-menu" mode="inline" :inlineIndent="0">
            <a-menu-item key="1">
              <template #icon>
                <Icon>
                  <template #name>person</template>
                </Icon>
              </template>
              <router-link to=""> 마이페이지 </router-link>
            </a-menu-item>
            <a-menu-item key="2">
              <template #icon>
                <Icon>
                  <template #name>overview</template>
                </Icon>
              </template>
              <router-link to=""> 접속 이력 </router-link>
            </a-menu-item>
            <a-divider />
            <a-menu-item-group title="시스템 설정">
              <a-menu-item key="3">
                <template #icon>
                  <Icon>
                    <template #name>cable</template>
                  </Icon>
                </template>
                <router-link to=""> 솔루션 연결 관리 </router-link>
              </a-menu-item>
              <a-menu-item key="4">
                <template #icon>
                  <Icon>
                    <template #name>group</template>
                  </Icon>
                </template>
                <router-link to=""> 접근 권한 관리 </router-link>
              </a-menu-item>
              <a-menu-item key="5">
                <template #icon>
                  <Icon>
                    <template #name>free_cancellation</template>
                  </Icon>
                </template>
                <router-link to=""> 로그 </router-link>
              </a-menu-item>
              <a-menu-item key="6">
                <template #icon>
                  <Icon>
                    <template #name>settings_input_component</template>
                  </Icon>
                </template>
                <router-link to=""> 시스템 관리 </router-link>
              </a-menu-item>
            </a-menu-item-group>
            <a-divider />
            <a-menu-item key="7">
              <template #icon>
                <Icon>
                  <template #name>dark_mode</template>
                </Icon>
              </template>
              다크모드
              <a-switch v-model:checked="isDarkMode" size="small" />
            </a-menu-item>
            <a-divider />
            <a-menu-item key="8">
              <router-link to=""> 시스템 정보 </router-link>
            </a-menu-item>
            <a-menu-item key="9">
              <router-link to=""> 로그아웃 </router-link>
            </a-menu-item>
          </a-menu>
        </div>
      </div>
    </template>
    <template v-if="!$slots.trigger">
      <a-button class="ghost">
        <Icon color="default" fill>
          <template #name> account_circle </template>
        </Icon>
        프로필
      </a-button>
    </template>
    <slot name="trigger" />
  </a-popover>
</template>
<script lang="ts" setup>
import { Icon } from '@/components/icons';
import { useTheme } from '@/hooks/theme/useTheme';

const { isDarkMode } = useTheme();
</script>
