import { ContactData } from "@/data/validation";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "sonner";

export function useFormPostEmail() {
  return useMutation({
    mutationKey: ["email-form"],
    mutationFn: async (data: ContactData) => {
      const req = await axios.post("/api/email", data);
      return req.data;
    },
    onError: () => {
      toast.error("Failed to sen email");
    },
    onSuccess: () => {
      toast.success("Send email successfully");
    },
  });
}
