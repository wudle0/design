import { RouteRecordRaw } from 'vue-router';

import Overview from '@/views/publishing-archive/Overview.vue';
import Layout from '@/views/publishing-archive/Layout.vue';
import LayoutList from '@/views/publishing-archive/layouts/LayoutList.vue';
import LayoutListTab from '@/views/publishing-archive/layouts/LayoutListTab.vue';
import LayoutListTabSideView from '@/views/publishing-archive/layouts/LayoutListTabSideView.vue';
import LayoutListSideView from '@/views/publishing-archive/layouts/LayoutListSideView.vue';
import LayoutListExpandTable from '@/views/publishing-archive/layouts/LayoutListExpandTable.vue';
import LayoutDetail from '@/views/publishing-archive/layouts/LayoutDetail.vue';
import LayoutDetailPanel from '@/views/publishing-archive/layouts/LayoutDetailPanel.vue';
import LayoutDetailTreeView from '@/views/publishing-archive/layouts/LayoutDetailTreeView.vue';
import LayoutCreate from '@/views/publishing-archive/layouts/LayoutCreate.vue';
import LayoutCreateStep from '@/views/publishing-archive/layouts/LayoutCreateStep.vue';
import LayoutCreateStepPanel from '@/views/publishing-archive/layouts/LayoutCreateStepPanel.vue';
import LayoutDashboard from '@/views/publishing-archive/layouts/LayoutDashboard.vue';

import Button from '@/views/publishing-archive/componentView/ViewButton.vue';
import Icon from '@/views/publishing-archive/componentView/ViewIcon.vue';
import Collapse from '@/views/publishing-archive/componentView/ViewCollapse.vue';
import Modal from '@/views/publishing-archive/componentView/ViewModal.vue';
import Popover from '@/views/publishing-archive/componentView/ViewPopover.vue';
import NoData from '@/views/publishing-archive/componentView/ViewNoData.vue';
import Tag from '@/views/publishing-archive/componentView/ViewTag.vue';
import Tooltip from '@/views/publishing-archive/componentView/ViewTooltip.vue';
import Caption from '@/views/publishing-archive/componentView/ViewCaption.vue';
import Title from '@/views/publishing-archive/componentView/ViewTitle.vue';
import Card from '@/views/publishing-archive/componentView/ViewCard.vue';
import CardDashboard from '@/views/publishing-archive/componentView/ViewCardDashboard.vue';
import Filter from '@/views/publishing-archive/componentView/ViewFilter.vue';
import Progress from '@/views/publishing-archive/componentView/ViewProgress.vue';
import Slider from '@/views/publishing-archive/componentView/ViewSlider.vue';
import Spinner from '@/views/publishing-archive/componentView/TheSpinner.vue';
import Typography from '@/views/publishing-archive/componentView/ViewTypography.vue';

import BreadCrumb from '@/views/publishing-archive/componentView/ViewBreadCrumb.vue';
import Navigator from '@/views/publishing-archive/componentView/ViewNavigator.vue';
import CloudView from '@/views/publishing-archive/componentView/TheCloudView.vue';

import Field from '@/views/publishing-archive/componentView/ViewField.vue';
import Checkbox from '@/views/publishing-archive/componentView/ViewCheckbox.vue';
import Radio from '@/views/publishing-archive/componentView/ViewRadio.vue';
import DatePicker from '@/views/publishing-archive/componentView/ViewDatePicker.vue';
import DropDown from '@/views/publishing-archive/componentView/ViewDropDown.vue';
import Switch from '@/views/publishing-archive/componentView/ViewSwitch.vue';
import Uploader from '@/views/publishing-archive/componentView/ViewUploader.vue';

import Alert from '@/views/publishing-archive/componentView/ViewAlert.vue';
import Notification from '@/views/publishing-archive/componentView/ViewNotification.vue';

import Table from '@/views/publishing-archive/componentView/ViewTable.vue';
import FixedTable from '@/views/publishing-archive/componentView/ViewFixedTable.vue';
import Tree from '@/views/publishing-archive/componentView/ViewTree.vue';
import Pagination from '@/views/publishing-archive/componentView/ViewPagination.vue';
import Tab from '@/views/publishing-archive/componentView/ViewTab.vue';
import Step from '@/views/publishing-archive/componentView/ViewStep.vue';
import StepIndicator from '@/views/publishing-archive/componentView/ViewStepIndicator.vue';
import List from '@/views/publishing-archive/componentView/ViewList.vue';
import ListSolution from '@/views/publishing-archive/componentView/ViewListSolution.vue';
import Listbox from '@/views/publishing-archive/componentView/ViewListbox.vue';
import Segment from '@/views/publishing-archive/componentView/ViewSegment.vue';
import ViewChartLayout from '@/views/publishing-archive/componentView/ViewChartLayout.vue';
import ViewBarChart from '@/views/publishing-archive/componentView/ViewBarChart.vue';
import ViewLineChart from '@/views/publishing-archive/componentView/ViewLineChart.vue';
import ViewPieChart from '@/views/publishing-archive/componentView/ViewPieChart.vue';
import ViewAreaChart from '@/views/publishing-archive/componentView/ViewAreaChart.vue';
import ViewDoughnutChart from '@/views/publishing-archive/componentView/ViewDoughnutChart.vue';

