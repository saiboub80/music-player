// These components will be making separate API calls from the app
// component to serve specific data about our artist
import { useParams } from 'react-router-dom'
import {useState} from 'react'

function ArtistView() {
    const { id } = useParams()
    const [ artistData, setArtistData ] = useState([])

    return (
        <div>
            <p>Artist Data Goes Here!{id}</p>
        </div>
    )
}


export default ArtistView
