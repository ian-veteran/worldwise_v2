import { useState } from "react";
import styles from "./Login.module.css";
import PageNav from "../components/PageNav";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

export default function Login() {
  // PRE-FILL FOR DEV PURPOSES
  const [email, setEmail] = useState("mchuziwapweza@gmail.com");
  const [password, setPassword] = useState("qwerty");

  const navigate = useNavigate();

  function handleLogin(e) {
    e.preventDefault();
    if (email === "mchuziwapweza@gmail.com" && password === "qwerty") {
      navigate("/app"); 

      console.log("Feeling like kanjo hapo parking")
    } else {
      alert("Invalid login credentials");
    }
  };

  return (
    <main className={styles.login}>
      <PageNav />
      
      <form className={styles.form} onClick={handleLogin}>
        <div className={styles.row}>
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>

        <div className={styles.row}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>

        <div>
          <Button type="primary">Login</Button>
        </div>
      </form>
    </main>
  );
}
