import React, {useState} from 'react';

import {View, Image, ImageBackground, StyleSheet, Text, TextInput, Alert} from 'react-native';

import {Feather as Icon} from '@expo/vector-icons';

import {RectButton} from 'react-native-gesture-handler';

import {useNavigation} from '@react-navigation/native';

export default function Login(){

    let [email, setEmail] = useState();
    let [senha, setSenha] = useState();
   
    const navigation = useNavigation();
   
    //Função que navega para tela de cadastro
    function handleNavigationToRegister(){
      navigation.navigate('Register');
    }
   
     //Função que efetua o login
     function goLogin(){
    
       Alert.alert("Login efetuado com sucesso!");
       navigation.navigate('Points')
     
    }
   
   
   
   
   
      return(
     
        <ImageBackground source={require('../../assets/home-background.png')}
        style={styles.container}
        imageStyle={{width:274, height:368}}
        >
            <View style={styles.main}>
                 <Image style={{width:188, height:44}} source={require('../../assets/logo.png')}/>
                 <Text style={styles.title}>Seu marketplace de coleta de residuos</Text>
                 <Text style={styles.description}>Ajudamos pessoas a encontrarem pontos de coleta de forma eficiente</Text>
              
                 <Text style={styles.description}>Efetue o login para acessar o Aplicativo!</Text>
      
            </View>
 
            <View style={styles.footer}>
 
            <TextInput
              style={styles.input}
              placeholder="E-mail"
              maxLength={2}
              autoCapitalize="characters"
              autoCorrect={false}
           
          />
 
 <TextInput
           style={styles.input}
           placeholder="Senha"           
           autoCorrect={false}
           secureTextEntry={true}
          
         />

               <RectButton style={styles.button} onPress={goLogin}>
                   <View style={styles.buttonIcon}>      
                      <Icon name="user-check" color="#FFF" size={24}/>              
                   </View>
                   <Text style={styles.buttonText}>Entrar</Text>
               </RectButton>

               <RectButton style={styles.button} onPress={handleNavigationToRegister}>
                   <View style={styles.buttonIcon}>      
                      <Icon name="user-plus" color="#FFF" size={24}/>              
                   </View>
                   <Text style={styles.buttonText}>Criar conta</Text>
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
