import React from "react";

export const Heading = ({
  as: Comp = "h1",
  size = "4xl",
  children,
  className,
  id
}) => {
  return (
    <Comp
      className={
        "font-sans font-semibold tracking-tighter text-slate-800 text-3xl md:text-4xl "
        +
        className
      }
      id={id}
    >
      {children}
    </Comp>
  );
};
