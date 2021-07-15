// import React from "react";

// const FilteredMedia = ({ searchStatus, media, setShowMediaData }) => {
//   // Filters media: Matches searchStatus with individualMedia
//   const filterMedia = media.filter((individualMedia) => {
//     individualMedia.title
//       ? individualMedia.title.toLowerCase().includes(searchStatus.toLowerCase())
//       : individualMedia.text.toLowerCase().includes(searchStatus.toLowerCase());
//   });

//   // unsure about this if statement
//   if (filterMedia.length >= 10) {
//     return (
//       <div>
//         <p>Too many matches, be more specific with your input</p>
//       </div>
//     );
//   } else if (filterMedia.length === 1) {
//     const mediaData = filterMedia[0];
//     setShowMediaData(mediaData);
//     return;
//     <React.Fragment></React.Fragment>;
//   } else {
//     return filterMedia.map((element, index) => (
//       <div className="mediaDataList" key={index}>
//         {element.name} <br />
//         <button
//           onClick={() => {
//             setShowMediaData(element);
//           }}
//         >
//           Show
//         </button>
//         {/* use effect will fire everytime you chnage setShowCountryData */}
//       </div>
//     ));
//   }
// };

// export default FilteredMedia;
