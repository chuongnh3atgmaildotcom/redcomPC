// import clsx from "clsx";
import React from "react";

export const Bounded = ({
  as: Comp = "div",
  size = "base",
  className,
  children,
}) => {
  return (
    // <Comp className={clsx("bounded", className)}>
    //   <div
    //     className={clsx(
    //       "mx-auto w-full",
    //       size === "small" && "max-w-xl",
    //       size === "base" && "max-w-3xl",
    //       size === "wide" && "max-w-4xl",
    //       size === "widest" && "max-w-6xl"
    //     )}
    //   >
    //     {children}
    //   </div>
    // </Comp>
    <Comp className="mx-auto w-full max-w-3xl">
      {children}
    </Comp>
  );
};
