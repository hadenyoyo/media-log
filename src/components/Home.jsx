import reviewType from "../assets/film.svg";
import starSVG from "../assets/star.svg";

import Nav from "./Nav"

import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
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
            <Link to={`/log/${log.id}`}>
                <div className="log-element">
                    <img src={reviewType} alt="Review Type"/> {/* add type images here */}
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
