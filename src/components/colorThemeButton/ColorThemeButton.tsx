import { useDispatch,useSelector } from 'react-redux';

import { ColorSchemeType } from '../../types/colorSchemeTypes.ts';

import { RootState } from '../../state/store.ts';
import { changeColorScheme } from '../../state/colorScheme/colorSchemeSlice.ts';
import { SunIcon } from '../Common/SvgFiles/SunIcon.tsx';
import { MoonIcon } from '../Common/SvgFiles/MoonIcon.tsx';

import styles from './ColorThemeButton.module.css';

export const ColorThemeButton = () => {

  const dispatch = useDispatch();
  const colorScheme: ColorSchemeType = useSelector((state: RootState) => state.colorScheme.color);


  return (
    <div className={styles.container}>
      <input
        id="colorTheme"
        className={styles.input}
        type="checkbox"
        checked={colorScheme === 'dark'}
        onChange={() => dispatch(changeColorScheme())}
      />
      <label className={styles.label} htmlFor="colorTheme">
        <SunIcon className={styles.sun}/>
        <MoonIcon className={styles.moon}/>
      </label>
    </div>
  );
};