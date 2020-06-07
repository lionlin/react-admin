export default {
    menus: [
        // 菜单相关路由
        { key: '/app/dashboard/index', title: '首页', icon: 'home', component: 'Dashboard' },
        {
            key: '/app/user',
            title: '用户管理',
            icon: 'user',
            subs: [
                { key: '/app/user/user', title: '用户管理', component: 'User' },
            ],
        },
        {
            key: '/app/system_config',
            title: '系统配置',
            icon: 'trophy',
            subs: [
                { key: '/app/system_config/list', title: '系统配置', component: 'SystemConfig' },
            ],
        },
        {
            key: '/app/vedio',
            title: '视频管理',
            icon: 'trophy',
            subs: [
                { key: '/app/vedio/list', title: '视频列表', component: 'VedioList' },
            ],
        },
        {
            key: '/app/live_vedio',
            title: '直播视频管理',
            icon: 'trophy',
            subs: [
                { key: '/app/live_vedio/list', title: '直播视频列表', component: 'LiveVedioList' },
            ],
        },
        {
            key: '/app/vedio_type',
            title: '视频类别管理',
            icon: 'trophy',
            subs: [
                { key: '/app/vedio_type/list', title: '视频类别列表', component: 'VedioTypeList' },
            ],
        },
        {
            key: '/app/asset',
            title: '充值提现',
            icon: 'bank',
            subs: [
                { key: '/app/asset/deposit', title: '充值管理', component: 'Deposit' },
                { key: '/app/asset/withdraw', title: '提现管理', component: 'Withdraw' },
                { key: '/app/asset/depositChannel', title: '充值渠道', component: 'DepositChannel' },
            ],
        },
        // {
        //     key: '/app/ui',
        //     title: 'UI',
        //     icon: 'scan',
        //     subs: [
        //         { key: '/app/ui/buttons', title: '按钮', component: 'Buttons' },
        //         { key: '/app/ui/icons', title: '图标', component: 'Icons' },
        //         { key: '/app/ui/spins', title: '加载中', component: 'Spins' },
        //         { key: '/app/ui/modals', title: '对话框', component: 'Modals' },
        //         { key: '/app/ui/notifications', title: '通知提醒框', component: 'Notifications' },
        //         { key: '/app/ui/tabs', title: '标签页', component: 'Tabs' },
        //         { key: '/app/ui/banners', title: '轮播图', component: 'Banners' },
        //         { key: '/app/ui/wysiwyg', title: '富文本', component: 'WysiwygBundle' },
        //         { key: '/app/ui/drags', title: '拖拽', component: 'Drags' },
        //         { key: '/app/ui/gallery', title: '画廊', component: 'Gallery' },
        //         { key: '/app/ui/map', title: '地图', component: 'MapUi' },
        //     ],
        // },
        // {
        //     key: '/app/animation',
        //     title: '动画',
        //     icon: 'rocket',
        //     subs: [
        //         {
        //             key: '/app/animation/basicAnimations',
        //             title: '基础动画',
        //             component: 'BasicAnimations',
        //         },
        //         {
        //             key: '/app/animation/exampleAnimations',
        //             title: '动画案例',
        //             component: 'ExampleAnimations',
        //         },
        //     ],
        // },
        // {
        //     key: '/app/table',
        //     title: '表格',
        //     icon: 'copy',
        //     subs: [
        //         { key: '/app/table/basicTable', title: '基础表格', component: 'BasicTable' },
        //         { key: '/app/table/advancedTable', title: '高级表格', component: 'AdvancedTable' },
        //         {
        //             key: '/app/table/asynchronousTable',
        //             title: '异步表格',
        //             component: 'AsynchronousTable',
        //         },
        //     ],
        // },
        // {
        //     key: '/app/form',
        //     title: '表单',
        //     icon: 'edit',
        //     subs: [{ key: '/app/form/basicForm', title: '基础表单', component: 'BasicForm' }],
        // },
        // {
        //     key: '/app/chart',
        //     title: '图表',
        //     icon: 'area-chart',
        //     subs: [
        //         { key: '/app/chart/echarts', title: 'echarts', component: 'Echarts' },
        //         { key: '/app/chart/recharts', title: 'recharts', component: 'Recharts' },
        //     ],
        // },
        // {
        //     key: '/subs4',
        //     title: '页面',
        //     icon: 'switcher',
        //     subs: [{ key: '/login', title: '登录' }, { key: '/404', title: '404' }],
        // },
        // {
        //     key: '/app/auth',
        //     title: '权限管理',
        //     icon: 'safety',
        //     subs: [
        //         { key: '/app/auth/basic', title: '基础演示', component: 'AuthBasic' },
        //         {
        //             key: '/app/auth/routerEnter',
        //             title: '路由拦截',
        //             component: 'RouterEnter',
        //             auth: 'auth/testPage',
        //         },
        //     ],
        // },
        // {
        //     key: '/app/extension',
        //     title: '功能扩展',
        //     icon: 'bars',
        //     subs: [
        //         {
        //             key: '/app/extension/queryParams',
        //             title: '问号形式参数',
        //             component: 'QueryParams',
        //             query: '?param1=1&param2=2',
        //         },
        //     ],
        // },
    ],
    others: [
        { key: '/app/vedio/add', title: '添加视频', component: 'AddVedio' },
        { key: '/app/vedio_type/add', title: '添加视频类别', component: 'AddVedioType' },
        { key: '/app/vedio_type/update', title: '更新视频类别', component: 'UpdateVedioType' },
        { key: '/app/live_vedio/add', title: '添加直播视频', component: 'AddLiveVedio' },
        { key: '/app/live_vedio/update', title: '更新直播视频', component: 'UpdateLiveVedio' },
        { key: '/app/system_config/update', title: '更新系统配置', component: 'UpdateSystemConfig' },
        { key: '/app/asset/updateDepositChannel', title: '更新充值渠道', component: 'UpdateDepositChannel' },
    ], // 非菜单相关路由
};
