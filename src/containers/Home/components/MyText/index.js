import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

const MyText = (props) => {
  return (
    <View>
      {
        props.todos.map((todo, index) => (
          <Text key={index}>{todo.text}</Text>
        ))
      }
    </View>
  );
}

export default MyText;
