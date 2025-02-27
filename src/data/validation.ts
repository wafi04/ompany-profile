import { z } from "zod";

export const ContactFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Format email tidak valid"),
  subject: z.string().min(1, "Subjek harus diisi"),
  noHp: z
    .string()
    .regex(/^[0-9]{10,13}$/, "Nomor handphone tidak valid")
    .or(
      z
        .number()
        .transform((val) => val.toString())
        .pipe(z.string().regex(/^[0-9]{10,13}$/, "Nomor handphone tidak valid"))
    ),
  pesan: z.string(),
});

export type ContactData = z.infer<typeof ContactFormSchema>;
