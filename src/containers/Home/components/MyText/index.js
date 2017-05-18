import React, { Component } from 'react';
import {
  View,
  Text,
  ListView,
  TouchableOpacity,
} from 'react-native';
import styles from './index.style';

const MyText = (props) => {
  const { actions } = props;

  const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
  const newDataSource = ds.cloneWithRows(props.todos);

  const onDeleteTodo = id => actions.deleteTodo(id);

  const renderRow = (todo) => {
    return (
      <View style={styles.row}>
        <Text style={styles.text}>
          {todo.text}
        </Text>
        <TouchableOpacity onPress={() => onDeleteTodo(todo.id)}>
          <Text>{'\u2716'}</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ListView
        contentContainerStyle={styles.contentContainerStyle}
        dataSource={newDataSource}
        renderRow={renderRow}
      />
    </View>
  );
}

export default MyText;
