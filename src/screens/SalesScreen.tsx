import { StyleSheet, Text, View } from "react-native";

import { AppShell } from "@/src/layout/AppShell";
import { colors } from "@/src/theme";

export function SalesScreen() {
  return (
    <AppShell>
      <View style={styles.container}>
        <View style={styles.products}>
          <Text style={styles.heading}>
            Products
          </Text>

          <View style={styles.placeholder}>
            <Text style={styles.placeholderText}>
              Product grid coming soon
            </Text>
          </View>
        </View>

        <View style={styles.cart}>
          <Text style={styles.heading}>
            Current Sale
          </Text>

          <View style={styles.cartBody}>
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
      </View>
    </AppShell>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#F5F6FA",
  },

  products: {
    flex: 1,
    padding: 24,
  },

  cart: {
    width: 340,
    backgroundColor: "#FFF",
    borderLeftWidth: 1,
    borderLeftColor: "#ECECEC",
    padding: 24,
  },

  heading: {
    fontSize: 24,
    fontWeight: "700",
    color: colors.text,
    marginBottom: 24,
  },

  placeholder: {
    flex: 1,
    borderRadius: 16,
    borderWidth: 2,
    borderStyle: "dashed",
    borderColor: "#D5D8DF",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFF",
  },

  placeholderText: {
    color: colors.secondary,
    fontSize: 18,
  },

  cartBody: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  empty: {
    color: colors.secondary,
    fontSize: 16,
  },

  footer: {
    borderTopWidth: 1,
    borderTopColor: "#ECECEC",
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