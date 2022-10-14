import React,{useState,useEffect} from 'react'
import axios from 'axios'

const Pata=(props)=>{
    
    const [loc,setLoc] = useState('...loading')
    
    useEffect(()=>{
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(success,noLoc)
        }

        function noLoc(){
            alert('location access denied, please allow it and reload the page')
            setLoc('PLEASE ALLOW LOCATION ACCESS')
        }
        

        function success(position){
            axios.get(`https://api.opencagedata.com/geocode/v1/json?q=${position.coords.latitude}+${position.coords.longitude}&key=87f70e732bbd44d984f351fc57d3e4cc`)
                .then((response)=>{
                    const result=response.data.results[0].formatted
                    setLoc(result)
                })
                .catch((err)=>{
                    alert(err.message)
                    setLoc('Couldn\'t access location')
                })
        }
    },[])

    return(
        <div>
            <h3><label>Address: </label><b>{loc}</b></h3>
        </div>
    )
}

export default Pata