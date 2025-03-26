// import React from "react";
// import { Outlet } from "react-router-dom";
// const Main = () => {
//     return (
//         <div>
//             main
//             <Outlet />
//         </div>
//     )
// }
// export default Main;

import { Outlet } from "react-router-dom";
import { Breadcrumb, Layout, Menu, Card, theme } from 'antd';
import './main.css'
import React, { useEffect, useState } from "react";
import { GithubOutlined, WechatOutlined, WeiboOutlined, BilibiliOutlined, HeartFilled } from '@ant-design/icons';
import Love from './component/Love'
import Plane from './component/Plane'
import MyContext from './Context'; 
const { Header, Content, Footer } = Layout;
const items = [
    {
        key: 1,
        label: `首页`,
    },
    {
        key: 2,
        label: `主要项目`,
    },
];

const Main = () => {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    const [data, setData] = useState(false);
    const [liked, setLiked] = useState(false);
    const [isShaking, setIsShaking] = useState(false); // 是否触发晃动动画
    const [isMounted, setIsMounted] = useState(false);

    useEffect(()=>{
        if (!isMounted) {
            setIsMounted(true);
            return; // 防止在挂载时执行
        }
        else if(!liked) {
            setLiked(true); // 第一次点击变红
            console.log("datalike",liked)
        } else {
            setIsShaking(true); // 之后的点击触发晃动动画
            setTimeout(() => setIsShaking(false), 500); // 500ms 后移除晃动动画
            console.log("datashake",data)
        }

    },[data])
    return (

        <Layout className='background'>
            <Plane/>
            <Header style={{ background: 'black' }}>

                <Menu className='menu'
                    mode="horizontal"//水平排列
                    defaultSelectedKeys={['1']}//默认选中第1个菜单项
                    items={items}
                />
            </Header>
            <Content className='content' >

                <div>
                    <div
                        className="left"
                    >
                        <MyContext.Provider value={{ data, setData }}>
                            <Card
                                hoverable
                                className={`custom-card ${liked ? "flipped" : ""} ${isShaking ? "flipping" : ""}`}
                                actions={[
                                    <GithubOutlined key="github" className="icon" />,
                                    <WechatOutlined key="wechat" className="icon" />,
                                    <WeiboOutlined key="weibo" className="icon" />,
                                    <BilibiliOutlined key="bili" className="icon" />
                                ]}
                            >
                                {/* 覆盖整个卡片的背景图片 */}
                                {/* 卡片的正面内容 */}
                                <div className="card-front">

                                </div>

                                {/* 卡片的背面内容 */}
                                <div className="card-back" >

                                </div>

                            </Card>
                            <div
                                style={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignContent: 'center',
                                    height: '40px'
                                }}
                            >
                                <Love />
                                <p style={{ margin: "10px 0px" }}>111</p>

                            </div>
                        </MyContext.Provider>
                    </div>
                </div>

                <div
                    style={{
                        background: colorBgContainer,
                        padding: 20,
                        borderRadius: borderRadiusLG,
                        height: '100%'
                    }}
                >
                    <Outlet />
                </div>

                <div>
                </div>

            </Content>
            <Footer
                style={{
                    textAlign: 'center',
                }}
            >
                兔宝出品，必属精品！
            </Footer>
        </Layout>

    );
};
export default Main;