"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function SignUp() {
  const [phone, setPhone] = useState("")
  const [password, setPassword] = useState("")
  const [name, setName] = useState("")
  const [error, setError] = useState("")
  const router = useRouter()

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    try {
      const response = await fetch("https://parentscare-backend-becgb.ondigitalocean.app/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ phone, password, name }),
      })

      const data = await response.json()

      if (response.ok) {
        // Store the token in localStorage
        localStorage.setItem("token", data.token)
        // Redirect to OTP verification page
        router.push("/verify-otp")
      } else {
        setError(data.error || "An error occurred during signup")
      }
    } catch (err) {
      setError("An error occurred. Please try again.")
    }
  }

  return (
    <div className="container mx-auto py-8">
      <Card className="max-w-md mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">Sign Up</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSignUp} className="space-y-4">
            <Input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
            <Input type="tel" placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} required />
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <Button type="submit" className="w-full">
              Sign Up
            </Button>
          </form>
          {error && <p className="text-red-500 text-center mt-4">{error}</p>}
          <p className="text-center mt-4">
            Already have an account?{" "}
            <Link href="/signin" className="text-blue-500">
              Sign In
            </Link>
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
