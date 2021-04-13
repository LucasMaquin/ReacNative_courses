// Android Picker
import React, { useState, useEffect } from 'react';
import { Text, View, TextInput } from 'react-native';
import { Picker } from '@react-native-community/picker';
import { SimpleLineIcons } from '@expo/vector-icons';
import convert from 'convert-units';
import styles from './style';
import colors from '../../assets/theme/colors';

// To detect if device is android or IOS
import { Platform } from 'react-native';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';

const MeasureView = ({ measure, value, setValue }) => {
    const units = convert().possibilities(measure);
    const [fromUnit, setFromUnit] = useState(units[0]);
    const [toUnit, setToUnit] = useState(units[1]);
    const [valueConverted, setValueConverted] = useState(0);

    //To reload once flatList
    const [flatListReloadFrom, setFlatListReloadFrom] = useState();
    const [flatListReloadTo, setFlatListReloadTo] = useState();

    useEffect(() => {
        setValueConverted(
            convert(+value)
                .from(fromUnit)
                .to(toUnit)
                .toFixed(2)
        );
        setFlatListReloadFrom(false);
        setFlatListReloadTo(false);
    }, [value, fromUnit, toUnit]);

    const renderItem = (item, direction) => {
        var changeColor;
        direction === 'from' ? (changeColor = fromUnit) : (changeColor = toUnit);
        return (
            <TouchableOpacity
                style={[
                    styles.item,
                    {
                        backgroundColor: item === changeColor ? colors.mainColor : 'transparent',
                    },
                ]}
                onPress={() => {
                    direction === 'from' ? setFlatListReloadFrom(true) : setFlatListReloadTo(true);
                    direction === 'from' ? setFromUnit(item) : setToUnit(item);
                }}
            >
                <Text
                    style={[
                        styles.itemText,
                        {
                            color: item === changeColor ? colors.white : colors.black,
                        },
                    ]}
                >
                    {item}
                </Text>
            </TouchableOpacity>
        );
    };

    return (
        <View style={styles.scene}>
            <View style={styles.row}>
                {Platform.OS === 'ios' && (
                    <Picker
                        style={styles.column}
                        selectedValue={fromUnit}
                        onValueChange={setFromUnit}
                    >
                        {units.map((unit, i) => (
                            <Picker.Item label={unit} value={unit} key={i} />
                        ))}
                    </Picker>
                )}

                {Platform.OS === 'android' && (
                    <View style={styles.androidFlatList}>
                        <FlatList
                            data={units}
                            keyExtractor={(item) => item}
                            renderItem={({ item }) => renderItem(item, 'from')}
                            showsVerticalScrollIndicator={false}
                            extraData={flatListReloadFrom}
                        />
                    </View>
                )}

                <View style={styles.column}>
                    <TextInput
                        value={value}
                        onChangeText={setValue}
                        keyboardType='numeric'
                        style={styles.input}
                    />
                </View>
            </View>

            <SimpleLineIcons
                name='arrow-down-circle'
                size={40}
                color={colors.mainColor}
                style={{ alignSelf: 'center' }}
            />

            <View style={styles.row}>
                {Platform.OS === 'ios' && (
                    <Picker style={styles.column} selectedValue={toUnit} onValueChange={setToUnit}>
                        {units.map((unit, i) => (
                            <Picker.Item label={unit} value={unit} key={i} />
                        ))}
                    </Picker>
                )}

                {Platform.OS === 'android' && (
                    <View style={styles.androidFlatList}>
                        <FlatList
                            data={units}
                            keyExtractor={(item) => item}
                            renderItem={({ item }) => renderItem(item, 'to')}
                            showsVerticalScrollIndicator={false}
                            extraData={flatListReloadTo}
                        />
                    </View>
                )}

                <View style={styles.column}>
                    <Text
                        style={[
                            styles.input,
                            {
                                fontSize: 40,
                                fontWeight: 'bold',
                                borderBottomWidth: 0,
                                height: 'auto',
                            },
                        ]}
                    >
                        {valueConverted}{' '}
                    </Text>
                </View>
            </View>
        </View>
    );
};

export default MeasureView;
