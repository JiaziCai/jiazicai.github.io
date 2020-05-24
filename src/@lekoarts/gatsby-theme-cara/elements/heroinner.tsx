/** @jsx jsx */
import React from "react";
import { jsx } from "theme-ui";

type InnerProps = {
  className?: string;
  children?: React.ReactNode;
};

const HeroInner = ({ className, children }: InnerProps) => (
  <div
    sx={{
      width: [`full`, `full`, `full`, `full`, `full`, `3/4`],
      textAlign: `left`,
      position: `absolute`,
      top: `100px`
    }}
    className={className}
  >
    {children}
  </div>
);

export default HeroInner;
