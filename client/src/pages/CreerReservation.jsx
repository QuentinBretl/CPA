import { useEffect, useRef, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { getAuth, onAuthStateChanged } from 'firebase/auth' 

function CreerReservation() {
    const [loading, setLoading] = useState(false)
    const [formData, setFormData] = useState({
        nom: '',
        mail: '',
        tel: '',
        nb_adultes: 0,
        nb_enfants: 0,
        nb_bambins: 0,
        prix: 0,
    })

    const auth = getAuth()
    const navigate = useNavigate()
    const isMounted = useRef(true)

    const location = useLocation()
    const { creneau } = location.state

    useEffect(() => {
        if(isMounted){
            onAuthStateChanged(auth, (user) => {
                if (user) {
                    setFormData({...formData, userRef: user.uid})
                } else {
                    console.log("pas connecté")
                }
            })
        }
        return () => {
            isMounted.current = false
        }
    }, [isMounted])

  return (
    <div>CreerReservation</div>
  )
}

export default CreerReservation