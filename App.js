import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import * as AuthSession from 'expo-auth-session';

const client_key = "aw3oc4nve4o8l67h"
const tiktok_scope = "user.info.basic"

export default function App() {

  const handleTiktokSignIn = async () => {
    const redirectUrl = AuthSession.getRedirectUrl();
    const result = await AuthSession.startAsync({
      authUrl:
        `https://www.tiktok.com/auth/authorize?` +
        `&response_type=code` +
        `&client_key=${client_key}` +
        `&redirect_uri=${encodeURIComponent(redirectUrl)}` +
        `&scope=${tiktok_scope}` +
        `&state=abc123`
    });

    if (result.type === 'success') {
      console.log(result)
      return
    }
    console.log("failed")
    console.log(result)
  };

  return (
    <View style={styles.container}>
      <Text>Connect your accounts</Text>
      <Button title="A" onPress={handleTiktokSignIn}/>
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
