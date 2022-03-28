import './style.css';
import code from "./imgSrc.jpg";
import myVideo from "./myVideo.mp4"; 
function App() {
  return (
    <div className='all'>
      <div style={{ border: "solid 1px black", maxWidth: "100vw" }}>
        <h1 className="titlered"> hgui norhen </h1>
        <br />

        <div className="grid-container ">
          <img src={code} alt="code" id='item' width={350} height={330} />

          <img
            src={"/imageInPublic.jpg"}
            alt="code2"
            width={350}
            height={330}
          />
        </div>

        <video className='video' width={500} height={500} controls>
          <source src={myVideo} type="video/mp4" />
        </video>
      </div>
    </div>
  );
}

export default App;
