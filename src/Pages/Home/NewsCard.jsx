import { Link } from "react-router-dom";

const NewsCard = ({ singleNews }) => {
  console.log(singleNews);
  const {_id,title,image_url,details} = singleNews;
  return (
    <div className="card bg-base-100 mb-12">
      <figure>
        <img
          src={image_url}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
       {
        details.length > 200 ? 
        <p>
            {details.slice(0,200)}
            <Link className="text-red-400 font-bold" to={`/news/${_id}`}> Read More...</Link>
        </p>
        :
        <p>
            {details}
        </p>
       }
      </div>
    </div>
  );
};

export default NewsCard;
