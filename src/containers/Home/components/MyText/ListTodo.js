import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import styles from './ListTodo.style';

class EditTodo extends Component {
  constructor() {
    super();

    this.state = {
      isEditing: false,
    };

    this.toEdit = this.toEdit.bind(this);
    this.saveEdit = this.saveEdit.bind(this);
  }

  onDeleteTodo(id) {
    this.props.actions.deleteTodo(id);
  }

  toEdit() {
    this.setState({ isEditing: true });
  }

  saveEdit() {
    this.setState({ isEditing: false });
  }

  render() {
    const { todo } = this.props;
    const { isEditing } = this.state;

    if (isEditing) {
      return (
        <TouchableOpacity style={styles.row} onPress={this.saveEdit}>
          <Text>Mantap</Text>
        </TouchableOpacity>
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
