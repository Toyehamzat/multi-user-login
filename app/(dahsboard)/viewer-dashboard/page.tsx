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
    <div className="p-8 flex">
      <Card className="w-[350px]  mx-auto">
        <CardHeader>
          <CardTitle>Viewer Dashboard</CardTitle>
          <CardDescription>
            Welcome to your viewer control panel.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            Here you can manage users, view system statistics, and perform other
            viewer tasks.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
