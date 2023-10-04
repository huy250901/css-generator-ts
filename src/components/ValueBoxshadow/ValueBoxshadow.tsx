import { BoxShadowProperty, TextShadow, Template } from "@/types/type";

export const initialBoxShadow: BoxShadowProperty[] = [
  {
    id: 0,
    shiftRight: 0,
    shiftDown: 0,
    spread: 3,
    blur: 5,
    opacity: 20,
    color: "#000000",
    inset: false,
  },
];

export const initialTextShadow: TextShadow[] = [
  {
    shiftRight: 0,
    shiftDown: 0,
    blur: 5,
    opacity: 20,
    color: "#00000",
    id: 0,
  },
];
