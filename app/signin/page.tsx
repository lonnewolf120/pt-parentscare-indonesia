'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { setUserCookie, baseUrl } from '@/utils/auth'

export default function SignIn() {
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const router = useRouter()

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    try {
      const response = await fetch(`${baseUrl}/signin`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ phone, password }),
      })

      const data = await response.json()

      if (response.ok) {
        setUserCookie(data.user, data.token)
        if (data.user.is_verified) {
          router.push('/dashboard')
        } else {
          router.push('/verify-otp')
        }
      } else if (response.status === 305) {
        setUserCookie(data.user, data.token)
        router.push('/verify-otp')
      } else {
        setError(data.error || 'An error occurred during sign in')
      }
    } catch (err) {
      setError('An error occurred. Please try again.')
    }
  }

  return (
    <div className="container mx-auto py-8">
      <Card className="max-w-md mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">Sign In</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSignIn} className="space-y-4">
            <Input
              type="tel"
              placeholder="Phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <Button type="submit" className="w-full">Sign In</Button>
          </form>
          {error && <p className="text-red-500 text-center mt-4">{error}</p>}
          <p className="text-center mt-4">
            Don't have an account? <Link href="/signup" className="text-blue-500">Sign Up</Link>
          </p>
          <p className="text-center mt-2">
            <Link href="/forgot-password" className="text-blue-500">Forgot Password?</Link>
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
