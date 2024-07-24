"use client";
import { createTheme, styled, Typography } from "@mui/material";

const theme = createTheme({
  typography: {
    fontSize: 14,
  },
});

export const ThemeTypography = styled(Typography)(({ theme }) => ({
  letterSpacing: 2,
  lineHeight: 2,
}));

export default theme;
