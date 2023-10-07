import { hashPassword } from "@/lib/auth";
import connectToDatabase from "@/lib/db";

async function handler(req, res) {
  if (req.method !== "POST") {
  }

  try {
    const { email, password, loginID } = req.body;

    if (
      !email ||
      !email.includes("@") ||
      !password ||
      password.trim().length < 7
    ) {
      res.status(422).json({
        message: "invalid input - password should also be atleast 7 characters",
      });
    }

    const client = await connectToDatabase();
    const db = client.db();
    const existingUser = await db
      .collection("employes")
      .findOne({ loginID: loginID });
    if (existingUser) {
      res.status(422).json({
        message: "loginID is already registered",
      });
      client.close();
      return;
    }

    const hashedPassword = await hashPassword(password);

    const result = await db
      .collection("employes")
      .insertOne({
        email:email,
        password: hashedPassword,
        name: req.body.name,
        phone: req.body.phone,
        portfolio:req.body.portfolio,
        region:req.body.region,
        city: req.body.city,
        userType:req.body.userType,
        loginID: req.body.loginID,
        status:req.body.status

      });
    res.status(201).json({ message: "Created User" });

    client.close();
  } catch (error) {
    res.status(400).json({ message: "bad request" });
  }
}
export default handler;
