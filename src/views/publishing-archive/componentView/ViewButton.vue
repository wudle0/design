<template>
  <a-flex vertical gap="8">
    <TopTitle
      title="버튼 (Button)"
      text="primary, secondary, tertiary, ghost, link 유형이 있으며 secondary와 ghost는 danger 상태를 포함합니다."
    />
    <a-flex gap="8" align="center" wrap="wrap">
      <a-tooltip>
        <template #title> 버튼명 </template>
        <a-button class="primary">
          <template #icon>
            <Icon size="md" color="default" fill>
              <template #name>add</template>
            </Icon>
          </template>
          tooltip
          <Icon size="md" color="default" fill>
            <template #name>add</template>
          </Icon>
        </a-button>
      </a-tooltip>
      <a-tooltip>
        <template #title> 이미지만 들어간 버튼 </template>
        <a-button class="primary">
          <Icon size="md" color="default" fill>
            <template #name>add</template>
          </Icon>
        </a-button>
      </a-tooltip>
      <a-button class="primary"> primary </a-button>
      <a-button class="primary small">primary small</a-button>
      <a-button class="primary" disabled>primary disabled</a-button>
    </a-flex>
    <a-flex gap="8" align="center" wrap="wrap">
      <a-tooltip>
        <template #title> 버튼명 </template>
        <a-button class="secondary">
          <template #icon>
            <Icon size="md" color="default" fill>
              <template #name>add</template>
            </Icon>
          </template>
          tooltip
          <Icon size="md" color="default" fill>
            <template #name>add</template>
          </Icon>
        </a-button>
      </a-tooltip>
      <a-tooltip>
        <template #title> 이미지만 들어간 버튼 </template>
        <a-button class="secondary">
          <Icon size="md" color="default" fill>
            <template #name>add</template>
          </Icon>
        </a-button>
      </a-tooltip>
      <a-button class="secondary">secondary</a-button>
      <a-button class="secondary small">
        <Icon size="lg" color="default" fill>
          <template #name>add</template>
        </Icon>
        secondary small
      </a-button>
      <a-button class="secondary" disabled>secondary disabled</a-button>
    </a-flex>
    <a-flex gap="8" align="center" wrap="wrap">
      <a-tooltip>
        <template #title> 버튼명 </template>
        <a-button class="tertiary">
          <template #icon>
            <Icon size="md" color="default" fill>
              <template #name>add</template>
            </Icon>
          </template>
          tooltip
          <Icon size="md" color="default" fill>
            <template #name>add</template>
          </Icon>
        </a-button>
      </a-tooltip>
      <a-tooltip>
        <template #title> 이미지만 들어간 버튼 </template>
        <a-button class="tertiary">
          <Icon size="md" color="default" fill>
            <template #name>add</template>
          </Icon>
        </a-button>
      </a-tooltip>
      <a-button class="tertiary">tertiary</a-button>
      <a-button class="tertiary small">tertiary small</a-button>
      <a-button class="tertiary" disabled>tertiary disabled</a-button>
    </a-flex>
    <a-flex gap="8" align="center" wrap="wrap">
      <a-tooltip>
        <template #title> 버튼명 </template>
        <a-button class="ghost">
          <template #icon>
            <Icon size="md" color="default" fill>
              <template #name>add</template>
            </Icon>
          </template>
          tooltip
          <Icon size="md" color="default" fill>
            <template #name>add</template>
          </Icon>
        </a-button>
      </a-tooltip>
      <a-tooltip>
        <template #title> 이미지만 들어간 버튼 </template>
        <a-button class="ghost">
          <Icon size="md" color="default" fill>
            <template #name>add</template>
          </Icon>
        </a-button>
      </a-tooltip>
      <a-button class="ghost">ghost</a-button>
      <a-button class="ghost small">ghost small</a-button>
      <a-button class="ghost" disabled>ghost disabled</a-button>
    </a-flex>
    <a-flex gap="8" align="center" wrap="wrap">
      <a-tooltip>
        <template #title> 버튼명 </template>
        <a-button class="secondary danger">
          <template #icon>
            <Icon size="md" color="default" fill>
              <template #name>add</template>
            </Icon>
          </template>
          tooltip
          <Icon size="md" color="default" fill>
            <template #name>add</template>
          </Icon>
        </a-button>
      </a-tooltip>
      <a-tooltip>
        <template #title> 이미지만 들어간 버튼 </template>
        <a-button class="secondary danger">
          <Icon size="md" color="default" fill>
            <template #name>add</template>
          </Icon>
        </a-button>
      </a-tooltip>
      <a-button class="secondary danger">secondary danger</a-button>
      <a-button class="secondary danger small">secondary danger small</a-button>
      <a-button class="secondary danger" disabled
        >secondary danger disabled</a-button
      >
    </a-flex>
    <a-flex gap="8" align="center" wrap="wrap">
      <a-tooltip>
        <template #title> 버튼명 </template>
        <a-button class="ghost danger">
          <template #icon>
            <Icon size="md" color="default" fill>
              <template #name>add</template>
            </Icon>
          </template>
          tooltip
          <Icon size="md" color="default" fill>
            <template #name>add</template>
          </Icon>
        </a-button>
      </a-tooltip>
      <a-tooltip>
        <template #title> 이미지만 들어간 버튼 </template>
        <a-button class="ghost danger">
          <Icon size="md" color="default" fill>
            <template #name>add</template>
          </Icon>
        </a-button>
      </a-tooltip>
      <a-button class="ghost danger">ghost danger</a-button>
      <a-button class="ghost danger small">ghost danger small</a-button>
      <a-button class="ghost danger" disabled>ghost danger disabled</a-button>
    </a-flex>
    <a-flex gap="8" align="center" wrap="wrap">
      <a-button class="link">
        <Icon size="md" color="default" fill>
          <template #name>add</template>
        </Icon>
        link
        <Icon size="md" color="default" fill>
          <template #name>add</template>
        </Icon>
      </a-button>
      <a-button class="link">link</a-button>
      <a-button class="link accent">link accent</a-button>
      <a-button class="link" disabled>link disabled</a-button>
    </a-flex>
    <a-flex gap="8" align="center" wrap="wrap">
      <a-button class="auto">primary auto</a-button>
    </a-flex>
    <a-flex gap="8" align="center" wrap="wrap">
      <a-flex class="btn-dropdown primary">
        <a-button class="primary"> primary </a-button>
        <a-dropdown trigger="click">
          <template #overlay>
            <a-menu>
              <a-menu-item key="1"> 1st menu item </a-menu-item>
              <a-menu-item key="2"> 2nd menu item </a-menu-item>
              <a-menu-item key="3"> 3rd menu item </a-menu-item>
            </a-menu>
          </template>
          <a-button class="primary">
            <Icon size="md" color="default" fill>
              <template #name>keyboard_arrow_down</template>
            </Icon>
          </a-button>
        </a-dropdown>
      </a-flex>
      <a-flex class="btn-dropdown secondary">
        <a-button class="secondary"> secondary </a-button>
        <a-dropdown trigger="click" placement="bottomRight">
          <template #overlay>
            <a-menu>
              <a-menu-item key="1"> 1st menu item </a-menu-item>
              <a-menu-item key="2"> 2nd menu item </a-menu-item>
              <a-menu-item key="3"> 3rd menu item </a-menu-item>
            </a-menu>
          </template>
          <a-button class="secondary">
            <Icon size="md" color="default" fill>
              <template #name>keyboard_arrow_down</template>
            </Icon>
          </a-button>
        </a-dropdown>
      </a-flex>
      <a-flex class="btn-dropdown small">
        <a-button class="primary"> primary </a-button>
        <a-dropdown trigger="click">
          <template #overlay>
            <a-menu>
              <a-menu-item key="1"> 1st menu item </a-menu-item>
              <a-menu-item key="2"> 2nd menu item </a-menu-item>
              <a-menu-item key="3"> 3rd menu item </a-menu-item>
            </a-menu>
          </template>
          <a-button class="primary">
            <Icon size="md" color="default" fill>
              <template #name>keyboard_arrow_down</template>
            </Icon>
          </a-button>
        </a-dropdown>
      </a-flex>
      <a-flex class="btn-dropdown small">
        <a-button class="secondary"> secondary </a-button>
        <a-dropdown trigger="click">
          <template #overlay>
            <a-menu>
              <a-menu-item key="1"> 1st menu item </a-menu-item>
              <a-menu-item key="2"> 2nd menu item </a-menu-item>
              <a-menu-item key="3"> 3rd menu item </a-menu-item>
            </a-menu>
          </template>
          <a-button class="secondary">
            <Icon size="md" color="default" fill>
              <template #name>keyboard_arrow_down</template>
            </Icon>
          </a-button>
        </a-dropdown>
      </a-flex>
    </a-flex>
  </a-flex>
</template>

<script lang="ts" setup>
import { Icon } from '@/components/icons';
import { TopTitle } from '@/components/layouts';
</script>
