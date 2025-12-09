import { useState } from "react";
import UserCard from "./CardComponent";
import {
  TextField,
  Select,
  MenuItem,
  FormControl,
  Button,
} from "@mui/material";
import { message } from "antd";

const CardInput = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [age, setAge] = useState<number>(0);
  const [isPremium, setIsPremium] = useState<boolean>(false);

  const Enter = () => {
    if (name === "" || email === "" || age === 0) {
      message.error("Please enter all fields");
      return;
    } else {
      message.success(
        `Welcome ${name}, your email is: ${email}, Age: ${age}, ${
          isPremium ? "Premium" : "Free"
        }`
      );
    }
    setName("");
    setEmail("");
    setAge(0);
    setIsPremium(false);
  };

  return (
    <>
      <TextField
        label="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <TextField
        value={email}
        label="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        value={age}
        onChange={(e) => setAge(Number(e.target.value))}
        label="Age"
        type="number"
      />
      <FormControl>
        <Select
          style={{ width: "100%" }}
          value={isPremium}
          onChange={(e) => setIsPremium(Boolean(e.target.value === "true"))}
        >
          <MenuItem value={"true"}>Premium</MenuItem>
          <MenuItem value={"false"}>Free</MenuItem>
        </Select>
      </FormControl>{" "}
      <Button variant="contained" onClick={Enter}>
        Enter
      </Button>
      <UserCard user={{ name, email, age, isPremium }} />
    </>
  );
};

export default CardInput;
