import React from 'react';
import { View, Text } from 'react-native';

const AboutScreen = () => {
  return (
    <View className="flex-1 p-4">
      <Text className="text-lg font-bold mb-4">Acerca de la Aplicación</Text>
      <Text className="text-base">
        Esta aplicación sirve como un manual de contrataciones públicas en el ámbito del derecho legal en Venezuela. 
        Proporciona una guía completa y actualizada sobre los procesos de contratación del estado, 
        cumpliendo con el marco legal venezolano. El objetivo es ofrecer una herramienta accesible y fácil de usar 
        para profesionales, estudiantes y cualquier persona interesada en la materia, 
        facilitando la comprensión y aplicación de la normativa vigente en materia de contrataciones públicas.
      </Text>
    </View>
  );
};

export default AboutScreen;
