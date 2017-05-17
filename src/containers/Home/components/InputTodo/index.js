import React from 'react';
import {
  View,
  TextInput,
} from 'react-native';
import styles from './index.style';

const InputTodo = (props) => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.textInput}/>
    </View>
  );
};

export default InputTodo;
