import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import * as WebBrowser from 'expo-web-browser'

const client_key = ""

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Connect your accounts</Text>
      <Button title="A" onPress={()=>{WebBrowser.openAuthSessionAsync(`https://www.tiktok.com/auth/authorize?client_key=${client_key}&response_type=code&scope`)}}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
