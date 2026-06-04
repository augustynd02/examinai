import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardAction, CardFooter} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { FieldGroup, FieldLabel, Field } from "@/components/ui/field"

export default function LoginPage() {
    return (
        <div className="flex flex-col md:flex-row h-screen w-full">
            <Card className="flex-3 h-full flex flex-col justify-center shadow-xl">
                <CardHeader className="flex flex-col items-center">
                    <CardTitle className="text-2xl">Welcome back</CardTitle>
                    <CardDescription className="text-center">Enter your credentials below to login to your account</CardDescription>
                </CardHeader>
                <CardContent>
                    <form>
                        <FieldGroup>
                            <Field>
                                <FieldLabel>E-mail</FieldLabel>
                                <Input id="email" type="email" placeholder="example@mail.com" required />
                            </Field>
                            <Field>
                                <FieldLabel>Password</FieldLabel>
                                <Input id="password" type="password" placeholder="********" required />
                            </Field>
                            <Field>
                                <Button type="submit" className="">Login</Button>
                            </Field>
                        </FieldGroup>
                    </form>
                </CardContent>
            </Card>
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