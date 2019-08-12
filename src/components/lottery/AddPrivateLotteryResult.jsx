/**
 * Created by hao.cheng on 2017/4/16.
 */
import React from 'react';
import { Button, Row, Card, Form, Input, Select, notification } from 'antd';
import BreadcrumbCustom from '../BreadcrumbCustom';
import { addPrivateLotteryResult } from '../../axios';

const FormItem = Form.Item;
const { Option } = Select;

class AddPrivateLotteryResult extends React.Component {
    state = {
        loading: false,
    };

    openNotificationWithIcon = (type, message, description) => {
        notification[type]({
            message: message,
            description: description,
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                this.setState({ loading: true });
                console.log('Received values of form: ', values);
                addPrivateLotteryResult(values).then(({ code, message }) => {
                    this.setState({
                        loading: false,
                    });
                    if (code == 0) {
                        this.props.form.resetFields();
                        this.openNotificationWithIcon('success', '添加成功', '成功添加开奖结果.');
                    } else {
                        this.openNotificationWithIcon('error', '添加失败', message);
                    }
                });
            }
        });
    };

    render() {
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 8 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 14 },
            },
        };
        const tailFormItemLayout = {
            wrapperCol: {
                xs: {
                    span: 24,
                    offset: 0,
                },
                sm: {
                    span: 14,
                    offset: 8,
                },
            },
        };
        return (
            <div className="gutter-example">
                <BreadcrumbCustom first="彩票" second="设置开奖号码" />
                <Row gutter={16}>
                    <div className="gutter-box">
                        <Card title="设置开奖号码" bordered={false}>
                            <Form onSubmit={this.handleSubmit}>
                                <FormItem
                                    {...formItemLayout}
                                    label="彩票"
                                >
                                    {getFieldDecorator('lotteryType', {
                                        rules: [{
                                            required: true, message: '请选择彩票!',
                                        }],
                                    })(
                                        <Select placeholder="请选择彩票类型">
                                            <Option value="nk3">新快3</Option>
                                            <Option value="npk10">新pk10</Option>
                                            <Option value="n11x5">新11选5</Option>
                                        </Select>,
                                    )}
                                </FormItem>
                                <FormItem
                                    {...formItemLayout}
                                    label="开奖期数"
                                >
                                    {getFieldDecorator('no', {
                                        rules: [{
                                            required: true, message: '请输入开奖期数!',
                                        }],
                                    })(
                                        <Input placeHolder={'请输入开奖期数，例如：20190808001'} />,
                                    )}
                                </FormItem>
                                <FormItem
                                    {...formItemLayout}
                                    label="开奖号码"
                                >
                                    {getFieldDecorator('result', {
                                        rules: [{
                                            required: true, message: '请确认开奖结果，以英文,分割!',
                                        }],
                                    })(
                                        <Input placeHolder={'请输入开奖结果，例如快3开奖号码为：1,2,3'} />,
                                    )}
                                </FormItem>
                                <FormItem {...tailFormItemLayout}>
                                    <Button type="primary" htmlType="submit" size="large"
                                            loading={this.state.loading}>添加</Button>
                                </FormItem>
                            </Form>
                        </Card>
                    </div>
                </Row>
            </div>
        );
    }
}

export default Form.create()(AddPrivateLotteryResult);
