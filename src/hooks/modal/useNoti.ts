import { useRouter, useRoute } from 'vue-router';
import { openNotification } from '@/hooks/notification/useNotification';

export function useNotification(
  title: string, // 타이틀
  history = true, // 뒤로가기 할 것인지
  replace = false, // 스텝이 여러개인 경우 history back 대신 replace 사용
  okAction: Function = () => [{}]
) {
  const router = useRouter();
  const route = useRoute();

  const openNoti = (type: 'success' | 'info' | 'warning' | 'error') => {
    const iconMap = {
      success: { iconName: 'check_circle', iconColor: 'success' },
      info: { iconName: 'info', iconColor: 'info' },
      warning: { iconName: 'warning', iconColor: 'warning' },
      error: { iconName: 'error', iconColor: 'error' },
    };

    openNotification({
      title: `${title} 요청 ${type === 'success' ? '성공' : type === 'error' ? '실패' : ''}`,
      iconName: iconMap[type].iconName,
    });
  };

  const notificationOpen = () => {
    openNoti('success');

    setTimeout(() => {
      if (history) {
        if (replace) {
          const newPath = route.fullPath.replace(
            /\/(detail|edit|create)(\/\d+|\d+)*/, // 뒤에 숫자가 오는 패턴 모두 replace
            ''
          );
          router.replace(newPath);
        } else {
          router.go(-1);
        }
      }
    }, 1000);

    okAction();
  };

  return { notificationOpen };
}
