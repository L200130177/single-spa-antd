interface Link {
  name: string;
  path: string;
}

interface LinkNavbarProps {
  link: Link[];
}

const LinkNavbar: React.FC<LinkNavbarProps> = ({ link }) => {
  const current = window.location.pathname;
  return (
    <ul
      style={{
        listStyleType: "none",
        margin: 0,
        padding: 0,
        overflow: "hidden",
        backgroundColor: "#333",
      }}
    >
      {link.map((val, key) => (
        <li style={{ float: "left" }} key={key}>
          <a
            href={val.path}
            style={{
              display: "block",
              color: "white",
              textAlign: "center",
              padding: "14px 16px",
              textDecoration: "none",
              backgroundColor: current === val.path ? "#111" : "#333",
            }}
          >
            {val.name}
          </a>
        </li>
      ))}
    </ul>
  );
};

const Header: React.FC = () => {
  return (
    <header>
      <LinkNavbar
        link={[
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
          { name: "Product", path: "/product" },
          { name: "News", path: "/news" },
          { name: "Contact Us", path: "/contact-us" },
        ]}
      />
    </header>
  );
};

const Main: React.FC = () => {
  const feed: string[] = [
    "https://picsum.photos/id/237/700/200",
    "https://picsum.photos/id/238/700/200",
    "https://picsum.photos/id/200/700/200",
  ];

  return (
    <main style={{ padding: "10px 10vw" }}>
      {feed.map((val, key) => (
        <div key={key}>
          <img src={val} width="100%" alt={`Feed ${key + 1}`} />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id
            tempor tortor. Donec id euismod risus, id fringilla mi. Phasellus
            turpis nulla, accumsan quis rutrum id, ullamcorper sed nisl.
            Phasellus in dui eu risus consectetur malesuada. Morbi id pulvinar
            urna, ac hendrerit turpis. Donec auctor risus ut dui mattis,
            ultricies commodo enim facilisis. Interdum et malesuada fames ac
            ante ipsum primis in faucibus. Maecenas dictum odio tincidunt lectus
            imperdiet tristique.
          </p>
        </div>
      ))}
    </main>
  );
};

const Footer: React.FC = () => {
  return (
    <footer
      style={{
        left: 0,
        bottom: 0,
        width: "100%",
        backgroundColor: "#333",
        color: "white",
        textAlign: "center",
        padding: 10,
      }}
    >
      <p>©2022, Belajar Microfrontend.</p>
    </footer>
  );
};

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
};

export default App;
