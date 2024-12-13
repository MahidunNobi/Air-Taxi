"use client";
import { Button } from "@/components/ui/button";
import { FormEvent, useState } from "react";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import { toast } from "@/hooks/use-toast";
import Loader from "@/components/Shared/Loader/Loader";
import { InputRegular } from "@/components/ui/InputRegular";
import FlightsScheduleType from "@/components/dashboard/flights/FlightsScheduleType";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import AddFlightContextProvider from "@/Context/AddFlightContext";

type FormType = {
  service_name: string;
  service_price: string;
  service_down_payment: string;
  service_area: string;
  img_url: string;
  service_description: string;
};

const Page = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const { mutate: addService, isPending } = useMutation({
    mutationFn: (formData: FormType) => {
      return axios.post("/api/service", formData);
    },
  });

  const handleAdd = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const service_name = form.service_name.value;
    const service_price = form.service_price.value;
    const service_down_payment = form.service_down_payment.value;
    const service_area = form.service_area.value;
    const service_description = form.service_description.value;
    const service_image = form.service_image.files?.[0] || null;

    setLoading(true);
    // Saving the image and getting the url
    const formData = new FormData();
    formData.append("image", service_image);
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
    setLoading(false);

    // Saving the service
    const service = {
      service_name,
      service_price,
      service_down_payment,
      service_area,
      img_url: imageUrl,
      service_description,
    };
    addService(service, {
      onSuccess: (data) => {
        toast({
          variant: "default",
          title: data.data.message,
        });
        form.reset();
      },
      onError: (err) => {
        console.log(err);
        toast({
          variant: "destructive",
          title: "There was an error please check the console.",
        });
      },
    });
  };

  return (
    <AddFlightContextProvider>
      <main>
        <div className="container mx-auto grid place-content-center min-h-[90vh]">
          <div className="border shadow-lg px-4 py-16 rounded-lg w-[530px]">
            <h2 className="text-4xl text-center font-semibold mb-6">
              Add New Flight
            </h2>
            <form
              onSubmit={handleAdd}
              className="flex flex-col gap-3 md:min-w-96"
            >
              {/* -------Flight Number-------- */}
              <div>
                <Label htmlFor="flight_number"> Flight Number </Label>
                <InputRegular
                  id="flight_number"
                  type="text"
                  name="flight_number"
                  required
                  placeholder="Al-35245"
                />
              </div>
              {/* -------Airline Name-------- */}
              <div>
                <Label htmlFor="airline_name"> Airline Name </Label>
                <InputRegular
                  type="text"
                  name="airline_name"
                  id="airline_name"
                  required
                  placeholder="Airline Name"
                />
              </div>
              {/* -------Departure & Arival Place--------- */}
              <div className="flex gap-3">
                <div className="flex-1">
                  <Label> Departure Airport </Label>
                  <Select>
                    <SelectTrigger className="w-full h-auto">
                      <SelectValue placeholder="Sort By" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="light">Light</SelectItem>
                      <SelectItem value="dark">Dark</SelectItem>
                      <SelectItem value="system">System</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex-1">
                  <Label> Airval Airport </Label>
                  <Select>
                    <SelectTrigger className="w-full h-auto">
                      <SelectValue placeholder="Sort By" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="light">Light</SelectItem>
                      <SelectItem value="dark">Dark</SelectItem>
                      <SelectItem value="system">System</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* -------Flight Schedule Type-------- */}
              <FlightsScheduleType />

              <div className="grid w-full max-w-sm items-center gap-1.5">
                {/* <Label htmlFor="picture">Picture</Label> */}
                <InputRegular
                  id="picture"
                  type="file"
                  name="service_image"
                  required
                />
              </div>
              <Button type="submit" disabled={isPending || loading}>
                {isPending || loading ? <Loader /> : "ADD"}
              </Button>
            </form>
          </div>
        </div>
      </main>
    </AddFlightContextProvider>
  );
};

export default Page;
