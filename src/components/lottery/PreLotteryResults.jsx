/**
 * Created by hao.cheng on 2017/4/16.
 */
import React from 'react';
import { Table, Button, Row, Col, Card } from 'antd';
import { listPreLotteryResults } from '../../axios';
import BreadcrumbCustom from '../BreadcrumbCustom';
import { Link } from 'react-router-dom';

const columns = [{
    title: '彩票',
    dataIndex: 'LotteryType',
    width: 100,
    // render: (text, record) => <a href={record.url} target="_blank" rel="noopener noreferrer">{text}</a>,
}, {
    title: '开奖期数',
    dataIndex: 'No',
    width: 80,
}, , {
    title: '开奖日期',
    dataIndex: 'Date',
    width: 80,
}, {
    title: '开奖结果',
    dataIndex: 'Result',
    width: 80,
}];

class PreLotteryResults extends React.Component {
    state = {
        data: [],
        pageNo: 1,
        pageSize: 10,
        total: 0,
    };

    componentDidMount() {
        this.start();
    }

    start = () => {
        listPreLotteryResults(this.state.pageNo, this.state.pageSize).then(({ data, total }) => {
            this.setState({
                data: data,
                total: total,
            });
        });
    };

    pagination = (pageNo) => {
        this.setState({ pageNo: pageNo });
        console.log(pageNo);
        listPreLotteryResults(pageNo, this.state.pageSize).then(({ data, total }) => {
            this.setState({
                data: data,
                total: total,
            });
        });
    };

    render() {
        const { pageNo, pageSize, total } = this.state;
        return (
            <div className="gutter-example">
                <BreadcrumbCustom first="彩票管理" second="私彩" />
                <Row gutter={16}>
                    <Col className="gutter-row" md={24}>
                        <div className="gutter-box">
                            <Card title="私彩开奖" bordered={false}>
                                <div style={{ marginBottom: 16 }}>
                                    <Link to={'/app/lottery/preLottery/add'}><Button
                                        type="primary">设置开奖</Button></Link>
                                </div>
                                <Table columns={columns} dataSource={this.state.data} pagination={{
                                    pageNo: pageNo,
                                    pageSize: pageSize,
                                    total: total,
                                    onChange: this.pagination,
                                    showTotal: ((total) => {
                                        return `共 ${total} 条`;
                                    }),
                                }} />
                            </Card>
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default PreLotteryResults;
