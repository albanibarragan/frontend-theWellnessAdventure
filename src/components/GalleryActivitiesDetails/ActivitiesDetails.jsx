import React from "react";
import activitiesData from "../../data/activitiesData.js";
import "./ActivitiesDetails.css";

export const ActivitiesDetails = () => {
  return (
    <div className="activities container mx-auto px-4 py-8" id="activities">
      <div class="flex flex-col text-center w-full mb-20">
        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
          Actividades
        </h1>
        <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
          Tenemos diferentes actividades segun tus gustos.
        </p>
      </div>
      <div className="img-container">
        <div className="grid grid-cols-3 gap-4">
          {activitiesData.map((activitiesData, index) => (
            <div key={activitiesData.src + index} className="image-card">
              <img
                key={activitiesData.src}
                src={activitiesData.src}
                alt={activitiesData.alt}
                className="w-full h-400 rounded-top object-cover"
              />
              <div className="image-card-content">
                <h3 className="image-card-title">{activitiesData.title}</h3>
                <p className="image-card-description">
                  {activitiesData.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ActivitiesDetails;
