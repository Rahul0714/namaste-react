import { createContext } from "react";

const userContext = createContext({
  user: { name: "Rahul Mujumdar", email: "mujubaba@gmail.com" },
});

export default userContext;
