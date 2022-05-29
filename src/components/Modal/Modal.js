import { useContext, useState, useEffect } from "react";
import "./Modal.scss";
import AppContext from '../../context/AppContext';

const Modal = () => {
    const { itemDetail, setModal } = useContext(AppContext);
    const [episodes, setEpisodes] = useState([]);
    const [characterEpisodes, setCharacterEpisodes] = useState([]);
    const [episode, setEpisode] = useState([]);

    const getCharactersEpisodes = (itemDetail) => {
        itemDetail[0].episode.map(item => {
            let str = item;
            let matches = parseInt(str.match(/\d+/g));
            setCharacterEpisodes(episodes => [...episodes, matches]);
        });
    } 

    const getEpisodes = (episodes) => {
        let variable = [];
        episodes.map(item => variable.push(item.id));
        setEpisode(variable);
    }

    const handleEpisodes = (episodes, episode, characterEpisodes) => {
        getCharactersEpisodes(itemDetail);
        getEpisodes(episodes);
        console.log(episode);
        console.log(characterEpisodes);
        let repetidos = [];
        for (let i = 0; i < episode.length; i++){
          for(let j = 0; j < characterEpisodes.length; j++){
            if(episode[i] === characterEpisodes[j]){
              repetidos.push(episode[i]);
            }
          }
        }
        console.log(repetidos);
    }

    let api= "https://rickandmortyapi.com/api/episode";
    
    useEffect(()=> {
        fetch(api)
        .then(res => res.json())
        .then(data => {
            setEpisodes(data.results)
        })
    }, []);

    return(
        <div className="modal">
            <p className="modal-x" onClick={() => setModal(false)}>X</p>
            <h1 onClick={() => handleEpisodes(episodes, episode, characterEpisodes)}>{itemDetail[0].name}</h1>
        </div>
    )
}

export default Modal;