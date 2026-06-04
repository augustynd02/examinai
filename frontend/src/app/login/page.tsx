import LoginForm from "@/components/auth/LoginForm"

export default function LoginPage() {
    return (
        <div className="flex flex-col md:flex-row h-screen w-full">
            <div className="flex-3">
                <LoginForm />
            </div>
            <div className="h-screen w-full flex-7 relative overflow-hidden">
                <video 
                autoPlay 
                loop 
                muted 
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
                >
                <source src="/login-animation.mp4" type="video/mp4" />
            </video>
            </div>
        </div>
    )
}