import React from 'react';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

const ZoomableImage = ({ src }) => {
  return (
    <TransformWrapper
          initialScale={1}
          // initialPositionX={200}
          // initialPositionY={100}
        >
      <TransformComponent >
        <img style={{width: '100%', height: '80rem'}} src={src} alt="test" />
      </TransformComponent>
    </TransformWrapper>
  );
};

export default ZoomableImage;