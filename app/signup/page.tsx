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

function SignUpPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [passwird, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState("");
  const handelSubmit = () => {};
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
