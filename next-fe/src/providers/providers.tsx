"use client";
import { theme } from "@/theme/theme";
import { ThemeProvider } from "@mui/material";
import { ReactNode } from "react";

type ProvidersProps = {
  children: ReactNode;
};
const Providers = ({ children }: ProvidersProps) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Providers;
