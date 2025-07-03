import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

const HomeScreen = () => {
  return (
    <View className="flex-1 items-center justify-center bg-gray-100">
      <TouchableOpacity className="bg-white p-4 rounded-lg shadow-md items-center m-2">
        <View className="w-48 h-32 bg-gray-300 items-center justify-center">
          <Text className="text-lg">Elaboración de Manual</Text>
        </View>
        <Text className="text-lg mt-2">Elaboración de Manual</Text>
      </TouchableOpacity>
      <TouchableOpacity className="bg-white p-4 rounded-lg shadow-md items-center m-2">
        <View className="w-48 h-32 bg-gray-300 items-center justify-center">
          <Text className="text-lg">Adquirir versión Pro</Text>
        </View>
        <Text className="text-lg mt-2">Adquirir versión Pro</Text>
      </TouchableOpacity>
      <TouchableOpacity className="bg-white p-4 rounded-lg shadow-md items-center m-2">
        <View className="w-48 h-32 bg-gray-300 items-center justify-center">
          <Text className="text-lg">Repositorio Legal</Text>
        </View>
        <Text className="text-lg mt-2">Repositorio Legal</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
