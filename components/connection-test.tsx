"use client"

import { useState, useEffect } from "react"
import { createClient } from "@/utils/supabase/client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, XCircle, Loader2 } from "lucide-react"

export function ConnectionTest() {
  const [connectionStatus, setConnectionStatus] = useState<"idle" | "testing" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState<string>("")
  const [envVars, setEnvVars] = useState({
    supabaseUrl: false,
    supabaseAnonKey: false,
  })

  useEffect(() => {
    // Check if environment variables are present
    setEnvVars({
      supabaseUrl: !!process.env.NEXT_PUBLIC_SUPABASE_URL,
      supabaseAnonKey: !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    })
  }, [])

  const testConnection = async () => {
    setConnectionStatus("testing")
    setErrorMessage("")

    try {
      const supabase = createClient()

      // Test basic connection
      const { data, error } = await supabase.from("users").select("count").limit(1)

      if (error && error.code !== "PGRST116") {
        // PGRST116 is "relation does not exist" which is expected if tables aren't created yet
        throw error
      }

      setConnectionStatus("success")
    } catch (error: any) {
      setConnectionStatus("error")
      setErrorMessage(error.message || "Connection failed")
    }
  }

  const getStatusIcon = () => {
    switch (connectionStatus) {
      case "testing":
        return <Loader2 className="h-5 w-5 animate-spin text-blue-500" />
      case "success":
        return <CheckCircle className="h-5 w-5 text-green-500" />
      case "error":
        return <XCircle className="h-5 w-5 text-red-500" />
      default:
        return null
    }
  }

  const getStatusText = () => {
    switch (connectionStatus) {
      case "testing":
        return "Testing connection..."
      case "success":
        return "Connection successful!"
      case "error":
        return `Connection failed: ${errorMessage}`
      default:
        return "Ready to test"
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          {getStatusIcon()}
          Supabase Connection Test
        </CardTitle>
        <CardDescription>Verify your Supabase configuration and connection</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <h4 className="text-sm font-medium">Environment Variables</h4>
          <div className="flex gap-2">
            <Badge variant={envVars.supabaseUrl ? "default" : "destructive"}>
              SUPABASE_URL: {envVars.supabaseUrl ? "Set" : "Missing"}
            </Badge>
            <Badge variant={envVars.supabaseAnonKey ? "default" : "destructive"}>
              ANON_KEY: {envVars.supabaseAnonKey ? "Set" : "Missing"}
            </Badge>
          </div>
        </div>

        <div className="space-y-2">
          <h4 className="text-sm font-medium">Connection Status</h4>
          <p className="text-sm text-gray-600">{getStatusText()}</p>
        </div>

        <Button
          onClick={testConnection}
          disabled={connectionStatus === "testing" || !envVars.supabaseUrl || !envVars.supabaseAnonKey}
          className="w-full"
        >
          {connectionStatus === "testing" ? "Testing..." : "Test Connection"}
        </Button>
      </CardContent>
    </Card>
  )
}
