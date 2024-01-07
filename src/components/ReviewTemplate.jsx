import reviewType from "../assets/film.svg"

export default function ReviewTemplate() {
    return (
        <div className = "review">
            <h1>Title</h1>
            <img className="material-symbols-outlined" src={reviewType} alt="Review Type" />
            <h2>5 Stars</h2>
            <p> Review paragraph... 
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ipsum lectus, sollicitudin eu est in, 
            vulputate aliquet augue. Vestibulum diam odio, viverra eget volutpat ac, porttitor non dolor. 
            Sed posuere tellus a risus facilisis tincidunt. Fusce commodo, arcu at aliquam faucibus, 
            enim urna mollis nibh, eu pulvinar nunc ipsum eu tellus. Morbi eu porta nisi, at gravida neque. 
            Curabitur commodo lobortis quam ultrices iaculis. Donec fermentum, urna vitae interdum fermentum, 
            dui lorem luctus quam, id suscipit lorem sem in velit. Morbi venenatis viverra consectetur.

            Duis ut odio sed purus semper rutrum. Praesent varius consectetur metus pretium consectetur. 
            Fusce ornare arcu eu placerat pellentesque. Vestibulum a arcu sit amet ante feugiat maximus quis 
            nec risus. Sed quis ante non erat iaculis interdum. Nullam non consectetur massa. Quisque vitae ex 
            orci. Proin posuere, ipsum id condimentum pharetra, ante dolor aliquam turpis, quis congue dui lacus 
            in metus. Mauris a dapibus leo. Integer a ligula id erat ornare laoreet. Cras interdum mauris vulputate
             turpis commodo, a volutpat ligula mollis. Etiam lobortis ut justo vel porttitor. Fusce convallis 
             venenatis augue, tempus rhoncus sem malesuada ut. Sed et convallis arcu, in cursus nisi. Morbi leo 
             sapien, sagittis eu pharetra sit amet, bibendum at massa. Sed.
            </p>
        </div>
    );
}
