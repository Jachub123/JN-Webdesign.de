import React from "react";

const Logo = React.forwardRef((props, ref) => (
  <img
    className="drop-shadow"
    src="/img/logos/Logo3.0.svg"
    onLoad={props.onImageLoad}
    ref={ref}
  />
));

export default Logo;
