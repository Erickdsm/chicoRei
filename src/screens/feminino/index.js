import React, {Component} from 'react';
import {
  SafeAreaView,
  FlatList,
  Text,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';
console.disableYellowBox = true;
import femininoStyle from './styles';
import FemininoComponents from '../../Components/femininoComponents';

export default class Feminino extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pesquisarTexto: '',
      dadosFiltrados: [],

      lista: [
        {
          id: 1,
          nome: 'Rusbé',
          preco: 'R$ R$ 42,90',
          imagem:
            'https://chicorei.imgix.net/14810/f72fb710-f729-11e9-9cf1-31a48bdce9ae.jpg?auto=compress,format&q=65&w=425&h=600&fit=crop&crop=top',

          imagemZoom:
            'https://chicorei.imgix.net/14810/f7307a61-f729-11e9-9cf1-31a48bdce9ae.jpg?auto=compress%2Cformat&q=65&fit=crop&w=330&h=495',
          descricao: 'Modelo feminino',
        },
        {
          id: 2,
          nome: 'Paciência',
          preco: 'R$ R$ 42,90',
          imagem:
            'https://chicorei.imgix.net/17045/e59432f6-a688-11eb-9914-e154ba4887a2.jpg?auto=compress,format&q=65&w=425&h=600&fit=crop&crop=top&markpad=0&mark=https%3A%2F%2Fchico-rei.imgix.net%2Fimages%2Fsite%2Fproduct%2Fselo-desgaste.png%3Fauto%3Dformat%26w%3D0.60',
          imagemZoom:
            'https://chico-rei.imgix.net/images/fabric/PT6500_fabric_22_3.jpg?mark-alpha=90&mark-scale=80&mark-align=middle%2Ccenter&mark=https%3A%2F%2Fchicorei.imgix.net%2F17045%2Fffee6430-ab53-11ea-9754-6744a6bd9b42.png&auto=compress%2Cformat&q=65&fit=crop&w=330&h=495',
          descricao: 'Modelo feminino',
        },
        {
          id: 3,
          nome: 'Baby Yoda',
          preco: 'R$ 49,90',
          imagem:
            'https://chicorei.imgix.net/18334/8e4c8de0-f6b4-11eb-b45b-eb19ff7878c9.jpg?auto=compress,format&q=65&w=425&h=600&fit=crop&crop=top',
          imagemZoom:
            'https://chico-rei.imgix.net/images/fabric/VD1337_fabric_168_2.jpg?mark-alpha=90&mark-scale=80&mark-align=middle%2Ccenter&mark=https%3A%2F%2Fchicorei.imgix.net%2F18334%2Fe49081c0-2045-11eb-bfd9-1b9abce0dbc9.png&auto=compress%2Cformat&q=65&fit=crop&w=330&h=495',
          descricao: 'Modelo feminino',
        },
        {
          id: 4,
          nome: 'Tomá Café',
          preco: 'R$ 42,90',
          imagem:
            'https://chicorei.imgix.net/16079/eb79c798-bfb3-11eb-8200-a7e64b5fa666.jpg?auto=compress,format&q=65&w=425&h=600&fit=crop&crop=top',
          imagemZoom:
            'https://chico-rei.imgix.net/images/fabric/MR837_fabric_115_3.jpg?mark-alpha=90&mark-scale=80&mark-align=middle%2Ccenter&mark=https%3A%2F%2Fchicorei.imgix.net%2F16079%2F0fd4a480-6d1b-11ea-a62b-8b3e986d8ab6.png&auto=compress%2Cformat&q=65&fit=crop&w=330&h=495',
          descricao: 'Modelo feminino',
        },
        {
          id: 5,
          nome: 'Folclore',
          preco: 'R$ 42,90',
          imagem:
            'https://chicorei.imgix.net/9957/d7199830-b9ec-11e9-93dd-d565fcf6c860.jpg?auto=compress,format&q=65&w=425&h=600&fit=crop&crop=top',
          imagemZoom:
            'https://chico-rei.imgix.net/images/fabric/PT6500_fabric_22_3.jpg?mark-alpha=90&mark-scale=80&mark-align=middle%2Ccenter&mark=https%3A%2F%2Fchicorei.imgix.net%2F9957%2F55f7b4b0-5197-11ea-a103-75b511e412eb.png&auto=compress%2Cformat&q=65&fit=crop&w=330&h=495',
          descricao: 'Modelo feminino',
        },
        {
          id: 6,
          nome: 'Black Heart',
          preco: 'R$ 42,90',
          imagem:
            'https://chicorei.imgix.net/12647/efa1ed77-bfb3-11eb-af7a-450f5c2001d2.jpg?auto=compress,format&q=65&w=425&h=600&fit=crop&crop=top',
          imagemZoom:
            'https://chico-rei.imgix.net/images/fabric/PT6500_fabric_22_3.jpg?mark-alpha=90&mark-scale=80&mark-align=middle%2Ccenter&mark=https%3A%2F%2Fchicorei.imgix.net%2F12647%2F11e03f30-0a03-11ea-afde-45def46bbf91.png&auto=compress%2Cformat&q=65&fit=crop&w=330&h=495',
          descricao: 'Modelo feminino',
        },
        {
          id: 7,
          nome: 'Vira Láctea',
          preco: 'R$ 39,90',
          imagem:
            'https://chicorei.imgix.net/16558/a16f4755-4c72-11ec-98af-4f4eaee378c2.jpg?auto=compress,format&q=65&w=425&h=600&fit=crop&crop=top',

          imagemZoom:
            'https://chico-rei.imgix.net/images/fabric/PT6500_fabric_22_3.jpg?mark-alpha=90&mark-scale=80&mark-align=middle%2Ccenter&mark=https%3A%2F%2Fchicorei.imgix.net%2F16558%2Fd369af01-5fda-11eb-a06a-51be2b9b9aca.png&auto=compress%2Cformat&q=65&fit=crop&w=330&h=495',
          descricao: 'Modelo feminino',
        },
        {
          id: 8,
          nome: 'Tempo Perdido',
          preco: 'R$ 49,90',
          imagem:
            'https://chicorei.imgix.net/1629/c1445ce2-c7d0-11eb-94da-9377a715cb6a.jpg?auto=compress,format&q=65&w=425&h=600&fit=crop&crop=top&markpad=0&mark=https%3A%2F%2Fchico-rei.imgix.net%2Fimages%2Fsite%2Fproduct%2Fselo-desgaste.png%3Fauto%3Dformat%26w%3D0.60',
          imagemZoom:
            'https://chico-rei.imgix.net/images/fabric/AZ8225_fabric_18_3.jpg?mark-alpha=90&mark-scale=80&mark-align=middle%2Ccenter&mark=https%3A%2F%2Fchicorei.imgix.net%2F1629%2Fca639b61-396f-11ea-981d-915bb12b2ee6.png&auto=compress%2Cformat&q=65&fit=crop&w=330&h=495',
          descricao: 'Modelo feminino',
        },
        {
          id: 9,
          nome: 'Alucinação',
          preco: 'R$ 49,90',
          imagem:
            'https://chicorei.imgix.net/13875/218d4561-befa-11eb-af1e-ab03b1afc5c6.jpg?auto=compress,format&q=65&w=425&h=600&fit=crop&crop=top',
          imagemZoom:
            'https://chico-rei.imgix.net/images/fabric/PT6500_fabric_22_3.jpg?mark-alpha=90&mark-scale=80&mark-align=middle%2Ccenter&mark=https%3A%2F%2Fchicorei.imgix.net%2F13875%2F74496d20-1126-11ea-9437-fd925e8776d2.png&auto=compress%2Cformat&q=65&fit=crop&w=330&h=495',
          descricao: 'Modelo feminino',
        },
        {
          id: 10,
          nome: 'Silva Sauro',
          preco: 'R$ 49,90',
          imagem:
            'https://chicorei.imgix.net/4802/447e73a0-069e-11ec-a085-a78a7e96437f.jpg?auto=compress,format&q=65&w=425&h=600&fit=crop&crop=top',
          imagemZoom:
            'https://chico-rei.imgix.net/images/fabric/AM830_fabric_114_5.jpg?mark-alpha=90&mark-scale=80&mark-align=middle%2Ccenter&mark=https%3A%2F%2Fchicorei.imgix.net%2F4802%2F1a19d090-53ef-11ea-afab-137fef5584a0.png&auto=compress%2Cformat&q=65&fit=crop&w=330&h=495',
          descricao: 'Modelo feminino',
        },
      ],
    };
  }

  Pesquisar = texto => {
    this.setState({pesquisarTexto: texto});

    let filtro = this.state.lista.filter(item => {
      return item.nome.toLowerCase().includes(texto.toLowerCase());
    });

    this.setState({dadosFiltrados: filtro});
  };

  render() {
    return (
      <SafeAreaView style={femininoStyle.box}>
        <Text style={femininoStyle.enunciado2}> BAZZAAR </Text>
        <TextInput
          style={{textAlign: 'right', paddingRight: 25}}
          onChangeText={valor => this.Pesquisar(valor)}
          placeholder="Pesquisar..."
        />
        {
          <FlatList
            data={
              this.state.dadosFiltrados && this.state.dadosFiltrados.length > 0
                ? this.state.dadosFiltrados
                : this.state.lista
            }
            numColumns={2}
            renderItem={item => FemininoComponents(item)}
            key={item => item.id}
            initialNumToRender={4}
          />
        }
      </SafeAreaView>
    );
  }
}
