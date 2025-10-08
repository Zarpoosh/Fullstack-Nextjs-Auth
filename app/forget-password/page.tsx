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

function ForgotPasswordPage() {
  const [passwird, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const handelSubmit = () => {};
  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Forgot Password</CardTitle>
          <CardDescription>enter you'r email to receive you'r password reset link</CardDescription>
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
            
            {error && (
              <div className="rounded-md bg-destructive/10 p-3 text-sm text-destructive">
                {error}
              </div>
            )}
            <Button
             className="w-full" 
            //  disabled={loading} 
             type="submit">
              {loading ? "Loading is in ...." : "Send Reset Link"}
            </Button>

            <Button
            asChild
            variant={"outline"}
             className="w-full bg-transparent" 
            //  disabled={loading} 
             type="submit">
              <Link href="/login">Back to Login</Link>
            </Button>
          </form>
        </CardContent>


      </Card>
    </div>
  );
}

export default ForgotPasswordPage;
