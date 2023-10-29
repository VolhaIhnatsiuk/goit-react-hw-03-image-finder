import { Component } from 'react';
import Modal from 'react-modal';
import css from './ImageGalleryItem.module.css';
import { GalleryImage, GalleryItem, ModalImage } from './ImageGalleryItem.styled';

Modal.setAppElement('#root');

export class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
  };
  openModal = () => {
    this.setState({ isModalOpen: true });
  };
  closeModal = () => {
    this.setState({ isModalOpen: false });
  };
  render() {
    const { webformatURL, tags, largeImageURL } = this.props.image;
    return (
      <GalleryItem>
        <GalleryImage
          onClick={this.openModal}
          src={webformatURL}
          alt={tags}
        />
        <Modal
          className={css.modal}
          isOpen={this.state.isModalOpen}
          onRequestClose={this.closeModal}
          contentLabel="Example Modal"
          overlayClassName={css.overlay}
        >
          <ModalImage
            src={largeImageURL}
            alt={tags}
            width="800"
            height="500"
          />
        </Modal>
      </GalleryItem>
    );
  }
}