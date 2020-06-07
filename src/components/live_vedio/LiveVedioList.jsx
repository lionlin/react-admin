import React from 'react';
import { Table, Button, Row, Col, Card } from 'antd';
import { deleteLiveVedio, listLiveVedios } from '../../axios';
import BreadcrumbCustom from '../BreadcrumbCustom';
import { Link } from 'react-router-dom';

class LiveVedioList extends React.Component {
    state = {
        loading: false,
        data: [],
        pageNo: 1,
        pageSize: 10,
        total: 0,
    };

    columns = [{
        title: '昵称',
        dataIndex: 'NickName',
        width:100,
    }, {
        title: '头像',
        dataIndex: 'HeadImg',
        width:200,
    }, {
        title: '视频地址',
        dataIndex: 'Url',
        width:400,
    }, {
        title: '发布时间',
        dataIndex: 'CreatedAt',
        width:200,
    }, {
        title: '操作',
        key: 'action',
        render: (text, record) => <div><Link
            to={{
                pathname: '/app/live_vedio/update',
                search: JSON.stringify(record),
            }}><Button>更新</Button></Link><Button
            onClick={() => this.handleDelete(record.ID)}>删除</Button></div>,
    }];


    componentDidMount() {
        this.start();
    }

    handleDelete = id => {
        deleteLiveVedio(id).then(res => {
            this.start();
        });
    };

    start = () => {
        this.setState({ loading: true });
        listLiveVedios(this.state.pageNo, this.state.pageSize).then(({ data, total }) => {
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
        listLiveVedios(pageNo, this.state.pageSize).then(({ data, total }) => {
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
                <BreadcrumbCustom first="直播视频管理" second="视频" />
                <Row gutter={16}>
                    <Col className="gutter-row" md={24}>
                        <div className="gutter-box">
                            <Card title="直播视频列表" bordered={false}>
                                <div style={{ marginBottom: 16 }}>
                                    <Link to={'/app/live_vedio/add'}><Button
                                        type="primary">添加直播视频</Button></Link>
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

export default LiveVedioList;
