import { StyleSheet, View } from "react-native";

import { ProductCard } from "./ProductCard";

type Props = {
  category: string;
};

const products = [
  {
    id: "1",
    name: "Coffee",
    price: 3.5,
    category: "Coffee",
  },
  {
    id: "2",
    name: "Burger",
    price: 8.99,
    category: "Food",
  },
  {
    id: "3",
    name: "Cake",
    price: 4.5,
    category: "Desserts",
  },
];

export function ProductGrid({
  category,
}: Props) {
  function handleAddProduct(productName: string) {
    console.log(`${productName} added`);
  }

  const filteredProducts =
    category === "All"
      ? products
      : products.filter(
          (product) =>
            product.category === category
        );

  return (
    <View style={styles.container}>
      {filteredProducts.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onPress={() =>
            handleAddProduct(product.name)
          }
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 16,
  },
});