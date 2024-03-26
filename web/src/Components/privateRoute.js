// privateRoute.js
import { useState } from 'react';
import { Route, Navigate } from 'react-router-dom';

export default function PrivateRoute({ component: Component, ...rest }) {
  const [token, setToken] = useState(localStorage.getItem('token'));
  console.log('Token from localStorage:', token);

  return (
    <Route
      {...rest}
      element={token ? <Component /> : <Navigate to="/login" />}
    />
  );
}
