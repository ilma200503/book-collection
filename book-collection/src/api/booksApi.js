import api from './axiosConfig'

// Sök efter böcker med Open Library API
export const searchBooks = async (query) => {
  try {
    const response = await api.get(`/search.json?q=${query}&limit=20`)
    return response.data.docs
  } catch (error) {
    throw new Error('Kunde inte hämta böcker: ' + error.message)
  }
}

export const getBookById = async (id) => {
  try {
    const response = await api.get(`/works/${id}.json`)
    return response.data
  } catch (error) {
    throw new Error('Kunde inte hämta boken: ' + error.message)
  }
}