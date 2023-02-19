import {useState} from 'react';
import './GalleryItem.css'

function GalleryItem({galleryItem, handleLike}) {
    console.log('in gallery item')

    const [display, setDisplay] = useState([]);
 
    const handleClick = () => {
        setDisplay(!display)
        console.log('clicked'); 
      };

    const likePhoto = () => {
        handleLike(galleryItem.id);
    }


    return(
        <div className='item'>
            {display ? <img className="image" src={galleryItem.path} onClick={handleClick} /> : 
            <p onClick={handleClick}> {galleryItem.description} </p>}
            <button onClick={likePhoto}> Love it! ❤️‍🔥 </button>
             {galleryItem.likes ? <p>{galleryItem.likes} people love it </p> : <p>No one loves this 😿 </p>} 
        </div>
    )
    
}

export default GalleryItem;