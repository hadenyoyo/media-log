import { sql } from "@vercel/postgres";

export default async function handler(req, res) {
    try {
        const results = await sql`SELECT * FROM review`;
        res.status(200).json(results);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}