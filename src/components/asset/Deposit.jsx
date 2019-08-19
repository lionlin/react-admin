import React from 'react';
import { Table, Button, Row, Col, Card, Form, Input } from 'antd';
import { listDeposits } from '../../axios';
import BreadcrumbCustom from '../BreadcrumbCustom';

const columns = [{
    title: 'ID',
    dataIndex: 'ID',
    width: 100,
}, {
    title: '账号',
    dataIndex: 'User.Phone',
    width: 80,
}, {
    title: '充值类型',
    dataIndex: 'Type',
    width: 80,
}, {
    title: '充值时间',
    dataIndex: 'CreatedAt',
    width: 80,
}, {
    title: '充值金额',
    dataIndex: 'Amount',
    width: 200,
}];

class Deposit extends React.Component {
    state = {
        data: [],
        pageNo: 1,
        pageSize: 10,
        phone: '',
        total: 0,
    };

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
        listDeposits(pageNo, pageSize, phone).then(({ data, total }) => {
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
                <BreadcrumbCustom first="充值提现" second="充值管理" />
                <Row gutter={16}>
                    <Col className="gutter-row" md={24}>
                        <div className="gutter-box">
                            <Card title="充值列表" bordered={false}>
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

export default Form.create()(Deposit);