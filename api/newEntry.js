import { sql } from "@vercel/postgres";

export default async function handler(req, res) {
    try {
        const results = await sql`INSERT INTO review (name, time, type, stars, category, content) VALUES ('The Truman Show (Rewatch)', now(), 'Film', 3.0, 'undef', 'The Truman show is a very interesting concept for a move. I end up forgetting what actually happens after every watch, but maybe for good reason. Although the concept is very unique, I can''t help but feel that the execution is lacking. The movie tends to drag on especially towards the end. However, I definitely say it''s worth watching at least once.')`;
        res.status(200).json(results);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}