import { useQuery } from "@tanstack/react-query";
import axios from "axios";
export interface RegenciesData {
  id: string;
  province_id: string;
  name: string;
}

export function useRegencies({ id }: { id: string }) {
  const { data, isLoading, error } = useQuery({
    queryKey: ["regencies", id],
    queryFn: async () => {
      if (!id) return [];

      try {
        const response = await axios.get(
          `https://emsifa.github.io/api-wilayah-indonesia/api/regencies/${id}.json`
        );

        // Make sure we're getting an array of regency objects
        if (Array.isArray(response.data)) {
          // Normalize the data to ensure consistent format
          const normalizedData = response.data.map(
            (regency: RegenciesData) => ({
              id: String(regency.id),
              name: String(regency.name),
              province_id: String(regency.province_id || id),
            })
          );

          return normalizedData;
        } else {
          return [];
        }
      } catch (err) {
        throw err;
      }
    },
    enabled: !!id,
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
    retry: 1,
  });

  return {
    data,
    isLoading,
    error,
  };
}
