// import React from "react"

// const SearchCheck = ({searchStatus, setSearchStatus, quoteData, setQuoteData, imageData, setImageData, videoData, setVideoData}) => {

//     // filter the quotes
//     const filterQuotes = quoteData.filter((quote)=> {
//         quote.name.toLowerCase().includes(searchStatus.toLowerCase())
//     })

//      // filter the images
//      const filterImages = imagesData.filter((image)=> {
//         image.name.toLowerCase().includes(searchStatus.toLowerCase())
//     })

//       // filter the videos
//       const filterVideos = videosData.filter((image)=> {
//         image.name.toLowerCase().includes(searchStatus.toLowerCase())
//     })

//     if (filterQuotes.length >= 10 ) {
//         return (
//           <div>
//             <p>Too many matches, please specify another filter</p>
//           </div>
//         );
//       } else if (filterCountries.length === 1) {
//         const country = filterCountries[0]
//         setShowCountryData(country)
//         return <React.Fragment> </React.Fragment>
//       }
//         else {
//         return filterCountries.map((element, index) => (
//           <div className = "countryList" key={index}>{element.name} <br/>
//           <button onClick={()=>{setShowCountryData(element)}}> Show </button>
//           {/* use effect will fire everytime you chnage setShowCountryData */}
//           </div>

//         ));
//       }
//     };

// export default SearchCheck
