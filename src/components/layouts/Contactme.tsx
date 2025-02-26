"use client";
import { useForm } from "react-hook-form";
import React, { useEffect, useState } from "react";
import MapComponent from "../ui/MapsComponents";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import axios from "axios";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Button } from "../ui/button";
interface DataProvincies {
  id: string;
  name: string;
}

interface DataRegencies extends DataProvincies {
  province_id: string;
}

export function ContactMe() {
  return (
    <section className="container py-10 grid grid-cols-1 md:grid-cols-2 gap-4">
      <MapComponent />
      <ContactForm />
    </section>
  );
}

export function ContactForm() {
  const [provinces, setProvinces] = useState<DataProvincies[]>([]);
  const [cities, setCities] = useState<DataRegencies[]>([]);
  const [selectedProvince, setSelectedProvince] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    // handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      noHp: "",
      province: "",
      city: "",
    },
  });

  useEffect(() => {
    const fetchProvinces = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(
          "https://www.emsifa.com/api-wilayah-indonesia/api/provinces.json"
        );
        const data = await response.data;
        setProvinces(data);
      } catch (error) {
        console.error("Error fetching provinces:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProvinces();
  }, []);

  useEffect(() => {
    const fetchCities = async () => {
      if (!selectedProvince) {
        setCities([]);
        return;
      }
      try {
        setIsLoading(true);
        const response = await axios.get(
          `https://emsifa.github.io/api-wilayah-indonesia/api/regencies/11.json`
        );
        const data = response.data;
        setCities(data);
      } catch (error) {
        console.error("Error fetching cities:", error);
        setCities([]);
      } finally {
        setIsLoading(false);
      }
    };
    fetchCities();
  }, [selectedProvince]);

  // Handle province change
  const handleProvinceChange = (value: string) => {
    console.log("Selected Province Value:", value); // Debugging
    setSelectedProvince(value);
    setValue("province", value);
  };

  // Handle city change
  const handleCityChange = (value: string) => {
    setValue("city", value);
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-sm">
      <h2 className="text-xl font-semibold mb-4">Hubungi Kami</h2>
      <form className="space-y-5">
        <div className="space-y-2">
          <Label htmlFor="name">Nama</Label>
          <Input
            id="name"
            {...register("name", { required: "Nama harus diisi" })}
            placeholder="Masukkan nama agen"
          />
          {errors.name && (
            <p className="text-red-500 text-sm">{errors.name.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            {...register("email", {
              required: "Email harus diisi",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Format email tidak valid",
              },
            })}
            placeholder="Masukkan email agen"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="noHp">No Handphone</Label>
          <Input
            id="noHp"
            {...register("noHp", {
              required: "Nomor handphone harus diisi",
              pattern: {
                value: /^[0-9]{10,13}$/,
                message: "Nomor handphone tidak valid",
              },
            })}
            placeholder="Masukkan No Handphone"
          />
          {errors.noHp && (
            <p className="text-red-500 text-sm">{errors.noHp.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="province">Provinsi</Label>
          <Select
            onValueChange={handleProvinceChange}
            value={watch("province")}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Pilih Provinsi" />
            </SelectTrigger>
            <SelectContent>
              {isLoading ? (
                <SelectItem value="loading">Loading...</SelectItem>
              ) : (
                provinces.map((province) => (
                  <SelectItem key={province.id} value={province.id}>
                    {province.name}
                  </SelectItem>
                ))
              )}
            </SelectContent>
          </Select>
          {errors.province && (
            <p className="text-red-500 text-sm">{errors.province.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="city">Kota/Kabupaten</Label>
          <Select
            onValueChange={handleCityChange}
            value={watch("city")}
            disabled={!selectedProvince || isLoading}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Pilih Kota/Kabupaten" />
            </SelectTrigger>
            <SelectContent>
              {isLoading ? (
                <SelectItem value="loading">Loading...</SelectItem>
              ) : cities.length > 0 ? (
                cities.map((city) => (
                  <SelectItem key={city.id} value={city.id}>
                    {city.name}
                  </SelectItem>
                ))
              ) : (
                <SelectItem value="no-cities">
                  Pilih provinsi terlebih dahulu
                </SelectItem>
              )}
            </SelectContent>
          </Select>
          {errors.city && (
            <p className="text-red-500 text-sm">{errors.city.message}</p>
          )}
        </div>

        <Button type="submit" className="w-full">
          Kirim
        </Button>
      </form>
    </div>
  );
}
