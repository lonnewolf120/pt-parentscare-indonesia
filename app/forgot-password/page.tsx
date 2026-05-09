"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useRouter } from "next/navigation"

export default function ForgotPassword() {
  const [phone, setPhone] = useState("")
  const [message, setMessage] = useState("")
  const [error, setError] = useState("")
  const router = useRouter()

  const handleForgotPassword = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setMessage("")

    try {
      const response = await fetch("https://parentscare-backend-becgb.ondigitalocean.app/forgot-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ phone }),
      })

      const data = await response.json()

      if (response.ok) {
        setMessage(data.message)
        // Redirect to OTP verification page or reset password page
        router.push("/reset-password")
      } else {
        setError(data.error || "An error occurred")
      }
    } catch (err) {
      setError("An error occurred. Please try again.")
    }
  }

  return (
    <div className="container mx-auto py-8">
      <Card className="max-w-md mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">Forgot Password</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleForgotPassword} className="space-y-4">
            <Input type="tel" placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} required />
            <Button type="submit" className="w-full">
              Reset Password
            </Button>
          </form>
          {error && <p className="text-red-500 text-center mt-4">{error}</p>}
          {message && <p className="text-green-500 text-center mt-4">{message}</p>}
        </CardContent>
      </Card>
    </div>
  )
}
