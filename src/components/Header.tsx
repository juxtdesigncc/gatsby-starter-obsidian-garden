import React from "react";
import Link from "@/components/GatsbyLink";
import Container from "@/components/Container";
import { MENU } from "../../config";

export default function Header() {
  return (
    <header>
      <Container>
        <nav className="flex justify-between py-6 md:py-10">
          <Link to="/" className="text-black">
            Obsidian Garden
          </Link>
          <ul className="list-style-none grid grid-flow-col auto-cols-max gap-6">
            {MENU.map((item) => (
              <li key={item.label}>
                <Link to={item.path}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </header>
  );
}
