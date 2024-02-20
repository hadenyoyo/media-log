import Nav from "./Nav"

export default function Auth() {
    return (
        <div>
            <Nav />
            <form className="auth">
                <div className = "input-group">
                    <label htmlFor="name">Username:</label>
                    <input type="text" id="name" name="password" />
                </div>

                <div className = "input-group">
                    <label htmlFor="pass">Password:</label>
                    <input type="text" id="pass" name="password" />
                </div>

                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}