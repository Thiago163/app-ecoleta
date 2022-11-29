import React from 'react'; import {Feather as Icon, FontAwesome} from '@expo/vector-icons'; 
import {useNavigation} from '@react-navigation/native'; import {RectButton} from 'react-native-gesture-handler'; 
import {View, Text, TouchableOpacity, StyleSheet, Image, SafeAreaView} from 'react-native'; 

import { View, Text, StyleSheet } from 'react-native';

export default function Detail () {
    const navigation = useNavigation();    
    function handleNavigatorBack(){        
        navigation.goBack(); 
        return( 
            <SafeAreaView style={{flex:1}}> 
            <View style={styles.container}> 
                <TouchableOpacity onPress={handleNavigatorBack}> 
                    <Icon name="arrow-left" size={20} color="#34cb79"/> 
                </TouchableOpacity>            <Image style={styles.pointImage} source={{uri:'https://f.i.uol.com.br/fotografia/2019/08/16/15659855445d570 b082fe09_1565985544_3x2_md.jpg'}}/> 
               
               <Text style={styles.pointName}>Centro Histórico</Text> 
               <Text style={styles.pointItems}>Lampadas, Óelo de cozinha</Text> 
               <View style={styles.address}> 
                   <Text style={styles.addressTitle}>Endereço</Text> 
                   <Text style={styles.addressContent}>Centro de Santana de 
     Parnaiba - SP</Text> 
               </View> 
            </View> 
            <View style={styles.footer}> 
                <RectButton style={styles.button} onPress={()=>{}}> 
                    <FontAwesome name="whatsapp" size={20} color="#FFF"/> 
                    <Text style={styles.buttonText}>Whatsapp</Text> 
                    </RectButton> 
           <RectButton style={styles.button} onPress={()=>{}}> 
               <Icon name="mail" size={20} color="#FFF"/> 
               <Text style={styles.buttonText}>E-mail</Text> 
           </RectButton> 
       </View> 
       </SafeAreaView> 
   ) } 
   const styles = StyleSheet.create({    container: {      flex: 1,      padding: 32,      paddingTop: 60, 
   },     pointImage: {      width: '100%',      height: 120,      resizeMode: 'cover',      borderRadius: 10,      marginTop: 32, 
   },     pointName: {      color: '#322153',      fontSize: 28,      fontFamily: 'Ubuntu_700Bold',      marginTop: 24, 
   },     pointItems: {      fontFamily: 'Roboto_400Regular',      fontSize: 16,      lineHeight: 24,      marginTop: 8,      color: '#6C6C80' 
   },     address: {      marginTop: 32, 
   }, addressTitle: {      color: '#322153',      fontFamily: 'Roboto_500Medium',      fontSize: 16, 
},     addressContent: {      fontFamily: 'Roboto_400Regular',      lineHeight: 24,      marginTop: 8,      color: '#6C6C80' 
},     footer: {      borderTopWidth: StyleSheet.hairlineWidth,      borderColor: '#999',      paddingVertical: 20,      paddingHorizontal: 32,      paddingBottom: 15,      flexDirection: 'row',      justifyContent: 'space-between' 
},       button: {      width: '48%',      backgroundColor: '#34CB79',      borderRadius: 10,      height: 50,      flexDirection: 'row',      justifyContent: 'center',      alignItems: 'center' 
},     buttonText: {      marginLeft: 8,      color: '#FFF',      fontSize: 16,      fontFamily: 'Roboto_500Medium', 
}, 
});

}
