import React, { useState } from "react"; // react = base to build //describe what the ui looks like  
//useState = manage the state component 
import { SafeAreaView, View, Text, StyleSheet, Button, Image } from 'react-native';
import { Picker } from '@react-native-picker/picker';   //to create dropdowns 

export default function App() {    //defualt 
  const [selectedDog, setSelectedDog] = useState("");  // lines declare variables to store user selections 
  const [selectedHours, setSelectedHours] = useState("0"); //initial value is 0
  const [selectedService, setSelectedService] = useState("");
  const [selectedServiceQty, setSelectedServiceQty] = useState("0");
  const [calculatedValue, setCalculatedValue] = useState("Press the above button to calculate");  
//State will update when user interacts with drop down or click calculate 

  const dogRates = {   //  use for calculting
    "Dexter": 15,     
    "Arthur": 18,  
    "Morgan": 15,  
    "Max": 20,     
    "Rocky": 22
  };

  const serviceRates = {
    "Grooming": 20,
    "Walking": 10,
    "Feeding": 15,
    "Training": 10,
    "Bathing": 25
  };

  return (   
    <SafeAreaView style={styles.container}>    
    
      <View style={styles.header}>  
        <Text style={styles.heading}> Sigma Dog Care System (SDCS)</Text>       
        <Image source={require('./assets/SigmaLogo.png')} style={styles.logo} />  
      </View>

      {/* Dog + Hours */}
      <View style={styles.formGroup}>     
        <Text style={styles.label}>Select a Dog</Text>
        <Picker
          style={styles.picker}
          selectedValue={selectedDog}
          onValueChange={(itemValue) => setSelectedDog(itemValue)}>
          <Picker.Item label="Select a Dog" value="" />
          <Picker.Item label="Dexter - $15" value="Dexter" />
          <Picker.Item label="Arthur - $18" value="Arthur" />
          <Picker.Item label="Morgan - $15" value="Morgan" />
          <Picker.Item label="Max - $20" value="Max" />
          <Picker.Item label="Rocky - $22" value="Rocky" />
        </Picker>

        <Text style={styles.label}>Hours of Care</Text>
        <Picker
          style={styles.picker}
          selectedValue={selectedHours}
          onValueChange={(itemValue) => setSelectedHours(itemValue)}>
          <Picker.Item label="0" value="0" />
          <Picker.Item label="1" value="1" />
          <Picker.Item label="2" value="2" />
          <Picker.Item label="3" value="3" />
          <Picker.Item label="4" value="4" />
          <Picker.Item label="5" value="5" />
        </Picker>
      </View>

      {/* Service + Qty */}
      <View style={styles.formGroup}>
        <Text style={styles.label}>Select a Service</Text>
        <Picker
          style={styles.picker}
          selectedValue={selectedService}
          onValueChange={(itemValue) => setSelectedService(itemValue)}>
          <Picker.Item label="Select a Service" value="" />
          <Picker.Item label="Grooming - $20" value="Grooming" />
          <Picker.Item label="Walking - $10" value="Walking" />
          <Picker.Item label="Feeding - $15" value="Feeding" />
          <Picker.Item label="Training - $10" value="Training" />
          <Picker.Item label="Bathing - $25" value="Bathing" />
        </Picker>

        <Text style={styles.label}>Quantity</Text>
        <Picker
          style={styles.picker}
          selectedValue={selectedServiceQty}
          onValueChange={(itemValue) => setSelectedServiceQty(itemValue)}>
          <Picker.Item label="0" value="0" />
          <Picker.Item label="1" value="1" />
          <Picker.Item label="2" value="2" />
          <Picker.Item label="3" value="3" />
          <Picker.Item label="4" value="4" />
          <Picker.Item label="5" value="5" />
        </Picker>
      </View>

      {/* Calculate */}
      <View style={styles.formGroup}>
        <Button
          title="CALCULATE"
          onPress={() => {
            const dogRate = dogRates[selectedDog] || 0;  
            const hours = parseInt(selectedHours) || 0;
            const serviceRate = serviceRates[selectedService] || 0;
            const serviceQty = parseInt(selectedServiceQty) || 0;
            const totalCost = (dogRate * hours) + (serviceRate * serviceQty);
            setCalculatedValue("Total Cost: $" + totalCost);
          }}
        />
        <Text style={styles.result}>{calculatedValue}</Text>
        <Text style={styles.footer}>App developed by: Ryan, Emmanuel, Marco</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E0F7FA'
  },
  header: {
    alignItems: 'center',
    marginTop: 55,
    marginBottom: 20
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  logo: {
    width: 140,
    height: 100,
    marginTop: 30
  },
  formGroup: {
    marginBottom: 20,
    paddingHorizontal: 20
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 5,
    marginTop: 10
  },
  picker: {
    backgroundColor: '#fff',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 6,
    marginBottom: 10
  },
  result: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20
  },
  footer: {
    fontStyle: 'italic',
    textAlign: 'center',
    marginTop: 30,
    fontSize: 14
  }
});
