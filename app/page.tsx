import { LoginForm } from "@/components/login-form"
import { AIIllustration } from "@/components/ai-illustration"

export default function LoginPage() {
  return (
    <div className="min-h-screen flex">
      {/* Left side - Login Form */}
      <div className="flex-1 flex items-center justify-center p-8 bg-background">
        <div className="w-full max-w-md">
          <LoginForm />
        </div>
      </div>

      {/* Right side - 3D AI Illustration */}
      <div className="flex-1 flex items-center justify-center p-8 bg-gradient-to-br from-blue-50 to-cyan-50">
        <AIIllustration />
      </div>
    </div>
  )
}
