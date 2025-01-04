// app/components/Header.tsx

import Link from "next/link";

export default function Header() {
  return (
    <header>
      <nav style={{ padding: "10px", backgroundColor: "#333", color: "#fff" }}>
        <ul style={{ display: "flex", listStyleType: "none" }}>
          <li style={{ marginRight: "20px" }}>
            <Link href="/" style={{ color: "#fff", textDecoration: "none" }}>
              Home
            </Link>
          </li>
          <li style={{ marginRight: "20px" }}>
            <Link href="/about" style={{ color: "#fff", textDecoration: "none" }}>
              About
            </Link>
          </li>
          <li style={{ marginRight: "20px" }}>
            <Link href="/products" style={{ color: "#fff", textDecoration: "none" }}>
              Products
            </Link>
          </li>
          <li style={{ marginRight: "20px" }}>
            <Link className="test" data-attr="xxx" href="/articles" style={{ color: "#fff", textDecoration: "none" }}>
              Articles
            </Link>
          </li>
          <li style={{ marginRight: "20px" }}>
            <Link href="/todos" style={{ color: "#fff", textDecoration: "none" }}>
              Todos
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}