import React from 'react';
import logo from './logo.svg';
import './App.css';
import "antd/dist/antd.css";
import { Redirect, Route, Switch } from 'react-router-dom';
import { adminRoutes } from './routes';
import Frame from './components/Frame';
import { isLogin } from './utils/auth';
import  LoadableUtils  from './utils/LoadableUtils'


class App extends React.Component{

  createRoute(routes){
    return (
      routes.map(route => {
        if (route.children) {
          return this.createRoute(route.children)
        }else {
          let DyncComponent = LoadableUtils(() => import(`./pages/${route.component}`));
          return (<Route key={route.path} path={route.path} exact={route.exact} render={routeProps => {
            return <DyncComponent {...routeProps} />;
          }}/>);
        }
      })
    )
  }

  render(){
    return (
      isLogin()?
      <Frame>
        <Switch>
          { 
            this.createRoute(adminRoutes)
          }
          <Route path='/404' component={ LoadableUtils(() => import('./pages/PageNotFound')) } />
          <Redirect to={adminRoutes[0].path} from="/admin" />
          <Redirect to="/404" />
        </Switch>
      </Frame>
      :<Redirect to="/login"/>
    );
  }
}

export default App;
