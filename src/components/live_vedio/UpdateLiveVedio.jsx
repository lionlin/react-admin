import React from 'react';
import { Button, Row, Card, Form, Input, Select, notification } from 'antd';
import BreadcrumbCustom from '../BreadcrumbCustom';
import { updateLiveVedio } from '../../axios';

const FormItem = Form.Item;
const { Option } = Select;

class UpdateLiveVedio extends React.Component {
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
                updateLiveVedio(values).then(({ code, message }) => {
                    this.setState({
                        loading: false,
                    });
                    if (code === 0) {
                        this.openNotificationWithIcon('success', '更新成功', '成功更新.');
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
                <BreadcrumbCustom first="直播视频管理" second="更新直播视频" />
                <Row gutter={16}>
                    <div className="gutter-box">
                        <Card title="更新直播视频" bordered={false}>
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
                                    label="头像"
                                >
                                    {getFieldDecorator('headImg', {
                                        initialValue: this.state.data.HeadImg,
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
                                        initialValue: this.state.data.NickName,
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
                                        initialValue: this.state.data.Url,
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
                                        initialValue: this.state.data.HowLong,
                                        rules: [{
                                            required: true, message: '请输入视频时长!',
                                        }],
                                    })(
                                        <Input placeHolder={'请输入视频时长'} />,
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

export default Form.create()(UpdateLiveVedio);
