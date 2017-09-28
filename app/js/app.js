import React, { Component } from 'react';
import {
  Linking,
  Alert,
} from 'react-native';

import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import promiseMiddleware from '../js/utils/middlewares/promiseMiddleware';
import { Actions, ActionConst, Scene, Router } from 'react-native-router-flux';
import * as reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(thunk, promiseMiddleware)(createStore);
const reducer = combineReducers(reducers);
const store = createStoreWithMiddleware(reducer);

import Login from './container/LoginPage';
import Main from './container/MainPage';
import MyServices from './container/MyServicesPage';
import MyServicesDetail from './container/MyServicesDetailPage';
import StartProject from './container/StartProjectPage';
import Ticket from './container/TicketPage';
import Profile from './container/ProfilePage';
import Offers from './container/OffersPage';
import OffersDetail from './container/OffersDetailPage';
import Services from './container/ServicesPage';
import ServicesDetail from './container/ServicesDetailPage';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  render() {
    const scenes = Actions.create(
      <Scene key="root">
        <Scene key="Login" component={ Login } initial={ false } hideNavBar={ true } panHandlers={null}/>
        <Scene key="Main" component={ Main } initial={ false } hideNavBar={ true } panHandlers={null}/>
        <Scene key="MyServices" component={ MyServices } initial={ false } hideNavBar={ true } panHandlers={null}/>
        <Scene key="MyServicesDetail" component={ MyServicesDetail } initial={ false } hideNavBar={ true } panHandlers={null}/>
        <Scene key="StartProject" component={ StartProject } initial={ false } hideNavBar={ true } panHandlers={null}/>
        <Scene key="Ticket" component={ Ticket } initial={ true } hideNavBar={ true } panHandlers={null}/>
        <Scene key="Profile" component={ Profile } initial={ false } hideNavBar={ true } panHandlers={null}/>
        <Scene key="Offers" component={ Offers } initial={ false } hideNavBar={ true } panHandlers={null}/>
        <Scene key="OffersDetail" component={ OffersDetail } initial={ false } hideNavBar={ true } panHandlers={null}/>
        <Scene key="Services" component={ Services } initial={ false } hideNavBar={ true } panHandlers={null} />
        <Scene key="ServicesDetail" component={ ServicesDetail } initial={ false } hideNavBar={ true } panHandlers={null} />
      </Scene>
    );

    return (
      <Provider store={ store }>
        <Router hideNavBar={ true } scenes={ scenes }/>
      </Provider>
    );
  }
}