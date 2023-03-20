import { useState } from 'react';

function ResaClient() {
  const [showForm, setShowForm] = useState(false);

  const showForms = () => {
    setShowForm(!showForm);
  };

  return (
    <form>
      <button onClick={showForm}></button>
    </form>
  );
}

export default ResaClient;
