import { useState, useRef, useEffect } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import "./Slider.scss"; // Add your CSS styles here

const Slider = () => {
  const [listItems, setListItems] = useState([
    {
      id: 1,
      imgSrc: "images/rooms/room_1.jpg",
      author: "LUNDEV",
      title: "DESIGN SLIDER",
      topic: "ANIMAL",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi...",
    },
    {
      id: 2,
      imgSrc: "images/rooms/room_2.jpg",
      author: "LUNDEV",
      title: "DESIGN SLIDER",
      topic: "ANIMAL",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi...",
    },
    {
      id: 3,
      imgSrc: "images/rooms/room_3.jpg",
      author: "LUNDEV",
      title: "DESIGN SLIDER",
      topic: "ANIMAL",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi...",
    },
    {
      id: 4,
      imgSrc: "images/rooms/room_4.jpg",
      author: "LUNDEV",
      title: "DESIGN SLIDER",
      topic: "ANIMAL",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi...",
    },
  ]);

  const [thumbnailItems, setThumbnailItems] = useState([
    ...listItems.slice(1),
    listItems[0],
  ]);

  const carouselRef = useRef(null);
  const sliderRef = useRef(null);
  const thumbnailRef = useRef(null);

  const timeRunning = 1500;
  const timeAutoNext = 7000;

  // useEffect(() => {
  //   const autoNext = setTimeout(() => {
  //     showSlider("next");
  //   }, timeAutoNext);

  //   return () => clearTimeout(autoNext);
  // }, [listItems, thumbnailItems]);

  const showSlider = (type) => {
    if (type === "next") {
      setListItems((prevItems) => [...prevItems.slice(1), prevItems[0]]);
      setThumbnailItems((prevItems) => [...prevItems.slice(1), prevItems[0]]);
    } else {
      setListItems((prevItems) => [
        prevItems[prevItems.length - 1],
        ...prevItems.slice(0, -1),
      ]);
      setThumbnailItems((prevItems) => [
        prevItems[prevItems.length - 1],
        ...prevItems.slice(0, -1),
      ]);
    }

    if (carouselRef.current) {
      carouselRef.current.classList.add(type);
      setTimeout(() => {
        carouselRef.current.classList.remove(type);
      }, timeRunning);
    }
  };

  return (
    <div className="carousel" ref={carouselRef}>
      <div className="list" ref={sliderRef}>
        {listItems.map((item) => (
          <div className="item" key={item.id}>
            <img src={item.imgSrc} alt="" />
            <div className="content">
              <div className="author">{item.author}</div>
              <div className="title">{item.title}</div>
              <div className="topic">{item.topic}</div>
              {/* <div className="des">{item.description}</div> */}
            </div>
          </div>
        ))}
      </div>

      <div className="thumbnail" ref={thumbnailRef}>
        {thumbnailItems.map((item) => (
          <div className="item" key={item.id}>
            <img src={item.imgSrc} alt="" />
            <div className="content">
              <div className="title">{item.title}</div>
              <div className="description">Description</div>
            </div>
          </div>
        ))}
      </div>

      <div className="arrows">
        <button id="prev" onClick={() => showSlider("prev")}>
          <ChevronLeftIcon className="h-5 w-5" />
        </button>
        <button id="next" onClick={() => showSlider("next")}>
          <ChevronRightIcon className="h-5 w-5" />
        </button>
      </div>
      {/* <div className="time"></div> */}
    </div>
  );
};

export default Slider;
