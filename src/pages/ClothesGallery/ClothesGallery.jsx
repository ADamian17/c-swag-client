import { useEffect, useState } from 'react';

import Clothe from '../../Models/Clothe';
import ClothesList from './ClothesList/ClothesList';


import './ClothesGallery.scss'

const ClothesGallery = () => {
  const [clothes, setClothes] = useState([])

  useEffect(() => {
    fetchClothes()
  }, [])

  /* fetch api clothes */
  const fetchClothes = async () => {
    try {
      const res = await Clothe.all();
      setClothes(res.results);

    } catch (error) {
      console.log(error)
    }
  }

  console.log({ clothes });
  return (
    <main>
      {
        clothes.length === 0 ? (
          <div>Loading...</div>
        ) : (
          <div className="gallery">
            <ClothesList clothes={clothes} />
          </div>
        )
      }
    </main>
  )
}

export default ClothesGallery;