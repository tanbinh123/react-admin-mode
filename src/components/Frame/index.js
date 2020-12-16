import React from 'react';
 
import { withRouter } from 'react-router-dom';
import { Layout, Menu, Breadcrumb, Dropdown, Avatar, Image, Badge, message} from 'antd';
import 'antd/dist/antd.css';
import { adminRoutes } from '../../routes';
import { createIcon } from '../../utils/IconUtils';
import './frame.css';
import logo from './logo.png';
import { clearToken } from '../../utils/auth';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;


class Frame extends React.Component{

    dropMenu = (
        <Menu onClick= { (p) => {
            if (p.key === 'notice') {
                message.info("通知中心")
            } else if (p.key === 'setting') {
                message.info("个人设置")
            }  else if (p.key === 'logOut') {
                clearToken();
                this.props.history.push('/login');
                console.log("=-=-=",p);
                message.success("退出成功")
            }
        }}>
          <Menu.Item key="notice">
              通知中心
          </Menu.Item>
          <Menu.Item key="setting">
              个人设置
          </Menu.Item>
          <Menu.Item key="logOut">
              退出登录
          </Menu.Item>
        </Menu>
      );

    constructor(props) {
        super(props)
    }

    /**
     * 根据路由数组创建菜单
     * @param {路由数组} routes 
     * @param {*} props 
     */
    createMenus = (routes) => {
        return (routes.map(route => {
                    if(route.children){
                        return (<SubMenu key={route.path} icon={ route.icon?createIcon(route.icon):'' } title={route.title}>
                            {this.createMenus(route.children)}
                        </SubMenu>)
                    }else {
                        return (
                            <Menu.Item key={route.path} icon={ route.icon?createIcon(route.icon):'' }  onClick={ p => this.props.history.push(p.key)}>
                                {route.title}
                            </Menu.Item>
                        )
                    }
                })
        )
    }

    render(){
        return (
            <Layout>
                <Header className="header" style ={{background: '#428bca'}}>
                    <div className="logo">
                        <img src={ logo} alt="logo"/>
                    </div>
                    <Dropdown overlay={this.dropMenu}>
                        <div style= {{display: "flex", justifyContent: "space-between" }}>
                            <span className="avatar-item">
                                <Badge count={1}>
                                    <Avatar style={{backgroundColor: '#ccc'}} size={40} src= {<Image sizes={40} src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />} />
                                </Badge>
                            </span>
                            <span style={{color: "#fff", marginLeft: "10px"}}>
                                超级管理员  { createIcon("DownOutlined")}
                            </span>
                        </div>
                    </Dropdown>
                </Header>   
                <Layout>
                <Sider width={200} className="site-layout-background">
                    <Menu
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    style={{ height: '100%', borderRight: 0 }}
                    >
                        {this.createMenus(adminRoutes)}
                    
                    </Menu>
                </Sider>
                <Layout style={{ padding: '0 24px 24px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>List</Breadcrumb.Item>
                    <Breadcrumb.Item>App</Breadcrumb.Item>
                    </Breadcrumb>
                    <Content
                        className="site-layout-background"
                        style={{
                            padding: 24,
                            margin: 0,
                            minHeight: 280,
                        }}
                    >
                        <div>
                            
                        <image src={ logo} alt="logo"/>
                        </div>
                        { this.props.children }
                    </Content>
                </Layout>
                </Layout>
            </Layout>
        )
    }    
}

export default withRouter(Frame)
