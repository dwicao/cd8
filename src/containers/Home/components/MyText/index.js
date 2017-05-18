import React, { Component } from 'react';
import {
  View,
  Text,
  ListView,
  TouchableOpacity,
} from 'react-native';
import styles from './index.style';
import ListTodo from './ListTodo';

const MyText = (props) => {
  const { actions, todos } = props;

  const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
  const newDataSource = ds.cloneWithRows(todos);

  const renderRow = todo => <ListTodo todo={todo} actions={actions}/>;

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
