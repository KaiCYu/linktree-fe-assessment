import { useState, createContext } from 'react';
import { UserProfile, UserProfileContextType } from '../@types/userProfile';

import * as profile from '../profile.json';

export const UserProfileContext = createContext<UserProfileContextType | null>(null);

const UserProfileProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const [user] = useState<UserProfile>(profile.default);

  return <UserProfileContext.Provider value={{ user }}>{children}</UserProfileContext.Provider>;
};

export default UserProfileProvider;