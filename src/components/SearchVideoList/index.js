import { useState } from "react";
import VideoList from "../VideoList";
import styles from "./SearcVideoList.module.css";


// Filtrando vídeos por categoria ou titulo 
function filterVideo(videos, searchText) {
    return videos.filter((video) => video.category.includes(searchText) || video.title.includes(searchText))
}

function SearchVideoList({ videos }) {

    const [ searchText, setSearchText ] = useState();
    const foundVideos = filterVideo(videos, searchText);

    return (
        <section className={styles.container}>
            <input 
                type="search"
                placeholder="Pesquisar..."
                value={searchText}
                onChange={event => setSearchText(event.target.value)}
            />

            <VideoList 
                videos={ foundVideos } 
                emptyHeading={`Sem videos sobre "${searchText}"`}
            />

        </section>
    )
}

export default SearchVideoList;