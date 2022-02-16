import React, { ReactNode } from "react";

const Container = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={`container max-w-4xl mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;
