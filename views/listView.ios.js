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
		paddingTop: 20,
		backgroundColor: '#F5FCFF'
	},
	container: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center'
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
		width: 53,
		height: 81
	},
	apt : {
		fontSize: 15,
		textAlign: 'center'
	}
});

module.exports = listView;




