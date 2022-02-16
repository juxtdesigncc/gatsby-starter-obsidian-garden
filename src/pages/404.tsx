import * as React from "react";
import { Link } from "gatsby";
import Layout from "@/components/Layout";

// markup
const NotFoundPage = () => {
  return (
    <main>
      <Layout>
        <title>Not found</title>
        <h1>Page not found</h1>
        <p>
          Sorry{" "}
          <span role="img" aria-label="Pensive emoji">
            😔
          </span>
          we couldn’t find what you were looking for.
          <br />
          {process.env.NODE_ENV === "development" ? (
            <>
              <br />
              Try creating a page in <code>src/pages/</code>.
              <br />
            </>
          ) : null}
          <br />
          <Link to="/">Go home</Link>.
        </p>
      </Layout>
    </main>
  );
};

export default NotFoundPage;
