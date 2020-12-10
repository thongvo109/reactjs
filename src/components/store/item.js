import React from "react";
import { Link } from "react-router-dom";
 
const StoreItem = (props) => {
  const item = props.item;
  const alertName = () => {
    alert('John Doe');
  };

  return (
    <div className="col-lg-4 d-flex align-items-stretch mt-4">
      <div className="card card-course-item h-100">
        <Link to={{ pathname: "courses/" + item.slug, state: item }}>
          <img className="card-img-top" src={item.image} alt={item.name} />
        </Link>

        <div className="card-body">
          <Link to={{ pathname: "courses/" + item.slug, state: item }}>
            <h5 className="card-title">{item.name}</h5>
          </Link>

          <a href="#" className="btn btn-primary" onClick={alertName} >
            
            Mua khóa học
          </a>
        </div>
      </div>
    </div>
  );
};

export default StoreItem;
