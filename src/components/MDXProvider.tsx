import React, { ReactNode } from "react";
import { MDXProvider } from "@mdx-js/react";
import MDXComponents from "@/components/MDXComponents";

export default function MdxProvider({ children }: Props) {
  return <MDXProvider components={MDXComponents}>{children}</MDXProvider>;
}

type Props = {
  children: ReactNode;
};
