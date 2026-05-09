"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useRouter } from "next/navigation"

export default function VerifyOTP() {
  const [otp, setOTP] = useState("")
  const [error, setError] = useState("")
  const router = useRouter()

  const handleVerifyOTP = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    const token = localStorage.getItem("token")
    if (!token) {
      setError("Authentication token not found. Please sign in again.")
      return
    }

    try {
      const response = await fetch("https://parentscare-backend-becgb.ondigitalocean.app/verify-otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ otp }),
      })

      const data = await response.json()

      if (response.ok) {
        // Update the token if a new one is provided
        if (data.token) {
          localStorage.setItem("token", data.token)
        }
        router.push("/dashboard") // Redirect to dashboard or home page
      } else {
        setError(data.error || "An error occurred during OTP verification")
      }
    } catch (err) {
      setError("An error occurred. Please try again.")
    }
  }

  return (
    <div className="container mx-auto py-8">
      <Card className="max-w-md mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">Verify OTP</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleVerifyOTP} className="space-y-4">
            <Input type="text" placeholder="Enter OTP" value={otp} onChange={(e) => setOTP(e.target.value)} required />
            <Button type="submit" className="w-full">
              Verify OTP
            </Button>
          </form>
          {error && <p className="text-red-500 text-center mt-4">{error}</p>}
        </CardContent>
      </Card>
    </div>
  )
}
