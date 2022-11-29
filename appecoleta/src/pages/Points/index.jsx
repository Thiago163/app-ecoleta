import React from "react";

import { View, Text, StyleSheetTouchableOpacity, ScrollView, Image } from 'react-native';

import {Feather as Icon} from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native';

import MapView, { Marker } from 'react-native-maps';

export default function Detail () {

    const navigation = useNavigation();

    function handleNavigationToDetail(){
        navigation.navigate('Datail');
    }

    function handleNavigatorBack(){
        navigation.goBack();
    }
    return (<>
    <View style={styles.container}>

        <TouchableOpacity onPress={()=>{}}>
           <Icon name="arrow-left" size={20} color="#34cb79"/>
       </TouchableOpacity>

        <Text style={styles.title}>Bem vindo.</Text>
        <Text style={styles.description}>Encontre no mapa um ponto de coleta.</Text>

        <View style={styles.mapContainer}>
        
        <MapView style={styles.map} initialRegion={{
            latitude:-23.4460282, 
            longitude:-46.9172153, 
            latitudeDelta: 0.014, 
            longitudeDelta: 0.014
            }}>

            <Marker onPress={handleNagationToDetail} coordinate= { {latitude:-23.4460282,longitude:-46.9172153} } >

        <View style={styles.mapMarkerContainer}>
                    <Image style={styles.mapMarkerImage} source={{url: 'https://f.i.uol.com.br/fotografia/2019/08/16/15659855445d570b082fe09_1565985544_3x2_md.jpg'}}/>
                    <Text  style={styles.mapMarkerTitle}>Centro Histórico</Text>
                </View>
            </Marker>
            </MapView>
    </View>

        <View style={styles.itemsContainer}>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{paddingHorizontal:20}}>

            <TouchableOpacity style={styles.item} onPress={()=>{}}>
            <Image width={42} height={42} source={require('../../assets/icones/eletronicos.png')} />
                <Text style={styles.itemTitle}>Baterias</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.item} onPress={()=>{}}>
            <Image width={42} height={42} source={require('../../assets/icones/lampadas.png')} />
                <Text style={styles.itemTitle}>Eletrônicos</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.item} onPress={()=>{}}>
            <Image width={42} height={42} source={require('../../assets/icones/oleo.png')} />
                <Text style={styles.itemTitle}>Óleo</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.item} onPress={()=>{}}>
            <Image width={42} height={42} source={require('../../assets/icones/organicos.png')} />
                <Text style={styles.itemTitle}>Organicos</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.item} onPress={()=>{}}>
            <Image width={42} height={42} source={require('../../assets/icones/papeis-papelao.png')} />
                <Text style={styles.itemTitle}>Papelão</Text>
            </TouchableOpacity>
        </ScrollView>
        </View>
   </View>
   </>

    )
}