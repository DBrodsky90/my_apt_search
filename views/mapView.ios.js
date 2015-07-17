'use strict';

var React = require('react-native');
var {
  MapView,
  StyleSheet,
  Text,
  View
  } = React;

var regionText = {
  latitude: '0',
  longitude: '0',
  latitudeDelta: '0',
  longitudeDelta: '0',
};

var mapTab = React.createClass({

  getInitialState() {
    return {
      mapRegion: {latitude: 40.7411, longitude: -73.9897,latitudeDelta: 1, longitudeDelta: 1},
      mapRegionInput: null,
      annotations: [{latitude: 40.7411, longitude: -73.9897, animateDrop: true, title: "YO"}],
      isFirstLoad: true,
    };
  },

  render() {
    return (
      <View>
        <MapView
          style={styles.map}
          annotations={this.state.annotations || undefined}
          region={this.state.mapRegion}/>

      </View>
    );
  },
});

var styles = StyleSheet.create({
  map: {
    height: 589,
    marginTop: 30,
    borderWidth: 1,
    borderColor: '#000000',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

module.exports = mapTab;