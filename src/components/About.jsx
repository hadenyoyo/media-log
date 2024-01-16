import Nav from "./Nav"
import githubsvg from "../assets/github-mark.svg";

export default function About () {
    return (
        <div>
            <Nav />
            <h1>About</h1>
            <h2>Functional Purpose</h2>
            <p>
                After starting my 2024 media log in my ripped up and repurposed bullet journal I realized
                I would have trouble organizing it on the fly. I could sense my future frustrations with 
                regorganizing and inconsistent styling. After I sat down to continue my online React course
                I though, why not just make it a website? Here I can organize, and re-organize my thoughts
                easily now and in the future. Also with the added bonus of being able to easily link a page 
                to a friend or family member to share my thoughts.
            </p>
            <h2>Academic Purpose</h2>
            <p>
                This website also serves to show my technical ability with web development, databases and 
                working with a full stack project independently. This website uses React, React-Router, 
                and Postgres, all hosted on Vercel.
            </p>
            <img src={githubsvg} alt="GitHub Logo" />
            <a href="https://github.com/hadenyoyo/media-log">View the project on GitHub</a>
        </div>
    ) 
}