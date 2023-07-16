import React from 'react';
 import './MapContainer.css'

const MapContainer = () => {
  return ( <div className='mapWrapper'>
   <iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d15331.26293243292!2d20.454103210285435!3d44.81746706949839!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2srs!4v1689420941664!5m2!1sen!2srs" width="600" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
   </div>);
}
 
export default MapContainer;