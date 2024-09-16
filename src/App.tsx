import { Layout } from './components/layout/Layout.tsx';
import { ColorThemeButton } from './components/colorThemeButton/ColorThemeButton.tsx';
import { Main } from './components/main/Main.tsx';

export const App = () => {

  return (
    <Layout>
      <ColorThemeButton/>
      <Main/>
    </Layout>
  );
};

