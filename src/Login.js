import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebaseConfig';
import { NavLink, useNavigate } from 'react-router-dom';

const Login = ({ setEmail }) => {
  const navigate = useNavigate();
  const [email, setEmailValue] = useState('');
  const [password, setPassword] = useState('');
  const [logSuccessful, setLogin] = useState(false);

  const onLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setLogin(true);
        setEmail(user.email); // Set the 'email' value using the 'setEmail' prop
        navigate('/');
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  return (
    <>
      <main>
        <section>
          <div>
            <h1>FocusApp</h1>
            <form>
              <div>
                <label htmlFor="email-address">Email address</label>
                <input
                  type="email"
                  id="email-address"
                  value={email}
                  onChange={(e) => setEmailValue(e.target.value)} // Use setEmailValue instead of setEmail
                  required
                  placeholder="Email address"
                />
              </div>
              <div>
                <label htmlFor="password">Password</label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div>
                <button type="button" onClick={onLogin}>Login</button> {/* Add type="button" to prevent form submission */}
              </div>
            </form>
            <p className="text-sm text-white text-center">
              No account yet?{' '}
              <NavLink to="/signup">
                Sign up
              </NavLink>
            </p>
          </div>
        </section>
      </main>
    </>
  );
};

export default Login;
