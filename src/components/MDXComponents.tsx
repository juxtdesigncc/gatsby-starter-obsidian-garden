import React from "react";
import { Link } from "gatsby";

const MDXComponents = {
  a: (props) => <Link {...props} />,
};

export default MDXComponents;
