import React, { useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import 'react-native-url-polyfill/auto';
import { supabase } from './supabaseClient';

export default function App() {
  useEffect(() => {
    // Example call to ensure Supabase client works
    supabase.auth.getSession().catch(console.error);
  }, []);

  return (
    <View style={styles.container}>
      <Text>Hello World!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
