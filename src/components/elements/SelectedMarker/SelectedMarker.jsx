import React from "react";
import SelectedMarkerAgri from "./SelectedMarkerAgri";
import SelectedMarkerAch from "./SelectedMarkerAch";
import "./SelectedMarker.scss";

const SelectedMarker = ({ marker }) => {
  return <>{marker.role ? <SelectedMarkerAgri marker={marker} /> : <SelectedMarkerAch marker={marker} />}</>;
};

export default SelectedMarker;
