import { Text, TouchableOpacity, View } from 'react-native';
import type { StyleProp, TextStyle, ViewStyle } from 'react-native';

type Props = {
  containerStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  label: string;
  onPress: () => void;
};

const CustomButton = ({ containerStyle, textStyle, label, onPress }: Props) => {
    return (
        <View style={containerStyle}>
        <TouchableOpacity onPress={onPress}>
            <View
            style={{
                alignItems: 'center',
                justifyContent: 'center',
                padding: 10,
            }}
            >
            <Text style={textStyle}>{label}</Text>
            </View>
        </TouchableOpacity>
        </View>
    );
};

export default CustomButton;