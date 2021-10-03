import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import MainLayout from './components/layout/MainLayout/MainLayout';
import Dashboard from './components/views/Dashboard/Dashboard';
import Login from './components/views/Login/Login';
import Tables from './components/views/Tables/Tables';
import TablesBookingReservation from './components/views/TablesBookingReservation/TablesBookingReservation';
import TablesBookingNew from './components/views/TablesBookingNew/TablesBookingNew';
import TablesEventReservation from './components/views/TablesEventReservation/TablesEventReservation';
import TablesEventNew from './components/views/TablesEventNew/TablesEventNew';

import Kitchen from './components/views/Kitchen/Kitchen';
import Waiter from './components/views/Waiter/Waiter';
import WaiterOrderNew from './components/views/WaiterOrderNew/WaiterOrderNew';
import WaiterOrder from './components/views/WaiterOrder/WaiterOrder';

function App() {
  return (
    <BrowserRouter
    // basename={'/panel'}
    >
      <MainLayout>
        <Switch>
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/`}
            component={Dashboard}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/kitchen`}
            component={Kitchen}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/login`}
            component={Login}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/tables`}
            component={Tables}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/tables/booking/:id`}
            component={TablesBookingReservation}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/tables/booking/new`}
            component={TablesBookingNew}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/tables/events/:id`}
            component={TablesEventReservation}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/tables/events/new`}
            component={TablesEventNew}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/waiter`}
            component={Waiter}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/waiter/order/new`}
            component={WaiterOrderNew}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/waiter/order/:id`}
            component={WaiterOrder}
          />
        </Switch>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
