import { sql } from "@vercel/postgres";

export default async function handler(req, res) {
    try {
        const { id } = req.query;

        if (!id) {
            return res.status(400).json({ error: "No ID passed" });
        }

        const results = await sql`SELECT * FROM review WHERE id = ${id}`;

        if (results.length === 0) {
            return res.status(404).json({ error: "Review not found" });
        }

        res.status(200).json(results);
    } 
    
    catch (error) {
        res.status(500).json({ error: error.message });
    }
}