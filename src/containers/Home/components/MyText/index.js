import React, { Component } from 'react';
import {
  View,
  Text,
  ListView,
  TouchableOpacity,
} from 'react-native';
import styles from './index.style';

const MyText = (props) => {
  const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
  const newDataSource = ds.cloneWithRows(props.todos);

  const renderRow = (todo) => {
    return (
      <Text style={styles.text}>
        {todo.text
      }</Text>
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
