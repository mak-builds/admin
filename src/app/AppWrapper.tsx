"use client";

import React, { ReactNode } from "react";
import { Box, ChakraProvider } from "@chakra-ui/react";
import { CacheProvider } from "@chakra-ui/next-js";

import theme from "@/themes";
import { Provider } from "react-redux";
import store from "@/redux/store";

export default function AppWrappers({ children }: { children: ReactNode }) {
  // console.log(theme);

  return (
    <Provider store={store}>
      <CacheProvider>
        <ChakraProvider theme={theme}>
          <Box className="container">{children}</Box>
        </ChakraProvider>
      </CacheProvider>
    </Provider>
  );
}
