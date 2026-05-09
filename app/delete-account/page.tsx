"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useRouter } from "next/navigation"

export default function DeleteAccount() {
  const [phone, setPhone] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const router = useRouter()

  const handleDeleteAccount = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    const token = localStorage.getItem("token")
    if (!token) {
      setError("Authentication token not found. Please sign in again.")
      return
    }

    if (!confirm("Are you sure you want to delete your account? This action cannot be undone.")) {
      return
    }

    try {
      const response = await fetch("https://parentscare-backend-becgb.ondigitalocean.app/user/delete", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ phone, password }),
      })

      const data = await response.json()

      if (response.ok) {
        localStorage.removeItem("token")
        router.push("/account-deleted")
      } else {
        setError(data.error || "An error occurred while deleting the account")
      }
    } catch (err) {
      setError("An error occurred. Please try again.")
    }
  }

  return (
    <div className="container mx-auto py-8">
      <Card className="max-w-md mx-auto">
        <CardHeader>
          <CardTitle>
            <span className="text-2xl font-bold text-center">Delete Account</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleDeleteAccount} className="space-y-4">
            <Input type="tel" placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} required />
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <Button type="submit" className="w-full bg-red-500 hover:bg-red-600">
              Delete Account
            </Button>
          </form>
          {error && <p className="text-red-500 text-center mt-4">{error}</p>}
        </CardContent>
      </Card>
    </div>
  )
}
