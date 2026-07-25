// src/components/Screen.tsx

import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";

type Props = {
  children: React.ReactNode;
};

export function Screen({ children }: Props) {
  return (
    <SafeAreaView style={styles.container}>
      {children}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});