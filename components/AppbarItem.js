import React from 'react';
import { Platform } from 'react-native';
import { Appbar } from 'react-native-paper';

export default function AppbarItem() {

  const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';

  return (
      <Appbar.Header style={{backgroundColor:"#C2EEFF"}}>
        <Appbar.Content title="Title" subtitle={'Subtitle'} />
        <Appbar.Action icon="magnify" onPress={() => { }} />
        <Appbar.Action icon={MORE_ICON} onPress={() => { }} />
      </Appbar.Header>
  );
}