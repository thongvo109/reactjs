import React from "react";

const ItemDetail = (props) => {
  const item = props.location.state;
  return (
    <div className="container">
      <p>{item.name}</p>
      <iframe
        title={item.name}
        width="560"
        height="315"
        src={"https://www.youtube.com/embed/" + item.videoId}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default ItemDetail;
