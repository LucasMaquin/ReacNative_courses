import React, { useState } from 'react';
import { SafeAreaView, Text, Dimensions } from 'react-native';

//Custons Imports
import { TabView, TabBar } from 'react-native-tab-view';
import convert from 'convert-units';
import styles from './style';
import colors from '../../assets/theme/colors';
import MeasureView from '../../components/MeasureView';

const measeures = convert().measures();

function unCamelCase(value) {
    return value.replace(/([A-Z])/g, ' $1');
}

const Home = () => {
    const [index, setIndex] = useState(0);
    const [routes] = useState(
        measeures.map((m) => ({ key: m, title: unCamelCase(m) }))
    );
    const [value, setValue] = useState('0');

    const renderScene = ({ route }) => {
        return (
            <MeasureView
                measure={route.key}
                value={value}
                setValue={setValue}
            />
        );
    };

    return (
        <SafeAreaView style={[styles.scene]}>
            <Text style={styles.title}>Unit Converter</Text>

            <TabView
                navigationState={{ index, routes }}
                renderScene={renderScene}
                onIndexChange={setIndex}
                initialLayout={{ width: Dimensions.get('window').width }}
                renderTabBar={(props) => (
                    <TabBar
                        {...props}
                        scrollEnabled
                        tabStyle={{ width: 'auto' }}
                        indicatorStyle={{ backgroundColor: colors.white }}
                        style={{ backgroundColor: colors.mainColor }}
                    />
                )}
            ></TabView>
        </SafeAreaView>
    );
};

export default Home;
