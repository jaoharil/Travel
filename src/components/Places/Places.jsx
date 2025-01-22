import React from 'react';
import PlaceCard from './PlaceCard';
import Img1 from '../../assets/places/rinjani.jpg';
import Img2 from '../../assets/places/pttrawangan.jpg';
import Img3 from '../../assets/places/sembalun.jpg';
import Img4 from '../../assets/places/pantaikuta.jpg';
import Img5 from '../../assets/places/TiuKelep.jpg';
import Img6 from '../../assets/places/semgigi.jpg';

const PlacesData = [
  {
    img: Img1,
    title: 'Rinjani',
    location: 'Lombok Timur',
    description: 'lorem ipsum dolor sit amet consectetur adipisicing elit.',
    price: 6700,
    type: 'Cultural Relax',
  },
  {
    img: Img2,
    title: 'Gili Trawangan',
    location: 'Lombok Barat',
    description: 'Gili trawangan aksndskndksndkasnfnskfn kasfksn ksdk adjkscn skkdf oakdnn',
    price: 6700,
    type: 'Cultural Relax',
  },
  {
    img: Img3,
    title: 'Sembalun',
    location: 'Lombok Timur',
    description: 'The Taj Mahal is an ivory-white marble mausoleum on the south bank of the river Yamuna in the Indian city of Agra.',
    price: 6200,
    type: 'Cultural Relax',
  },
  {
    img: Img4,
    title: 'Mandalika',
    location: 'Lombok Tengah',
    description: 'lorem ipsum dolor sit amet consectetur adipisicing elit.',
    price: 6700,
    type: 'Cultural Relax',
  },
  {
    img: Img5,
    title: 'Tiu Kelep',
    location: 'Lombok Utara',
    description: 'The Taj Mahal is an ivory-white marble mausoleum on the south bank of the river Yamuna in the Indian city of Agra.',
    price: 6700,
    type: 'Cultural Relax',
  },
  {
    img: Img6,
    title: 'Senggigi',
    location: 'Lombok Barat',
    description: 'The Taj Mahal is an ivory-white marble mausoleum on the south bank of the river Yamuna in the Indian city of Agra.',
    price: 6200,
    type: 'Cultural Relax',
  },
];

const Places = ({ handleOrderPopup }) => {
  return (
    <>
      <div className="dark:bg-gray-900 dark:text-white bg-gray-50 py-10">
        <section data-aos="fade-up" className="container ">
          <h1 className=" my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">Best Places to Visit</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {PlacesData.map((item, index) => (
              <PlaceCard handleOrderPopup={handleOrderPopup} key={index} {...item} />
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default Places;
