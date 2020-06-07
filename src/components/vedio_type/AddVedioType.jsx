import React from 'react';
import { Button, Row, Card, Form, Input, Select, notification } from 'antd';
import BreadcrumbCustom from '../BreadcrumbCustom';
import { addVedioType } from '../../axios';

const FormItem = Form.Item;
const { Option } = Select;

class AddVedioType extends React.Component {
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
                addVedioType(values).then(({ code, message }) => {
                    this.setState({
                        loading: false,
                    });
                    if (code === 0) {
                        this.props.form.resetFields();
                        this.openNotificationWithIcon('success', '添加成功', '成功添加视频.');
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
                <BreadcrumbCustom first="视频类别" second="添加视频类别" />
                <Row gutter={16}>
                    <div className="gutter-box">
                        <Card title="添加视频类别" bordered={false}>
                            <Form onSubmit={this.handleSubmit}>
                                <FormItem
                                    {...formItemLayout}
                                    label="视频类别"
                                >
                                    {getFieldDecorator('vedioType', {
                                        rules: [{
                                            required: true, message: '请输入视频类别!',
                                        }],
                                    })(
                                        <Input placeHolder={'请输入视频类别'} />,
                                    )}
                                </FormItem>
                                <FormItem
                                    {...formItemLayout}
                                    label="视频父类别"
                                >
                                    {getFieldDecorator('parentVedioType', {
                                        rules: [{
                                            required: false, message: 'optional!',
                                        }],
                                    })(
                                        <Input placeHolder={'optional'} />,
                                    )}
                                </FormItem>
                                <FormItem
                                    {...formItemLayout}
                                    label="显示标题"
                                >
                                    {getFieldDecorator('displayName', {
                                        rules: [{
                                            required: true, message: '请输入显示标题!',
                                        }],
                                    })(
                                        <Input />,
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

export default Form.create()(AddVedioType);
