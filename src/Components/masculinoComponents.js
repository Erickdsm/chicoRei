
import React, {useState} from 'react';
console.disableYellowBox = true;
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  Image,
} from 'react-native';
import masculinoStyle from '../screens/masculino/styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Modal from 'react-native-modal';




function Detalhes(props) {
  const [getModal, setModal] = useState(false);

  const atualizaModal = () => {
    setModal(!getModal);
  };

  return (
    <View style={masculinoStyle.areaBotao}>
      <TouchableOpacity onPress={atualizaModal}>
        <Image source={{uri: props.imagem}} style={masculinoStyle.card} />
      </TouchableOpacity>
      {/* <Button title="Show modal" onPress={atualizaModal} /> */}

      {/* Dentro da modal */}
      <Modal
        style={{
          padding: 15,
          flex: 1,
          backgroundColor: 'white',
          borderRadius: 10,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        isVisible={getModal}>
        <View>
          <Text style={masculinoStyle.textoModal}>{props.descricao}</Text>
          <Text style={masculinoStyle.textoModal2}>{props.nome}</Text>
          <Image style={masculinoStyle.cardmodal} source={{uri: props.imagemZoom}} />
          <Text style={masculinoStyle.textoModal2}>Preço: {props.preco}</Text>
          

          <Button title="Voltar" onPress={atualizaModal} />
        </View>
      </Modal>
    </View>
  );
}

export default function MasculinoComponents({item}) {
  return (
    <View style={masculinoStyle.areaBotao}>
      <View>
        <Text style={masculinoStyle.titulo}>{item.nome}</Text>
        <Detalhes
          nome={item.nome}
          preco={item.preco}
          imagemZoom={item.imagemZoom}
          imagem={item.imagem}
          descricao={item.descricao}
        />
        <Text style={masculinoStyle.tituloPreco}>{item.preco}</Text>
      </View>
    </View>
  );
}