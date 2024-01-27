import {
    Image,
    ImageSourcePropType,
    ImageStyle,
    Pressable,
    StyleProp,
    StyleSheet,
    Text,
    TextProps,
    TextStyle,
    View,
} from 'react-native';
import React from 'react';
import { color } from '../../themes/theme';
interface HeaderProps {
    iconLeft?: ImageSourcePropType;
    title?: string;
    iconCenter?: ImageSourcePropType;
    iconRight?: ImageSourcePropType;
    eventLeft?: () => void;
    eventRight?: () => void;
    styleIconLeft?: StyleProp<ImageStyle>;
    styleTitle?: TextStyle;
    styleIconRight?: StyleProp<ImageStyle>;
    styleContainer?: StyleProp<ImageStyle>;
    isCheck?: boolean;
}

const Header: React.FC<HeaderProps> = ({
    iconLeft,
    title,
    iconRight,
    eventLeft,
    eventRight,
    styleIconLeft,
    styleTitle,
    styleIconRight,
    styleContainer,
    isCheck,
}) => {
    const renderIconLeft = () => {
        if (iconLeft && isCheck) {
            return (
                <Pressable onPress={eventLeft}>
                    <Image source={iconLeft} style={[_styles.icon, styleIconLeft]} />
                </Pressable>
            );
        } else if (iconLeft && !isCheck) {
            return (
                <View style={_styles.styleGrLeft}>
                    <Pressable onPress={eventLeft}>
                        <Image source={iconLeft} style={[_styles.icon, styleIconLeft]} />
                    </Pressable>
                </View >
            );
        }
        return <View style={_styles.iconPlaceholder} />;
    };

    const renderTextCenter = () => {
        if (title && isCheck) {
            return (
                <Pressable style={_styles.viewTextCenter}>
                    <Text style={[_styles.textCenterHeader, styleTitle]}>{title}</Text>
                </Pressable>
            );
        }
        return <View style={_styles.centerHeaderContainer} />;
    };

    const renderIconRight = () => {
        if (iconRight) {
            return (
                <Pressable onPress={eventRight}>
                    <Image source={iconRight} style={[_styles.iconRight, styleIconRight]} />
                </Pressable>
            );
        }
        return <View style={_styles.iconPlaceholder} />;
    };

    return (
        <View style={[_styles.container, styleContainer]}>
            <View style={_styles.containerChidren} >
                {renderIconLeft()}
                {renderTextCenter()}
                {renderIconRight()}
            </View>

        </View >
    );
};

const _styles = StyleSheet.create({
    container: {
        backgroundColor: 'transparent',
    },
    containerChidren: {
        height: 55,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 24,
        marginVertical: 15.5,
    },
    icon: {
        width: 24,
        height: 24,
    },
    iconRight: {
        width: 24,
        height: 24,
    },
    iconPlaceholder: {
        width: 50,
        height: 50,
        opacity: 0, // Ẩn phần tử
    },
    centerHeaderContainer: {
        width: 'auto',
        flex: 1,
        alignItems: 'center',
    },
    textCenterHeader: {
        width: 'auto',
        fontFamily: 'DMSans-Bold',
        fontSize: 16,
        color: color.Default,
        alignSelf: 'center',
        textAlign: 'center',
        lineHeight: 20,
        letterSpacing: 0.2,
    },
    styleGrLeft: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    viewTextCenter: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        width: 'auto'
    },
});
export default Header;
