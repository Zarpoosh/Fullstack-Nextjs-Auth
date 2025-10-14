"use client";
import React from "react";
import { useState } from "react";
import {
  CardAction,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@radix-ui/react-label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { forgetPassword } from "@/lib/auth-client";
import { Alert, AlertDescription } from "@/components/ui/alert";

function ForgotPasswordPage() {
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const handelSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess(false);
    setLoading(false);
    try {
      const result = await forgetPassword({
        email,
        redirectTo: "/reset-password",
      });
      if (result.error) {
        setError(result.error.message || "Faield to send reset email");
      } else {
        setSuccess(true);
        console.log("password reset email send to ", email);
      }
    } catch (err) {
      setError("An error occured please try again ");
      console.log("forget password error:", err);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Forgot Password</CardTitle>
          <CardDescription>
            enter you&#39;r email to receive you&#39;r password reset link
          </CardDescription>
          <CardAction>Card Action</CardAction>
        </CardHeader>
        <CardContent>
          {success ? (
         <div className="space-y-4">
             <Alert>
              <AlertDescription>
                password reset link has been sent to your email.check the
                console for the reset url (in production, this would be sent via
                email)
              </AlertDescription>
            </Alert>
            <Button
            asChild
            variant="outline"
            className="w-full bg-transparent"
            >
              
              <Link href="/login">Back to the Log in </Link>
            </Button>
           </div>
          ) : (
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
                type="submit"
              >
                {loading ? "Loading is in ...." : "Send Reset Link"}
              </Button>

              <Button
                asChild
                variant={"outline"}
                className="w-full bg-transparent"
                //  disabled={loading}
                type="submit"
              >
                <Link href="/login">Back to Login</Link>
              </Button>
            </form>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

export default ForgotPasswordPage;
