import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import Select from 'react-select';
import { FaPlus, FaTimes, FaUserPlus } from 'react-icons/fa';
import { Link, useSearchParams, useLocation } from 'react-router-dom';
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
  const [pah, setPah] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const { name, email, phone } = formData;

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
    if (searchParams.get('acti') === 'pah') {
      setPah(true);
      console.log(pah);
    }
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
        <Link
          className='add-button'
          to={`/creer-reservation?acti=${searchParams.get(
            'acti'
          )}&date=${searchParams.get('date')}`}
          state={{ creneau: creneau }}
        >
          <button className='add'>
            <FaPlus className='add-icon' />
            <h3>Ajouter</h3>
          </button>
        </Link>
        <button className='remove-slot' onClick={onClickRemoveSlot}>
          <FaTimes className='remove-slot-icon' />
          <h3>Annuler</h3>
        </button>
      </div>
      {loading ? (
        <h1> </h1>
      ) : resas && resas.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Nom</th>
              <th>Mail</th>
              <th>Téléphone</th>
              <th>16+ ans</th>
              <th>7 - 15 ans</th>
              <th>3-6 ans</th>
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
    </div>
  );
}

export default TableResa;
