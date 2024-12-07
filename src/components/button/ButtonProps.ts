import { ReactNode } from "react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  icon?: ReactNode;
  variant?: "primary" | "secondary" | "accent" | "destructive" | "muted";
  size?: "sm" | "md" | "lg" | "xl" | "2xl";
}
