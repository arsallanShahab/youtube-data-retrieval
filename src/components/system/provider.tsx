"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import React, { Fragment } from "react";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Fragment>
      <QueryClientProvider client={new QueryClient()}>
        {children}
        <ReactQueryDevtools />
      </QueryClientProvider>
    </Fragment>
  );
}
