import { StyleSheet, Text } from "react-native";

import Logo from "@/assets/logo.svg";
import { Container } from "@/src/components/Container";
import { Screen } from "@/src/components/Screen";
import { colors, spacing, typography } from "@/src/theme";

export default function Index() {
  return (
    <Screen>
      <Container>
        <Logo width={96} height={96} />

        <Text style={styles.title}>
          Numa POS
        </Text>

        <Text style={styles.subtitle}>
          Foundation ready
        </Text>
      </Container>
    </Screen>
  );
}

const styles = StyleSheet.create({
  title: {
    ...typography.title,
    color: colors.primary,
    marginTop: spacing.lg,
  },

  subtitle: {
    ...typography.body,
    color: colors.secondary,
    marginTop: spacing.sm,
  },
});