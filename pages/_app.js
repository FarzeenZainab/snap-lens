import localFont from "@next/font/local";

import "../tailwind.css";
import "../components/styles/icons.css";

// fonts
const agdasimaRegular = localFont({
  src: "../public/assets/fonts/Agdasima-Regular.ttf",
  variable: "--font-Agdasima-Regular",
});

export default function App({ Component, pageProps }) {
  return (
    <>
      {/* default app layout */}
      <main className={`${agdasimaRegular.variable} font-sans`}>
        <Component {...pageProps} />
      </main>
    </>
  );
}
