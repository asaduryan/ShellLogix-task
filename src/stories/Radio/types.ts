export interface RadioButtonOption {
  label?: string;
  value: string;
}

export interface RadioButtonProps {
  label: string;
  options: RadioButtonOption[];
  name: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
