import reviewType from "../assets/film.svg";
import Nav from "./Nav";

import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import dayjs from 'dayjs';


export default function ReviewTemplate() {
    const [data, setData] = useState(null);
    const params = useParams();

    useEffect(() => {
        fetch(`/api/retrieve-review?id=${params.id}`)
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error(error))
    }, [params.id]);

    console.log('DEETA', data);

    if (!data) {
        return <p>Loading...</p>;
    }

    const content = data.rows[0];
    const formattedTime = dayjs(content.time).format('dddd, MMMM D, YYYY');

    return (
        <div>
            <Nav />
            {data ? (
                <div className = "review">
                    <h1>{content.name}</h1>
                    <div className="review-header">
                        <img src={reviewType} alt="Review Type" />
                        <h2>{content.stars} Stars</h2>
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
