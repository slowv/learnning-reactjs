
import {HeaderComponent} from "./header/HeaderComponent";
import {Outlet} from "react-router-dom";
import {Layout, Menu, theme} from "antd";
import {useState} from "react";
import {DesktopOutlined, FileOutlined, PieChartOutlined, TeamOutlined, UserOutlined} from "@ant-design/icons";
const {Content, Footer, Sider} = Layout;

export const MasterLayout = (props) => {
    const [collapsed, setCollapsed] = useState(false);

    const {
        token: {colorBgContainer, borderRadiusLG},
    } = theme.useToken();

    function getItem(
        label,
        key,
        icon,
        children){
        return {
            key,
            icon,
            children,
            label,
        };
    }

    const items= [
        getItem('Option 1', '1', <PieChartOutlined/>),
        getItem('Option 2', '2', <DesktopOutlined/>),
        getItem('User', 'sub1', <UserOutlined/>, [
            getItem('Tom', '3'),
            getItem('Bill', '4'),
            getItem('Alex', '5'),
        ]),
        getItem('Team', 'sub2', <TeamOutlined/>, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
        getItem('Files', '9', <FileOutlined/>),
    ];

    return (
        <Layout style={{minHeight: '100vh'}}>
            <Sider
                style={{background: colorBgContainer}}
                collapsible
                collapsed={collapsed}
                onCollapse={(value) => setCollapsed(value)}
                theme={'light'}
            >
                {/*<Logo/>*/}
                <Menu defaultSelectedKeys={['1']} mode="inline" items={items}/>
            </Sider>
            <Layout>
                <HeaderComponent/>
                <Content style={{margin: '20px 16px 0'}}>
                    <div
                        style={{
                            padding: 24,
                            minHeight: 360,
                            background: colorBgContainer,
                            borderRadius: borderRadiusLG,
                        }}
                    >
                        <Outlet/>
                    </div>
                </Content>
                <Footer style={{textAlign: 'center', background: colorBgContainer}}>Vspace Design ©2023</Footer>
            </Layout>
        </Layout>
    )
}