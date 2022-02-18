import { Link as GatsbyLink } from "gatsby";
import React from "react";
import { OutboundLink } from "gatsby-plugin-google-analytics";

// const activeStyle = {
//   font-weight: 600
// }

const defaultProps: LinkProps = {
  target: `_self`,
  className: ``,
  children: {},
  activeClassName: ``,
  partiallyActive: false,
};

type LinkProps = {
  target?: "_blank" | "_self";
  className?: string;
  children?: React.ReactNode;
  to: string;
  activeClassName?: string;
  partiallyActive?: boolean;
};

// Since DOM elements <a> cannot receive activeClassName
// and partiallyActive, destructure the prop here and
// pass it only to GatsbyLink
const Link = ({
  children,
  to,
  className,
  activeClassName,
  partiallyActive,
  target,
  ...other
}: LinkProps) => {
  // Tailor the following test to your environment.
  // This example assumes that any internal link (intended for Gatsby)
  // will start with exactly one slash, and that anything else is external.
  const internal = /^\/(?!\/)/.test(to);

  // Use Gatsby Link for internal links, and <a> for others
  if (internal) {
    return (
      <GatsbyLink
        to={to}
        className={className}
        activeClassName={activeClassName}
        partiallyActive={partiallyActive}
        // activeStyle={activeStyle}
        target={target}
        {...other}
      >
        {children}
      </GatsbyLink>
    );
  }
  return (
    <OutboundLink
      href={to}
      className={className}
      target="_blank"
      rel="noreferrer noopener"
      {...other}
    >
      {children}
    </OutboundLink>
  );
};

Link.defaultProps = defaultProps;

export default Link;
