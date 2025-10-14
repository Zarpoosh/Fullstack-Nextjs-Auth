"use client";
import React, { useEffect } from "react";
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
import { useRouter, useSearchParams } from "next/navigation";
import { resetPassword } from "@/lib/auth-client";

function ResetPasswordPage() {
  const [confirmpassword, setConfirmPassword] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const [success, setSuccess] = useState(false);

  const searchParams = useSearchParams();
  //   console.log(token);

  useEffect(() => {
    const tokenParam = searchParams.get("token");
    if (!tokenParam) {
      setError("invalid or missing reset token");
    } else {
      setToken(tokenParam);
    }
  }, [searchParams]);

  const handelSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (password !== confirmpassword) {
      setError("password do not match");
      return;
    }
    if (password.length < 8) {
      setError("password must be least 8 characters");
      return;
    }
    if (!token) {
      setError("invalid reset token");
      return;
    }

    setLoading(true);

    try {
      const result = await resetPassword({
        newPassword: password,
        token,
      });
      if (result.error) {
        setError(result.error.message || " Faield to reset the password");
      } else {
        setSuccess(true);
        setTimeout(() => {
          router.push("/login");
        }, 2000);
      }
    } catch (err) {
      setError(" An error occured please try again.");
      console.log("reset password error:", err);
    } finally {
      setLoading(false);
    }
  };

  if (!token && !error) {
    return(
    <div className="min-h-screen flex items-center justify-center">
      <p>Loading ...</p>
    </div>
    )
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Reset Password</CardTitle>
          <CardDescription>Enter you&apos;r new password</CardDescription>
          <CardAction>Card Action</CardAction>
        </CardHeader>
        <CardContent>
          <form className="space-y-4" onSubmit={handelSubmit}>
            <div>
              <Label htmlFor="password">new password</Label>
              <Input
                id="password"
                type="password"
                placeholder="**********"
                required
                // value={Password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={!token}
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
              disabled={loading || !token}
            >
              {loading ? "Reseting ...." : "Resset Password"}
            </Button>
          </form>
        </CardContent>
        <Button asChild variant="outline" className="w-full bg-transparent">
          <Link href="/login">Back to Login</Link>
        </Button>
      </Card>
    </div>
  );
}

export default ResetPasswordPage;
