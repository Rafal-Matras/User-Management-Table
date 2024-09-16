import { ChangeEvent, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { SearchName } from '../../types/usersTypes.ts';

import { AppDispatch } from '../../state/store.ts';
import { editSearchName, editSearchText } from '../../state/users/usersSlice.ts';

import { SearchIcon } from '../Common/SvgFiles/SearchIcon.tsx';

import styles from './tableOfUsers.module.css';

interface Props {
  nameOfSearch: SearchName;
}

export const Search = ({nameOfSearch}: Props) => {

  const dispatch = useDispatch<AppDispatch>();
  const [search, setSearch] = useState<string>('');

  useEffect(() => {
    dispatch(editSearchText(search));
  }, [search]);

  const handleChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <div>
      <SearchIcon className={styles.icon}/>
      <input
        type="text"
        className={styles.input}
        value={search}
        onChange={(e: ChangeEvent<HTMLInputElement>) => handleChangeValue(e)}
        onFocus={() => dispatch(editSearchName(nameOfSearch))}
        onBlur={() => setSearch('')}
      />
    </div>
  );
};