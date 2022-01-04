import React from "react";
import Genre from './Genre'

function GenresInDb() {

  const genres = [
    {
      name: "Acción"
    },
    {
      name: "Animación"
    },
    {
      name: "Aventura"
    },
    {
      name: "Ciencia Ficción"
    },
    {
      name: "Comedia"
    },
    {
      name: "Documental"
    },
    {
      name: "Drama"
    },
    {
      name: "Fantasia"
    },
    {
      name: "Infantiles"
    },
    {
      name: "Musical"
    }
  ]

  return (
    <div className="col-lg-6 mb-4">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-gray-800">
            Genres in Data Base
          </h5>
        </div>
        <div className="card-body">
          <div className="row">
            {
								genres.map((name, index)=>{
									return <Genre
										key={name.name + index}
										name = {name.name}
										/>
								})
							}
          </div>
        </div>
      </div>
    </div>
  );
}

export default GenresInDb;
