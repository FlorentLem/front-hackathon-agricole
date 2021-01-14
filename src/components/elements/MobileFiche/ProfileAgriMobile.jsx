import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProgressBar from '../ProgressBar/ProgressBar';
import './ProfileMobile.scss';
import logoCA from './assets/logoCA.png';

const ProfileAgriMobile = () => {
  const [agri, setAgri] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get('http://localhost:8000/api/profil/2')
      .then(res => res.data)
      .then(data => {
        setAgri(data);
        setIsLoading(false);
      })
      .catch(err => {
        alert(err.response.data.errorMessage);
      });
  }, []);
  return (
    <div className='full-box'>
      {isLoading ? (
        <p>En cours de chargement</p>
      ) : (
        <>
          <div className='avatar-bg'></div>

          <div className='box-agriculteur'>
            <div className='box-header'>
              <h1>Agriculteur</h1>
              <img src={logoCA} alt='logo Comparateur Agricole' />
            </div>
            <div className='box-info'>
              <h2>Expert</h2>
              <h2>Inscrit depuis {agri.profil.registered_at}</h2>
            </div>
            <div className='box-farmsize'>
              <h2>Taille de la ferme</h2>

              <p>{agri.profil.farmsize} hectares</p>
            </div>
          </div>

          <div className='box-céréales'>
            <h1>Céréales</h1>
            <div>
              {agri.trans.map(a => (
                <>
                  <p>{a.category}</p>
                  <ProgressBar
                    pourcentage={(a.somme * 100) / agri.profil.somme}
                    tonnage={a.somme}
                  />
                </>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ProfileAgriMobile;
