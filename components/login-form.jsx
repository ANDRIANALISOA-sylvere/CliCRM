"use client"
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from 'next/navigation'

export function LoginForm({ className, ...props }) {
  const router = useRouter();

  const handleSubmit = (event) => {
    event.preventDefault();
    router.push("clients");
  }
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-xl">Ravis de vous revoir !</CardTitle>
          <CardDescription>
            Veuillez vous connecter à votre compte pour continuer.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid gap-6">
              <div className="grid gap-6">
                <div className="grid gap-3">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="johndoe@example.com"
                    required
                  />
                </div>
                <div className="grid gap-3">
                  <div className="flex items-center">
                    <Label htmlFor="password">Mot de passe</Label>
                    <a
                      href="#"
                      className="ml-auto text-sm underline-offset-4 hover:underline"
                    >
                      Mot de passe oublié?
                    </a>
                  </div>
                  <Input id="password" type="password" required />
                </div>
                  <Button type="submit" onClick={handleSubmit} className="w-full cursor-pointer">
                    Connexion
                  </Button>
              </div>
              <div className="text-center text-sm">
                Vous n'avez pas de compte ?{" "}
                <a href="#" className="underline underline-offset-4">
                  S'inscrire
                </a>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
      <div className="text-muted-foreground *:[a]:hover:text-primary text-center text-xs text-balance *:[a]:underline *:[a]:underline-offset-4">
        En continuant, vous acceptez nos{" "}
        <a href="#">Conditions d'utilisation</a> et notre{" "}
        <a href="#">Politique de confidentialité</a>.
      </div>
    </div>
  );
}
