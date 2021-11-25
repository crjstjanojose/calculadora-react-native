import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  fondo: {
    flex: 1,
    backgroundColor: 'black',
  },
  calculadoraContainer: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'flex-end',
  },
  resultado: {
    color: 'white',
    fontSize: 60,
    textAlign: 'right',
  },
  resultadoPequeno: {
    color: 'rgba(255,255,255,0.5)',
    fontSize: 25,
    textAlign: 'right',
  },

  fila: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 5,
  },
  boton: {
    height: 80,
    width: 80,
    backgroundColor: '#2D2D2D',
    borderRadius: 50,
    justifyContent: 'center',
    marginHorizontal: 5,
  },
  botonTexto: {
    textAlign: 'center',
    padding: 10,
    fontSize: 30,
    color: 'white',
    fontWeight: '400',
  },
});
