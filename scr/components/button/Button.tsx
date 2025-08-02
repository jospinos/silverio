import React from 'react';
import { Platform, Text, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { GlobalStyleSheet } from '../../constants/styleSheet';
import { COLORS, SIZES } from '../../constants/theme';

export const Button = (props: any) => {

    const { title, onPress, style, color, size } = props;

    return (
        <TouchableOpacity
            onPress={onPress}
        >
            <View
                style={[GlobalStyleSheet.shadowPrimary,
                color && {
                    shadowOpacity: 0,
                    height: 58
                },
                Platform.OS === 'ios' && !color && { backgroundColor: COLORS.primary, borderRadius: SIZES.radius_lg, height: 58, alignItems: 'center', alignContent: 'center', justifyContent:"center" }, style && { ...style }]}
            >

                <Text style={GlobalStyleSheet.btnTxt}>{title}</Text>

            </View>

        </TouchableOpacity>
    )
}



export default Button;