"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useToast } from "@/hooks/use-toast";
import { FormEvent } from "react";
import Loader from "@/components/Shared/Loader/Loader";
import { useRouter } from "next/navigation";
import { InputRegular } from "@/components/ui/InputRegular";
import { Label } from "@/components/ui/label";

type AirlineData = {
  airline_name: string;
  airline_licence_no: string;
  airline_email: string;
  airline_password: string;
  airline_logo: string;
};

interface ErrorResponse {
  message: string;
}

const Page = () => {
  const { toast } = useToast();
  const router = useRouter();

  const mutation = useMutation({
    mutationFn: (airlineData: AirlineData) => {
      return axios.post("/signup-airline/api", airlineData);
    },
  });

  const handleSignup = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const airline_name = form.airline_name.value;
    const airline_licence_no = form.airline_licence_no.value;
    const airline_email = form.airline_email.value;
    const password = form.password.value;
    const airline_logo = form.airline_logo.files?.[0] || null;

    if (airline_logo.size > 1000000) {
      return toast({
        variant: "destructive",
        title: "Image size cannot be more than 1 MB",
      });
    }

    // Saving the image and getting the url
    const formData = new FormData();
    formData.append("image", airline_logo);
    const imgRes = await axios.post(
      "https://api.imgbb.com/1/upload",
      formData,
      {
        params: {
          key: "ff3a35f7d258a586b88aa9d075fd1c33",
        },
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    if (imgRes.status !== 200) {
      return toast({
        variant: "destructive",
        title: "Failed to upload image",
      });
    }
    const imageUrl = imgRes.data.data.display_url;
    // const imageUrl = "https://i.ibb.co/1XKmY2x/us-bangla-logo.png";

    if (password.length < 6) {
      return toast({
        variant: "destructive",
        title: "Password should be 6 charachter",
      });
    }
    const airline = {
      airline_name,
      airline_licence_no,
      airline_email,
      airline_password: password,
      airline_logo: imageUrl,
    };
    console.log(airline);

    mutation.mutate(airline, {
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
          <h2 className="text-4xl text-center font-semibold mb-6">
            Account Application
          </h2>
          <form
            onSubmit={handleSignup}
            className="flex flex-col gap-3 md:min-w-96 mt-3"
          >
            <Label htmlFor="airline_name"> Airline Name </Label>
            <InputRegular
              type="text"
              name="airline_name"
              id="airline_name"
              required
              placeholder="Airline Name"
            />
            <Label htmlFor="airline_licence_no"> Airline Licence No. </Label>
            <InputRegular
              type="text"
              name="airline_licence_no"
              id="airline_licence_no"
              required
              placeholder="ALN4587945"
            />
            <Label htmlFor="airline_email"> Airline Email </Label>
            <InputRegular
              type="email"
              name="airline_email"
              id="airline_email"
              required
              placeholder="Email"
            />
            <Label htmlFor="password"> Password </Label>
            <InputRegular
              type="password"
              name="password"
              id="password"
              required
              placeholder="Password"
            />
            <Label htmlFor="password"> Airline Logo (1MB Max) </Label>
            <InputRegular
              id="picture"
              type="file"
              name="airline_logo"
              required
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
            Already have an airline account?{" "}
            <Link href={"/login"} className="text-primary text-sm mt-3">
              Login
            </Link>
          </span>
          <br />
        </div>
      </div>
    </main>
  );
};

export default Page;
