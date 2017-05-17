import React, { Component } from 'react';
import {
  View,
  TextInput,
} from 'react-native';
import styles from './index.style';

class InputTodo extends Component {
  constructor() {
    super();

    this.state = {
      textValue: '',
    };

    this.onChangeText = this.onChangeText.bind(this);
    this.onAddTodo = this.onAddTodo.bind(this);
  }

  onChangeText(text) {
    this.setState({ textValue: text });
  };

  onAddTodo() {
    if (this.state.textValue !== '') {
      this.props.actions.addTodo(this.state.textValue);
      this.setState({ textValue: '' });
    }
  };

  render () {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.textInput}
          autoCorrect={false}
          value={this.state.textValue}
          onChangeText={this.onChangeText}
          onSubmitEditing={this.onAddTodo}
        />
      </View>
    );
  }
};

export default InputTodo;
