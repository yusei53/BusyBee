import { Container, ThemeProvider } from "@mui/material";
import type { Metadata } from "next";
import theme from "./libs/theme/theme";

const siteName = "Busy me";
const description =
  "思いつく限りのタスクを吐き出し、整理するtodo可視化サービス";
const ogImageUrl = "https://busy-me.vercel.app/busy-me.png";
export const metadata: Metadata = {
  metadataBase: new URL("https://busy-me.vercel.app/"),
  title: {
    default: siteName,
    template: "%s | Busy me",
  },
  description: description,
  openGraph: {
    type: "website",
    url: "https://busy-me.vercel.app/",
    title: siteName,
    description: description,
    images: [
      {
        url: ogImageUrl,
        width: 80,
        height: 80,
        alt: `${siteName} OGP Image`,
      },
    ],
  },
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
