import React, {Component} from 'react';
import {
  SafeAreaView,
  FlatList,
  Text,
  StyleSheet,
  TextInput,
} from 'react-native';
console.disableYellowBox = true;
import masculinoStyle from './styles';
import MasculinoComponents from '../../Components/masculinoComponents';
import {useNavigation} from '@react-navigation/native';



export default class Masculino extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pesquisarTexto: '',
      dadosFiltrados: [],

      lista: [
        {
          id: 1,
          nome: "C'est La Vie",
          preco: 'R$ R$ 42,90',
          imagem:
            'https://chicorei.imgix.net/13121/211cedc1-bfb2-11eb-825f-791061ad5383.jpg?auto=compress,format&q=65&w=425&h=600&fit=crop&crop=top',

          imagemZoom:
            'https://chico-rei.imgix.net/images/fabric/BEGE716_fabric_119_4.jpg?mark-alpha=90&mark-scale=80&mark-align=middle%2Ccenter&mark=https%3A%2F%2Fchicorei.imgix.net%2F13121%2F6a713c80-d992-11ea-98ce-4179e4706b5b.png&auto=compress%2Cformat&q=65&fit=crop&w=330&h=495',
          descricao: '',
        },
        {
          id: 2,
          nome: 'Você vai',
          preco: 'R$ R$ 42,90',
          imagem:
            'https://chicorei.imgix.net/12066/fb697a20-bef9-11eb-a4d6-7f54b757d5bd.jpg?auto=compress,format&q=65&w=425&h=600&fit=crop&crop=top&markpad=0&mark=https%3A%2F%2Fchico-rei.imgix.net%2Fimages%2Fsite%2Fproduct%2Fselo-desgaste.png%3Fauto%3Dformat%26w%3D0.60',
          imagemZoom:
            'https://chico-rei.imgix.net/images/fabric/PT6500_fabric_22_3.jpg?mark-alpha=90&mark-scale=80&mark-align=middle%2Ccenter&mark=https%3A%2F%2Fchicorei.imgix.net%2F12066%2Fc2f68000-1128-11ea-b304-0fa1c20f09a6.png&auto=compress%2Cformat&q=65&fit=crop&w=330&h=495',
          descricao: 'Modelo masculino',
        },
        {
          id: 3,
          nome: 'Pagodinho',
          preco: 'R$ 42,90',
          imagem:
            'https://chicorei.imgix.net/18517/a89e5950-cfa7-11eb-b79b-537cf9a8a799.jpg?auto=compress,format&q=65&w=425&h=600&fit=crop&crop=top',
          imagemZoom:
            'https://chico-rei.imgix.net/images/fabric/BEGE716_fabric_119_4.jpg?mark-alpha=90&mark-scale=80&mark-align=middle%2Ccenter&mark=https%3A%2F%2Fchicorei.imgix.net%2F18517%2Fe2949bf0-34e4-11eb-b087-abab3e52e581.png&auto=compress%2Cformat&q=65&fit=crop&w=330&h=495',
          descricao: 'Modelo masculino',
        },
        {
          id: 4,
          nome: 'Saideira',
          preco: 'R$ 49,90',
          imagem:
            'https://chicorei.imgix.net/18513/3fdad100-9b86-11eb-bed0-edb1e041e725.jpg?auto=compress,format&q=65&w=425&h=600&fit=crop&crop=top',
          imagemZoom:
            'https://chico-rei.imgix.net/images/fabric/VM909_fabric_135_3.jpg?mark-alpha=90&mark-scale=80&mark-align=middle%2Ccenter&mark=https%3A%2F%2Fchicorei.imgix.net%2F18513%2Fd7ede850-33cc-11eb-b176-43f8bebe2021.png&auto=compress%2Cformat&q=65&fit=crop&w=330&h=495',
          descricao: 'Modelo masculino',
        },
        {
            id: 5,
            nome: 'Humans',
            preco: 'R$ 49,90',
            imagem:
              'https://chicorei.imgix.net/1167/4112e1b0-befa-11eb-9c9d-8570d7233fe7.jpg?auto=compress,format&q=65&w=425&h=600&fit=crop&crop=top',
            imagemZoom:
              'https://chico-rei.imgix.net/images/fabric/VD1337_fabric_168_2.jpg?mark-alpha=90&mark-scale=80&mark-align=middle%2Ccenter&mark=https%3A%2F%2Fchicorei.imgix.net%2F1167%2Feb367950-d1ab-11ea-ba47-f32fad5c192b.png&auto=compress%2Cformat&q=65&fit=crop&w=330&h=495',
            descricao: 'Modelo masculino',
          },
        {
          id: 6,
          nome: 'Vingança',
          preco: 'R$ 49,90',
          imagem:
            'https://chicorei.imgix.net/20262/bb956e80-f6b8-11eb-a20e-0d153c035c4e.jpg?auto=compress,format&q=65&w=425&h=600&fit=crop&crop=top',
          imagemZoom:
            'https://chico-rei.imgix.net/images/fabric/PT6500_fabric_22_3.jpg?mark-alpha=90&mark-scale=80&mark-align=middle%2Ccenter&mark=https%3A%2F%2Fchicorei.imgix.net%2F20262%2Fbc8618d1-d9a8-11eb-9531-91c1338bcfee.png&auto=compress%2Cformat&q=65&fit=crop&w=330&h=495',
          descricao: 'Modelo masculino',
        },
        {
            id: 7,
            nome: 'Dreams',
            preco: 'R$ 42,90',
            imagem:
              'https://chicorei.imgix.net/3884/0fc130e1-a298-11eb-9c0a-57559c5102c7.jpg?auto=compress,format&q=65&w=425&h=600&fit=crop&crop=top',
            imagemZoom:
              'https://chico-rei.imgix.net/images/fabric/AM830_fabric_114_5.jpg?mark-alpha=90&mark-scale=80&mark-align=middle%2Ccenter&mark=https%3A%2F%2Fchicorei.imgix.net%2F3884%2F1bf468e0-f016-11e9-83d2-bbf7944fb676.png&auto=compress%2Cformat&q=65&fit=crop&w=330&h=495',
            descricao: 'Modelo masculino',
          },
          {
            id: 8,
            nome: 'The Little Prince',
            preco: 'R$ 49,90',
            imagem:
              'https://chicorei.imgix.net/6088/e1616600-bfb3-11eb-9aca-05991bd41177.jpg?auto=compress,format&q=65&w=425&h=600&fit=crop&crop=top',
            imagemZoom:
              'https://chico-rei.imgix.net/images/fabric/AZ8225_fabric_18_3.jpg?mark-alpha=90&mark-scale=80&mark-align=middle%2Ccenter&mark=https%3A%2F%2Fchicorei.imgix.net%2F6088%2F03ea0610-3edb-11ea-b305-ef5cc566d69d.png&auto=compress%2Cformat&q=65&fit=crop&w=330&h=495',
            descricao: 'Modelo masculino',
          },
          {
            id: 9,
            nome: 'Alceu Dispor',
            preco: 'R$ 42,90',
            imagem:
              'https://chicorei.imgix.net/16571/0c219e10-644a-11ec-be5e-7f9465915eeb.jpg?auto=compress,format&q=65&w=425&h=600&fit=crop&crop=top',
            imagemZoom:
              'https://chico-rei.imgix.net/images/fabric/AZ8225_fabric_18_3.jpg?mark-alpha=90&mark-scale=80&mark-align=middle%2Ccenter&mark=https%3A%2F%2Fchicorei.imgix.net%2F16571%2F0ec49f60-8afc-11ea-96db-4b22c842bc6a.png&auto=compress%2Cformat&q=65&fit=crop&w=330&h=495',
            descricao: 'Modelo masculino',
          },
          {
            id: 10,
            nome: 'Nem Te Vi',
            preco: 'R$ 42,90',
            imagem:
              'https://chicorei.imgix.net/20529/e7090a80-1045-11ec-bd57-31fedae2a673.jpg?auto=compress,format&q=65&w=425&h=600&fit=crop&crop=top',
            imagemZoom:
              'https://chico-rei.imgix.net/images/fabric/MR837_fabric_115_3.jpg?mark-alpha=90&mark-scale=80&mark-align=middle%2Ccenter&mark=https%3A%2F%2Fchicorei.imgix.net%2F20529%2F76f45a40-0421-11ec-a840-b9e9da5438d1.png&auto=compress%2Cformat&q=65&fit=crop&w=330&h=495',
            descricao: 'Modelo masculino',
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
      <SafeAreaView style={masculinoStyle.box}>
        <Text style={masculinoStyle.enunciado2}> BAZZAAR </Text>
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
            renderItem={item => MasculinoComponents(item)}
            key={item => item.id}
            initialNumToRender={4}
          />
        }
      </SafeAreaView>
    );
  }
}
