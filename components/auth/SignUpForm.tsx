"use client"

import { Button } from "@/components/ui/Button";
import { signIn } from "@/lib/actions/auth";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { PasswordInput } from "../ui/Input";

export const SignUpForm = () => {
  const router = useRouter()
  const [error, setError ] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError('')
    setLoading(true)

    const formData = new FormData(e.currentTarget)

    try {
      await signIn({
        email: formData.get('email') as string, 
        password: formData.get('password') as string
      });
      router.push('/notes')
      router.refresh()
    } catch (error) {
      setError(error instanceof Error ? error.message : 'Something went wrong')
    } finally {
      setLoading(false)
    }
  }

  return (
    <form
    onSubmit={handleSubmit}
  // action={async (formData) => {
  //   "use server";
  //   await signIn("credentials", formData);
  // }}
  className="pt-6 text-left"
>
  <fieldset className="flex flex-col gap-4">
    <div className="flex flex-col gap-[6px]">
      <label htmlFor="email" className="text-preset-4 text-neutral-950">
        Email Address
      </label>
      <input
        id="email"
        type="email"
        name="email"
        placeholder="email@example.com"
        required
      />
    </div>

    <div className="flex flex-col gap-[6px]">
      <label
        htmlFor="password"
        className="text-preset-4 text-neutral-950"
      >
        Password
      </label>
      <PasswordInput id="password" name="password"  />
    </div>

    <Button type="submit" className="w-full">
      Sign up
    </Button>
  </fieldset>
</form>
  )
}