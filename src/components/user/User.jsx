/**
 * Created by hao.cheng on 2017/4/16.
 */
import React from 'react';
import { Table, Button, Row, Col, Card } from 'antd';
import { listUsers } from '../../axios';
import BreadcrumbCustom from '../BreadcrumbCustom';

const columns = [{
    title: 'ID',
    dataIndex: 'ID',
    width: 100,
}, {
    title: '手机号',
    dataIndex: 'Phone',
    width: 80,
}, {
    title: '用户名',
    dataIndex: 'Username',
    width: 80,
}, {
    title: '注册时间',
    dataIndex: 'CreatedAt',
    width: 80,
}, {
    title: '余额',
    dataIndex: 'Amount',
    width: 200,
}];

class User extends React.Component {
    state = {
        loading: false,
        data: [],
        pageNo: 1,
        pageSize: 10,
        total: 0,
    };

    componentDidMount() {
        this.start();
    }

    start = () => {
        this.setState({ loading: true });
        listUsers(this.state.pageNo, this.state.pageSize).then(({ data, total }) => {
            this.setState({
                data: data,
                loading: false,
                total: total,
            });
        });
    };

    pagination = (pageNo) => {
        this.setState({ pageNo: pageNo, loading: true });
        listUsers(pageNo, this.state.pageSize).then(({ data, total }) => {
            this.setState({
                data: data,
                loading: false,
                total: total,
            });
        });
    };

    render() {
        const { pageNo, pageSize, total, loading } = this.state;
        return (
            <div className="gutter-example">
                <BreadcrumbCustom first="用户管理" second="用户" />
                <Row gutter={16}>
                    <Col className="gutter-row" md={24}>
                        <div className="gutter-box">
                            <Card title="用户列表" bordered={false}>
                                <div style={{ marginBottom: 16 }}>
                                    <Button type="primary" onClick={this.start}
                                            disabled={loading} loading={loading}
                                    >Reload</Button>
                                </div>
                                <Table columns={columns} dataSource={this.state.data} pagination={{
                                    pageNo: pageNo,
                                    pageSize: pageSize,
                                    loading: loading,
                                    total: total,
                                    onChange: this.pagination,
                                }} />
                            </Card>
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default User;
