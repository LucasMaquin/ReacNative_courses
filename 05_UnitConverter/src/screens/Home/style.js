import colors from '../../assets/theme/colors';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    scene: {
        flex: 1,
    },
    title: {
        padding: 15,
        fontWeight: 'bold',
        color: colors.mainColor,
        fontSize: 20,
        textAlign: 'center',
        textTransform: 'uppercase',
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
});

export default styles;
