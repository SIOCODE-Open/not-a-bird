import { ReactNode } from "react";

export function Card(opts: {
  children?: ReactNode,
  className?: string,
}) {
  return (
    <div className={"rounded padded elevated bordered flex column justify-start align-start " + (opts.className ? opts.className : '')}>
      {opts.children}
    </div>
  );
}
