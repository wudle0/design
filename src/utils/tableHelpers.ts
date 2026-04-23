/**
 * 테이블 라우팅 헬퍼
 */

import { useRouter } from 'vue-router';

export interface TableRouteConfig {
  baseName: string; // 현재 라우터 이름 (예: 'viola-cluster-node')
  defaultAction?: 'detail' | 'create' | 'edit';
}

/**
 * 테이블 행 클릭 시 자동으로 상세 페이지로 이동하는 컴포저블
 */
export function useTableRouting(config: TableRouteConfig) {
  const router = useRouter();

  const getRouteName = (action: string = config.defaultAction || 'detail') => {
    return `${config.baseName}-${action}`;
  };

  const navigateToDetail = (record?: any) => {
    router.push({
      name: getRouteName('detail'),
    });
  };

  const navigateToCreate = () => {
    router.push({ name: getRouteName('create') });
  };

  const navigateToEdit = (record?: any) => {
    router.push({
      name: getRouteName('edit'),
    });
  };

  return {
    getRouteName,
    navigateToDetail,
    navigateToCreate,
    navigateToEdit,
  };
}

/**
 * 간편 라우터 네임 생성
 */
export const createRouteNames = (baseName: string) => ({
  detail: `${baseName}-detail`,
  create: `${baseName}-create`,
  edit: `${baseName}-edit`,
  list: baseName,
});
