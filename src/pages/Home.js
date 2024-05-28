import React from 'react';
import Landing from '../images/mostrans.png';

export default function Home() {
  return (
    <div id="home" className="container" style={{ marginTop: '80px' }}>
      <div className="row">
        <div className="col-md-6 my-4 my-md-0">
          <h1 className="text-start" style={{ color: '#FF797B' }}>WHAT IS CHARLIST? </h1>
          <p className="text-start">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
          <a
            href="#home-section"
            className="btn btn-primary btn-lg text-light text-bold w-50 float-start"
            style={{
              background: "#FF797B",
              border: "5px solid #FFFFFF",
              boxShadow: "0px 20px 35px rgba(63, 26, 75, 0.14)",
              borderRadius: 24,
              fontWeight: 600,
            }}
          >
            Get Started
          </a>
        </div>
        <div className="col-md-6">
          <img src={Landing} alt="Gambar" className="img-fluid my-4 my-md-0" />
        </div>
      </div>
    </div>
  );
}
