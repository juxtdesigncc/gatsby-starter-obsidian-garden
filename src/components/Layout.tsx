import React, { ReactNode } from "react";
import Header from "@/components/Header";
import Container from "@/components/Container";
import Footer from "@/components/Footer";

const Layout: React.FC = ({
  children,
  title,
  description,
  keywords,
  url,
  full,
  ...props
}: Props) => {
  return (
    <main>
      {full ? (
        <>
          <Header />
          {children}
          <Footer />
        </>
      ) : (
        <>
          <Header />
          <Container>{children}</Container>
          <Footer />
        </>
      )}
    </main>
  );
};

export default Layout;

type Props = {
  children: ReactNode;
  title: string;
  description?: string;
  socialImage?: string;
  url?: string;
  keywords: Array<string>;
  full: boolean;
};
