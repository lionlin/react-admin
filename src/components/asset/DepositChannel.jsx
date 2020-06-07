import React from 'react';
import { Table, Button, Row, Col, Card, Form, Input } from 'antd';
import { listDepositChannels, updateDepositChannel } from '../../axios';
import BreadcrumbCustom from '../BreadcrumbCustom';
import { Link } from 'react-router-dom';

class Deposit extends React.Component {
    state = {
        data: [],
        pageNo: 1,
        pageSize: 10,
        phone: '',
        total: 0,
    };

    columns = [{
        title: 'ID',
        dataIndex: 'ID',
    }, {
        title: '渠道类型',
        dataIndex: 'Type',
    }, {
        title: '渠道名称',
        dataIndex: 'Type',
    }, {
        title: '商户ID',
        dataIndex: 'MchID',
    }, {
        title: '回调地址',
        dataIndex: 'NotifyUrl',
    }, {
        title: '状态',
        dataIndex: 'Status',
        render: (text) => <span>{text == 0 ? '未启用' : '正常'}</span>,
    }, {
        title: '操作',
        key: 'action',
        render: (text, record) => <Link
            to={{
                pathname: '/app/asset/updateDepositChannel',
                search: JSON.stringify(record),
            }}><Button>更新</Button></Link>,
    }];

    getFields() {
        const { getFieldDecorator } = this.props.form;
        const children = [
            <Form.Item label={`手机号`}>
                {getFieldDecorator(`phone`, {})(<Input style={{ width: 200 }} placeholder="请输入手机号" />)}
            </Form.Item>,
        ];
        return children;
    }

    handleSearch = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            const phone = values.phone != undefined ? values.phone : '';
            this.setState({
                phone: phone,
            });
            this.start(this.state.pageNo, this.state.pageSize, phone);
        });
    };

    handleReset = () => {
        this.props.form.resetFields();
    };

    componentDidMount() {
        this.start(this.state.pageNo, this.state.pageSize, this.state.phone);
    }

    start = (pageNo, pageSize, phone) => {
        listDepositChannels(pageNo, pageSize).then(({ data, total }) => {
            this.setState({
                data: data,
                total: total,
            });
        });
    };

    pagination = (pageNo) => {
        this.setState({ pageNo: pageNo });
        this.start(pageNo, this.state.pageSize, this.state.phone);
    };

    render() {
        const { pageNo, pageSize, total } = this.state;
        return (
            <div className="gutter-example">
                <BreadcrumbCustom first="充值渠道" second="渠道管理" />
                <Row gutter={16}>
                    <Col className="gutter-row" md={24}>
                        <div className="gutter-box">
                            <Card title="渠道列表" bordered={false}>
                                <div style={{ marginBottom: 16 }}>
                                    <Form layout="inline" className="ant-advanced-search-form"
                                          onSubmit={this.handleSearch}>
                                        <Row gutter={24}>{this.getFields()}</Row>
                                        <Row>
                                            <Col span={24} style={{ textAlign: 'right' }}>
                                                <Button type="primary" htmlType="submit">
                                                    Search
                                                </Button>
                                                <Button style={{ marginLeft: 8 }} onClick={this.handleReset}>
                                                    Clear
                                                </Button>
                                            </Col>
                                        </Row>
                                    </Form>
                                </div>
                                <Table columns={this.columns} dataSource={this.state.data} pagination={{
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

export default Form.create()(Deposit);
