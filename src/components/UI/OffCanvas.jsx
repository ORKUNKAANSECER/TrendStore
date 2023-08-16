import React, { Fragment } from "react";
import "./OffCanvas.css";
import ReactDOM  from "react-dom";

const Backdrop = (props) => {
  return <div className="backdrop" onClick={props.onClose}></div>;
};

const OffCanvasOverlay = (props) => {
  return (
    <div className="offcanvas">
      <div className="content">{props.children}</div>
    </div>
  );
};

const Offcanvas = (props) => {
  const portalElement = document.getElementById('overlays');
  return (
    <Fragment>
      {ReactDOM.createPortal(
      <Backdrop onClose={props.onClose} />,
      portalElement
      )}
      {ReactDOM.createPortal(<OffCanvasOverlay>{props.children}</OffCanvasOverlay>,portalElement)}
      
    </Fragment>
  );
};

export default Offcanvas;
