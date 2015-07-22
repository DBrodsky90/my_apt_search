'use strict';

var React = require('react-native');
var {
  MapView,
  StyleSheet,
  Text,
  View, 
  TouchableHighlight
  } = React;

var mapTab = React.createClass({
  getInitialState() {
    return {
      mapRegion: {},
      annotations: [],
      showsUserLocation: true,
    };
  },
  componentDidMount: function () {
    var self = this;
    navigator.geolocation.getCurrentPosition(function (pos) {
      self.setState({
        mapRegion: {latitude: pos.coords.latitude, longitude: pos.coords.longitude,latitudeDelta: .04, longitudeDelta: .04}
      });
    }, function (err) {
      if(err){
        console.log(err)
        alert(err.message);
      }
    }, {enableHighAccuracy: true, timeout: 5000})
  },
  render() {
    return (
      <View>
        <MapView
          style={styles.map}
          annotations={this.state.annotations || undefined}
          region={this.state.mapRegion}/>
          <TouchableHighlight
            style={styles.button}>
            <Text style={styles.buttonText}>+</Text>
          </TouchableHighlight> 
      </View>
    );
  },
});

var styles = StyleSheet.create({
  map: {
    position: 'absolute', 
    height: 700,
    top: 0,
    bottom: 0,
    left: 0, 
    right: 0, 
    borderWidth: 1,
    borderColor: '#000000',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    top: 575,
    left: 155,
    height: 64, 
    width: 64, 
    borderRadius: 32, 
    backgroundColor: 'white'
  }, 
  buttonText: {
    position: 'relative',
    color: 'black',
    height: 35,
    width: 30,
    top: 7, 
    left: 21,
    fontSize: 35
  }
});

module.exports = mapTab;