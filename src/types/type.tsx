export interface BoxShadowProperty {
  id: any;
  shiftRight: number;
  shiftDown: number;
  spread: number;
  blur: number;
  opacity: number;
  color: any;
  inset: boolean;
}
export interface Template {
  id: number;
  template: BoxShadowProperty[];
}
export interface TextShadow {
  id: any;
  shiftRight: number;
  shiftDown: number;
  blur: number;
  opacity: number;
  color: any;
}
