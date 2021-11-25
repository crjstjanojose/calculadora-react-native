import React from 'react';
import {Text, View} from 'react-native';
import BotonCalc from '../components/BotonCalc';
import {useCalculadora} from '../hooks/useCalculadora';
import {styles} from '../theme/appTheme';

const CalculadoraScreen = () => {
  const {
    limpiar,
    armarNumero,
    possitivoNegativo,
    btnDelete,
    btnDividir,
    btnMultiplicar,
    btnRestar,
    btnSumar,
    calcular,
    numero,
    numeroAnterior,
  } = useCalculadora();

  return (
    <View style={styles.calculadoraContainer}>
      {numeroAnterior !== '0' && (
        <Text style={styles.resultadoPequeno}>{numeroAnterior}</Text>
      )}
      <Text style={styles.resultado} numberOfLines={1} adjustsFontSizeToFit>
        {numero}
      </Text>

      <View style={styles.fila}>
        <BotonCalc texto="C" color="#9B9B9B" accion={limpiar} />
        <BotonCalc texto="+/-" color="#9B9B9B" accion={possitivoNegativo} />
        <BotonCalc texto="Del" color="#9B9B9B" accion={btnDelete} />
        <BotonCalc texto="/" color="#ff9427" accion={btnDividir} />
      </View>
      <View style={styles.fila}>
        <BotonCalc texto="7" accion={armarNumero} />
        <BotonCalc texto="8" accion={armarNumero} />
        <BotonCalc texto="9" accion={armarNumero} />
        <BotonCalc texto="*" color="#ff9427" accion={btnMultiplicar} />
      </View>
      <View style={styles.fila}>
        <BotonCalc texto="4" accion={armarNumero} />
        <BotonCalc texto="5" accion={armarNumero} />
        <BotonCalc texto="6" accion={armarNumero} />
        <BotonCalc texto="-" color="#ff9427" accion={btnRestar} />
      </View>
      <View style={styles.fila}>
        <BotonCalc texto="1" accion={armarNumero} />
        <BotonCalc texto="2" accion={armarNumero} />
        <BotonCalc texto="3" accion={armarNumero} />
        <BotonCalc texto="+" color="#ff9427" accion={btnSumar} />
      </View>
      <View style={styles.fila}>
        <BotonCalc texto="0" ancho accion={armarNumero} />
        <BotonCalc texto="." accion={armarNumero} />
        <BotonCalc texto="=" color="#ff9427" accion={calcular} />
      </View>
    </View>
  );
};

export default CalculadoraScreen;