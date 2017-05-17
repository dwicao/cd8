import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as todosActions from '@src/actions';
import MyText from './components/MyText';
import styles from './index.style';

class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
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
