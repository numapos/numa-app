import { StyleSheet, View } from "react-native";
import { useState } from "react";

import { AppShell } from "@/src/layout/AppShell";
import { ProductGrid } from "@/src/components/pos/ProductGrid";
import { Cart } from "@/src/components/pos/Cart";

import { colors } from "@/src/theme";

export function SalesScreen() {
  const [activeCategory, setActiveCategory] = useState("All");

  return (
    <AppShell
      activeCategory={activeCategory}
      onCategoryChange={setActiveCategory}
    >
      <View style={styles.container}>
        <View style={styles.products}>
         <ProductGrid category={activeCategory} />
        </View>

        <Cart />
      </View>
    </AppShell>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: colors.surface,
  },

  products: {
    flex: 1,
    padding: 24,
  },
});