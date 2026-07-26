import { Pressable, StyleSheet, Text } from "react-native";

import { Product } from "@/src/features/products/types";
import { colors } from "@/src/theme";

type Props = {
  product: Product;
  onPress: () => void;
};

export function ProductCard({
  product,
  onPress,
}: Props) {
  return (
    <Pressable
      style={styles.card}
      onPress={onPress}
    >
      <Text style={styles.name}>
        {product.name}
      </Text>

      <Text style={styles.price}>
        €{product.price.toFixed(2)}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 160,
    height: 120,
    borderRadius: 16,
    backgroundColor: colors.surface,
    padding: 16,
    justifyContent: "space-between",
  },

  name: {
    fontSize: 18,
    fontWeight: "700",
    color: colors.text,
  },

  price: {
    fontSize: 16,
    color: colors.primary,
    fontWeight: "700",
  },
});