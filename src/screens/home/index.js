import React, {Component, } from 'react';
import {
  View,
  ScrollView,
  Image,
  SafeAreaView,
  FlatList,
  Text,
  StyleSheet,
} from 'react-native';
console.disableYellowBox = true;
import homeStyle from './styles';
import { HomeC } from '../../Components/homeComponents';
import HomeComponents from '../../Components/homeComponents';


 export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lista: [
        {
          id: 1,
          nome: "Pulmão",
          preco: 'R$ 39,90',
          imagem:
            'https://chicorei.imgix.net/15447/a2d73f74-b1c2-11ec-8449-09ddfae1a836.jpg?auto=compress,format&q=65&w=425&h=600&fit=crop&crop=top&markpad=0&mark=https%3A%2F%2Fchico-rei.imgix.net%2Fimages%2Fsite%2Fproduct%2Fselo-desgaste.png%3Fauto%3Dformat%26w%3D0.60',

          imagemZoom:
            'https://chico-rei.imgix.net/images/fabric/PT6500_fabric_22_3.jpg?mark-alpha=90&mark-scale=80&mark-align=middle%2Ccenter&mark=https%3A%2F%2Fchicorei.imgix.net%2F15447%2F9a16f6e0-e8ab-11eb-a2a2-d3c28cf759d4.png&auto=compress%2Cformat&q=65&fit=crop&w=330&h=495',
          descricao: 'Modelo masculino',
        },
        {
          id: 2,
          nome: 'Bacurau',
          preco: 'R$ 39,90',
          imagem:
            'https://chicorei.imgix.net/20046/b767bfd0-cfa7-11eb-80cf-817420752524.jpg?auto=compress,format&q=65&w=425&h=600&fit=crop&crop=top&markpad=0&mark=https%3A%2F%2Fchico-rei.imgix.net%2Fimages%2Fsite%2Fproduct%2Fselo-desgaste.png%3Fauto%3Dformat%26w%3D0.60',
          imagemZoom:
            'https://chico-rei.imgix.net/images/fabric/BR6001_fabric_2_3.jpg?mark-alpha=90&mark-scale=80&mark-align=middle%2Ccenter&mark=https%3A%2F%2Fchicorei.imgix.net%2F20046%2Fc105ca41-c30f-11eb-886c-bba8db382fb1.png&auto=compress%2Cformat&q=65&fit=crop&w=330&h=495',
          descricao: 'Modelo feminino',
        },
        {
          id: 3,
          nome: 'Rainbow Shot',
          preco: 'R$ 39,90',
          imagem:
            'https://chicorei.imgix.net/14053/46f16141-c799-11eb-bf51-bf6718ef55a8.jpg?auto=compress,format&q=65&w=425&h=600&fit=crop&crop=top&markpad=0&mark=https%3A%2F%2Fchico-rei.imgix.net%2Fimages%2Fsite%2Fproduct%2Fselo-desgaste.png%3Fauto%3Dformat%26w%3D0.60',
          imagemZoom:
            'https://chico-rei.imgix.net/images/fabric/PT6500_fabric_22_3.jpg?mark-alpha=90&mark-scale=80&mark-align=middle%2Ccenter&mark=https%3A%2F%2Fchicorei.imgix.net%2F14053%2Fab432f11-54db-11eb-9059-dd3cacc97b77.png&auto=compress%2Cformat&q=65&fit=crop&w=330&h=495',
          descricao: 'Modelo masculino',
        },
      ],
    };
  }
  render() {
    return (
      <SafeAreaView style={homeStyle.box}>
        <Text style={homeStyle.enunciado2}> BAZZAAR </Text>
        <Text style={homeStyle.promocoes}> Promoções da semana: </Text>
        {
          <FlatList
            data={this.state.lista}
            numColumns={3}
            renderItem={item => HomeComponents(item)}
            key={item => item.id}
            initialNumToRender={1}
          />
        }
        <View>
          <HomeC/>
      </View>
      </SafeAreaView>
    );
  }
}

