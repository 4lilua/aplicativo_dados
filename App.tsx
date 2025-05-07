import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, Image, TouchableOpacity,View, ImageSourcePropType} from 'react-native';
import {useState} from 'react';

const imagens: ImageSourcePropType[] = [
  require('./assets/Dado/dado1.png'),
  require('./assets/Dado/dado2.png'),
  require('./assets/Dado/dado3.png'),
  require('./assets/Dado/dado4.png'),
  require('./assets/Dado/dado5.png'),
  require('./assets/Dado/dado6.png')
]



export default function App() {
  const[Num, setNum] = useState(0);
  //const[Anterior, setAnterior] = useState(0);
  
  function trocaEstado(){
    let sorteio = 0;
    do{
      sorteio = Math.floor(Math.random() * 6);
      console.log(sorteio, '-', Num);
    }while(sorteio === Num)
    setNum(sorteio);  
    //setAnterior(Num);
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={trocaEstado}>
        <Image style={styles2.imagem} source={imagens[Num]}></Image>  
        <Text style={styles2.texto}>Número sorteado: {Num + 1}</Text>
      </TouchableOpacity>
      <StatusBar style="auto" /> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#956ece',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const styles2 = StyleSheet.create({
  texto: {
    color: '#fff',
    fontSize: 40,
    fontWeight: 'bold',
  },
  fonteCinza: {
    color: '#c7c9cc',
    fontSize: 20,
    fontWeight: 'bold',
  },
  imagem: {
    width: 200,
    height: 200,
  },
  imagem2: {
    width: 100,
    height: 100,
  }
});

const styles3 = StyleSheet.create({

});