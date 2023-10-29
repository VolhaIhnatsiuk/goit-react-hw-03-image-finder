import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Gallery } from './ImageGallery.styled';

export function ImageGallery({ imagesArray }) {
  return (
    <Gallery>
      {imagesArray.map(img => (
        <ImageGalleryItem key={img.id} image={img} />
      ))}
    </Gallery>
  );
}