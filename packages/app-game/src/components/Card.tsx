import { ReactNode } from "react";

export function Card(opts: {
  children?: ReactNode,
  className?: string,
  draggable?: boolean,
  onDragStart?: (ev: React.DragEvent<HTMLDivElement>) => void,
  onDragEnd?: (ev: React.DragEvent<HTMLDivElement>) => void,
  onDrop?: (ev: React.DragEvent<HTMLDivElement>) => void,
  onDragOver?: (ev: React.DragEvent<HTMLDivElement>) => void,
}) {
  return (
    <div className={"rounded padded elevated bordered flex column justify-start align-start " + (opts.className ? opts.className : '')}
      draggable={opts.draggable}
      onDragStart={opts.onDragStart}
      onDragEnd={opts.onDragEnd}
      onDrop={opts.onDrop}
      onDragOver={opts.onDragOver}
    >
      {opts.children}
    </div>
  );
}
