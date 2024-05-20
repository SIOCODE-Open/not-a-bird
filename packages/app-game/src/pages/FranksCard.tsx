import { BulmaButton } from "../components/BulmaButton";
import { BulmaCard } from "../components/BulmaCard";

const FranksCard = (props: { navigate: (path: string) => { void } }) => {
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-16by9">
          <iframe
            className="has-ratio"
            width="640"
            height="360"
            src="https://www.youtube.com/embed/YE7VzlLtp-4"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </figure>
      </div>
      <div className="card-content">
        <h1>Name</h1>
        <p>
          <i>Description</i>
        </p>
        <p>5</p>
      </div>
      <footer className="card-footer">
        <div className="card-footer-item">
          <BulmaButton>Buy</BulmaButton>
        </div>
        <div className="card-footer-item">
          <BulmaButton>Sacrifice</BulmaButton>
        </div>
        <div className="card-footer-item">
          <BulmaButton>Send</BulmaButton>
        </div>
      </footer>
    </div>
  );
};

export { FranksCard };
