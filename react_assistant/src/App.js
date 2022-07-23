import 'antd/dist/antd.min.css'
import './App.css';
import { /* Breadcrumb, */ Layout, Menu } from 'antd';
import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import HomePage from './components/homePage/homePage';
import Components from './components/components/components';


const { Header, Content, Footer } = Layout;



const App = () =>{
  let menuArray=["Home", "Components","Props","State","Lifecycle","Events","Key","Refs","Asynchronous requests",
  "Virtual DOM","Fragment","React.memo","useEffect","Router","Context","Form"]
  return (
    <Layout>
      <Header
        style={{
          position: 'fixed',
          zIndex: 1,
          width: '100%',
        }}
      >
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['1']}
          items={menuArray.map((item, index) => ({
            key: String(index + 1),
            label: <Link to={`/${item}`}>{item}</Link>,
          }))}
        />
      </Header>
      <Content
        className="site-layout"
        style={{
          padding: '0 50px',
          marginTop: 64,
        }}
      >
  {/*       <Breadcrumb
          style={{
            margin: '16px 0',
          }}
        >
          <Breadcrumb.Item><Link to={"Home"} onClick>Home</Link></Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb> */}
        <div
          className="site-layout-background"
          style={{
            padding: 24,
            minHeight: 380,
          }}
        >
          <Routes>
            <Route path="/Home" element={<HomePage/>}/>
            <Route path="/Components" element={<Components/>}/>
          </Routes>
        </div>
      </Content>
      <Footer
        style={{
          textAlign: 'center',
        }}
      >
        Ant Design ©2022 Created by Doommez
      </Footer>
    </Layout>
  );
} 
 
export default App;



