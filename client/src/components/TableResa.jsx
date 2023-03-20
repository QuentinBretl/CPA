import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { FaPlus, FaTimes } from 'react-icons/fa';
import { useSearchParams } from 'react-router-dom';
import {
  collection,
  getDocs,
  query,
  where,
  orderBy,
  limit,
  startAfter,
} from 'firebase/firestore';
import { db } from '../firebase.config';
import { useAuthStatus } from '../hooks/useAuthStatus';

function TableResa({ creneau }) {
  const [dbData, setDbData] = useState();
  const [resas, setResas] = useState(null);
  const { loggedIn, checkingStatus } = useAuthStatus();
  const [loading, setLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });

  const { name, email } = formData;

  const useShowForm = () => {
    setShowForm(!showForm);
    console.log(showForm);
  };

  const onChange = () => {};

  const onClickRemoveSlot = (e) => {
    if (!loggedIn) {
      e.preventDefault();
      toast.error(
        "Vous n'avez pas les droits requis pour effectuer cette action."
      );
    }
  };

  //Fetch DB
  useEffect(() => {
    const fetchResas = async () => {
      try {
        const resasRef = collection(db, 'resas');
        const q = query(
          resasRef,
          where('acti', '==', searchParams.get('acti')),
          where('date', '==', searchParams.get('date')),
          where('creneau', '==', creneau)
        );
        const querySnap = await getDocs(q);

        const resas = [];

        querySnap.forEach((doc) => {
          return resas.push({
            id: doc.id,
            data: doc.data(),
          });
        });

        setResas(resas);
        setLoading(false);
      } catch (error) {
        toast.error('Impossible de charger les données...');
      }
    };
    fetchResas();
    console.log(resas);
  }, []);

  return (
    <div className='table-container'>
      <div className='options'>
        <button className='add' onClick={useShowForm}>
          <FaPlus className='add-icon' />
          <h3>Ajouter</h3>
        </button>
        <button className='remove-slot' onClick={onClickRemoveSlot}>
          <FaTimes className='remove-slot-icon' />
          <h3>Annuler</h3>
        </button>
      </div>
      {loading ? (
        <h1></h1>
      ) : resas && resas.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Nom</th>
              <th>Mail</th>
              <th>Téléphone</th>
              <th>Adultes (16+ ans)</th>
              <th>Enfants (3-6 ans)</th>
              <th>Enfants (7-15 ans)</th>
              <th>Prix</th>
              <th>Actions</th>
              <th>Créée par</th>
              <th>A</th>
            </tr>
          </thead>
          <tbody>
            {resas.map((resa) => (
              <tr key={resa.id}>
                <td>{resa.data.nom}</td>
                <td>{resa.data.mail}</td>
                <td>{resa.data.tel}</td>
                <td>{resa.data.nb_adultes}</td>
                <td>{resa.data.nb_enfants}</td>
                <td>{resa.data.nb_bambins}</td>
                <td>{resa.data.prix}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <h1>Pas de réservations</h1>
      )}
      {showForm && (
        <div className='table'>
          <form className='tr'>
            <span className='td'>
              <input
                type='text'
                className='nameInput'
                placeholder='Nom'
                id='name'
                value={name}
                onChange={onChange}
              />
            </span>
            <span className='td'>
              <input
                type='email'
                className='emailInput'
                placeholder='Email'
                id='email'
                value={email}
                onChange={onChange}
              />
            </span>
          </form>
        </div>
      )}
    </div>
  );
}

export default TableResa;
