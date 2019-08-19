/**
 * Created by hao.cheng on 2017/5/3.
 */
import React from 'react';
import { Row, Col, Card, Timeline, Icon } from 'antd';
import BreadcrumbCustom from '../BreadcrumbCustom';
import EchartsViews from './EchartsViews';
import EchartsProjects from './EchartsProjects';
import b1 from '../../style/imgs/b1.jpg';
import RechartsSimpleLineChart from '../charts/RechartsSimpleLineChart';
import RechartsBarChart from '../charts/RechartsBarChart';
import RechartsRadialBarChart from '../charts/RechartsRadialBarChart';
import RechartsRadarChart from '../charts/RechartsRadarChart';


class Dashboard extends React.Component {
    render() {
        return (
            <div className="gutter-example button-demo">
                <BreadcrumbCustom />
                <Row gutter={10}>
                    <Col className="gutter-row" md={4}>
                        <div className="gutter-box">
                            <Card bordered={false}>
                                <div className="clear y-center">
                                    <div className="pull-left mr-m">
                                        <Icon type="export" className="text-2x text-info" />
                                    </div>
                                    <div className="clear">
                                        <div className="text-muted">总投注</div>
                                        <h2>802</h2>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </Col>
                    <Col className="gutter-row" md={4}>
                        <div className="gutter-box">
                            <Card bordered={false}>
                                <div className="clear y-center">
                                    <div className="pull-left mr-m">
                                        <Icon type="trophy" className="text-2x text-danger" />
                                    </div>
                                    <div className="clear">
                                        <div className="text-muted">总中奖</div>
                                        <h2>301</h2>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </Col>
                    <Col className="gutter-row" md={4}>
                        <div className="gutter-box">
                            <Card bordered={false}>
                                <div className="clear y-center">
                                    <div className="pull-left mr-m">
                                        <Icon type="team" className="text-2x text-info" />
                                    </div>
                                    <div className="clear">
                                        <div className="text-muted">用户数量</div>
                                        <h2>802</h2>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </Col>
                    <Col className="gutter-row" md={4}>
                        <div className="gutter-box">
                            <Card bordered={false}>
                                <div className="clear y-center">
                                    <div className="pull-left mr-m">
                                        <Icon type="wallet" className="text-2x text-info" />
                                    </div>
                                    <div className="clear">
                                        <div className="text-muted">用户余额</div>
                                        <h2>802</h2>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </Col>
                    <Col className="gutter-row" md={4}>
                        <div className="gutter-box">
                            <Card bordered={false}>
                                <div className="clear y-center">
                                    <div className="pull-left mr-m">
                                        <Icon type="login" className="text-2x text-success" />
                                    </div>
                                    <div className="clear">
                                        <div className="text-muted">用户充值</div>
                                        <h2>802</h2>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </Col>
                    <Col className="gutter-row" md={4}>
                        <div className="gutter-box">
                            <Card bordered={false}>
                                <div className="clear y-center">
                                    <div className="pull-left mr-m">
                                        <Icon type="logout" className="text-2x text-danger" />
                                    </div>
                                    <div className="clear">
                                        <div className="text-muted">用户提现</div>
                                        <h2>802</h2>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </Col>
                </Row>
                <Row gutter={10}>
                    <Col className="gutter-row" md={8}>
                        <div className="gutter-box">
                            <Card bordered={false}>
                                <div className="pb-m">
                                    <h3>代理投注TOP10</h3>
                                </div>
                                <span className="card-tool"><Icon type="sync" /></span>
                                <ul className="list-group no-border">
                                    <li className="list-group-item">
                                        <span className="pull-left w-40 mr-m">
                                            <img src={b1} className="img-responsive img-circle" alt="test" />
                                        </span>
                                        <div className="clear">
                                            <span className="block">鸣人</span>
                                            <span className="text-muted">终于当上火影了！</span>
                                        </div>
                                    </li>
                                    <li className="list-group-item">
                                        <span className="pull-left w-40 mr-m">
                                            <img src={b1} className="img-responsive img-circle" alt="test" />
                                        </span>
                                        <div className="clear">
                                            <span className="block">佐助</span>
                                            <span className="text-muted">吊车尾~~</span>
                                        </div>
                                    </li>
                                    <li className="list-group-item">
                                        <span className="pull-left w-40 mr-m">
                                            <img src={b1} className="img-responsive img-circle" alt="test" />
                                        </span>
                                        <div className="clear">
                                            <span className="block">小樱</span>
                                            <span className="text-muted">佐助，你好帅！</span>
                                        </div>
                                    </li>
                                    <li className="list-group-item">
                                        <span className="pull-left w-40 mr-m">
                                            <img src={b1} className="img-responsive img-circle" alt="test" />
                                        </span>
                                        <div className="clear">
                                            <span className="block">雏田</span>
                                            <span className="text-muted">鸣人君。。。那个。。。我。。喜欢你..</span>
                                        </div>
                                    </li>
                                </ul>
                            </Card>
                        </div>
                    </Col>
                    <Col className="gutter-row" md={8}>
                        <div className="gutter-box">
                            <Card bordered={false}>
                                <div className="pb-m">
                                    <h3>代理充值TOP10</h3>
                                </div>
                                <span className="card-tool"><Icon type="sync" /></span>
                                <ul className="list-group no-border">
                                    <li className="list-group-item">
                                        <span className="pull-left w-40 mr-m">
                                            <img src={b1} className="img-responsive img-circle" alt="test" />
                                        </span>
                                        <div className="clear">
                                            <span className="block">鸣人</span>
                                            <span className="text-muted">终于当上火影了！</span>
                                        </div>
                                    </li>
                                    <li className="list-group-item">
                                        <span className="pull-left w-40 mr-m">
                                            <img src={b1} className="img-responsive img-circle" alt="test" />
                                        </span>
                                        <div className="clear">
                                            <span className="block">佐助</span>
                                            <span className="text-muted">吊车尾~~</span>
                                        </div>
                                    </li>
                                    <li className="list-group-item">
                                        <span className="pull-left w-40 mr-m">
                                            <img src={b1} className="img-responsive img-circle" alt="test" />
                                        </span>
                                        <div className="clear">
                                            <span className="block">小樱</span>
                                            <span className="text-muted">佐助，你好帅！</span>
                                        </div>
                                    </li>
                                    <li className="list-group-item">
                                        <span className="pull-left w-40 mr-m">
                                            <img src={b1} className="img-responsive img-circle" alt="test" />
                                        </span>
                                        <div className="clear">
                                            <span className="block">雏田</span>
                                            <span className="text-muted">鸣人君。。。那个。。。我。。喜欢你..</span>
                                        </div>
                                    </li>
                                </ul>
                            </Card>
                        </div>
                    </Col>
                    <Col className="gutter-row" md={8}>
                        <div className="gutter-box">
                            <Card bordered={false}>
                                <div className="pb-m">
                                    <h3>代理提现TOP10</h3>
                                </div>
                                <span className="card-tool"><Icon type="sync" /></span>
                                <ul className="list-group no-border">
                                    <li className="list-group-item">
                                        <span className="pull-left w-40 mr-m">
                                            <img src={b1} className="img-responsive img-circle" alt="test" />
                                        </span>
                                        <div className="clear">
                                            <span className="block">鸣人</span>
                                            <span className="text-muted">终于当上火影了！</span>
                                        </div>
                                    </li>
                                    <li className="list-group-item">
                                        <span className="pull-left w-40 mr-m">
                                            <img src={b1} className="img-responsive img-circle" alt="test" />
                                        </span>
                                        <div className="clear">
                                            <span className="block">佐助</span>
                                            <span className="text-muted">吊车尾~~</span>
                                        </div>
                                    </li>
                                    <li className="list-group-item">
                                        <span className="pull-left w-40 mr-m">
                                            <img src={b1} className="img-responsive img-circle" alt="test" />
                                        </span>
                                        <div className="clear">
                                            <span className="block">小樱</span>
                                            <span className="text-muted">佐助，你好帅！</span>
                                        </div>
                                    </li>
                                    <li className="list-group-item">
                                        <span className="pull-left w-40 mr-m">
                                            <img src={b1} className="img-responsive img-circle" alt="test" />
                                        </span>
                                        <div className="clear">
                                            <span className="block">雏田</span>
                                            <span className="text-muted">鸣人君。。。那个。。。我。。喜欢你..</span>
                                        </div>
                                    </li>
                                </ul>
                            </Card>
                        </div>
                    </Col>
                </Row>
                <div className="gutter-example">
                    <Row gutter={16}>
                        <Col className="gutter-row" md={24}>
                            <div className="gutter-box">
                                <Card title="基础线形图" bordered={false}>
                                    <RechartsSimpleLineChart />
                                </Card>
                            </div>
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col className="gutter-row" md={24}>
                            <div className="gutter-box">
                                <Card title="基础线形图" bordered={false}>
                                    <RechartsBarChart />
                                </Card>
                            </div>
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col className="gutter-row" md={12}>
                            <div className="gutter-box">
                                <Card title="基础线形图" bordered={false}>
                                    <RechartsRadialBarChart />
                                </Card>
                            </div>
                        </Col>
                        <Col className="gutter-row" md={12}>
                            <div className="gutter-box">
                                <Card title="基础线形图" bordered={false}>
                                    <RechartsRadarChart />
                                </Card>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}

export default Dashboard;
