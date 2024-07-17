import React from "react";
import { Link } from "react-router-dom";

function Carousel() {
  return (
    <div className="p-4">
      <div className="carousel max-w-full rounded-box ">
        <div id="item1" className="carousel-item w-full">
          <img
            src="https://images.uzum.uz/cpth8ob6eisq2rkdkbk0/main_page_banner.jpg"
            className="w-full object-cover"
            alt="Tailwind CSS Carousel component"
          />
        </div>
        <div id="item2" className="carousel-item w-full">
          <img
            src="https://images.uzum.uz/cpta3db5qt1gj8dcvo6g/main_page_banner.jpg"
            className="w-full object-cover"
            alt="Tailwind CSS Carousel component"
          />
        </div>
        <div id="item3" className="carousel-item w-full">
          <img
            src="https://images.uzum.uz/cpsftsgsarnfdo99562g/main_page_banner.jpg"
            className="w-full object-cover"
            alt="Tailwind CSS Carousel component"
          />
        </div>
        <div id="item4" className="carousel-item w-full">
          <img
            src="https://images.uzum.uz/cpsfsj0sarnfdo9955o0/main_page_banner.jpg"
            className="w-full object-cover"
            alt="Tailwind CSS Carousel component"
          />
        </div>
        <div id="item5" className="carousel-item w-full">
          <img
            src="https://images.uzum.uz/cpsg48b5qt1gj8dcpf4g/main_page_banner.jpg"
            className="w-full object-cover"
            alt="Tailwind CSS Carousel component"
          />
        </div>
        <div id="item6" className="carousel-item w-full">
          <img
            src="https://images.uzum.uz/cpsfmnb5qt1gj8dcpasg/main_page_banner.jpg"
            className="w-full object-cover"
            alt="Tailwind CSS Carousel component"
          />
        </div>
        <div id="item7" className="carousel-item w-full">
          <img
            src="https://images.uzum.uz/cpsg0k8sarnfdo995820/main_page_banner.jpg"
            className="w-full object-cover"
            alt="Tailwind CSS Carousel component"
          />
        </div>
      </div>
      <div className="flex w-full justify-center gap-2 py-2">
        <Link to="#item1" className="btn btn-xs">
          .
        </Link>
        <Link to="#item2" className="btn btn-xs">
          .
        </Link>
        <Link to="#item3" className="btn btn-xs">
          .
        </Link>
        <Link to="#item4" className="btn btn-xs">
          .
        </Link>
        <Link to="#item5" className="btn btn-xs">
          .
        </Link>
        <Link to="#item6" className="btn btn-xs">
          .
        </Link>
        <Link to="#item7" className="btn btn-xs">
          .
        </Link>
      </div>
    </div>
  );
}

export default Carousel;
