import reviewType from "../assets/film.svg";
import { useState, useEffect } from 'react';


export default function ReviewTemplate() {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch('/api/retrieve-review')
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error(error));
    }, []);

    if (!data) {
        return <p>Loading...</p>;
    }

    const content = data.rows[0];
    console.log(content);

    return (
        <div className = "review">
            {data ? (
                <div>
                    <h1>{content.name}</h1>
                    <img className="material-symbols-outlined" src={reviewType} alt="Review Type" />
                    <h2>{content.stars} Stars</h2>
                    <h3>{content.time}</h3>
                    <p>{content.content}</p>
                </div>
            ) : (
                <p>Error: Data Null</p>
            )}
        </div>
    );
}
