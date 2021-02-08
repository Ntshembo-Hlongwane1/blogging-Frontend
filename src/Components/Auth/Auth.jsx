import React from 'react';
import SignIn from './SignIn';
import { SignUp } from './SignUp';
import '../../Styles/Auth.css';

export const Auth = () => {
  return (
    <div className="form-container">
      <SignIn />
      <div className="form-divider">
        <div className="form-divider-circle"></div>
      </div>
      <SignUp />
    </div>
  );
};
