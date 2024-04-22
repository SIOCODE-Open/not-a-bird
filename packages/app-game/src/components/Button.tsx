import { ReactNode } from "react";

export function Button(props: { onClick?: () => void; children?: ReactNode }) {
  return (
    <button className="elevated button" onClick={props.onClick}>
      {props.children}
    </button>
  );
}
