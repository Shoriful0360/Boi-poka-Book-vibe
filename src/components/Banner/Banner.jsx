

import bannerImg from '../../assets/books.jpg'

const Banner = () => {
    return (
        <div className="hero mt-10 border p-10 rounded-lg">
        <div className="hero-content flex-col sm:flex-row-reverse">
          <img
            src={bannerImg}
            className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="lg:text-6xl md:text-4xl  font-bold">Books to freshern up your bookshelf</h1>
          
            <button className="btn btn-success text-white mt-4">view The List</button>
          </div>
        </div>
      </div>
    );
};

export default Banner;