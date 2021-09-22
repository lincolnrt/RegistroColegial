import React from 'react';
import {
    TouchableOpacityProps,
    StyleSheet
} from 'react-native';

import { ButtonText, ButtonAdd } from './styles';

//type ButtonProps =  TouchableOpacityProps

interface ButtonProps extends TouchableOpacityProps {
    title: string;
}

export function Button({ title, ...rest }: ButtonProps) {
    return(
        <>
        <ButtonAdd
            activeOpacity={0.5}
            {...rest}
        >   
            <ButtonText>
                {title}
            </ButtonText>  

        </ButtonAdd>   
        </>
    )
}
