import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { DrawerHeaderProps } from '@react-navigation/drawer';

const Header = ({ navigation }: DrawerHeaderProps) => {
  return (
    <View className="flex-row items-center justify-between p-4 bg-white shadow-md">
      <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
        <Text>Menu</Text>
      </TouchableOpacity>
      <View className="flex-row items-center">
        <Image source={require('../assets/logo.png')} className="w-8 h-8 mr-2" />
        <Text className="text-lg font-bold">Manuales de Contrataciones</Text>
      </View>
      <View />
    </View>
  );
};

export default Header;
