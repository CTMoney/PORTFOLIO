import React from "react"
import liriImg from "../images/LIRI.png"
import giphyImg from "../images/giphy.gif"

const Home = () => {
  return (
    <div className="card-deck">
      <div className="card mx-auto text-white mb-3" id="projectCard">
        <a
          href="https://github.com/CTMoney/liri-node-app"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img
            className="card-img-top"
            alt=""
            src={liriImg}
            id="projectCardImage"
            title="Favourite ->..."
          />
        </a>
        <div className="card-body">
          <h3 className="card-title text-center mt-0 pt-0 mb-3 pb-4">
            Liri CLI
          </h3>
          <p className="card-text text-center">
            Search your favourite song, show, or artists upcoming shows
          </p>
        </div>
      </div>

      <div className="card mx-auto text-white mb-3" id="projectCard">
        <a
          href="https://ctmoney.github.io/clickygamer/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img
            className="card-img-top"
            alt=""
            src="https://picsum.photos/200/?random"
            id="projectCardImage"
            alt="Card image cap"
          />
        </a>
        <div className="card-body">
          <h3 className="card-title text-center mt-0 pt-0 mb-3 pb-4">
            Clicky Game
          </h3>
          <p className="card-text text-center">A simple react memory game, with awful art. (
            im sorry)</p>
        </div>
      </div>

      <div className="card mx-auto text-white mb-3" id="projectCard">
        <a
          href="https://tranquil-sea-97703.herokuapp.com/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img
            className="card-img-top"
            alt=""
            src="https://picsum.photos/200/?random"
            id="projectCardImage"
            alt="Card image cap"
          />
        </a>
        <div className="card-body">
          <h3 className="card-title text-center mt-0 pt-0 mb-3 pb-4">
            AR Project
          </h3>
          <p className="card-text text-center">
            A fullstack program utilizing basic AR
          </p>
        </div>
      </div>

      <div className="card mx-auto text-white mb-3" id="projectCard">
        <a
          href="https://shrouded-spire-57262.herokuapp.com/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img
            className="card-img-top"
            alt=""
            src="https://picsum.photos/200/?random"
            id="projectCardImage"
            alt="Card image cap"
          />
        </a>
        <div className="card-body">
          <h3 className="card-title text-center mt-0 pt-0 mb-3 pb-4">
            Burgers
          </h3>
          <p className="card-text text-center">
            a mySQL + Handlebars.js project hosted on heroku
          </p>
        </div>
      </div>

      <div className="card mx-auto text-white mb-3" id="projectCard">
        <a
          href="https://mysterious-reaches-66663.herokuapp.com/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img
            className="card-img-top"
            alt=""
            src="https://picsum.photos/200/?random"
            id="projectCardImage"
            alt="Card image cap"
          />
        </a>
        <div className="card-body">
          <h3 className="card-title text-center mt-0 pt-0 mb-3 pb-4">
            Friend Finder
          </h3>
          <p className="card-text text-center">
            Find yourself a friend with this Create and Read Express app
          </p>
        </div>
      </div>
    </div>
  )
}

export default Home
