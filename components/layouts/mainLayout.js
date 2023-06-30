export default function mainLayout({ children }) {
  return (
    <div className="container">
      <header>SnapLens</header>
      <main>{children}</main>
      <footer>Developed by Farzeen Zainab</footer>
    </div>
  );
}
