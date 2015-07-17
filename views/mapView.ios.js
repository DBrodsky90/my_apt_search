'use strict';

var React = require('react-native');
var {
  MapView,
  StyleSheet,
  Text,
  View
  } = React;

var mapTab = React.createClass({
  getInitialState() {
    return {
      mapRegion: {},
      annotations: [],
    };
  },
  componentDidMount: function () {
    var self = this;
    navigator.geolocation.getCurrentPosition(function (pos) {
      self.setState({
        mapRegion: {latitude: pos.coords.latitude, longitude: pos.coords.longitude,latitudeDelta: .02, longitudeDelta: .02}
      });
    }, function (err) {
      alert(err)
    }, {enableHighAccuracy: true, timeout: 5000})
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