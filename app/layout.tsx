import { Container, ThemeProvider } from "@mui/material";
import type { Metadata } from "next";
import theme from "./libs/theme/theme";

const siteName = "Busy me";
const description =
  "Busy meは、忙しいあなたのためのToDoリスト可視化アプリです。思いつく限りのタスクを吐き出し、優先度をつけて整理することで、効率的にタスクを管理できます。Busy meを使ってタスク管理をスムーズにし、日々の生産性を向上させましょう。";
export const metadata: Metadata = {
  metadataBase: new URL("https://busy-me.vercel.app/"),
  title: {
    default: siteName,
    template: "%s | Busy me",
  },
  description: description,
  // 意図しないOGPなためコメントアウト
  // openGraph: {
  //   title: siteName,
  //   description: description,
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>
        <ThemeProvider theme={theme}>
          <Container maxWidth="sm" sx={{ my: 7 }}>
            {children}
          </Container>
        </ThemeProvider>
      </body>
    </html>
  );
}
