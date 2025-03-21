import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function LoginPage() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div
      className="flex justify-center items-center h-screen bg-gradient-to-br from-blue-100 to-green-100"
      style={{ backgroundColor: "#F3F4F6" }}
    >
      <Card className="w-96 shadow-lg bg-white bg-opacity-95 border border-gray-300">
        <CardHeader>
          <CardTitle className="text-center text-blue-700">
            Paramedic Patient Summary
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col items-center">
          <Button
            onClick={() => {
              window.location.href = "/auth/login";
            }}
            className="w-full py-2 text-lg bg-blue-600 hover:bg-blue-700 text-white rounded-lg"
          >
            {loggedIn ? "Logged In" : "Login"}
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
