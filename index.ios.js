/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  TabBarIOS,
  Text,
  View
} = React;

var my_apt_search = React.createClass({
  render: function() {
    return (
      <View>
        <Text>Welcome to Hell</Text> 
      </View>
    );
  }
});

var navBar = React.createClass({
  statics: {
    title: '<TabBarIOS>',
    description: 'Tab Bar For IOS'
  },
  getInitialState: function () {
    return {
      selectedTab: 'mapTab',
      camNotifCount: 0,
      aptNotifCount: 0,
      presses: 0
    };
  },
  _renderContent: function(color: string, pageText: string) {
    return (
      <View style={[styles.tabContent, {backgroundColor: color}]}>
        <Text style={styles.tabText}>{pageText}</Text>
        <Text style={styles.tabText}>{this.state.presses}</Text>
      </View>
    );
  },
  render: function () {
    return (
      <TabBarIOS>
        <TabBarIOS.Item 
          style={styles.tabIcon}
          title="Map"
          icon={{uri: "mapTab", isStatic: true}}
          selected={this.state.selectedTab === 'mapTab'}
          onPress={() => {
            this.setState({
              selectedTab: 'mapTab',
            });
          }}>
          {this._renderContent('#414A8C', 'Welcome to the map Tab')}
        </TabBarIOS.Item>

        <TabBarIOS.Item
          title="Your Apts"
          icon={{ uri: "listTab", isStatic: true }}
          badge={this.state.aptNotifCount > 0 ? this.state.aptNotifCount : undefined}
          selected={this.state.selectedTab === 'redTab'}
          onPress={() => {
            this.setState({
              selectedTab: 'redTab',
              aptNotifCount: this.state.aptNotifCount + 1,
            });
          }}>
          {this._renderContent('#783E33', 'Red Tab')}
        </TabBarIOS.Item>

         <TabBarIOS.Item
          title="Add Apt"
          icon={{ uri: "addTab", isStatic: true }}
          badge={this.state.addNotifCount > 0 ? this.state.addNotifCount : undefined}
          selected={this.state.selectedTab === 'camTab'}
          onPress={() => {
            this.setState({
              selectedTab: 'addTab',
              addNotifCount: this.state.addNotifCount + 1,
            });
          }}>
          {this._renderContent('cornflowerblue', 'Add Tab')}
        </TabBarIOS.Item>

      </TabBarIOS>

    );
  }
});

var styles = StyleSheet.create({
  tabContent: {
    flex: 1,
    alignItems: 'center',
  },
  tabText: {
    color: 'black',
    margin: 50,
  },
  tabIcon: {
   color: 'purple'
  }
});

AppRegistry.registerComponent('my_apt_search', () => my_apt_search);
AppRegistry.registerComponent('my_apt_search', () => navBar);