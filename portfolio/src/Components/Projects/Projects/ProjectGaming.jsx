import Carousel from 'react-bootstrap/Carousel';
import * as images from '../../../Assets/Project_Gaming/Gaming_images';
import style from './Projects.module.css';

function ProjectGaming() {
  return (
    <Carousel>
      <Carousel.Item interval={2000} className={style.carousel_item}>
        <Carousel.Caption
          className={style.carousel_caption}
          style={{
            left: '0',
            right: '0',
            bottom: '0',
          }}
        >
          <h3>Landing</h3>
        </Carousel.Caption>
        <img
          className="
          d-block
          w-100
          rounded
          "
          src={images.gaming_project1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={2000} className={style.carousel_item}>
        <img
          className="d-block w-100 rounded"
          src={images.gaming_project2}
          alt="Second slide"
        />
        <Carousel.Caption
          className={style.carousel_caption}
          style={{
            left: '0',
            right: '0',
            bottom: '0',
          }}
        >
          <h3>Home</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000} className={style.carousel_item}>
        <img
          className="d-block w-100 rounded"
          src={images.gaming_project3}
          alt="Third slide"
        />
        <Carousel.Caption
          className={style.carousel_caption}
          style={{
            left: '0',
            right: '0',
            bottom: '0',
          }}
        >
          <h3>Detail</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000} className={style.carousel_item}>
        <Carousel.Caption
          className={style.carousel_caption}
          style={{
            left: '0',
            right: '0',
            bottom: '0',
          }}
        >
          <h3>Add game</h3>
        </Carousel.Caption>
        <img
          className="
          d-block
          w-100
          rounded
          "
          src={images.gaming_project4}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={2000} className={style.carousel_item}>
        <Carousel.Caption
          className={style.carousel_caption}
          style={{
            left: '0',
            right: '0',
            bottom: '0',
          }}
        >
          <h3>Review added game</h3>
        </Carousel.Caption>
        <img
          className="
          d-block
          w-100
          rounded
          "
          src={images.gaming_project5}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={2000} className={style.carousel_item}>
        <Carousel.Caption
          className={style.carousel_caption}
          style={{
            left: '0',
            right: '0',
            bottom: '0',
          }}
        >
          <h3>Edit game</h3>
        </Carousel.Caption>
        <img
          className="
          d-block
          w-100
          rounded
          "
          src={images.gaming_project6}
          alt="First slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default ProjectGaming;
