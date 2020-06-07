import Loadable from 'react-loadable';
import Loading from './widget/Loading';
import BasicForm from './forms/BasicForm';
import BasicTable from './tables/BasicTables';
import AdvancedTable from './tables/AdvancedTables';
import AsynchronousTable from './tables/AsynchronousTable';
import Echarts from './charts/Echarts';
import Recharts from './charts/Recharts';
import Icons from './ui/Icons';
import Buttons from './ui/Buttons';
import Spins from './ui/Spins';
import Modals from './ui/Modals';
import Notifications from './ui/Notifications';
import Tabs from './ui/Tabs';
import Banners from './ui/banners';
import Drags from './ui/Draggable';
import Dashboard from './dashboard/Dashboard';
import Gallery from './ui/Gallery';
import BasicAnimations from './animation/BasicAnimations';
import ExampleAnimations from './animation/ExampleAnimations';
import AuthBasic from './auth/Basic';
import RouterEnter from './auth/RouterEnter';
import MapUi from './ui/map';
import User from './user/User';
import VedioList from './vedio/VedioList';
import SystemConfig from './system_config/SystemConfig';
import UpdateSystemConfig from './system_config/UpdateSystemConfig';
import AddVedio from './vedio/AddVedio';
import Deposit from './asset/Deposit';
import Withdraw from './asset/Withdraw';
import DepositChannel from './asset/DepositChannel';
import UpdateDepositChannel from './asset/UpdateDepositChannel';
import QueryParams from './extension/QueryParams';
import AddVedioType from './vedio_type/AddVedioType';
import VedioTypeList from './vedio_type/VedioTypeList';
import UpdateVedioType from './vedio_type/UpdateVedioType';
import LiveVedioList from './live_vedio/LiveVedioList';
import AddLiveVedio from './live_vedio/AddLiveVedio';
import UpdateLiveVedio from './live_vedio/UpdateLiveVedio';

const WysiwygBundle = Loadable({
    // 按需加载富文本配置
    loader: () => import('./ui/Wysiwyg'),
    loading: Loading,
});

export default {
    BasicForm,
    BasicTable,
    AdvancedTable,
    AsynchronousTable,
    Echarts,
    Recharts,
    Icons,
    Buttons,
    Spins,
    Modals,
    Notifications,
    Tabs,
    Banners,
    Drags,
    Dashboard,
    Gallery,
    BasicAnimations,
    ExampleAnimations,
    QueryParams,
    AuthBasic,
    RouterEnter,
    WysiwygBundle,
    MapUi,
    User,
    VedioList,
    AddVedio,
    Deposit,
    Withdraw,
    SystemConfig,
    UpdateSystemConfig,
    DepositChannel,
    UpdateDepositChannel,
    VedioTypeList,
    AddVedioType,
    UpdateVedioType,
    LiveVedioList,
    AddLiveVedio,
    UpdateLiveVedio,
};
