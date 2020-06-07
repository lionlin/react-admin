import React from 'react';
import { Button, Row, Card, Form, Input, Select, notification } from 'antd';
import BreadcrumbCustom from '../BreadcrumbCustom';
import { addLiveVedio } from '../../axios';

const FormItem = Form.Item;
const { Option } = Select;

class AddLiveVedio extends React.Component {
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
                addLiveVedio(values).then(({ code, message }) => {
                    this.setState({
                        loading: false,
                    });
                    if (code === 0) {
                        this.props.form.resetFields();
                        this.openNotificationWithIcon('success', '添加成功', '成功.');
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
                <BreadcrumbCustom first="视频类别" second="添加视频" />
                <Row gutter={16}>
                    <div className="gutter-box">
                        <Card title="添加视频" bordered={false}>
                            <Form onSubmit={this.handleSubmit}>
                                <FormItem
                                    {...formItemLayout}
                                    label="头像"
                                >
                                    {getFieldDecorator('headImg', {
                                        rules: [{
                                            required: true, message: '请输入头像!',
                                        }],
                                    })(
                                        <Input placeHolder={'请输入头像'} />,
                                    )}
                                </FormItem>
                                <FormItem
                                    {...formItemLayout}
                                    label="昵称"
                                >
                                    {getFieldDecorator('nickName', {
                                        rules: [{
                                            required: true, message: '请输入昵称!',
                                        }],
                                    })(
                                        <Input placeHolder={'请输入昵称'} />,
                                    )}
                                </FormItem>
                                <FormItem
                                    {...formItemLayout}
                                    label="视频地址"
                                >
                                    {getFieldDecorator('url', {
                                        rules: [{
                                            required: true, message: '请输入视频地址!',
                                        }],
                                    })(
                                        <Input placeHolder={'请输入视频地址'} />,
                                    )}
                                </FormItem>
                                <FormItem
                                    {...formItemLayout}
                                    label="时长"
                                >
                                    {getFieldDecorator('howLong', {
                                        rules: [{
                                            required: true, message: '请输入视频时长!',
                                        }],
                                    })(
                                        <Input placeHolder={'请输入视频时长'} />,
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

export default Form.create()(AddLiveVedio);
