import React, { Component } from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import * as todosActions from '../../actions';
import Home from '../Home';

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Home />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

// const mapStateToProps = (state) => ({
//   todos: state.todos,
// });

// const mapDispatchToProps = (dispatch) => ({
//   actions: bindActionCreators(todosActions, dispatch),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(App);

export default App;
