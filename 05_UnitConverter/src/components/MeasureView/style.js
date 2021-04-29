import { StyleSheet } from 'react-native';
import colors from '../../assets/theme/colors';

const styles = StyleSheet.create({
    scene: {
        flex: 1,
    },
    row: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    column: {
        flex: 1,
        marginLeft: 20,
        marginRight: 20,
    },
    input: {
        height: 40,
        borderColor: colors.mainColor,
        borderBottomWidth: 1,
        fontSize: 30,
        textAlign: 'center',
    },

    item: {
        borderWidth: 2,
        borderColor: colors.white,
        paddingVertical: 15,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems:'center',
        marginTop: 8,
        height: 25,
    },
    itemText: {
        fontSize: 18,
    },
    androidFlatList: {
        paddingHorizontal: 20,
        width: 180,
        height: 140,
    },
});

export default styles;
