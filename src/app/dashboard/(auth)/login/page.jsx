"use client";
import React from "react";
import Styles from "./page.module.css";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const Login = () => {
  const session = useSession();
  const router = useRouter();
  
  if (session.status === "loading") {
    return <p>Loading....</p>;
  }
  
  if (session.status === "authenticated") {
    router?.push("/dashboard");
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;
    signIn("credentials", { email, password });
  };
  
  return (
    <div className={Styles.container}>
      <h1 className={Styles.heading}>Login to Your Account</h1>
      <form className={Styles.form} onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="email"
          className={Styles.input}
          required
        />
        <input
          type="password"
          placeholder="password"
          className={Styles.input}
          required
        />
        <button className={Styles.button}>Login</button>
      </form>
      
      <button className={Styles.buttoon} onClick={() => signIn("google")}>
        <img src="/google.png" alt="Google logo" className={Styles.imge} height={20} width={20} />
        Login with Google
      </button>
    </div>
  );
};

export default Login;
