import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'

import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native'

export default function Welcome() {
  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <View style={styles.containerLogo}>
        <Animatable.Image
          animation="flipInY"
          source={require('../../assets/logo.png')}
          style={{ width: '100%' }}
          resizeMode="contain"
        />
      </View>

      <Animatable.View
        animation="fadeInUp"
        delay={600}
        style={styles.containerForm}
      >
        <Text style={styles.title}>
          Monitore, organize seus gastos de qualquer lugar!
        </Text>
        <Text style={styles.text}> Faça o login para começar </Text>

        <TouchableOpacity
          onPress={() => navigation.navigate('SignIn')}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Acessar</Text>
        </TouchableOpacity>
      </Animatable.View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#38a69d'
  },
  containerLogo: {
    flex: 2,
    backgroundColor: '#38a69d',

    justifyContent: 'center',
    alignItems: 'center'
  },
  containerForm: {
    flex: 1,
    backgroundColor: 'white',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: '5%',
    paddingEnd: '5%'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 28,
    marginBottom: 12
  },
  text: {
    color: '#a1a1a1'
  },
  button: {
    position: 'absolute',
    backgroundColor: '#38a69d',
    borderRadius: 50,
    paddingVertical: 8,
    width: '60%',

    alignItems: 'center',
    alignSelf: 'center',
    bottom: '15%',
    justifyContent: 'center'
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold'
  }
})
