import React from 'react';
import {
  View,
  TextInput,
} from 'react-native';
import styles from './index.style';

const InputTodo = (props) => {
  const { actions } = props;

  let tempText = '';

  const onChangeText = (text) => {
    tempText = text;
  };

  const onAddTodo = () => {
    actions.addTodo(tempText);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        autoCorrect={false}
        onChangeText={onChangeText}
        onSubmitEditing={onAddTodo}
      />
    </View>
  );
};

export default InputTodo;
