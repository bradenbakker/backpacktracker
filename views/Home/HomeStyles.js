import { StyleSheet, Dimensions } from "react-native";

export default (styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	content: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	background: {
		width: Dimensions.get('window').width,
		height: Dimensions.get('window').height,
		resizeMode: 'cover',
	},
	icon: {
		paddingHorizontal: 15,
	}
}));
