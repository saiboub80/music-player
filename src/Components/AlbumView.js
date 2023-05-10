// These components will be making separate API calls from the app
// component to serve specific data about a given album
import { useParams } from 'react-router-dom'
import {useState} from "react"
function AlbumView() {
    const { id } = useParams()
    const [ albumData, setAlbumData ] = useState([])

    return (
        <div>
            <p>Album Data Goes Here!{id}</p>
        </div>
    )
}


export default AlbumView
