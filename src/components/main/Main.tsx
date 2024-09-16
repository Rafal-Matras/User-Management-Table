import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { UserError, UserStatus } from '../../types/usersTypes.ts';

import { AppDispatch, RootState } from '../../state/store.ts';
import { fetchUsers } from '../../state/users/usersSlice.ts';

import { TableOfUsers } from '../usersTable/TableOfUsers.tsx';

import styles from './main.module.css';

export const Main = () => {

  const dispatch = useDispatch<AppDispatch>();
  const userStatus: UserStatus = useSelector((state: RootState) => state.users.status);
  const error: UserError = useSelector((state: RootState) => state.users.error);

  useEffect(() => {
    if (userStatus === 'idle') {
      dispatch(fetchUsers());
    }
  }, [userStatus, dispatch]);

  let content;
  if (userStatus === 'loading') {
    content = <p>pLoading...</p>;
  } else if (userStatus === 'succeeded') {
    content = <TableOfUsers/>;
  } else if (userStatus === 'failed') {
    content = <p>{error}</p>;
  }

  return <div className={styles.container}>{content}</div>;
};