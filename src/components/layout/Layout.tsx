import { ReactNode } from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '../../state/store.ts';

import styles from './Layout.module.css';
import { ColorSchemeType } from '../../types/colorSchemeTypes.ts';

interface Props {
  children: ReactNode;
}

export const Layout = ({children}: Props) => {

  const colorScheme:ColorSchemeType = useSelector((state: RootState) => state.colorScheme.color);

  return (
    <div data-theme={colorScheme} className={styles.container}>
      {children}
    </div>
  );
};
