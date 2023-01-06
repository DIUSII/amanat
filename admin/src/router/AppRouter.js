import React from 'react';
import {Route, BrowserRouter as Router, Routes} from 'react-router-dom';

import Header from '../components/Header/Header';

import Auth from '../pages/Auth/Auth';
import ListDriver from '../pages/List/ListDriver';
import ListUser from '../pages/ListUser/ListUser';
import ListOrder from '../pages/ListOrder/ListOrder';
import ListReview from '../pages/Review/ListReview';
import Driver from '../pages/Driver/Driver';
import User from '../pages/User/User';
import Order from '../pages/Order/Order';

const AppRouter = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/list-driver" element={<ListDriver />} />
        <Route path="/list-user" element={<ListUser />} />
        <Route path="/list-order" element={<ListOrder />} />
        <Route path="/list-review" element={<ListReview />} />
        <Route path="/driver" element={<Driver />} />
        <Route path="/user" element={<User />} />
        <Route path="/order" element={<Order />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
