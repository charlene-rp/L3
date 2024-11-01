import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, ToastAndroid } from 'react-native';
import { Picker } from '@react-native-picker/picker'; // Import Picker from the new package
import { useState } from 'react';

export default function App() {
  const [userType, setUserType] = useState("Admin");
  const [userName, setUserName] = useState("");

  const handleLogin = () => {
    ToastAndroid.show(`Welcome ${userType} ${userName}`, ToastAndroid.SHORT);
  };

  return (
      <View style={styles.container}>
        <Text>User Type:</Text>
        <Picker
            selectedValue={userType}
            onValueChange={(itemValue) => setUserType(itemValue)}
            style={{ borderWidth: 1, marginBottom: 10 }}
        >
          <Picker.Item label="Admin" value="Admin" />
          <Picker.Item label="Guest" value="Guest" />
        </Picker>

        <Text>User Name:</Text>
        <TextInput
            style={{ borderWidth: 1, marginBottom: 10 }}
            value={userName}
            onChangeText={setUserName}
        />

        <Text>Password:</Text>
        <TextInput style={{ borderWidth: 1, marginBottom: 10 }} secureTextEntry />

        <TouchableOpacity onPress={handleLogin}>
          <Text style={styles.loginText}>LOG IN</Text>
        </TouchableOpacity>

        <StatusBar style="auto" />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50,
    paddingHorizontal: 10,
  },
  loginText: {
    marginTop: 10,
    color: 'blue',
    fontSize: 16,
  },
});
