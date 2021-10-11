import { useEffect, useState } from 'react';
import initializeAuthentication from '../Firebase/Firebase.init';
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';

initializeAuthentication();

const useFirebase = () => {
  // user states
  const [user, setUser] = useState({});
  const [error, setError] = useState('');
  // handling google SignIn
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();
  // handling sign in with google
  const handleSignWithGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        setUser(result.user);
        console.log(result.user);
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  //handling signout
  const handleSignOut = () => {
    signOut(auth)
      .then((result) => {
        setUser({});
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  // observe wheather the user state change or not
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      }
    });
  }, [auth]);
  return {
    user,
    error,
    handleSignWithGoogle,
    handleSignOut,
  };
};

export default useFirebase;
