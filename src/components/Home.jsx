import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import dayjs from 'dayjs';

import Nav from "./Nav"

import filmIcon from "../assets/film.svg";
import bookIcon from "../assets/book.svg";
import gameIcon from "../assets/gamepad.svg";
import boardIcon from "../assets/board.svg";
import musicIcon from "../assets/music.svg";
import defaultIcon from "../assets/default.svg";
import starSVG from "../assets/star.svg";

export default function Home() {
    const [logs, setLogs] = useState([]);

    useEffect(() => {
        fetch('/api/retrieve-list')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setLogs(data.rows);
            })
            .catch(error => console.error(error));
    }, []);

    const typeIcons = {
        Book: bookIcon,
        Film: filmIcon,
        Game: gameIcon,
        Board: boardIcon,
        Music: musicIcon
    };

    const logElements = logs.map(log => (
        <div key={log.id}>
            <Link to={`/log/${log.id}`}>
                <div className="log-element">
                    <img src={typeIcons[log.type] || defaultIcon} alt="Review Type"/> {/* add type images here */}
                    <h1>{log.name}</h1>
                    <img className="star" alt="Stars " src={starSVG} />
                    <h2>{log.stars}</h2>
                    <p>{dayjs(log.time).format('MMMM D, YYYY')}</p>
                </div>
            </Link>
        </div>
    ))

    return (
        <div>
            <Nav />
            <div className="log-list">
                {logElements}
            </div>
        </div>
    )
}
