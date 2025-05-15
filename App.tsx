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
  const[C, setC] = useState('W');
  
  function trocaEstado(){
    let sorteio = 0;
    do{
      sorteio = Math.floor(Math.random() * 6);
      console.log(sorteio, '-', Num);
    }while(sorteio === Num)
    setNum(sorteio);  
    //setAnterior(Num);

    if(sorteio < 3){
      setC('yellow');
    }
    else if(sorteio == 3 || sorteio == 4){
      setC('blue');
    }
    else{
      setC('white');
    }
  }

  return (
    <View style={{backgroundColor: C, flex: 1, alignItems: 'center', justifyContent: 'center'}}>
              <Text style={styles.texto}>Sorte</Text>
      <TouchableOpacity onPress={trocaEstado}>

        <Image style={styles.imagem} source={imagens[Num]}></Image>  

      </TouchableOpacity>
      <Text style={styles.texto}>Número sorteado: {Num + 1}</Text>
      <StatusBar style="auto" /> 
    </View>
  );
}

const styles = StyleSheet.create({
  texto: {
    color: '#000',
    fontSize: 40,
    fontWeight: 'bold',
    margin: 49,
  },
  imagem: {
    width: 200,
    height: 200,
  },
});
