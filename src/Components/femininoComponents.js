import React, {useState} from 'react';
console.disableYellowBox = true;
import {View, Text, Button, TouchableOpacity, Image} from 'react-native';
import femininoStyle from '../screens/masculino/styles';
import Modal from 'react-native-modal';

function Detalhes(props) {
  const [getModal, setModal] = useState(false);

  const atualizaModal = () => {
    setModal(!getModal);
  };

  return (
    <View style={femininoStyle.areaBotao}>
      <TouchableOpacity onPress={atualizaModal}>
        <Image source={{uri: props.imagem}} style={femininoStyle.card} />
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
          <Text style={femininoStyle.textoModal}>{props.descricao}</Text>
          <Text style={femininoStyle.textoModal2}>{props.nome}</Text>
          <Image
            style={femininoStyle.cardmodal}
            source={{uri: props.imagemZoom}}
          />
          <Text style={femininoStyle.textoModal2}>Preço: {props.preco}</Text>

          <Button title="Voltar" onPress={atualizaModal} />
        </View>
      </Modal>
    </View>
  );
}

export default function FemininoComponents({item}) {
  return (
    <View style={femininoStyle.areaBotao}>
      <View>
        <Text style={femininoStyle.titulo}>{item.nome}</Text>
        <Detalhes
          nome={item.nome}
          preco={item.preco}
          imagemZoom={item.imagemZoom}
          imagem={item.imagem}
          descricao={item.descricao}
        />
        <Text style={femininoStyle.tituloPreco}>{item.preco}</Text>
      </View>
    </View>
  );
}
