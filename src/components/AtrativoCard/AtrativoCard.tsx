import { useState } from 'react';
import type { Atrativo } from '../../types';
import Modal from '../Modal/Modal';
import ImageSlider from '../ImageSlider/ImageSlider';
import './AtrativoCard.css';

interface AtrativoCardProps {
  atrativo: Atrativo;
}

const AtrativoCard = ({ atrativo }: AtrativoCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const defaultImage = '/images/Imagem fachada da Vila.webp';
  const images = atrativo.images && atrativo.images.length > 0 ? atrativo.images : [defaultImage];

  return (
    <>
      <article className="atrativo-card" onClick={() => setIsModalOpen(true)}>
        <div className="atrativo-card-image">
          <ImageSlider images={images} alt={atrativo.title} />
          <span className="atrativo-card-category">{atrativo.category}</span>
        </div>
        <div className="atrativo-card-content">
          <h3>{atrativo.title}</h3>
          <p>{atrativo.excerpt}</p>
          <button className="atrativo-card-btn">Saiba mais</button>
        </div>
      </article>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div className="atrativo-modal">
          {images.length > 0 && (
            <div className="atrativo-modal-image">
              <ImageSlider images={images} alt={atrativo.title} autoPlay />
            </div>
          )}
          <div className="atrativo-modal-content">
            <span className="atrativo-modal-category">{atrativo.category}</span>
            <h2>{atrativo.title}</h2>
            <p>{atrativo.text}</p>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default AtrativoCard;
