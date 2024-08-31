import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

const App = (): React.JSX.Element => {
  return (
    <SafeAreaView style={styles.container}>
      <WebView source={{ uri: 'https://www.getkha.org/login' }} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
