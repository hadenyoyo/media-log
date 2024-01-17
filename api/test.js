import { sql } from "@vercel/postgres";

export default async function handler(req, res) {
    try {
        //const results = await sql`INSERT INTO review (name, time, type, stars, category, content) VALUES ('Sample 2', now(), 'Book', 4.5, 'Other', 'Lorem ipsum gjakjfhdahfkdjashf adjksfhakhfd adsjfhasdhf asjkdfhaksdjfhasd fakjsdfh')`;
        res.status(200).json(results);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}