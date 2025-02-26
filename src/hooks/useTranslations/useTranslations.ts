import { useQuery } from "@tanstack/react-query";
import translationsService from "../../services/translations/translations";

export const useGetTr = () => {
  return useQuery({
    queryKey: ["tr"],
    queryFn: translationsService.getTr,
    staleTime: 3000,
  })
}

export const useGetEn = () => {
  return useQuery({
    queryKey: ["en"],
    queryFn: translationsService.getEn,
    staleTime: 3000,
  })
}