/**
 * Created by hao.cheng on 2017/4/16.
 */
import React from 'react';
import { Table, Button, Row, Col, Card } from 'antd';
import { getSystemConfig } from '../../axios';
import BreadcrumbCustom from '../BreadcrumbCustom';
import { Link } from 'react-router-dom';

const columns = [{
    title: '代理抽成比例',
    dataIndex: 'AgentRate',
}, {
    title: '棋牌赠送金额',
    dataIndex: 'QPGameReward',
}, {
    title: '是否进入视频app',
    dataIndex: 'VedioPermission',
    render: (text, record) => record.VedioPermission?"是":"否",
}, {
    title: '邀请码进入限制',
    dataIndex: 'InviteCodePermission',
    render: (text, record) => record.InviteCodePermission?"是":"否",
}];

class SystemConfig extends React.Component {
    state = {
        loading: false,
        data: [],
    };

    componentDidMount() {
        this.start();
    }

    start = () => {
        this.setState({ loading: true });
        getSystemConfig().then(({ data }) => {
            this.setState({
                data: [data],
                loading: false,
            });
        });
    };

    pagination = (pageNo) => {
        this.setState({ loading: true });
        getSystemConfig().then(({ data }) => {
            this.setState({
                data: [data],
                loading: false,
            });
        });
    };

    render() {
        const { loading } = this.state;
        return (
            <div className="gutter-example">
                <BreadcrumbCustom first="系统配置管理" second="系统配置" />
                <Row gutter={16}>
                    <Col className="gutter-row" md={24}>
                        <div className="gutter-box">
                            <Card title="系统配置" bordered={false}>
                                <div style={{ marginBottom: 16 }}>
                                    <Link to={'/app/system_config/update'}><Button
                                        type="primary">更新配置</Button></Link>
                                    <Button type="primary" onClick={this.start}
                                            disabled={loading} loading={loading}
                                    >Reload</Button>
                                </div>
                                <Table columns={columns} dataSource={this.state.data} />
                            </Card>
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default SystemConfig;
