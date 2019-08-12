/**
 * Created by hao.cheng on 2017/4/16.
 */
import React from 'react';
import { Button, Row, Card, Form, Input, Select } from 'antd';
import BreadcrumbCustom from '../BreadcrumbCustom';

const FormItem = Form.Item;
const { Option } = Select;

class AddPrivateLotteryResult extends React.Component {
    state = {
        loading: false,
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
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
                                    hasFeedback
                                >
                                    {getFieldDecorator('lotteryType', {
                                        rules: [{
                                            required: true, message: '请选择彩票!',
                                        }],
                                    })(
                                        <Select defaultValue="nk3">
                                            <Option value="nk3">nk3</Option>
                                            <Option value="lucy">Lucy</Option>
                                        </Select>,
                                    )}
                                </FormItem>
                                <FormItem
                                    {...formItemLayout}
                                    label="开奖期数"
                                    extra={'例如：20190808001'}
                                >
                                    {getFieldDecorator('no', {
                                        rules: [{
                                            required: true, message: '请输入开奖期数!',
                                        }],
                                    })(
                                        <Input />,
                                    )}
                                </FormItem>
                                <FormItem
                                    {...formItemLayout}
                                    label="开奖号码"
                                    extra={'例如快3开奖号码为：1,2,3'}
                                >
                                    {getFieldDecorator('result', {
                                        rules: [{
                                            required: true, message: '请确认开奖结果，以,分割!',
                                        }],
                                    })(
                                        <Input />,
                                    )}
                                </FormItem>
                                <FormItem {...tailFormItemLayout}>
                                    <Button type="primary" htmlType="submit" size="large">添加</Button>
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
