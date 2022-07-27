import "./Header.css";

const Header = () => {
  return (
    <header className="header-container">
      <h1 className="logo">Braifz</h1>
      <div className="blog-btn">
        <a
          className="link"
          href="https://braifz.hashnode.dev/"
          target="_blank"
          rel="noreferrer"
        >
          Blog
        </a>
      </div>
    </header>
  );
};

export default Header;
