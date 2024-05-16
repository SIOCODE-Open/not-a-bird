import { Resource } from "../classes/ResourceClass";

export function useCrosshair() {
  const createCrosshair = (
    canvas: HTMLCanvasElement,
    res_el: Resource,
    colorBorder: string,
  ) => {
    const ctx = canvas.getContext("2d");
    const cornerRadius = 10;
    const borderWidth = 2;

    // Draw the main rectangle
    ctx.fillStyle = res_el.color;
    ctx.fillRect(res_el.x, res_el.y, 50, 50);

    // Draw top left corner
    // Border
    ctx.fillStyle = colorBorder;
    ctx.fillRect(res_el.x, res_el.y, cornerRadius, borderWidth);
    ctx.fillRect(res_el.x, res_el.y, borderWidth, cornerRadius);

    // Draw top right corner
    ctx.fillRect(
      res_el.x + 50 - cornerRadius,
      res_el.y,
      cornerRadius,
      borderWidth,
    );
    ctx.fillRect(
      res_el.x + 50 - borderWidth,
      res_el.y,
      borderWidth,
      cornerRadius,
    );

    // Draw bottom left corner
    ctx.fillRect(
      res_el.x,
      res_el.y + 50 - borderWidth,
      cornerRadius,
      borderWidth,
    );
    ctx.fillRect(
      res_el.x,
      res_el.y + 50 - cornerRadius,
      borderWidth,
      cornerRadius,
    );

    // Draw bottom right corner
    ctx.fillRect(
      res_el.x + 50 - cornerRadius,
      res_el.y + 50 - borderWidth,
      cornerRadius,
      borderWidth,
    );
    ctx.fillRect(
      res_el.x + 50 - borderWidth,
      res_el.y + 50 - cornerRadius,
      borderWidth,
      cornerRadius,
    );

    return ctx;
  };

  return { createCrosshair };
}
