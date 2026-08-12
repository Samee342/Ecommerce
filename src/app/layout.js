import "./globals.css";
import Header from "./components/Header";
import AppProvider from "./redux/provider";
import MainLayout from "@/layout/MainLayout";
import ToastProvider from "./components/ToastProvider";
import Footer from "./components/footer";

export const metadata = {
  title: "Shop Nest",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AppProvider>
          <MainLayout>
            <Header />
            <main className="min-h-svh"> {children}</main>
            <Footer />
            <ToastProvider />
          </MainLayout>
        </AppProvider>
      </body>
    </html>
  );
}
