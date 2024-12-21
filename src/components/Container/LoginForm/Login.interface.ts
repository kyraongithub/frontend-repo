export interface LoginFormProps {
  handleSubmit: (event: React.FormEvent) => void;
  email: string;
  setEmail: (email: string) => void;
  password: string;
  setPassword: (password: string) => void;
}
