import { h } from 'vue';
import { notification, Button } from 'ant-design-vue';
import { Icon } from '@/components/icons';

function getContainer() {
  return document.querySelector('#archive') as HTMLElement;
}

export function openNotification({
  title,
  description,
  btnText,
  onBtnClick,
  btnClass,
  iconName,
}: {
  title: string;
  description?: string;
  btnText?: string;
  onBtnClick?: () => void;
  btnClass?: string;
  iconName: string;
}) {
  notification.open({
    getContainer,
    message: () => [
      h(
        Icon,
        {
          size: 'md',
          color: iconName === 'check_circle' ? 'success' : iconName,
          fill: true,
        },
        { name: () => iconName }
      ),
      h('span', { class: 'title' }, title),
      h('span', { class: 'description' }, description),
      h(
        Button,
        { type: 'link', class: btnClass || 'link', onClick: onBtnClick },
        { default: () => btnText }
      ),
    ],
    // duration: 0,
  });
}

export function openNotificationMessage({
  title,
  description,
  buttons,
  iconName,
}: {
  title: string;
  description?: string;
  buttons?: { text: string; onClick: () => void; btnClass?: string }[];
  iconName: string;
}) {
  notification.open({
    getContainer,
    message: () => [
      h(
        Icon,
        {
          size: 'md',
          color: iconName === 'check_circle' ? 'success' : iconName,
          fill: true,
        },
        { name: () => iconName }
      ),
      h('span', { class: 'title' }, title),
    ],
    description: () =>
      [
        description && h('span', description),
        buttons?.length &&
          h(
            'div',
            { class: 'description-flex' },
            buttons.map(({ text, onClick, btnClass }) =>
              h(
                Button,
                {
                  class: btnClass || 'secondary small',
                  onClick,
                },
                { default: () => text }
              )
            )
          ),
      ].filter(Boolean),
    // duration: 0,
  });
}
