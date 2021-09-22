import React from 'react';
import {
    TouchableOpacity,
    TouchableOpacityProps,
    StyleSheet
 } from 'react-native';

import { ButtonInfo, TextInfo, Text } from './styles';

 interface InfoCardProps extends TouchableOpacityProps {
  nome: string;
  codEsc: string;
  escolaridade: string;
 }

export function InfoCard({ nome, codEsc, escolaridade, ...rest }: InfoCardProps) {
    return (
        <ButtonInfo
           {...rest}
        >
        <TextInfo>
          <Text>Nome: </Text>
          {nome}
        </TextInfo>

        <TextInfo>
          <Text>Código de escolaridade: </Text>
          {codEsc}
        </TextInfo>

        <TextInfo>
         <Text>Escolaridade: </Text>
          {escolaridade}
        </TextInfo>

      </ButtonInfo>
    )
}
