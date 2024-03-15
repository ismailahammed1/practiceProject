/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useContext, useState } from "react";
import { toast } from "react-toastify";

import { MovieContext } from "../../Context/Context";
import { getImgUrl } from "../../utils/cine-utilitys";
import MovieDetailsModal from "../MovieDetailsModal/MovieDetailsModal";
import Rating from "../Rating/Rating";



const MovieCard = ({ movie }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const { state, dispatch } = useContext(MovieContext);

  function handleAddToCart(e, movie) {
    e.stopPropagation();

    const found = state.cartData.find((item) => {
        return item.id === movie.id;
    });

    if (!found) {
        dispatch({
            type: "ADD_TO_CART",
            payload: {
                ...movie,
            },
        });
        toast.success(`Added  ${movie.title} to Cart !`);
    } else {
        toast.error( `The movie ${movie.title} has been added to the cart already`);
    }
}

  function handleCloseModal() {
    setSelectedMovie(null);
    setShowModal(false);
  }
  function handleMovieSelection() {
    setSelectedMovie(movie);
    setShowModal(true);
  }

  return (
    <>
      {showModal && (
        <MovieDetailsModal
          movie={selectedMovie}
          onClose={handleCloseModal}
          onCartAdd={handleAddToCart}
        />
      )}
      <figure className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl">
        <a href="#" onClick={() => handleMovieSelection(movie)}>
          <img
            className="w-full object-cover"
            src={getImgUrl(movie.cover)}
            alt={movie.title}
          />
          <figcaption className="pt-4">
            <h3 className="text-xl mb-1">{movie.title}</h3>
            <p className="text-[#575A6E] text-sm mb-2">{movie.genre}</p>
            <div className="flex items-center space-x-1 mb-5">
              <Rating value={movie.rating} />
            </div>
            <button
              className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
              href="#"
              onClick={(e) => handleAddToCart(e, movie)}
            >
              <img src="./assets/tag.svg" alt="" />
              <span>{movie.price}| Add to Cart</span>
            </button>
          </figcaption>
        </a>
      </figure>
    </>
  );
};

export default MovieCard;
