import { ReactNode } from "react";

export function Button(props: { onClick?: () => void; children?: ReactNode, className?: string }) {
  return (
    <button className={"elevated button " + (props.className || "")} onClick={props.onClick}>
      {props.children}
    </button>
  );
}
