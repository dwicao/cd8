import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

const MyText = (props) => {
  let id = 0;

  const onPencet = () => {
    props.actions.addTodo({
      id,
      text: 'MANTAP'
    });

    id = id + 1;
  }

  const onEdit = () => {
    props.actions.editTodo(0, 'KEREEEENNN');
  }

  return (
    <View>
      {
        props.todos.map((todo, index) => (
          <Text key={index}>{todo.text}</Text>
        ))
      }
      <TouchableOpacity
        onPress={onPencet}
        style={{ backgroundColor: 'gray' }}
      >
        <Text>Tambah Todo</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={onEdit}
        style={{ backgroundColor: 'gray' }}
      >
        <Text>Edit Todo</Text>
      </TouchableOpacity>
    </View>
  );
}

export default MyText;
