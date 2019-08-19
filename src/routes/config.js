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
                { key: '/app/user/agent', title: '代理管理', component: 'Agent' },
            ],
        },
        {
            key: '/app/lottery',
            title: '彩票管理',
            icon: 'trophy',
            subs: [
                { key: '/app/lottery/lottery', title: '彩票管理', component: 'Lottery' },
                { key: '/app/lottery/lotteryResults', title: '彩票开奖', component: 'LotteryResults' },
                { key: '/app/lottery/preLotteryResults', title: '私彩计划', component: 'PreLotteryResults' },
            ],
        },
        {
            key: '/app/asset',
            title: '充值提现',
            icon: 'bank',
            subs: [
                { key: '/app/asset/deposit', title: '充值管理', component: 'Deposit' },
                { key: '/app/asset/withdraw', title: '提现管理', component: 'Withdraw' },
            ],
        },
        {
            key: '/app/bets',
            title: '投注管理',
            icon: 'wallet',
            subs: [
                { key: '/app/bets/statistic', title: '投注统计', component: 'Lottery' },
                { key: '/app/bets/list', title: '投注明细', component: 'Bet' },
            ],
        },
        {
            key: '/app/ui',
            title: 'UI',
            icon: 'scan',
            subs: [
                { key: '/app/ui/buttons', title: '按钮', component: 'Buttons' },
                { key: '/app/ui/icons', title: '图标', component: 'Icons' },
                { key: '/app/ui/spins', title: '加载中', component: 'Spins' },
                { key: '/app/ui/modals', title: '对话框', component: 'Modals' },
                { key: '/app/ui/notifications', title: '通知提醒框', component: 'Notifications' },
                { key: '/app/ui/tabs', title: '标签页', component: 'Tabs' },
                { key: '/app/ui/banners', title: '轮播图', component: 'Banners' },
                { key: '/app/ui/wysiwyg', title: '富文本', component: 'WysiwygBundle' },
                { key: '/app/ui/drags', title: '拖拽', component: 'Drags' },
                { key: '/app/ui/gallery', title: '画廊', component: 'Gallery' },
                { key: '/app/ui/map', title: '地图', component: 'MapUi' },
            ],
        },
        {
            key: '/app/animation',
            title: '动画',
            icon: 'rocket',
            subs: [
                {
                    key: '/app/animation/basicAnimations',
                    title: '基础动画',
                    component: 'BasicAnimations',
                },
                {
                    key: '/app/animation/exampleAnimations',
                    title: '动画案例',
                    component: 'ExampleAnimations',
                },
            ],
        },
        {
            key: '/app/table',
            title: '表格',
            icon: 'copy',
            subs: [
                { key: '/app/table/basicTable', title: '基础表格', component: 'BasicTable' },
                { key: '/app/table/advancedTable', title: '高级表格', component: 'AdvancedTable' },
                {
                    key: '/app/table/asynchronousTable',
                    title: '异步表格',
                    component: 'AsynchronousTable',
                },
            ],
        },
        {
            key: '/app/form',
            title: '表单',
            icon: 'edit',
            subs: [{ key: '/app/form/basicForm', title: '基础表单', component: 'BasicForm' }],
        },
        {
            key: '/app/chart',
            title: '图表',
            icon: 'area-chart',
            subs: [
                { key: '/app/chart/echarts', title: 'echarts', component: 'Echarts' },
                { key: '/app/chart/recharts', title: 'recharts', component: 'Recharts' },
            ],
        },
        {
            key: '/subs4',
            title: '页面',
            icon: 'switcher',
            subs: [{ key: '/login', title: '登录' }, { key: '/404', title: '404' }],
        },
        {
            key: '/app/auth',
            title: '权限管理',
            icon: 'safety',
            subs: [
                { key: '/app/auth/basic', title: '基础演示', component: 'AuthBasic' },
                {
                    key: '/app/auth/routerEnter',
                    title: '路由拦截',
                    component: 'RouterEnter',
                    auth: 'auth/testPage',
                },
            ],
        },
    ],
    others: [
        { key: '/app/lottery/preLottery/add', title: '设置开奖结果', component: 'AddPreLotteryResult' },
    ], // 非菜单相关路由
};
