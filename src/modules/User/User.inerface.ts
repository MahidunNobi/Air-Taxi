export interface IUser extends Document {
  name: string;
  email: string;
  phone?: string;
  password?: string;
  imageUrl?: string;
  role: "user" | "company" | "admin";
  provider: string;
  resetToken?: string;
  resetTokenExpiry?: Date;
}
