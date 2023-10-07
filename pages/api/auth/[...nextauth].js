import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import connectToDatabase from "../../../lib/db";
import { verifyPassword } from "../../../lib/auth";

export default NextAuth({
    session: {
      jwt: true,
    },
    providers: [
      CredentialsProvider({
          name: "Credentials",
          async authorize(credentials) {
            const client = await connectToDatabase();
  
            const employeeCollecton = client.db().collection("employes");
            const employee = await employeeCollecton.findOne({
              loginID: credentials.loginID,
            });
            if (!employee) {
              throw new Error("no user find with this ID");
            }
            console.log(credentials.password,employee.password);
            const isValid = await verifyPassword(
              credentials.password,
              employee.password
            );
            if (!isValid) {
              throw new Error("password is incorrect");
            }
  
            return {loginID: employee.loginID };
            
          },
        
      }),
    ],
  });
  