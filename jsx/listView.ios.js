'use strict';

var FAKE_APTS = [
	{
		apt: 'Apartment mom told me about',
		address: '1911 Smith and Wesson Drive, Brooklyn, NY 11235',
		price: 290000,
		img_url : 'http://knowitallgroup.com/wp-content/uploads/2013/01/apartment.jpg'
	},
	{
		apt: 'Apartment owned by fat lady',
		address: '902 Broadway, New York, NY, 10021',
		price: 2900000,
		img_url : 'http://www.pgslandscapesc.com/img/apartment-maintenance.jpg'
	},
	{
		apt: "Will's House",
		address: '719 Willmon Boulevard, Hoodcity, NY, 10028',
		price: 5,
		img_url: 'https://upload.wikimedia.org/wikipedia/commons/e/eb/Box.agr.jpg'
	},
	{
		apt: "David's Mansion",
		address: '711 Richkid Street, Brooklyn, NY, 11235',
		price: 1000000,
		img_url: 'http://www.theblaze.com/wp-content/uploads/2014/07/awesome-mansion.jpg'
	}
];

var React = require('react-native');
var {
	StyleSheet,
	Text,
	View,
	Image,
	ListView,
} = React;

var listView = React.createClass({
	getInitialState: function() {
		return {
			dataSource: new ListView.DataSource({
				rowHasChanged: (row1, row2) => row1 !== row2,
			}),
			loaded: false,
		}
	},
	componentDidMount: function() {
		this.fetchData();
	},
	fetchData: function() {
		this.setState({
			dataSource: this.state.dataSource.cloneWithRows(FAKE_APTS),
			loaded: true
		});
	},
	render: function() {
		if (!this.state.loaded) {
			return this.renderLoadingView();
		}

		return (
			<ListView
				dataSource={this.state.dataSource}
				renderRow={this.renderApt}
				style={styles.listView}
				automaticallyAdjustContentInsets={false}
			/>
		);
	},
	renderApt: function(apt) {
		return (
			<View style={styles.container}>
				<Image
					source={{uri: apt.img_url}}
					style={styles.thumbnail}
				/>
				<View style={styles.rightContainer}>
					<Text style={styles.apt}>{apt.apt}</Text>
					<Text style={styles.address}>{apt.address}</Text>
					<Text style={styles.price}>${apt.price}</Text>
				</View>
			</View>
		)
	},
	renderLoadingView: function() {
		return (
			<View style={styles.container}>
				<Text>
					Loading apartments...
				</Text>
			</View>
		)
	}
});

var styles = StyleSheet.create({
	listView : {
		marginTop: 30,
		backgroundColor: 'cornflowerblue'
	},
	container: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		borderWidth: 1,
	},
	rightContainer: {
		flex: 1
	},
	price: {
		textAlign: 'center',
		fontSize: 13
	},
	address: {
		textAlign: 'center',
		fontSize: 14
	},
	thumbnail : {
		width: 100,
		height: 100
	},
	apt : {
		fontSize: 15,
		textAlign: 'center'
	}
});

module.exports = listView;




