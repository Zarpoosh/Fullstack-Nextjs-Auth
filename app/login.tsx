"use client";
import React from "react";
import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [passwird, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState("");
  return <div>loginpage</div>;
}

export default Login;
