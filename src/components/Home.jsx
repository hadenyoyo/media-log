import reviewType from "../assets/film.svg";
import starSVG from "../assets/star.svg";
import { useState, useEffect } from 'react';
import dayjs from 'dayjs';

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

    const logElements = logs.map(log => (
        <div className="log-element" key={log.id}>
            <img src={reviewType} /> {/* add type images here */}
            <h1>{log.name}</h1>
            <img className="star" src={starSVG} />
            <h2>{log.stars}</h2>
            <p>{dayjs(log.time).format('MMMM D, YYYY')}</p>
        </div>
    ))

    return (
        <div className="log-list">
            {logElements}
        </div>
    )
}
