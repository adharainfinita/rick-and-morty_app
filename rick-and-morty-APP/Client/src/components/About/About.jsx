import React from "react";
import "./About.css"

const About= ()=>{
return(
    <div id="about">
        <div className="contain">
            <section className="section">
            <h2 id="title">About me</h2>
        <p>Iniciada en el mundo IT, desarrollé un gran interés por aprender las tecnologías del mundo del desarrollo. <br/> Considero este el inicio de una larga y dificil carrera personal y profesional, mas con un fuerte entusiasmo y confianza en mi capacidad e inteligencia</p>
        <p>El camino al llegar a Henry fue dificil. Los obstáculos de mi vida y las condiciones sociales y economicas
            <br/> El mundo que nos toca vivir hoy es complejo y contradictorio, y por ello, el bootcamp de SoyHenry es tan importante para mí. <br/> Demostrar mi fortaleza, mi capacidad, aferrarme a la esperanza de un futuro mejor.
        </p>
        <p>Y confiar el proceso.</p>
        </section>
        <hr/>
        <section className="section">
            <div id="card">
                <h3 id="name">Adhara Irene Redruello</h3>
                <h3 id="age">25 años</h3>
                <h4 id="profession">Estudiante de Desarrollo Web Full Stack</h4>
                <img id="img" src="IMG_20211024_131414_563.jpg" alt= "una mona"/>
                <h5 id="comment">My sweet daughter</h5>
            </div>
        
        </section>
        <hr/>
        <section className="section">
            <h3>Programing life:</h3>
            <img id="meme" src="https://wallpaperboat.com/wp-content/uploads/2019/04/rick-and-morty-wallpaper-wallpaper-background-001.jpg" alt="meme"/>
        </section>
        </div>
    </div>
)

}
export default About;