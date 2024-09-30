"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function AdminDashboard() {
  return (
    <div className="p-8">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Admin Dashboard</CardTitle>
          <CardDescription>
            Welcome to your admin control panel.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            Here you can manage users, view system statistics, and perform other
            administrative tasks.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
