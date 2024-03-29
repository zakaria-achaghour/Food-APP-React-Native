import React, {useState} from 'react'
import * as eva from '@eva-design/eva';
import { ApplicationProvider,IconRegistry } from '@ui-kitten/components';
import { default as themeGlobal } from './Config/custom-theme.json';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { ThemeContext } from './Config/theme-context';
import Appnavigator from './navigation/AppNavigator';
import { FontAwesome5IconsPack } from './Config/fontAwesom5-icons';
import { FontAwesomeIconsPack } from './Config/fontAwesom-icons';
import { IoniconsIconsPack } from './Config/ionicons -icons';

import { Provider } from 'react-redux'
import store from './App/store';
import { StatusBar } from 'react-native';
 
export default function App() {
  
const [theme, setTheme] = useState('light');


const toggleTheme = () => {
  const nextTheme = theme === 'light' ? 'dark' : 'light';

  
  setTheme(nextTheme);
};

  return (<>
  <Provider store={store}>
     <IconRegistry icons={[EvaIconsPack, FontAwesome5IconsPack,FontAwesomeIconsPack,IoniconsIconsPack]} />
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ApplicationProvider {...eva} theme={{...eva[theme],...themeGlobal}} >
      <StatusBar barStyle={theme === 'dark'?'light-content':'dark-content'} />

        <Appnavigator/>
      </ApplicationProvider>
    </ThemeContext.Provider>
  </Provider>
  </>
  );
}