export const PublishingArchiveRoutes: Array<RouteRecordRaw> = [
  {
    path: '/archive',
    name: 'archive',
    meta: {
      title: 'Archive',
    },
    redirect: '/archive/overview',
    children: [
      {
        path: 'overview',
        name: 'archive-overview',
        component: Overview,
        meta: {
          title: '솔루션 연결 관리',
        },
      },
      {
        path: 'button',
        name: 'archive-button',
        component: Button,
        meta: {
          title: 'Button',
        },
      },
      {
        path: 'icon',
        name: 'archive-icon',
        component: Icon,
        meta: {
          title: 'Icon',
        },
      },
      {
        path: 'collapse',
        name: 'archive-collapse',
        component: Collapse,
        meta: {
          title: 'Collapse',
        },
      },
      {
        path: 'modal',
        name: 'archive-modal',
        component: Modal,
        meta: {
          title: 'Modal',
        },
      },
      {
        path: 'popover',
        name: 'archive-popover',
        component: Popover,
        meta: {
          title: 'Popover',
        },
      },
      {
        path: 'noData',
        name: 'archive-noData',
        component: NoData,
        meta: {
          title: 'NoData',
        },
      },
      {
        path: 'tag',
        name: 'archive-tag',
        component: Tag,
        meta: {
          title: 'Tag',
        },
      },
      {
        path: 'tooltip',
        name: 'archive-tooltip',
        component: Tooltip,
        meta: {
          title: 'Tooltip',
        },
      },
      {
        path: 'caption',
        name: 'archive-caption',
        component: Caption,
        meta: {
          title: 'Caption',
        },
      },
      {
        path: 'title',
        name: 'archive-title',
        component: Title,
        meta: {
          title: 'Title',
        },
      },
      {
        path: 'card',
        name: 'archive-card',
        component: Card,
        meta: {
          title: 'Card',
        },
      },
      {
        path: 'cardDashboard',
        name: 'archive-card-dashboard',
        component: CardDashboard,
        meta: {
          title: 'CardDashboard',
        },
      },
      {
        path: 'filter',
        name: 'archive-filter',
        component: Filter,
        meta: {
          title: 'Filter',
        },
      },
      {
        path: 'progress',
        name: 'archive-progress',
        component: Progress,
        meta: {
          title: 'Progress',
        },
      },
      {
        path: 'slider',
        name: 'archive-slider',
        component: Slider,
        meta: {
          title: 'Slider',
        },
      },
      {
        path: 'spinner',
        name: 'archive-spinner',
        component: Spinner,
        meta: {
          title: 'Spinner',
        },
      },
      {
        path: 'typography',
        name: 'archive-typography',
        component: Typography,
        meta: {
          title: 'Typography',
        },
      },

      {
        path: 'breadCrumb',
        name: 'archive-breadCrumb',
        component: BreadCrumb,
        meta: {
          title: 'BreadCrumb',
        },
      },
      {
        path: 'navigator',
        name: 'archive-navigator',
        component: Navigator,
        meta: {
          title: 'Navigator',
        },
      },
      {
        path: 'cloudView',
        name: 'archive-cloudView',
        component: CloudView,
        meta: {
          title: 'CloudView',
        },
      },

      {
        path: 'field',
        name: 'archive-field',
        component: Field,
        meta: {
          title: 'Field',
        },
      },
      {
        path: 'checkbox',
        name: 'archive-checkbox',
        component: Checkbox,
        meta: {
          title: 'Checkbox',
        },
      },
      {
        path: 'radio',
        name: 'archive-radio',
        component: Radio,
        meta: {
          title: 'Radio',
        },
      },
      {
        path: 'datePicker',
        name: 'archive-datePicker',
        component: DatePicker,
        meta: {
          title: 'DatePicker',
        },
      },
      {
        path: 'dropDown',
        name: 'archive-dropDown',
        component: DropDown,
        meta: {
          title: 'DropDown',
        },
      },
      {
        path: 'switch',
        name: 'archive-switch',
        component: Switch,
        meta: {
          title: 'Switch',
        },
      },
      {
        path: 'uploader',
        name: 'archive-uploader',
        component: Uploader,
        meta: {
          title: 'Uploader',
        },
      },

      {
        path: 'alert',
        name: 'archive-alert',
        component: Alert,
        meta: {
          title: 'Alert',
        },
      },
      {
        path: 'notification',
        name: 'archive-notification',
        component: Notification,
        meta: {
          title: 'Notification',
        },
      },
      {
        path: 'table',
        name: 'archive-table',
        component: Table,
        meta: {
          title: 'Table',
        },
      },
      {
        path: 'fixedTable',
        name: 'archive-fixedTable',
        component: FixedTable,
        meta: {
          title: 'FixedTable',
        },
      },
      {
        path: 'tree',
        name: 'archive-tree',
        component: Tree,
        meta: {
          title: 'Tree',
        },
      },
      {
        path: 'pagination',
        name: 'archive-pagination',
        component: Pagination,
        meta: {
          title: 'Pagination',
        },
      },
      {
        path: 'tab',
        name: 'archive-tab',
        component: Tab,
        meta: {
          title: 'Tab',
        },
      },
      {
        path: 'step',
        name: 'archive-step',
        component: Step,
        meta: {
          title: 'Step',
        },
      },
      {
        path: 'stepIndicator',
        name: 'archive-stepIndicator',
        component: StepIndicator,
        meta: {
          title: 'StepIndicator',
        },
      },
      {
        path: 'list',
        name: 'archive-list',
        component: List,
        meta: {
          title: 'List',
        },
      },
      {
        path: 'solutionList',
        name: 'archive-solutionList',
        component: ListSolution,
        meta: {
          title: 'List (Solution)',
        },
      },
      {
        path: 'listbox',
        name: 'archive-listbox',
        component: Listbox,
        meta: {
          title: 'Listbox',
        },
      },

      {
        path: 'segment',
        name: 'archive-segment',
        component: Segment,
        meta: {
          title: 'Segment',
        },
      },
      {
        path: 'chartLayout',
        name: 'archive-chartLayout',
        component: ViewChartLayout,
        meta: {
          title: 'ViewChartLayout',
        },
      },
      {
        path: 'barChart',
        name: 'archive-barChart',
        component: ViewBarChart,
        meta: {
          title: 'ViewBarChart',
        },
      },
      {
        path: 'lineChart',
        name: 'archive-lineChart',
        component: ViewLineChart,
        meta: {
          title: 'ViewLineChart',
        },
      },
      {
        path: 'pieChart',
        name: 'archive-pieChart',
        component: ViewPieChart,
        meta: {
          title: 'ViewPieChart',
        },
      },
      {
        path: 'areaChart',
        name: 'archive-areaChart',
        component: ViewAreaChart,
        meta: {
          title: 'ViewAreaChart',
        },
      },
      {
        path: 'doughnutChart',
        name: 'archive-doughnutChart',
        component: ViewDoughnutChart,
        meta: {
          title: 'ViewDoughnutChart',
        },
      },
    ],
  },
  {
    path: '/archive/layout',
    name: 'layout',
    meta: {
      title: 'Layout',
    },
    children: [
      {
        path: '',
        name: 'layout-basic',
        component: Layout,
        meta: {
          title: '레이아웃',
        },
      },
      {
        path: 'list',
        name: 'layout-list',
        component: LayoutList,
        meta: {
          title: '레이아웃(목록)',
        },
      },
      {
        path: 'listTab',
        name: 'layout-list-tab',
        component: LayoutListTab,
        meta: {
          title: '레이아웃(목록_탭)',
        },
      },
      {
        path: 'listTabSideView',
        name: 'layout-list-tab-sideview',
        component: LayoutListTabSideView,
        meta: {
          title: '레이아웃(목록)_탭,사이드뷰',
        },
      },
      {
        path: 'listSideView',
        name: 'layout-list-sideview',
        component: LayoutListSideView,
        meta: {
          title: '레이아웃(목록)_사이드뷰',
        },
      },
      {
        path: 'listExpandTable',
        name: 'layout-list-expandtable',
        component: LayoutListExpandTable,
        meta: {
          title: '레이아웃(목록)_확장테이블,패널',
        },
      },
      {
        path: 'detail',
        name: 'layout-detail',
        component: LayoutDetail,
        meta: {
          title: '레이아웃(상세)',
        },
      },
      {
        path: 'detailPanel',
        name: 'layout-detail-panel',
        component: LayoutDetailPanel,
        meta: {
          title: '레이아웃(상세_패널)',
        },
      },
      {
        path: 'detailTreeView',
        name: 'layout-detail-tree-view',
        component: LayoutDetailTreeView,
        meta: {
          title: '레이아웃(상세_트리뷰)',
        },
      },
      {
        path: 'create',
        name: 'layout-create',
        component: LayoutCreate,
        meta: {
          title: '레이아웃(생성)',
        },
      },
      {
        path: 'createStep',
        name: 'layout-create-step',
        component: LayoutCreateStep,
        meta: {
          title: '레이아웃(생성_스텝)',
        },
      },
      {
        path: 'createStepPanel',
        name: 'layout-create-step-panel',
        component: LayoutCreateStepPanel,
        meta: {
          title: '레이아웃(생성_스텝,패널)',
        },
      },
      {
        path: 'dashboard',
        name: 'layout-dashboard',
        component: LayoutDashboard,
        meta: {
          title: '레이아웃(대시보드)',
        },
      },
    ],
  },
];
