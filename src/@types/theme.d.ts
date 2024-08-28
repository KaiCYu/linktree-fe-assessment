export type ThemeContextType = {
  theme: ITheme;
  changeTheme: (theme: Theme) => void;
};

export interface ITheme {
  buttonBackgroundColor: string;
  buttonTextColor: string;
  buttonBorderColor: string;
  buttonVariant: string;
  backgroundColor: string;
}

