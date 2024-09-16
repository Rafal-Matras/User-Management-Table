import { useSelector } from 'react-redux';

import { SearchName, User } from '../../types/usersTypes.ts';
import { UsersExcerpt } from './UsersExcerpt.tsx';

import { RootState } from '../../state/store.ts';

import styles from './tableOfUsers.module.css';
import { Search } from './Search.tsx';

export const TableOfUsers = () => {


  const users: User[] = useSelector((state: RootState) => state.users.users);
  const searchText: string = useSelector((state: RootState) => state.users.searchText);
  const searchName: SearchName = useSelector((state: RootState) => state.users.searchName);

  let searchUsers: User[];
  if (searchName === 'name' && searchText.length > 0) {
    searchUsers = users.filter((user: User) => user.name.toLowerCase().includes(searchText.toLowerCase()));
  } else if (searchName === 'username' && searchText.length > 0) {
    searchUsers = users.filter((user: User) => user.username.toLowerCase().includes(searchText.toLowerCase()));
  } else if (searchName === 'email' && searchText.length > 0) {
    searchUsers = users.filter((user: User) => user.email.toLowerCase().includes(searchText.toLowerCase()));
  } else if (searchName === 'phone' && searchText.length > 0) {
    searchUsers = users.filter((user: User) => user.phone.toLowerCase().includes(searchText.toLowerCase()));
  } else {
    searchUsers = users;
  }
  const content = searchUsers.map((user: User) => <UsersExcerpt key={user.id} user={user}/>);


  return (
    <div className={styles.container}>
      <table className={styles.table}>
        <caption className={styles.caption}>User Management Table</caption>
        <thead>
        <tr>
          <th><div>Name <Search nameOfSearch={'name'}/></div></th>
          <th><div>User Name <Search nameOfSearch={'username'}/></div></th>
          <th><div>Email <Search nameOfSearch={'email'}/></div></th>
          <th><div>Phone <Search nameOfSearch={'phone'}/></div></th>
        </tr>
        </thead>
        <tbody>
        {content}
        </tbody>
      </table>
    </div>
  );
};