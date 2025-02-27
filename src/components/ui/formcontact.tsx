"use client";
import { useForm } from "react-hook-form";
import { Button } from "./button";
import { Input } from "./input";
import { Label } from "./label";
import { Send } from "lucide-react";

export function FormContact() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      noHp: "",
      pesan: "",
      subject: "",
    },
  });

  // Handle form submission
  const onSubmit = async (data: {
    name: string;
    email: string;
    noHp: string;
    pesan: string;
    subject: string;
  }) => {
    console.log("Form submitted:", data);
    await new Promise((resolve) => setTimeout(resolve, 1000));
  };

  return (
    <div className="h-full flex flex-col">
      <div className="p-6 pb-3">
        <h3 className="text-2xl font-semibold mb-2">Hubungi Kami</h3>
        <p className="text-gray-600">
          Isi formulir di bawah ini untuk mengirim pesan ke tim kami
        </p>
      </div>

      <form
        className="p-6 pt-3 space-y-4 flex-grow flex flex-col"
        onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Name Field */}
          <div className="space-y-2">
            <Label htmlFor="name" className="text-sm font-medium">
              Nama
            </Label>
            <Input
              id="name"
              {...register("name", { required: "Nama harus diisi" })}
              placeholder="Masukkan nama anda"
              className="w-full"
            />
            {errors.name && (
              <p className="text-red-500 text-xs">{errors.name.message}</p>
            )}
          </div>

          {/* Email Field */}
          <div className="space-y-2">
            <Label htmlFor="email" className="text-sm font-medium">
              Email
            </Label>
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
              placeholder="email@example.com"
              className="w-full"
            />
            {errors.email && (
              <p className="text-red-500 text-xs">{errors.email.message}</p>
            )}
          </div>
        </div>

        {/* Subject Field */}
        <div className="space-y-2">
          <Label htmlFor="subject" className="text-sm font-medium">
            Subjek
          </Label>
          <Input
            id="subject"
            {...register("subject", { required: "Subjek harus diisi" })}
            placeholder="Pertanyaan tentang layanan"
            className="w-full"
          />
          {errors.subject && (
            <p className="text-red-500 text-xs">{errors.subject.message}</p>
          )}
        </div>

        {/* Phone Number Field */}
        <div className="space-y-2">
          <Label htmlFor="noHp" className="text-sm font-medium">
            No Handphone
          </Label>
          <Input
            id="noHp"
            {...register("noHp", {
              required: "Nomor handphone harus diisi",
              pattern: {
                value: /^[0-9]{10,13}$/,
                message: "Nomor handphone tidak valid",
              },
            })}
            placeholder="08xxxxxxxxxx"
            className="w-full"
          />
          {errors.noHp && (
            <p className="text-red-500 text-xs">{errors.noHp.message}</p>
          )}
        </div>

        {/* Address Field */}
        <div className="space-y-2 flex-grow">
          <Label htmlFor="alamat" className="text-sm font-medium">
            Pesan
          </Label>
          <textarea
            id="alamat"
            rows={4}
            className="w-full bg-white p-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-black min-h-[100px]"
            {...register("pesan", { required: "Pesan harus diisi" })}
            placeholder="Tulis pesan anda disini..."></textarea>
          {errors.pesan && (
            <p className="text-red-500 text-xs">{errors.pesan.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          className="w-full flex items-center justify-center gap-2"
          disabled={isSubmitting}>
          {isSubmitting ? "Mengirim..." : "Kirim Pesan"}
          {!isSubmitting && <Send className="h-4 w-4" />}
        </Button>
      </form>
    </div>
  );
}
