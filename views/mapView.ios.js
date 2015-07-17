'use strict';

var React = require('react-native');
var {
  StyleSheet,
  Text,
  View
  } = React;

var mapTab = React.createClass({
  render: function() {
    return (
      <View style={ styles.container }>
        <View style={ styles.header }>
        </View>
        <View style={ styles.content }>
          <Text>
            Map tab!
          </Text>
        </View>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
   header: {
    height: 40,
    backgroundColor: 'yellow'
  }
});

module.exports = mapTab;