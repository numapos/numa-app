import { PropsWithChildren } from "react";

import { QueryProvider } from "./QueryProvider";
import { DatabaseProvider } from "./DatabaseProvider";

export function AppProvider({
  children,
}: PropsWithChildren) {
  return (
    <QueryProvider>
      <DatabaseProvider>
        {children}
      </DatabaseProvider>
    </QueryProvider>
  );
}