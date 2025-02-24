import { api } from "../../api/api"
import { API_URLS } from "../../api/api.constants"
import { TranslationsResponse } from "./translations.types"

const translationsService = {
  getTr: async () => {
    const response = await api.get<TranslationsResponse>(API_URLS.tr)
    return response.data
  },
  getEn: async () => {
    const response = await api.get<TranslationsResponse>(API_URLS.en)
    return response.data
  }
}

export default translationsService