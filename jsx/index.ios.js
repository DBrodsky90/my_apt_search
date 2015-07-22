/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var MapView = require('./mapView.ios.js');
var AptListView = require('./listView.ios.js');
var {
  AppRegistry,
  StyleSheet,
  TabBarIOS,
  Text,
  View
} = React;

var mainView = React.createClass({
  getInitialState: function () {
    return {
      addNotifCount: 0,
      aptNotifCount: 0,
      presses: 0
    };
  },
  render: function () {
    return (
      <MapView/>
    );
  }
});

AppRegistry.registerComponent('my_apt_search', () => mainView);