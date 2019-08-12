/**
 * Created by hao.cheng on 2017/4/16.
 */
import React from 'react';
import { Table, Button, Row, Col, Card } from 'antd';
import { listLotteryTypes } from '../../axios';
import BreadcrumbCustom from '../BreadcrumbCustom';

const columns = [{
    title: '彩票简称',
    dataIndex: 'LotteryType',
    width: 80,
}, {
    title: '彩票',
    dataIndex: 'Name',
    width: 80,
}, {
    title: '开始时间',
    dataIndex: 'StartTime',
    width: 80,
}, {
    title: '结束时间',
    dataIndex: 'EndTime',
    width: 80,
}, {
    title: '间隔时间',
    dataIndex: 'Interval',
    width: 80,
}];

class Lottery extends React.Component {
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
        listLotteryTypes(this.state.pageNo, this.state.pageSize).then(({ data, total }) => {
            this.setState({
                data: data,
                loading: false,
                total: total,
            });
        });
    };

    pagination = (pageNo) => {
        this.setState({ pageNo: pageNo, loading: true });
        console.log(pageNo);
        listLotteryTypes(pageNo, this.state.pageSize).then(({ data, total }) => {
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
                <BreadcrumbCustom first="彩票管理" second="彩票" />
                <Row gutter={16}>
                    <Col className="gutter-row" md={24}>
                        <div className="gutter-box">
                            <Card title="彩票列表" bordered={false}>
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
                                    onChange: this.pagination}} />
                            </Card>
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Lottery;
