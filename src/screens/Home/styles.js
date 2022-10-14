import { StyleSheet } from 'react-native';


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1A1A1A',
    },
    headerBackground: {
        backgroundColor: '#0D0D0D',
        height: "20%",
        width: "100%",
        position: 'absolute',
    },
    content: {
        padding: 24,
    },
    form: {
        width: '100%',
        flexDirection: 'row',
        marginTop: 36,
        marginBottom: 42,
    },
    input: {
        flex: 1,
        height: 56,
        backgroundColor: '#1F1E25',
        borderRadius: 5,
        color: "#FFF",
        padding: 16,
        fontSize: 16,
        marginRight: 12,
    },
    button: {
        width: 56,
        height: 56,
        borderRadius: 5,
        backgroundColor: '#1E6F9F',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: "#FFF",
        fontSize: 24
    },
    cardItem: {
        width: '100%',
        backgroundColor: '#262626',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 12
    },
    itemTitle: {
        color: "#F2F2F2",
        fontSize: 14
    }
})