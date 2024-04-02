import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native'

export default (props) => {
  return (
    <View style={{...styles.container, backgroundColor: props.backgroundColor}}>
      <Text style={styles.text}>helloFriend</Text>
      <TouchableOpacity
        style={{...styles.button1, backgroundColor: '#a0d'}}
        onPress={() => props.fun1()}
      >
        <Text style={styles.textButton}>Turn On</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{...styles.button1,  backgroundColor: '#0df'}}
        onPress={() => props.fun2()}
      >
        <Text style={styles.textButton}>Turn Off</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  text: {
    fontSize: 10
  },
  button1: {
    height: 60,
    width: '60%',
    borderRadius: 30,
    backgroundColor: '#a0d',
    justifyContent: 'center',
    alignItems: 'center'
  },
  textButton: {
    fontSize: 15,
    color: '#eee',
    margin: 10,
  }
})