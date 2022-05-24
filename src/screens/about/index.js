import React from 'react';
import {
  View,
  Text,
  Button,
  ScrollView,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import aboutStyle from './styles';

export default function Sobre() {
  return (
    <View style={aboutStyle.box}>
    <Text style={aboutStyle.enunciado2}> BAZZAAR </Text>
      <Text style={aboutStyle.titulo}>Quem Somos</Text>
      <Text style={aboutStyle.textoCorpo}>
        Apaixonados por arte, apaixonados por camiseta, Bazzaar é uma loja
        virtual que alia criatividade e tecnologia em camisetas personalizadas
        que geram impacto social através de suas vendas. Investimos na
        diversidade para dialogar com as mais diversas tribos, fazendo com que a
        arte salte dos objetos e seja uma conexão que inicia diálogos por aí.
        Camisetas mudam o mundo!
      </Text>
    </View>
  );
}
