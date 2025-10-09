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
import  Link  from "next/link";
import { signIn } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router= useRouter();
  
  const handelSubmit = async (e: React.FormEvent) => {
     e.preventDefault();
     setError("");
 
 
     setLoading(true);
 
     try {
       const result = await signIn.email({
         email,
         password,
       });
       if (result.error) {
         setError(result.error.message || " Sgin in Faield");
       } else {
         router.push("./dashboard");
       }
     } catch (err) {
       setError(" An error occured during sign in");
       console.log(err);
 
     } finally {
       setLoading(false);
     }
     }
  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Sign in</CardTitle>
          <CardDescription>log in to you'r acount</CardDescription>
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
            {error && (
              <div className="rounded-md bg-destructive/10 p-3 text-sm text-destructive">
                {error}
              </div>
            )}
            <Button
             className="w-full" 
            //  disabled={loading} 
             type="submit">
              {loading ? "Loading is in ...." : "Login"}
            </Button>
          </form>
        </CardContent>
        <div className="md-4 space-x-2 text-center text-sm">
          <Link
            href="/forget-password"
            className=" text-primary hover:underline"
          >
            Forget you'r password?
          </Link>
          <div>
            Don&apos;t have an acount?{""}
            <Link href="/signup" className="text-primary hover:underline">
              signup
            </Link>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default Login;
