import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import dayjs from 'dayjs';

import Nav from "./Nav";

import filmIcon from "../assets/film.svg";
import bookIcon from "../assets/book.svg";
import gameIcon from "../assets/gamepad.svg";
import boardIcon from "../assets/board.svg";
import musicIcon from "../assets/music.svg";
import defaultIcon from "../assets/default.svg";
import starSVG from "../assets/star.svg";


export default function ReviewTemplate() {
    const [data, setData] = useState(null);
    const params = useParams();

    useEffect(() => {
        fetch(`/api/retrieve-review?id=${params.id}`)
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error(error))
    }, [params.id]);

    if (!data) {
        return <p>Loading...</p>;
    }

    const content = data.rows[0];
    const formattedTime = dayjs(content.time).format('dddd, MMMM D, YYYY');

    const typeIcons = {
        Book: bookIcon,
        Film: filmIcon,
        Game: gameIcon,
        Board: boardIcon,
        Music: musicIcon
    };

    return (
        <div>
            <Nav />
            {data ? (
                <div className = "review">
                    <h1>{content.name}</h1>
                    <div className="review-header">
                        <img src={typeIcons[content.type] || defaultIcon} alt="Review Type" />
                        <img className="star" src={starSVG} alt="Stars"/>
                        <h2>{content.stars}</h2>
                    </div>
                    <h3>{formattedTime}</h3>
                    <p>{content.content}</p>
                </div>
            ) : (
                <p>Error: Data Null</p>
            )}
        </div>
    );
}
