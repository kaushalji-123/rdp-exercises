import React from 'react';
import Button from './Button';

const SignUp = () => {
  return (
    <div className='dropdown'>
      <input type="text" placeholder="First Name" />
      <input type="text" placeholder="Last Name" />
      <Button text="Sign Up" />
    </div>
  );
};

export default SignUp;