"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useToast } from "@/hooks/use-toast";
import { FormEvent } from "react";
import Loader from "@/components/Shared/Loader/Loader";
import Google from "@/components/Shared/Google/Google";
import { useRouter } from "next/navigation";

interface UserData {
  name: string;
  email: string;
  password: string;
}

interface ErrorResponse {
  message: string;
}

const Page = () => {
  const { toast } = useToast();
  const router = useRouter();

  const mutation = useMutation({
    mutationFn: (userData: UserData) => {
      return axios.post("/signup/api", userData);
    },
  });

  const handleSignup = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.fullname.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const password = form.password.value;
    const user = { name, email, phone, password };
    if (password.length < 6) {
      return toast({
        variant: "destructive",
        title: "Password should be 6 charachter",
      });
    }
    console.log(user);

    mutation.mutate(user, {
      onSuccess: (data) => {
        toast({
          title: data.data.message,
        });
        form.reset();
        router.push("/login");
      },
      onError: (error) => {
        if (axios.isAxiosError(error)) {
          if (
            error.response &&
            error.response.data &&
            (error.status === 403 || error.status === 400)
          ) {
            const errorMessage = (error.response.data as ErrorResponse).message;
            toast({
              variant: "destructive",
              title: errorMessage,
            });
          }
        } else {
          console.log("Error", error);
        }
      },
    });
  };

  return (
    <main>
      <div className="container mx-auto grid place-content-center min-h-[90vh]">
        <div className="border-2 border-primary px-4 py-16 rounded-lg">
          <h2 className="text-4xl text-center font-semibold mb-6">Sign Up</h2>
          <Google title="Sign Up" />
          <form
            onSubmit={handleSignup}
            className="flex flex-col gap-3 md:min-w-96 mt-3"
          >
            <Input
              type="text"
              name="fullname"
              required
              placeholder="Full Name"
            />
            <Input type="email" name="email" required placeholder="Email" />
            <Input type="text" name="phone" required placeholder="Phone" />
            <Input
              type="password"
              name="password"
              required
              placeholder="Password"
            />

            <Button
              type="submit"
              variant={"submit"}
              size={"sumbit"}
              disabled={mutation.isPending}
            >
              {mutation.isPending ? <Loader /> : "Sign Up"}
            </Button>
          </form>
          <span className="text-gray-600">
            Already have an account?{" "}
            <Link href={"/login"} className="text-primary text-sm mt-3">
              Login
            </Link>
          </span>
        </div>
      </div>
    </main>
  );
};

export default Page;
