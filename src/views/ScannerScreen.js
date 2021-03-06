import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import Constants from 'expo-constants';

const { width } = Dimensions.get('window');

export default class ScanScreen extends React.Component {
  render() {
      console.log("ok",Constants.statusBarHeight)
    return (
      <BarCodeScanner
        onBarCodeRead={(scan) => alert(scan.data)}
        style={[StyleSheet.absoluteFill, styles.container]}
      >
        <View style={styles.layerTop} />
        <View style={styles.layerCenter}>
          <View style={styles.layerLeft} />
          <View style={styles.focused} />
          <View style={styles.layerRight} />
        </View>
        <View style={styles.layerBottom} />
      </BarCodeScanner>
    );
  }
}

const opacity = 'rgba(0, 0, 0, .8)';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  layerTop: {
    flex: 2,
    backgroundColor: opacity
  },
  layerCenter: {
    flex: 2,
    flexDirection: 'row'
  },
  layerLeft: {
    flex: 1,
    backgroundColor: opacity
  },
  focused: {
    flex: 10
  },
  layerRight: {
    flex: 1,
    backgroundColor: opacity
  },
  layerBottom: {
    flex: 2,
    backgroundColor: opacity
  },
});