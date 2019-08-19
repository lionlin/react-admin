import React from 'react';
import { Table, Button, Row, Col, Card, Form, Select, Input } from 'antd';
import { listLotteryResults } from '../../axios';
import BreadcrumbCustom from '../BreadcrumbCustom';

const { Option } = Select;

const columns = [{
    title: '彩票',
    dataIndex: 'LotteryType',
    width: 100,
}, {
    title: '开奖期数',
    dataIndex: 'No',
    width: 80,
}, {
    title: '开奖结果',
    dataIndex: 'Result',
    width: 80,
}, {
    title: '开奖时间',
    dataIndex: 'PublishTime',
    width: 200,
}, {
    title: '下期期数',
    dataIndex: 'NextNo',
    width: 80,
}, {
    title: '下期开奖时间',
    dataIndex: 'NextTime',
    width: 200,
}];

class LotteryResults extends React.Component {
    state = {
        data: [],
        pageNo: 1,
        pageSize: 10,
        lotteryType: '',
        total: 0,
    };

    getFields() {
        const { getFieldDecorator } = this.props.form;
        const children = [
            <Form.Item label={`彩票种类`}>
                {getFieldDecorator(`lotteryType`, {})(
                    <Select style={{ width: 200 }} placeholder="请选择彩票类型">
                        <Option value="nk3">新快3</Option>
                        <Option value="npk10">新pk10</Option>
                        <Option value="n11x5">新11选5</Option>
                    </Select>,
                )}
            </Form.Item>,
            <Form.Item label={`彩票期号`}>
                {getFieldDecorator(`lotteryNo`, {})(<Input style={{ width: 200 }} placeholder="请输入彩票期号" />)}
            </Form.Item>,
        ];
        return children;
    }

    handleSearch = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            console.log(values);
            const lotteryType = values.lotteryType != undefined ? values.lotteryType : '';
            this.setState({
                lotteryType: lotteryType,
            });
            this.start(this.state.pageNo, this.state.pageSize, lotteryType);
        });
    };

    handleReset = () => {
        this.props.form.resetFields();
    };

    componentDidMount() {
        this.start(this.state.pageNo, this.state.pageSize, this.state.lotteryType);
    }

    start = (pageNo, pageSize, lotteryType) => {
        listLotteryResults(pageNo, pageSize, lotteryType).then(({ data, total }) => {
            this.setState({
                data: data,
                total: total,
            });
        });
    };

    pagination = (pageNo) => {
        this.setState({ pageNo: pageNo });
        this.start(pageNo, this.state.pageSize, this.state.lotteryType);
    };

    render() {
        const { pageNo, pageSize, total } = this.state;
        return (
            <div>
                <div className="gutter-example">
                    <BreadcrumbCustom first="彩票管理" second="彩票开奖" />
                    <Row gutter={16}>
                        <Col className="gutter-row" md={24}>
                            <div className="gutter-box">
                                <Card title="彩票开奖" bordered={false}>
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
            </div>

        );
    }
}

export default Form.create()(LotteryResults);
