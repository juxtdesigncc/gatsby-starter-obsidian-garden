import React from "react";
import Layout from "@/components/Layout";
import MDXCompProvider from "@/components/MDXProvider";

export default function DefaultPageTemplate({ children }) {
  return (
    <MDXCompProvider>
      <Layout>{children}</Layout>
    </MDXCompProvider>
  );
}
