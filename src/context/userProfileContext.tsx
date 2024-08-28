import React from 'react';
import { UserProfile } from '../@types/userProfile';

import * as profile from '../profile.json';

export const UserProfileContext = React.createContext<UserProfileContextType | null>(null);

const UserProfileProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const [user] = React.useState<UserProfile>(profile.default);

  return <UserProfileContext.Provider value={{ user }}>{children}</UserProfileContext.Provider>;
};

export default UserProfileProvider;