// src/components/common/NumaLogo.tsx

import Logo from "@/assets/logo.svg";

type Props = {
  width?: number;
  height?: number;
};

export function NumaLogo({
  width = 120,
  height = 120,
}: Props) {
  return (
    <Logo
      width={width}
      height={height}
    />
  );
}