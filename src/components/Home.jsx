import reviewType from "../assets/film.svg";
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
        <div key={log.id}>
            <img src={reviewType} /> {/* add type images here */}
            <h1>{log.name}</h1>
            <p>{log.stars}</p>
            <p>{dayjs(log.time).format('dddd, MMMM D, YYYY')}</p>
        </div>
    ))

    return (
        <div className="log-list">
            {logElements}
        </div>
    )
}
