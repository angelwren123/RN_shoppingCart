import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import Style from '../../theme';
const AlertAction = () => {
  return (
    <View style={Style.AlertActionStyle.container}>
      <Text style={Style.AlertActionStyle.Text__ylk}>You looking for?</Text>
      <View style={Style.AlertActionStyle.View__Warraper__btn}>
        <Pressable style={[Style.AlertActionStyle.button, Style.AlertActionStyle.btn__man]}>
          <Text style={Style.AlertActionStyle.text}>MAN</Text>
        </Pressable>
        <Pressable style={[Style.AlertActionStyle.button,Style.AlertActionStyle.btn__woman]} >
          <Text style={Style.AlertActionStyle.text}>WOMAN</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default AlertAction;
