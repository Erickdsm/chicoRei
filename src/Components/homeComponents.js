import React, {useState} from 'react';
console.disableYellowBox = true;
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import homeStyle from '../screens/home/styles';
import Modal from 'react-native-modal';




function Detalhes(props) {
  const [getModal, setModal] = useState(false);

  const atualizaModal = () => {
    setModal(!getModal);
  };

  return (
    <View style={homeStyle.areaBotao}>
      <TouchableOpacity onPress={atualizaModal}>
        <Image source={{uri: props.imagem}} style={homeStyle.card} />
      </TouchableOpacity>
      {/* <Button title="Show modal" onPress={atualizaModal} /> */}

      {/* Dentro da modal */}
      <Modal
        style={{
          padding: 15,
          backgroundColor: 'white',
          borderRadius: 10,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        isVisible={getModal}>
        <View>
          <Text style={homeStyle.textoModal}>{props.descricao}</Text>
          <Text style={homeStyle.textoModal2}>{props.nome}</Text>
          <Image style={homeStyle.cardmodal} source={{uri: props.imagemZoom}} />
          <Text style={homeStyle.textoModal2}>Preço: {props.preco}</Text>

          <Button title="Voltar" onPress={atualizaModal} />
        </View>
      </Modal>
    </View>
  );
}

export function HomeC() {
    const navigation = useNavigation(); 
  return (
    <View>
      <View style={homeStyle.containerMeio}>
        <View>
          <View style={homeStyle.containerMeio}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Masculino')}
              style={homeStyle.botaoIcon}>
              <Text style={homeStyle.enunciadoIcon}>Masculino</Text>
              <Image
                style={homeStyle.imageIcon}
                source={{
                  uri: 'https://chicorei.imgix.net/20046/caaaf8f0-d047-11eb-b0f4-6bb0fc4fb745.jpg?auto=compress,format&q=65&w=425&h=600&fit=crop&crop=top&markpad=0&mark=https%3A%2F%2Fchico-rei.imgix.net%2Fimages%2Fsite%2Fproduct%2Fselo-desgaste.png%3Fauto%3Dformat%26w%3D0.60',
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('Feminino')}
              style={homeStyle.botaoIcon}>
              <Text style={homeStyle.enunciadoIcon}>Feminino</Text>
              <Image
                style={homeStyle.imageIcon}
                source={{
                  uri: 'https://chicorei.imgix.net/16591/33ec07a3-befa-11eb-a27b-cb6840d2940c.jpg?auto=compress,format&q=65&w=425&h=600&fit=crop&crop=top',
                }}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <TouchableOpacity
              onPress={() => navigation.navigate('Sobre')}
              style={homeStyle.botaoIcon}>
        <Image
          style={homeStyle.imagemRight}
          source={{
            uri: 'https://chico-rei.imgix.net/images/site/home/banners/e0be9900-9ec7-11eb-8525-d524a897b311.png?w=1250&auto=compress,format&q=65',
          }}
        />
      </TouchableOpacity>
    </View>
  );
}

export default function HomeComponents({item}) {
  return (
    <View>
      <View style={homeStyle.areaBotao}>
        <View>
          <Text style={homeStyle.titulo}>{item.nome}</Text>
          <Detalhes
            nome={item.nome}
            preco={item.preco}
            imagemZoom={item.imagemZoom}
            imagem={item.imagem}
            descricao={item.descricao}
          />
          <Text style={homeStyle.tituloPreco}>{item.preco}</Text>
        </View>
      </View>
    </View>
  );
}
