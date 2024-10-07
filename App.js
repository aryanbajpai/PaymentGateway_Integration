import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
import React from 'react';
import {RAZORPAY_TEST_KEY_ID, RAZORPAY_KEY_SECRET} from '@env';
//Import RazorpayCheckout for SECURELY making payments
import RazorpayCheckout from 'react-native-razorpay';

const App = () => {
  const {width} = useWindowDimensions();

  let razorpayTestKey = RAZORPAY_TEST_KEY_ID;
  let razorpaySecretKey = RAZORPAY_KEY_SECRET;

  //VALUES
  const amount = 100;
  const currency = 'INR';

  //Create Function
  const handlePayments = async () => {
    const dummyOrderId = 'order_12345';
    //Declare Options for Payment - from Razorpay Website
    // var options = {
    //   description: 'Payment related Individual descriptions over here. What is bought by buyer OR What kind of payment has been made etc.',
    //   image: 'https://imgur.com/3g7nmJC', //Specifying Company OR Product
    //   currency: currency,
    //   key: razorpayTestKey,
    //   amount: amount * 100, //Always in Paise
    //   name: 'Credit Card Holder', //Whoever Making Payment
    //   order_id: dummyOrderId, //Replace this with an order_id created using Orders API.
    //   prefill: {
    //     //Data of the Customer making the Payments
    //     email: 'buyers@gmail.com',
    //     contact: '9191919191',
    //     name: 'Buyers Name', //One making the Payment
    //   },
    //   theme: {color: '#53a20e'},
    // };

    var options = {
      description: 'Payment related Individual descriptions over here.',
      currency: currency,
      key: razorpayTestKey,
      amount: amount * 100, // Always in Paise
      name: 'Credit Card Holder',
      order_id: dummyOrderId, // Use the dummy order ID
      theme: {color: '#53a20e'},
    }; 

    try {
      const data = await RazorpayCheckout.open(options);
      console.log(data)
      // Handle success - ID comes from RazorPay and stores in Database
      alert(`Success: ${data.razorpay_payment_id}`);
    } catch (error) {
      console.error('Payment error:', error); // Log the complete error object
      alert(`Error: ${error.code} | ${error.description}`);
    }

    console.log("HELLO")
  };

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

      <View style={styles.instructionContainer}>
        <Text style={styles.sectionTitle}>Environment Variable</Text>
        <Text style={styles.instructionText}>
          1. Add <Text style={styles.boldText}>PLUGINS</Text> to{' '}
          <Text style={styles.boldText}>babel.config.js</Text> that describes
          about the Path of .env file
        </Text>
        <Text style={styles.instructionText}>
          2. Create a <Text style={styles.boldText}>.env</Text> file. Specify
          your <Text style={styles.boldText}>Razorpay Keys</Text> in there.
        </Text>
      </View>

      <View style={styles.instructionContainer}>
        <Text style={styles.sectionTitle}>Env file in our Main file</Text>
        <Text style={styles.instructionText}>
          1. Import <Text style={styles.boldText}>Keys</Text> from{' '}
          <Text style={styles.boldText}>.env</Text>
        </Text>
        <Text style={styles.instructionText}>
          2. Create <Text style={styles.boldText}>function</Text> to declare <Text style={styles.boldText}>Options</Text> for payment that holds details of customer and the order.
        </Text>
        <Text style={styles.instructionText}>
          3. Create a button and use the function on Press.
        </Text>
        <Text style={styles.instructionText}>4. npm cache clean --force</Text>
      </View>

      <Pressable onPress={handlePayments} style={styles.paymentBtn}>
        <Text
          style={{
            color: '#f7b22c',
            textAlign: 'center',
            fontWeight: 'bold',
            fontSize: 24,
          }}>
          PAY NOW
        </Text>
      </Pressable>
    </ScrollView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: width => ({
    flexGrow: 1,
    backgroundColor: '#d7c3a5',
    padding: 10,
    // justifyContent: width > 500 ? 'flex-start' : 'center',
  }),
  title: width => ({
    fontSize: width > 500 ? 40 : 24,
    fontWeight: 'bold',
    color: '#3c312b',
    textAlign: 'center',
    marginVertical: 10,
  }),
  instructionContainer: {
    margin: 5,
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#403e2d',
  },
  sectionTitle: {
    fontSize: 18,
    color: '#f7b22c',
    fontWeight: 'bold',
  },
  instructionText: {
    fontSize: 17,
    color: '#d7c3a5',
    marginHorizontal: 5,
  },
  boldText: {
    fontWeight: 'bold',
    color: '#fff',
  },
  paymentBtn: {
    backgroundColor: '#3c312b',
    padding: 17,
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
});
