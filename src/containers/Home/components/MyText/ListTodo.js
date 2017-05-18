import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity
} from 'react-native';
import styles from './ListTodo.style';

class EditTodo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      textValue:  props.todo.text || '',
      isEditing: false,
    };

    this.toEdit = this.toEdit.bind(this);
    this.onChangeText = this.onChangeText.bind(this);
  }

  onChangeText(text) {
    this.setState({ textValue: text })
  }

  toEdit() {
    this.setState({ isEditing: true });
  }

  onDeleteTodo(id) {
    this.props.actions.deleteTodo(id);
  }

  onEditTodo(id) {
    this.props.actions.editTodo(id, this.state.textValue);
    this.setState({ isEditing: false });
  }

  render() {
    const { todo } = this.props;
    const { isEditing, textValue } = this.state;

    if (isEditing) {
      return (
        <View style={styles.row}>
          <TextInput
            style={styles.textInput}
            autoCorrect={false}
            onSubmitEditing={() => this.onEditTodo(todo.id)}
            onChangeText={this.onChangeText}
            value={textValue}
          />
          <TouchableOpacity onPress={() => this.onEditTodo(todo.id)}>
            <Text>{'\u2714'}</Text>
          </TouchableOpacity>
        </View>
      );
    }

    return (
      <TouchableOpacity style={styles.row} onPress={this.toEdit}>
        <Text style={styles.text}>
          {todo.text}
        </Text>
        <TouchableOpacity onPress={() => this.onDeleteTodo(todo.id)}>
          <Text>{'\u2716'}</Text>
        </TouchableOpacity>
      </TouchableOpacity>
    );
  }
}

export default EditTodo;
