import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';

const SideMenu = (props: any) => {
  return (
    <DrawerContentScrollView {...props}>
      <View className="p-4">
        <Image source={require('../assets/logo.png')} className="w-16 h-16 mb-4" />
        <Text className="text-lg font-bold">Manuales de Contrataciones</Text>
      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};

export default SideMenu;
