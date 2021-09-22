import styled from 'styled-components/native';
import { Platform, Image } from 'react-native';

export const Container = styled.View`
        flex: 1;
        background-color: #5a81bb;
        padding-left: 30px;
        padding-top: 70px;
    `

export const Title = styled.Text`
        color: #fff;
        font-size: 34px;
        font-weight: bold;
        margin-top: 20px;
    `

export const Title2 = styled.Text`
        color: #fff;
        font-size: 24px;
        font-weight: bold;
        margin-top: 30px;
        `
   
export const Welcome = styled.Text`
        color: #fff;
        font-size: 17px;
    `

export const Text = styled.Text`
        color: #fff;
        font-size: 18px;
        font-weight: bold;
        margin-top: 2px;
    `

export const Greetings = styled.Text`
        color: #fff;
        margin-top: 14px;
    `

export const Input = styled.TextInput`
        background-color: #141B41;
        color: #fff; 
        font-size: 16px;
        padding: ${Platform.OS === 'ios' ? '12px' : '10px'};
        margin-top: 12px;
        border-radius: 7px;
        align-items: center;
        width: 330px;
    `