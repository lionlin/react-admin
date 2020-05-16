/**
 * Created by hao.cheng on 2017/4/16.
 */
import React from 'react';
import { Button, Row, Card, Form, Input, Select, notification } from 'antd';
import BreadcrumbCustom from '../BreadcrumbCustom';
import { addVedio, getSystemConfig, updateSystemConfig } from '../../axios';

const FormItem = Form.Item;
const { Option } = Select;

class UpdateSystemConfig extends React.Component {
    state = {
        loading: false,
        data: {},
    };

    componentDidMount() {
        this.start();
    }

    start = () => {
        this.setState({ loading: true });
        getSystemConfig().then(({ data }) => {
            this.setState({
                data: data,
                loading: false,
            });
        });
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
                updateSystemConfig(values).then(({ code, message }) => {
                    this.setState({
                        loading: false,
                    });
                    if (code === 0) {
                        this.props.form.resetFields();
                        this.openNotificationWithIcon('success', '更新成功', '成功更新视频.');
                    } else {
                        this.openNotificationWithIcon('error', '更新失败', message);
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
                <BreadcrumbCustom first="系统配置" second="更新配置" />
                <Row gutter={16}>
                    <div className="gutter-box">
                        <Card title="更新配置" bordered={false}>
                            <Form onSubmit={this.handleSubmit}>
                                <FormItem
                                    {...formItemLayout}
                                    label="代理抽成比例"
                                >
                                    {getFieldDecorator('agentRate', {
                                        initialValue: this.state.data.AgentRate,
                                        rules: [{
                                            required: true, message: '请输入代理抽成比例!',
                                        }],
                                    })(
                                        <Input placeHolder={'请输入代理抽成比例'} />,
                                    )}
                                </FormItem>
                                <FormItem
                                    {...formItemLayout}
                                    label="棋牌赠送金额"
                                >
                                    {getFieldDecorator('qpGameReward', {
                                        initialValue: this.state.data.QPGameReward,
                                        rules: [{
                                            required: true, message: '请输入棋牌赠送金额!',
                                        }],
                                    })(
                                        <Input />,
                                    )}
                                </FormItem>
                                <FormItem
                                    {...formItemLayout}
                                    label="是否跳转视频app"
                                >
                                    {getFieldDecorator('vedioPermission', {
                                        initialValue: this.state.data.VedioPermission ? 'true' : 'false',
                                        rules: [{
                                            required: true, message: '请选择是否跳转视频app!',
                                        }],
                                    })(
                                        <Select placeholder="请选择是否跳转视频app">
                                            <Option value="true">是</Option>
                                            <Option value="false">否</Option>
                                        </Select>,
                                    )}
                                </FormItem>
                                <FormItem
                                    {...formItemLayout}
                                    label="是否邀请码进入app"
                                >
                                    {getFieldDecorator('inviteCodePermission', {
                                        initialValue: this.state.data.InviteCodePermission ? 'true' : 'false',
                                        rules: [{
                                            required: true, message: '请选择是否邀请码进入app!',
                                        }],
                                    })(
                                        <Select placeholder="请选择是否邀请码进入app">
                                            <Option value="true">是</Option>
                                            <Option value="false">否</Option>
                                        </Select>,
                                    )}
                                </FormItem>
                                <FormItem {...tailFormItemLayout}>
                                    <Button type="primary" htmlType="submit" size="large"
                                            loading={this.state.loading}>更新</Button>
                                </FormItem>
                            </Form>
                        </Card>
                    </div>
                </Row>
            </div>
        );
    }
}

export default Form.create()(UpdateSystemConfig);
