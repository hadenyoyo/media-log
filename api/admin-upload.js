import { sql } from "@vercel/postgres";

export default async function (req, res) {
    if (req.method === 'POST') {
        // Process POST request
        const { title, type, stars, content } = req.body;
        console.log(title, type, stars, content);

        try {
            const results = await sql`INSERT INTO review (name, time, type, stars, category, content) VALUES (${title}, now(), ${type}, ${stars}, 'blank', ${content})`;
            res.status(200).json(results);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    } else {
        // Handle any non-POST requests
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
