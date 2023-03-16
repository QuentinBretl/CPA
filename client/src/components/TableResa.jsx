import React, { useState } from 'react';

function TableResa() {
  return (
    <div className='table-container'>
      <table>
        <thead>
          <tr>
            <th>Nom</th>
            <th>Mail</th>
            <th>Téléphone</th>
            <th>Nombre d'adultes (16+ ans)</th>
            <th>Nombre d'enfants (3-6 ans)</th>
            <th>Nombre d'enfants (7-15 ans)</th>
            <th>Prix</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Bretelle</td>
            <td>Bretelle@bretelle.com</td>
            <td>0607796806</td>
            <td>2</td>
            <td>0</td>
            <td>3</td>
            <td>45</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default TableResa;
