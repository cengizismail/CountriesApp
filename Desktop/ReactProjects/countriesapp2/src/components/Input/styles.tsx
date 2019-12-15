import { StyleSheet, Platform } from 'react-native';
import { colors } from '../../config/color';

export const searchInputStyles = StyleSheet.create({
    container: {
		flex:0,
		flexDirection: 'row',
        alignSelf: 'center',
		width: 300,
		borderWidth: 1,
		borderColor: colors.gray,
		borderRadius: Platform.OS === 'ios' ? 8 : 4,
		overflow: 'hidden',
	},
	input: {
		flex: 1,
		paddingHorizontal: 12,
		paddingVertical: 5,
	},
	button: {
		flex: 1,
		width: 40,
		alignItems: 'center',
		justifyContent: 'center',

	},
}); 