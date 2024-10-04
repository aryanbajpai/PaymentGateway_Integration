import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
import React from 'react';

const App = () => {
  const {width} = useWindowDimensions();

  return (
    <ScrollView contentContainerStyle={styles.container(width)}>
      <Text style={styles.title(width)}>
        React Native and RazorPay Integration for Payment Gateway
      </Text>
        <View style={styles.instructionContainer}>
          <Text style={styles.sectionTitle}>
            Inside Terminal create a React Native App.
          </Text>
          <Text style={styles.instructionText}>
            1. npx react-native init prjctNm
          </Text>
          <Text style={styles.instructionText}>2. cd prjctNm and code .</Text>
        </View>
        <View style={styles.instructionContainer}>
          <Text style={styles.sectionTitle}>
            Inside VS Code Terminal add packages for dotenv and Razorpay.
          </Text>
          <Text style={styles.instructionText}>
            1. npm i react-native-dotenv react-native-razorpay
          </Text>
          <Text style={styles.instructionText}>
            2. npm start - Press <Text style={styles.boldText}>"a"</Text> for
            Android Emulator
          </Text>
        </View>
    </ScrollView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: width => ({
    flexGrow: 1,
    backgroundColor: '#d7c3a5',
    padding: 10,
    justifyContent: width > 500 ? 'flex-start' : 'center',
  }),
  title: width => ({
    fontSize: width > 500 ? 40 : 22,
    fontWeight: 'bold',
    color: '#3c312b',
    textAlign: 'center',
    marginVertical: 10,
  }),
  instructionContainer: {
    margin: 5,
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#403e2d'
  },
  sectionTitle: {
    fontSize: 17,
    color: '#f7b22c',
    fontWeight: 'bold',
  },
  instructionText: {
    fontSize: 16,
    color: '#d7c3a5',
    marginHorizontal: 5,
  },
  boldText: {
    fontWeight: 'bold',
    color: '#fff',
  },
});
