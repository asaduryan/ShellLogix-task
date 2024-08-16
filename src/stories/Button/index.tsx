import { type FC } from "react";

import type { TButtonProps } from "./types";
import { ButtonStyled } from "./button.styled";

export const ButtonComponent: FC<TButtonProps> = ({
  children,
  variant,
  ...rest
}) => {
  return (
    <ButtonStyled variant={variant} {...rest}>
      {children}
    </ButtonStyled>
  );
};
