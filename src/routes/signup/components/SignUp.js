import React from 'react';

const SignUp = () => {
  window.fbq('track', 'PageView');

  const clickHandler = () => {
    alert('Account Created!');
    window.fbq('track', 'CompleteRegistration');
  }

  return (
    <div>
      <label>Create new account</label>
      <div>
        <input type="email" placeholder="your@email.com" />
      </div>
      <div>
        <input type="password" placeholder="********" />
      </div>
      <div>
        <button onClick={clickHandler}>Sign Up</button>
      </div>
    </div>
  );
};

export default SignUp;
