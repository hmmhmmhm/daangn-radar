import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "당근 레이더",
  description: "중고거래 시 실시간 위치를 서로 공유해보세요!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
