"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import Cookies from "js-cookie";

const users = [
  { username: "admin", password: "admin123", type: "admin" },
  { username: "editor", password: "editor123", type: "editor" },
  { username: "viewer", password: "viewer123", type: "viewer" },
];

export default function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const user = users.find(
      (u) => u.username === username && u.password === password
    );
    if (user) {
      Cookies.set("userType", user.type, { expires: 1 });
      router.push(`/${user.type}-dashboard`);
      console.log("Logged in as", user.type);
    } else {
      setError("Invalid credentials");
    }
  };

  return (
    <Card className="w-[350px] rounded-md">
      <CardHeader>
        <CardTitle>Login</CardTitle>
        <CardDescription>
          Enter your credentials to access your dashboard.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>
          {error && (
            <Alert variant="destructive" className="mt-4">
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}
          <Button className="w-full mt-6" type="submit">
            Login
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
