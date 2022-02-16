import React, { ReactNode } from "react";
import Header from "@/components/Header";
import Container from "./Container";

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
        </>
      ) : (
        <>
          <Header />
          <Container>{children}</Container>
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
