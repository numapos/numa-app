import { PropsWithChildren, useEffect } from "react";

import { runInitialMigration } from "@/src/database/migrations/001_initial";

export function DatabaseProvider({
  children,
}: PropsWithChildren) {
  useEffect(() => {
    runInitialMigration();
  }, []);

  return children;
}