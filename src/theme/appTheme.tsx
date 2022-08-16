import { StyleSheet } from 'react-native';


export const styles = StyleSheet.create({
    globalMargin: {
        marginHorizontal: 20
    },
    pokebola: {
        width:300,
        height:300,
        position:'absolute',
        top: -100,
        right:-80,
        opacity: 0.2
    },
    title:{
        color:'#fff',
        fontSize:30,
        fontWeight:'bold'
    },
    text: {
        color:'#fff',
        fontSize:30
    },
    buttonsContainer: {
        alignItems:'center'
    },
    button:{
        justifyContent:'center',
        alignItems: 'center',
        width: 300,
        height:45,
        borderWidth: 0.3,
        borderColor: 'rgba(255,255,255,0.7)',
        borderRadius:10,
        marginVertical: 10,
    }
})