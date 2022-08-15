import React from 'react'
import { View, Text } from 'react-native';
import { styles } from '../theme/appTheme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface Props {
    title     :string;
    noMT?     : boolean;
    noMB?     : boolean;
    textAlign?: 'center' | 'right' | 'left'
}

const HeaderTitle = ({ title, noMT, noMB, textAlign = 'center' }: Props) => {
const { top } = useSafeAreaInsets();
    return(
        <View style={{ 
            marginTop: (noMT) ? 0 : top,
            marginBottom:(noMB) ? 0 : 20,
        }}>
            <Text style={{ ...styles.title, textAlign }}>{ title }</Text>
        </View>
    )
}

export default HeaderTitle