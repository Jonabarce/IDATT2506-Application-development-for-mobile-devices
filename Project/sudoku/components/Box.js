import React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import Cell from '../components/Cell';

const Box = ({ rowData, rowIndex, onSelectCell }) => {
    return (
        <View style={styles.box}>
            {rowData.map((number, cellIndex) => (
                <Cell
                    key={cellIndex}
                    number={number}
                    onSelect={() => onSelectCell([rowIndex, cellIndex])}
                    isPredefined={number.isPredefined}
                    isUncertain={number.isUncertain}
                />
            ))}
        </View>
    );
};



const boxBorderWidth = 2;
const boxSize = Dimensions.get('window').width / 3 - boxBorderWidth * 2;

const styles = StyleSheet.create({
    box: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        borderWidth: boxBorderWidth,
        borderColor: '#000',
        width: boxSize,
        height: boxSize,
        backgroundColor: '#FFFFFF'
    },
});

export default Box;