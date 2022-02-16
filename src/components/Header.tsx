import React from "react";
import { Link } from "gatsby";
import Container from "@/components/Container";

export default function Header() {
  return (
    <header className="h-8">
      <Container>
        <nav className="flex justify-between">
          <Link to="/">Obsidian Garden</Link>
          <div className="grid grid-flow-col auto-cols-max gap-6">
            <Link to="/about">About</Link>
            <Link to="/topics">Topics</Link>
          </div>
        </nav>
      </Container>
    </header>
  );
}
