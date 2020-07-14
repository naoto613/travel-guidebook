import React from 'react';
import ListItem from '../components/ListItem';
import AppbarItem from '../components/AppbarItem';

import { Provider } from 'react-native-paper';

export default HomeScreen = () => {

  return (
    <Provider>
      <AppbarItem />
      <ListItem />
    </Provider>
  );
}