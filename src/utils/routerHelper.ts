/**
 * 라우터 헬퍼 유틸리티
 * 라우터 네이밍 컨벤션을 활용한 동적 라우팅 헬퍼 함수들
 */

export interface RouteConfig {
  solution: string;
  category?: string;
  resource: string;
  action?: 'detail' | 'create' | 'edit';
}

/**
 * 라우터 네임을 동적으로 생성하는 함수
 * @param config - 라우터 설정 객체
 * @returns 생성된 라우터 네임
 *
 * @example
 * generateRouteName({ solution: 'viola', category: 'cluster', resource: 'node', action: 'detail' })
 * // Returns: 'viola-cluster-node-detail'
 */
export function generateRouteName(config: RouteConfig): string {
  const { solution, category, resource, action } = config;

  let routeName = solution;

  if (category) {
    routeName += `-${category}`;
  }

  routeName += `-${resource}`;

  if (action) {
    routeName += `-${action}`;
  }

  return routeName;
}

/**
 * 현재 라우터에서 상세 페이지 라우터 네임을 생성하는 함수
 * @param currentRouteName - 현재 라우터 네임
 * @returns 상세 페이지 라우터 네임
 *
 * @example
 * getDetailRouteName('viola-cluster-node')
 * // Returns: 'viola-cluster-node-detail'
 */
export function getDetailRouteName(currentRouteName: string): string {
  return `${currentRouteName}-detail`;
}

/**
 * 현재 라우터에서 생성 페이지 라우터 네임을 생성하는 함수
 * @param currentRouteName - 현재 라우터 네임
 * @returns 생성 페이지 라우터 네임
 */
export function getCreateRouteName(currentRouteName: string): string {
  return `${currentRouteName}-create`;
}

/**
 * 솔루션별 라우터 생성 헬퍼
 */
export const routeHelpers = {
  viola: {
    cluster: {
      node: {
        detail: () =>
          generateRouteName({
            solution: 'viola',
            category: 'cluster',
            resource: 'node',
            action: 'detail',
          }),
        create: () =>
          generateRouteName({
            solution: 'viola',
            category: 'cluster',
            resource: 'node',
            action: 'create',
          }),
        list: () =>
          generateRouteName({
            solution: 'viola',
            category: 'cluster',
            resource: 'node',
          }),
      },
      setting: {
        detail: () =>
          generateRouteName({
            solution: 'viola',
            category: 'cluster',
            resource: 'setting',
            action: 'detail',
          }),
        create: () =>
          generateRouteName({
            solution: 'viola',
            category: 'cluster',
            resource: 'setting',
            action: 'create',
          }),
        list: () =>
          generateRouteName({
            solution: 'viola',
            category: 'cluster',
            resource: 'setting',
          }),
      },
    },
  },
  contrabass: {
    compute: {
      instance: {
        detail: () =>
          generateRouteName({
            solution: 'contrabass',
            resource: 'compute-instance',
            action: 'detail',
          }),
        create: () =>
          generateRouteName({
            solution: 'contrabass',
            resource: 'compute-instance',
            action: 'create',
          }),
        list: () =>
          generateRouteName({
            solution: 'contrabass',
            resource: 'compute-instance',
          }),
      },
    },
  },
  ceph: {
    cluster: {
      host: {
        detail: () =>
          generateRouteName({
            solution: 'ceph',
            category: 'cluster',
            resource: 'host',
            action: 'detail',
          }),
        create: () =>
          generateRouteName({
            solution: 'ceph',
            category: 'cluster',
            resource: 'host',
            action: 'create',
          }),
        list: () =>
          generateRouteName({
            solution: 'ceph',
            category: 'cluster',
            resource: 'host',
          }),
      },
    },
  },
};
