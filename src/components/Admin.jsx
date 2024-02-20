import Nav from "./Nav"

export default function Admin() {
    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);

        const formDataObject = Object.fromEntries(formData.entries());

        try {
            const response = await fetch('/api/admin-upload', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formDataObject),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error('Error:', error);
        }
    } 

    return (
        <div>
            <Nav />
            <h1>Admin Panel</h1>
            <form className="admin-form" onSubmit={handleSubmit}>
                <div className="admin-upper">
                    <input type="text" name="title" placeholder="Title" required />
                    <select name="type">
                        <option value="Film">Film</option>
                        <option value="Book">Book</option>
                        <option value="Game">Game</option>
                        <option value="Board">Board</option>
                        <option value="Music">Music</option>
                    </select>
                    <input type="number" step="0.1" name="stars" placeholder="Stars" required />
                </div>

                <textarea className="admin-content" name="content" rows="20" cols="100" placeholder="Content here..."></textarea>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}