import React, {useState, useEffect} from 'react';

import {View, Image, ImageBackground, StyleSheet, Text, TextInput, Alert} from 'react-native';

import {Feather as Icon} from '@expo/vector-icons';

import {RectButton} from 'react-native-gesture-handler';

import {useNavigation} from '@react-navigation/native';

//Importando o AsyncStorage
//import AsyncStorage from '@react-native-async-storage/async-storage';


export default function Register(){

  const dataKey = '@ecoleta:users';

  let [nomeUsuario, setNome] = useState();
  let [emailUsuario, setEmail] = useState();
  let [senhaUsuario, setSenha] = useState();

  const navigation = useNavigation();

  //Função que navega para a tela de Login
  function handleNavigationToLogin(){
    navigation.navigate('Login');
  }

  //Função que navega para a tela de Login
  function handleNavigationToPoints(){
    navigation.navigate('Points');
  }

  //Função que faz o cadastro
  async function handleRegister(){

    let dados ={
      name:  nomeUsuario,
      email: emailUsuario,
      senha: senhaUsuario
    }

    try{
    
     
     //   await AsyncStorage.setItem(dataKey, JSON.stringify(dados));

        Alert.alert("Usuário cadastrado com sucesso!");

    } catch(error){
      console.log(error);

      Alert.alert("Preencha todos os dados");

    }

    useEffect(()=>{

        async function loadData(){
      //    const data = await AsyncStorage.getItem(dataKey);
          
         // console.log(JSON.parse(data));
        
        }
    
        loadData();
    
      },[])
    
        return(
            <ImageBackground source={require('../../assets/home-background.png')} 
            style={styles.container}
            imageStyle={{width:274, height:368}}
            >
                <View style={styles.main}>
                     <Image style={{width:188, height:44}} source={require('../../assets/logo.png')}/>
                     <Text style={styles.title}>Criar uma conta gratuita</Text>
                     <Text style={styles.description}>Crie uma conta agora mesmo para utilizar nosso aplicativo!</Text>
                 
                </View>
    
                <View style={styles.footer}>
    
                <TextInput
                  onChangeText={setNome}
                  style={styles.input}
                  placeholder="Nome completo"            
                  autoCorrect={false}            
              />
    
    

    <TextInput
            onChangeText={setEmail}
            style={styles.input}
            placeholder="Seu melhor e-mail"            
            autoCorrect={false}            
          />

        <TextInput
          onChangeText={setSenha}
            style={styles.input}
            placeholder="Senha"            
            autoCorrect={false} 
            secureTextEntry={true}           
          />

                <RectButton style={styles.button} onPress={handleRegister}>
                    <View style={styles.buttonIcon}>       
                       <Icon name="arrow-right" color="#FFF" size={24}/>               
                    </View>
                    <Text style={styles.buttonText}>Criar uma conta</Text>
                </RectButton>
            </View>

      </ImageBackground>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        padding: 32,
        backgroundColor: '#F0F0F5'
    },

   
 
 main: {
        flex: 1,
        justifyContent: 'center'
    },

    title:{
        color:'#322153',
        fontSize: 32,
        fontFamily: 'Ubuntu_700Bold',
        maxWidth: 260,
        marginTop: 64
    },

    description: {
        color: '#6C6C80',
        fontSize: 16,
        marginTop: 16,
        fontFamily: 'Roboto_400Regular',
        maxWidth: 260,
        lineHeight: 24,
      },

      footer: {},

      select: {},

  input: {
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 10,
    marginBottom: 8,
    paddingHorizontal: 24,
    fontSize: 16,
  },

  button: {
    backgroundColor: '#34CB79',
    height: 60,
    flexDirection: 'row',
    borderRadius: 10,
    overflow: 'hidden',
    alignItems: 'center',
    marginTop: 8,
  },

  buttonIcon: {
    height: 60,
    width: 60,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    justifyContent: 'center',
    alignItems: 'center'
  },

  buttonText: {
    flex: 1,
    justifyContent: 'center',
    textAlign: 'center',
    color: '#FFF',
    fontFamily: 'Roboto_500Medium',
    fontSize: 16,
  }

});

}
