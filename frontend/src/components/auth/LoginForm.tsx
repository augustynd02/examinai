import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function LoginForm() {
    return (
        <Card className="w-full h-full flex flex-col justify-center rounded-none shadow-xl">
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
    )
}