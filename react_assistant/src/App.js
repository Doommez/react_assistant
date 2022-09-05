import 'antd/dist/antd.min.css'
import './App.css';
import { /* Breadcrumb, */ Layout, Menu } from 'antd';
import React, { useEffect } from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import HomePage from './components/homePage/homePage';
import Components from './components/components/components';
import Props from './components/props/props'
import logo from './logo.svg'
import State from './components/state/state';
import Lifecycle from './components/lifecycle/lifecycle';
import Event from './components/events/events';

import Error from './components/errorBunder/errorBunder';
import { useState} from 'react';
import Keys from './components/keys/keys';

const { Header, Content, Footer } = Layout;



const App = () =>{
  let menuArray=["Home", "Components","Props","State","Lifecycle","Events","Key","Refs","Asynchronous requests",
  "Virtual DOM","Fragment","React.memo","useEffect","Router","Context","Form"]

  const [href,setHref]=useState("1")
  const changeHref=()=>{
    menuArray.forEach((item,index)=>{
      if(window.location.href==="http://localhost:3000/"+item){
        setHref(index+1)
      }
    })
  }


  
 
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
          defaultSelectedKeys={href}
          items={menuArray.map((item, index) => {

            if(index===0){
             return ({
              key: String(index+1),
              label: <Link to={`/Home`}><img src={logo} alt="Logo" className="App-logo"/></Link>
             })
            }
            else return ({
            key: String(index + 1),
            label: <Link to={`/${item}`} onClick={changeHref}>{item}</Link>,
          })})}
          
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
          <Error>
          <Routes>
            <Route path="/Home" element={<HomePage/>}/>
            <Route path="/Components" element={<Components/>}/>
            <Route path="/Props" element={<Props/>}/>
            <Route path="/State" element={<State/>}/>
            <Route path="/Lifecycle" element={<Lifecycle/>}/>
            <Route path="/Events" element={<Event />}/>
            <Route path="/Key" element={<Keys />}/>
          </Routes> 
          </Error>
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



