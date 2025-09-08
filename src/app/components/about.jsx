import Link from "next/link";
export default function About() {
  return (
    <>
      <div className="aboutContainer" id='about'>
        <div className="aboutText">
          <h4>WEBDEVELOPER</h4>
          <h1>Hello, my name is Yuusuf Roble</h1>
          <p>
            I am a web developer passionate about building projects. I graduated
            from HackYourFuture Denmark, gaining practical skills through
            individual and team learning. Currently I am working on projects and
            exploring tech opportunities.
          </p>
          <div className="buttons">
            <Link href="https://www.linkedin.com/in/yuusuf-roble-121192290/" className="blueBtn Btn">
              LinkedIn
            </Link>
            <Link href="https://github.com/Ganja0003" className="whiteBtn Btn">
              Github
            </Link>
          </div>
        </div>

        <div className="aboutImage">
          <img src="images/Yusuuf_resized.jpg" alt="" />
        </div>
      </div>
    </>
  );
}
