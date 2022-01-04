import React, { useState, useEffect } from "react";
import { of } from "rxjs";

const image$ = of(
  "https://upload.wikimedia.org/wikipedia/commons/3/36/Hopetoun_falls.jpg"
);

export default function App() {
  const [loading, setLoading] = useState(false);
  const [imageSrc, setImageSrc] = useState("");

  useEffect(() => {
    setLoading(true);
    console.log(12312312);
    const subscription = image$.subscribe({
    next(v) {
      console.log(v);
      setImageSrc(v);
      },
      error(e) {
        console.log(e);
        alert(
          "I'm having trouble loading the images for that sub. Please wait a while, reload, and then try again later."
        );
      },
    });
    setLoading(false);
    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return (
    <div>
      <img id="img" src={imageSrc} />
      {loading && (
        <img
          src="https://jhusain.github.io/reddit-image-viewer/loading.svg"
          id="loading"
        />
      )}
      <button id="back">Back</button>
      <select id="sub">
        <option>pics</option>
        <option>cute</option>
      </select>
      <button id="next">Next</button>
    </div>
  );
}
