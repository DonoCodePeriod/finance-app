import React, { useState, createContext, useContext } from 'react';
import { User } from '../types/global.types';

const UserContext = createContext<User | undefined>();

const members = [
  { username: 'Tom', password: 'Jerry' },
  { username: 'Rug', password: 'Rats' },
  { username: 'Count Dracula', password: '789' },
];

const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | undefined>();

  const isCookieLoggedIn = () => {}; //maybe handled as a useEffect

  const login = (username: string, password: string): User | undefined => {
    for (const member of members) {
      if (member['username'] === username && member['password'] === password)
        setUser({ username });
      return user;
    }
  };

  const signup = (username: string, password: string): void => {
    members.push({ username, password });
  };

  return (
    <UserContext.Provider value={{ user, login, signup }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);

export default UserProvider;
