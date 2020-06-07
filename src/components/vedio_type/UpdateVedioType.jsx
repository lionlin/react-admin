import React from 'react';
import { Button, Row, Card, Form, Input, Select, notification } from 'antd';
import BreadcrumbCustom from '../BreadcrumbCustom';
import { updateVedioType } from '../../axios';

const FormItem = Form.Item;
const { Option } = Select;

class UpdateVedioType extends React.Component {
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
                updateVedioType(values).then(({ code, message }) => {
                    this.setState({
                        loading: false,
                    });
                    if (code === 0) {
                        this.openNotificationWithIcon('success', '更新成功', '成功更新视频类别.');
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
                <BreadcrumbCustom first="视频类别管理" second="更新视频类别" />
                <Row gutter={16}>
                    <div className="gutter-box">
                        <Card title="更新视频类别" bordered={false}>
                            <Form onSubmit={this.handleSubmit}>
                                <FormItem
                                    {...formItemLayout}
                                    label="ID"
                                >
                                    {getFieldDecorator('id', {
                                        initialValue: this.state.data.ID,
                                    })(
                                        <Input disabled={true} />,
                                    )}
                                </FormItem>
                                <FormItem
                                    {...formItemLayout}
                                    label="视频类别"
                                >
                                    {getFieldDecorator('vedioType', {
                                        initialValue: this.state.data.VedioType,
                                        rules: [{
                                            required: true, message: '请输入视频类别!',
                                        }],
                                    })(
                                        <Input placeholder={'请输入视频类别'} />,
                                    )}
                                </FormItem>
                                <FormItem
                                    {...formItemLayout}
                                    label="视频父类别"
                                >
                                    {getFieldDecorator('parentVedioType', {
                                        initialValue: this.state.data.ParentVedioType,
                                        rules: [{
                                            required: true, message: '请输入视频父类别!',
                                        }],
                                    })(
                                        <Input />,
                                    )}
                                </FormItem>
                                <FormItem
                                    {...formItemLayout}
                                    label="类别名称"
                                >
                                    {getFieldDecorator('displayName', {
                                        initialValue: this.state.data.DisplayName,
                                        rules: [{
                                            required: true, message: '请输入类别名称!',
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

export default Form.create()(UpdateVedioType);
