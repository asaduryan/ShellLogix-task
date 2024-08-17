import * as icons from "../../assets";

export type IconType = keyof typeof icons;

export type TCategoryType = {
  name: string;
  Icon: IconType;
  navigate: string;
  isActive: boolean;
};
