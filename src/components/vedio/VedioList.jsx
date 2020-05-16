import React from 'react';
import { Table, Button, Row, Col, Card } from 'antd';
import { advisedVedio, listVedios } from '../../axios';
import BreadcrumbCustom from '../BreadcrumbCustom';
import { Link } from 'react-router-dom';

class VedioList extends React.Component {
    state = {
        loading: false,
        data: [],
        pageNo: 1,
        pageSize: 10,
        total: 0,
    };

    columns = [{
        title: '视频类别',
        dataIndex: 'VedioType',
    }, {
        title: '视频子类别',
        dataIndex: 'SubVedioType',
    }, {
        title: '标题',
        dataIndex: 'Title',
    }, {
        title: '发布时间',
        dataIndex: 'CreatedAt',
    }, {
        title: '播放量',
        dataIndex: 'Views',
    }, {
        title: '收藏量',
        dataIndex: 'Collects',
    }, {
        title: '推荐',
        dataIndex: 'AdvisedShow',
        render: (text, record) => record.AdvisedShow ? '推荐' : '未推荐',
    }, {
        title: '操作',
        key: 'action',
        render: (text, record) => <Button onClick={() => this.handleFinish(record.ID)}>推荐</Button>,
    }];


    componentDidMount() {
        this.start();
    }

    handleFinish = id => {
        advisedVedio(id).then(res => {
            this.start();
        });
    };

    start = () => {
        this.setState({ loading: true });
        listVedios(this.state.pageNo, this.state.pageSize).then(({ data, total }) => {
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
        listVedios(pageNo, this.state.pageSize).then(({ data, total }) => {
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
                <BreadcrumbCustom first="视频管理" second="视频" />
                <Row gutter={16}>
                    <Col className="gutter-row" md={24}>
                        <div className="gutter-box">
                            <Card title="视频列表" bordered={false}>
                                <div style={{ marginBottom: 16 }}>
                                    <Link to={'/app/vedio/add'}><Button
                                        type="primary">添加视频</Button></Link>
                                    <Button type="primary" onClick={this.start}
                                            disabled={loading} loading={loading}
                                    >Reload</Button>
                                </div>
                                <Table columns={this.columns} dataSource={this.state.data} pagination={{
                                    pageNo: pageNo,
                                    pageSize: pageSize,
                                    loading: loading,
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

export default VedioList;
