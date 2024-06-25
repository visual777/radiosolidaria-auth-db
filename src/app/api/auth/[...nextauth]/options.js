import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import User from "@/app/models/User";

const emailAdmin = process.env.EMAIL_ADMIN;

export const options = {
  providers: [
    CredentialsProvider({
      name: "Credenciales",
      credentials: {
        email: {
          label: "Correo electrónico: ",
          type: "email",
          placeholder: "Ingresa tu correo electrónico",
        },
        password: {
          label: "Contraseña: ",
          type: "password",
          placeholder: "Ingresa tu contraseña",
        },
      },
      async authorize(credentials) {
        try {
          const foundUser = await User.findOne({ email: credentials.email })
            .lean()
            .exec();
          if (foundUser) {
            console.log("User exists: ", foundUser);
            const match = await bcrypt.compare(
              credentials.password,
              foundUser.password
            );
            if (match) {
              console.log("Password match");
              delete foundUser.password;

              if (foundUser.email === emailAdmin) {
                foundUser["role"] = "admin";
              }
              return { user: foundUser, redirect: '/dashboard' };
            }
          }
        } catch (error) {
          console.log(error);
        }
        return null;
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async jwt({ token, user }) {
      if (user) token.role = user.role;
      return token;
    },
    async session({ session, token }) {
      if (session?.user) session.user.role = token.role;
      return session;
    },
  },
};
