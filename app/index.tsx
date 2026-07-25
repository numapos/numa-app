import {
  StyleSheet,
  Text,
  View,
} from "react-native";

import { colors } from "@/src/theme";

import Logo from "@/assets/logo.svg";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Numa POS
      </Text>

      <Text style={styles.subtitle}>
        Foundation ready
      </Text>

      <Logo width={120} height={120} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.background,
  },

  title: {
    fontSize: 32,
    fontWeight: "700",
    color: colors.primary,
  },

  subtitle: {
    marginTop: 8,
    fontSize: 16,
    color: colors.secondary,
  },
});