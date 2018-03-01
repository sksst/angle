import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Layout, Menu, Icon } from 'antd';
import './IndexPage.less';
import history from '../utils/history'

import DashboardV1 from './Dashboard/DashboardV1';

const { Header, Sider, Content } = Layout;
const SubMenu = Menu.SubMenu;

class IndexPage extends Component {
    state = {
        collapsed: false,
    };
    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };
		onClickMenuItem = (item) => {
			const key = item.key;
			history.push(`/${key}`);
		};

		render() {
        return (
            <Layout className="layout-container">
                <Sider
                    trigger={null}
                    collapsible
                    collapsed={this.state.collapsed}
                >
                    <div className="logo" />
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} onClick={this.onClickMenuItem}>
                        <SubMenu key="dashboard" title={<span><Icon type="dashboard" /><span>Dashboard</span></span>}>
                            <Menu.Item key="dashboard-v1">Dashboard v1</Menu.Item>
                            <Menu.Item key="dashboard-v2">Dashboard v2</Menu.Item>
                            <Menu.Item key="dashboard-v3">Dashboard v3</Menu.Item>
                        </SubMenu>
                        <Menu.Item key="widgets">
                            <Icon type="user" />
                            <span>Widgets</span>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Icon type="video-camera" />
                            <span>nav 2</span>
                        </Menu.Item>
                        <Menu.Item key="3">
                            <Icon type="upload" />
                            <span>nav 3</span>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout>
                    <Header style={{ background: '#fff', padding: 0 }}>
                        <Icon
                            className="trigger"
                            type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                            onClick={this.toggle}
                        />
                    </Header>
                    <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
	                    <Switch>
		                    <Route path="/dashboard-v1" component={DashboardV1} />
	                    </Switch>
                    </Content>
                </Layout>
            </Layout>
        );
    }
}


export default IndexPage;
