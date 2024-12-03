import React from 'react'
import { useEffect , useState } from 'react'
import { Loader} from '../../loader/Loader'

export const Loaderlogic = () => {
    const [text , setText] = useState('')
    const [showImg ,  setShowImg] = useState(true)

    setTimeout( ()=> {
        setTimeout(()=>{
            setShowImg(false)
            setText("hi")
        },3000)
    },[])
 
    return (
    <div>
        {
            showImg ? ( <Loader/> ) : ({text})
        }
    </div>
  )
}
