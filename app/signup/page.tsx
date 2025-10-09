"use client";
import React from "react";
import { useState } from "react";
import {
  CardAction,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@radix-ui/react-label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { signUp } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

function SignUpPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const handelSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (password !== confirmpassword){
      setError("password do not match")
      return;
    }
    if (password.length <8) {
      setError("password must be least 8 characters");
      return;
    }

    setLoading(true);

    try {
      const result = await signUp.email({
        email,
        name,
        password,
      });
      if (result.error) {
        setError(result.error.message || " Sgin up Faield");
      } else {
        router.push("./dashboard");
      }
    } catch (err) {
      setError(" An error occured during sign up");
      console.log(err);

    } finally {
      setLoading(false);
    }
    }
 
  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Sign UP</CardTitle>
          <CardDescription>Create a new acount to get started</CardDescription>
          <CardAction>Card Action</CardAction>
        </CardHeader>
        <CardContent>
          <form className="space-y-4" onSubmit={handelSubmit}>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="yahoo@gmail.com"
                required
                // value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                type="text"
                placeholder="enter your name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="password">password</Label>
              <Input
                id="password"
                type="password"
                placeholder="**********"
                required
                // value={Password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="confirmPassword">confirmPassword</Label>
              <Input
                id="confirmPassword"
                type="password"
                placeholder="**********"
                required
                // value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            {error && (
              <div className="rounded-md bg-destructive/10 p-3 text-sm text-destructive">
                {error}
              </div>
            )}
            <Button
              className="w-full"
              //  disabled={loading}
              type="submit"
            >
              {loading ? "Loading is in ...." : "Sign Up"}
            </Button>
          </form>
        </CardContent>
        <div className="md-4 space-x-2 text-center text-sm">
          already have an acount?{""}
          <Link href="/login" className="text-primary hover:underline">
            login
          </Link>
        </div>
      </Card>
    </div>
  );
}

export default SignUpPage;
