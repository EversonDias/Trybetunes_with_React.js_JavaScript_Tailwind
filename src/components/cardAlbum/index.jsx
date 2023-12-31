import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default class CardAlbum extends Component {
  render() {
    const {
      artist,
    } = this.props;
    return (
      <div
        className="flex flex-col justify-center items-center
        gap-4 md:grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4"
      >
        {artist.map(({ collectionId, collectionName, artworkUrl100, artistName }) => (
          <Link
            key={ collectionId }
            to={ `/album/${collectionId}` }
            data-testid={ `link-to-album-${collectionId}` }
            className="card w-[18rem] h-72 bg-green-200 shadow-xl"
          >
            <figure className="px-10 pt-10">
              <img
                src={ artworkUrl100 }
                alt="foto da capa do albums"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{artistName}</h2>
              <p>{collectionName}</p>
            </div>
          </Link>
        ))}
      </div>
    );
  }
}

CardAlbum.propTypes = {
  artist: PropTypes.arrayOf(
    PropTypes.object.isRequired,
  ).isRequired,
};
