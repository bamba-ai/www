import "./globals.css";

export const metadata = {
  title: "Bamba AI | 地元の商売に、ちょうどいいAI活用支援",
  description:
    "東京都品川区周辺の個人店・中小企業向けに、AI活用支援、SNS活用支援、PR動画作成・配信、Webサービス開発を行うBamba AIのホームページです。",
  metadataBase: new URL("https://bamba-ai.com"),
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "Bamba AI",
    description: "地元の商売に、ちょうどいいAI活用支援。",
    url: "https://bamba-ai.com",
    siteName: "Bamba AI",
    locale: "ja_JP",
    type: "website"
  }
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#082653"
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
