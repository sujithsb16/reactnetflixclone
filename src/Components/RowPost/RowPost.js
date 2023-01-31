
import React,{useEffect,useState} from 'react'
import './RowPost.css'
import axios from '../../axios'
import { imageUrl,API_KEY } from '../../constants/constants'
import Youtube from 'react-youtube'


export default function RowPost(props) {
    const [movies,setMovies] = useState([])
    const [urlId,setUrlId] = useState('')
    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 0,
          },
       
      };
    useEffect(()=>{
        axios.get(props.url).then((response)=>{
           // console.log(response.data);
            setMovies(response.data.results)
        }).catch(err=>{
             alert('Network error')
        })
    },[])

    const handelMovie = (id)=>{
        axios.get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
            if(response.data.results.length!==0){
                setUrlId(response.data.results[0])
            }else{
                alert('array empty')
            }
            console.log(response.data);
        }).catch(err=>{
            alert('Network error')
       })
        console.log(id);
    }

    return (

    <div className='row'>
      <h2>{props.title}</h2>
      <div className="posters">
        {
            movies.map((obj)=>
                <img onClick={()=>handelMovie(obj.id)} className={props.isSmall ? 'smallPoster': 'poster'} src={`${imageUrl+obj.backdrop_path}`} alt="" />
            )}
      </div>


            

     { urlId && <  Youtube videoId={urlId.key} opts={opts} /> }
    </div>
  )
}

