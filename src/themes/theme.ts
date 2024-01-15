import { ColorValue } from "react-native";

interface color {
    Primary: ColorValue,
    Default: ColorValue,
    Accent: ColorValue,
    GreyDark1: ColorValue,
    Grey: ColorValue,
    GreyLight1: ColorValue,
    GreyLight2: ColorValue,
    White: ColorValue
}

export const color: color = {
    Primary: '#0ACF83',
    Default: '#000000',
    Accent: '#FFC120',
    GreyDark1: '#7F7F7F',
    Grey: '#BABABA',
    GreyLight1: '#F6F6F6',
    GreyLight2: '#F3F3F3',
    White: '#FFFFFF'
}