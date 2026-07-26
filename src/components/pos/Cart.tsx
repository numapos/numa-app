import { StyleSheet, Text, View } from "react-native";

import { colors } from "@/src/theme";

export function Cart() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Current Sale
      </Text>

      <View style={styles.body}>
        <Text style={styles.empty}>
          Cart is empty
        </Text>
      </View>

      <View style={styles.footer}>
        <Text style={styles.totalLabel}>
          Total
        </Text>

        <Text style={styles.total}>
          $0.00
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 340,
    backgroundColor: "#FFFFFF",
    borderLeftWidth: 1,
    borderLeftColor: colors.border,
    padding: 24,
  },

  title: {
    fontSize: 24,
    fontWeight: "700",
    color: colors.text,
  },

  body: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  empty: {
    color: colors.textSecondary,
  },

  footer: {
    borderTopWidth: 1,
    borderTopColor: colors.border,
    paddingTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  totalLabel: {
    fontSize: 20,
    fontWeight: "700",
    color: colors.text,
  },

  total: {
    fontSize: 22,
    fontWeight: "700",
    color: colors.primary,
  },
});