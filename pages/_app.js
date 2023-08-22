import "../tailwind.css";
import "../components/styles/icons.css";
import "../components/styles/fonts.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      {/* default app layout */}
      <main>
        <Component {...pageProps} />
      </main>
    </>
  );
}
