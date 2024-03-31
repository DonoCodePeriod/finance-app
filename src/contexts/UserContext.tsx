import React, { useState, createContext, useContext } from 'react';
import { User, Data } from '../types/global.types';

const UserContext = createContext<unknown>();

const members = [
  { username: 'Tom', password: 'Jerry', email: 'cartoon@network.com' },
  { username: 'Rug', password: 'Rats', email: 'nicko@lodean.com' },
  { username: 'Count Dracula', password: '789', email: 'sesame@street.com' },
];

const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | undefined>();
  const [data, setData] = useState<Data>({
    loading: false,
    data: null,
    error: '',
  });

  const attemptLogin = (
    //include ability to log in using an email.
    username: string,
    password: string
  ): void => {
    console.log('username', username, 'password', password);
    for (const member of members) {
      if (member['username'] === username && member['password'] === password) {
        console.log(member.username, member.email);
        setUser({ username: member.username, email: member.email });
        console.log('user right after setUser', user);
        return setData({ loading: false, data: null, error: '' });
      }
    }
    setData({
      loading: false,
      data: null,
      error: 'Incorrect email/username or password',
    });
  };

  const isCookieLoggedIn = () => {}; //maybe handled as a useEffect

  const attemptSignup = (
    email: string,
    username: string,
    password: string
  ): void => {
    //perform validation first
    //do it here
    for (const member of members) {
      if (member['username'] === username || member['username'] === username) {
        setData({
          loading: false,
          data: null,
          error: 'Try a different username',
        });
      }
    }
    members.push({ email, username, password });
  };

  const logout = () => {
    setUser(undefined);
  };

  return (
    <UserContext.Provider
      value={{ user, data, attemptLogin, attemptSignup, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);

export default UserProvider;
