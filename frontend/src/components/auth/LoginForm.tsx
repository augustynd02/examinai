import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useState} from "react";
import { useMutation } from "@tanstack/react-query";

type credentials = {
    email: string;
    password: string;
}

export default function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const loginMutation = useMutation({
        mutationFn: async (credentials: credentials) => {
            const response = await fetch('/api/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(credentials),
            });
            if (!response.ok) throw new Error('Login failed');
            return response.json();
        },
        onSuccess: (data) => {
            console.log("Success:", data);
            // Handle redirect or token storage here
        },
        onError: (err) => {
            console.error("Error:", err);
        }
    });

    const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) {
        e.preventDefault();
        loginMutation.mutate({email, password});
    }

    return (
        <Card className="w-full h-full flex flex-col justify-center rounded-none shadow-xl">
                <CardHeader className="flex flex-col items-center">
                    <CardTitle className="text-2xl">Welcome back</CardTitle>
                    <CardDescription className="text-center">Enter your credentials below to login to your account</CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit}>
                        <FieldGroup>
                            <Field>
                                <FieldLabel>E-mail</FieldLabel>
                                <Input id="email" type="email" placeholder="example@mail.com" required  value={email} onChange={(e) => setEmail(e.target.value)}/>
                            </Field>
                            <Field>
                                <FieldLabel>Password</FieldLabel>
                                <Input id="password" type="password" placeholder="********" required value={password} onChange={(e) => setPassword(e.target.value)}/>
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