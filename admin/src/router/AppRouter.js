import React from 'react';
import {Route, BrowserRouter as Router, Routes} from 'react-router-dom';

import Auth from '../pages/auth/Auth';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Auth />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
