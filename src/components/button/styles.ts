import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';

export const ButtonText = styled.Text`
    color: #fff;
    font-size: 18px;
    font-weight: bold;
`

export const ButtonAdd = styled(TouchableOpacity)`
    background-color: #224377;
    padding: 15px;
    border-radius: 12px;
    align-items: center;
    margin-top: 21px;
    width: 330px;
`