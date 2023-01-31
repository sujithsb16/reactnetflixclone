import { API_KEY } from "./constants/constants"
 const orginals = `discover/tv?api_key=${API_KEY}&with_networks=213`
 const action = `discover/movie?api_key=${API_KEY}&with_genres=28`
 const comedy = `discover/movie?api_key=${API_KEY}&with_genres=35`
 const documentry = `discover/movie?api_key=${API_KEY}&with_genres=99'`
 export{
     orginals,
     action,
     comedy,
     documentry
 }