/**
 * Created by hao.cheng on 2017/4/16.
 */
import React from 'react';
import { Button, Row, Card, Form, Input, Select, notification } from 'antd';
import BreadcrumbCustom from '../BreadcrumbCustom';
import { addVedio } from '../../axios';

const FormItem = Form.Item;
const { Option } = Select;

class AddVedio extends React.Component {
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
                addVedio(values).then(({ code, message }) => {
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
                <BreadcrumbCustom first="视频" second="添加视频" />
                <Row gutter={16}>
                    <div className="gutter-box">
                        <Card title="添加视频" bordered={false}>
                            <Form onSubmit={this.handleSubmit}>
                                <FormItem
                                    {...formItemLayout}
                                    label="视频类别"
                                >
                                    {getFieldDecorator('vedioType', {
                                        rules: [{
                                            required: true, message: '请选择视频类别!',
                                        }],
                                    })(
                                        <Select placeholder="请选择视频类别">
                                            <Option value="index">推荐</Option>
                                            <Option value="chn">国产</Option>
                                            <Option value="jp">日韩</Option>
                                            <Option value="eur">欧美</Option>
                                            <Option value="ct">动漫</Option>
                                        </Select>,
                                    )}
                                </FormItem>
                                <FormItem
                                    {...formItemLayout}
                                    label="视频子类别"
                                >
                                    {getFieldDecorator('subVedioType', {
                                        rules: [{
                                            required: true, message: '请输入视频子类别!',
                                        }],
                                    })(
                                        <Input placeHolder={'请输入视频子类别'} />,
                                    )}
                                </FormItem>
                                <FormItem
                                    {...formItemLayout}
                                    label="标题"
                                >
                                    {getFieldDecorator('title', {
                                        rules: [{
                                            required: true, message: '请输入视频标题!',
                                        }],
                                    })(
                                        <Input />,
                                    )}
                                </FormItem>
                                <FormItem
                                    {...formItemLayout}
                                    label="封面图片"
                                >
                                    {getFieldDecorator('pic', {
                                        rules: [{
                                            required: true, message: '请输入封面图片!',
                                        }],
                                    })(
                                        <Input />,
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
                                        <Input />,
                                    )}
                                </FormItem>
                                <FormItem
                                    {...formItemLayout}
                                    label="视频时长"
                                >
                                    {getFieldDecorator('howLong', {
                                        rules: [{
                                            required: true, message: '请输入视频时长!',
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

export default Form.create()(AddVedio);
