import React from "react";
import Card from "../card/Card";
import "./ImageList.css";


const ImageList = (props) => {
    const images = props.images.map((image) => {
       return <Card key={image.id} image={image} /> 
    });

    return <div className="'image-list">{images}</div>
};

export default ImageList;
