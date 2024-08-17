import * as icons from "../../assets";

export type IconType = keyof typeof icons;

export type TCategoryData = {
  name: string;
  Icon: IconType;
  navigate: string;
};
