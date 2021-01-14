import React from 'react';
import SelectedMarkerAgri from './SelectedMarkerAgri';
import SelectedMarkerAch from './SelectedMarkerAch';
import './SelectedMarker.scss';

const SelectedMarker = ({ marker, closedLocation,  }) => {
  return (
    <>
      {marker.object.role ? (
        <SelectedMarkerAgri
          marker={marker}
          closedLocation={closedLocation}
        />
      ) : (
        <SelectedMarkerAch marker={marker} closedLocation={closedLocation} />
      )}
    </>
  );
};

export default SelectedMarker;
