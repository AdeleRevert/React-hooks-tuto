import React, {useState, useEffect} from 'react';
import NewSongForm from "./NewSongForm";

function SongList(props) {
    const [songs, setSongs] = useState([{title: 'song 1', id: 1}, {title: 'song 2', id: 2}, {title: 'song 3', id: 3}]);
    const [age, setAge] = useState(20);
    const addSong = title => {
        setSongs([...songs, {title, id: Math.random()}])
    };
    useEffect(() => {
        console.log('unicorn', songs)
    }, [songs]);

    useEffect(() => {
        console.log('unicorn 2', age)
    }, [age]);

    return (
        <div className="song-list">
            <ul>
                {songs.map(oneSong => {
                    return <li key={oneSong.id}>{oneSong.title}</li>
                })}
            </ul>
            <NewSongForm addSong={addSong} />
            <button onClick={() => setAge(age + 1)}>Add 1 to age: {age}</button>
        </div>
    );
}

export default SongList;