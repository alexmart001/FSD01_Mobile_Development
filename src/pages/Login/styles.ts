import { Dimensions, StyleSheet } from 'react-native';

export default StyleSheet.create({
    background: {
      flex:1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      width: '90%',
    },
    title: {
      fontSize: 28,
      fontWeight: '600',
      marginBottom: 10,
      textAlign: 'left',
    },
    input: {
      height: 50,
      fontSize: 20,
      borderWidth: 1,
      borderRadius: 5,
      marginBottom: 20,
      paddingHorizontal: 10,
      width: Dimensions.get('screen').width - 40,
      backgroundColor: '#FFFFFF',
    },
    logo: {
      flex: 1,
      justifyContent: 'center',
    },
    btn: {
      backgroundColor: '#2E8EE7',
      borderRadius: 5,
      padding: 10,
      width: '90%',
      alignItems: 'center',
      justifyContent: 'center',
    },
    btnText: {
      fontSize: 20,
      color: '#FFFFFF'
    },
    btnMuted: {
      marginTop: 20,
      fontSize: 20,
      bottom: 0,
    }

});