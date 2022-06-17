import React from "react";
import ImageCard from "../../Components/ImageCard/ImageCard";
import "./Category.css";
import coll1 from "../../Assets-clothing/Jewelry/collection/1.png";
function Category() {
  return (
    <div className="category-div">
      <div className="living-section3">
        <div className="living-heading">
          <div className="line-left"></div>
          <h1>Categories</h1>
          <div className="line-right"></div>
        </div>
        <div className="cards-grid">
          <ImageCard cloth={true} show={true} img={coll1} />
          <ImageCard cloth={true} show={true} img={coll1} />
          <ImageCard cloth={true} show={true} img={coll1} />
          <ImageCard cloth={true} show={true} img={coll1} />
          <ImageCard cloth={true} show={false} img={coll1} />
          <ImageCard cloth={true} show={false} img={coll1} />
          <ImageCard cloth={true} show={false} img={coll1} />
          <ImageCard cloth={true} show={false} img={coll1} />
          <ImageCard cloth={true} show={false} img={coll1} />
          <ImageCard cloth={true} show={false} img={coll1} />
          <ImageCard cloth={true} show={false} img={coll1} />
          <ImageCard cloth={true} show={false} img={coll1} />
        </div>
      </div>
    </div>
  );
}

export default Category;
