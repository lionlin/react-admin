import React from 'react';
import { Button, Row, Card, Form, Input, Select, notification } from 'antd';
import BreadcrumbCustom from '../BreadcrumbCustom';
import { updateDepositChannel } from '../../axios';

const FormItem = Form.Item;
const { Option } = Select;

class UpdateDepositChannel extends React.Component {
    state = {
        loading: false,
        data: {},
    };

    componentDidMount() {
        let search = this.props.history.location.search;
        search = search.substr(1, search.length);
        // 因为传递的有中文，所以此处需要decodeURI进行URL解码
        const searchObj = JSON.parse(decodeURI(search));
        console.log(searchObj);
        this.setState({
            data: searchObj,
        });
    }

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
                updateDepositChannel(values).then(({ code, message }) => {
                    this.setState({
                        loading: false,
                    });
                    if (code === 0) {
                        this.openNotificationWithIcon('success', '更新成功', '成功更新充值渠道.');
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
                <BreadcrumbCustom first="渠道管理" second="更新渠道" />
                <Row gutter={16}>
                    <div className="gutter-box">
                        <Card title="更新渠道" bordered={false}>
                            <Form onSubmit={this.handleSubmit}>
                                <FormItem
                                    {...formItemLayout}
                                    label="渠道ID"
                                >
                                    {getFieldDecorator('id', {
                                        initialValue: this.state.data.ID,
                                    })(
                                        <Input disabled={true} />,
                                    )}
                                </FormItem>
                                <FormItem
                                    {...formItemLayout}
                                    label="渠道类别"
                                >
                                    {getFieldDecorator('type', {
                                        initialValue: this.state.data.Type,
                                        rules: [{
                                            required: true, message: '请输入渠道类别!',
                                        }],
                                    })(
                                        <Input placeholder={'请输入渠道类别'} />,
                                    )}
                                </FormItem>
                                <FormItem
                                    {...formItemLayout}
                                    label="商户ID"
                                >
                                    {getFieldDecorator('mchID', {
                                        initialValue: this.state.data.MchID,
                                        rules: [{
                                            required: true, message: '请输入商户ID!',
                                        }],
                                    })(
                                        <Input />,
                                    )}
                                </FormItem>
                                <FormItem
                                    {...formItemLayout}
                                    label="商品ID"
                                >
                                    {getFieldDecorator('productID', {
                                        initialValue: this.state.data.ProductID,
                                        rules: [{
                                            required: true, message: '请输入产品ID!',
                                        }],
                                    })(
                                        <Input />,
                                    )}
                                </FormItem>
                                <FormItem
                                    {...formItemLayout}
                                    label="appID"
                                >
                                    {getFieldDecorator('appID', {
                                        initialValue: this.state.data.AppID,
                                        rules: [{
                                            required: true, message: '请输入商户AppID!',
                                        }],
                                    })(
                                        <Input />,
                                    )}
                                </FormItem>
                                <FormItem
                                    {...formItemLayout}
                                    label="Api地址"
                                >
                                    {getFieldDecorator('createOrderUrl', {
                                        initialValue: this.state.data.CreateOrderUrl,
                                        rules: [{
                                            required: true, message: 'Api地址!',
                                        }],
                                    })(
                                        <Input />,
                                    )}
                                </FormItem>
                                <FormItem
                                    {...formItemLayout}
                                    label="回调地址"
                                >
                                    {getFieldDecorator('notifyUrl', {
                                        initialValue: this.state.data.NotifyUrl,
                                        rules: [{
                                            required: true, message: '请输入回调地址!',
                                        }],
                                    })(
                                        <Input />,
                                    )}
                                </FormItem>
                                <FormItem
                                    {...formItemLayout}
                                    label="签名key"
                                >
                                    {getFieldDecorator('signKey', {
                                        initialValue: this.state.data.SignKey,
                                        rules: [{
                                            required: true, message: '请输入签名key!',
                                        }],
                                    })(
                                        <Input />,
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

export default Form.create()(UpdateDepositChannel);
