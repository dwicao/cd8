import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as todosActions from '../../actions';
import MyText from './MyText';

class Home extends Component {
  render() {
    return (
      <View>
        <MyText {...this.props}/>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  todos: state.todos,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(todosActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
