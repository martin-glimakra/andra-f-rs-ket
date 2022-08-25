import './App.css';
import BildKomponent from './components/BildKomponent';
import { useState, useEffect } from 'react'


function App() {

  useEffect(() => {

    async function fetchPhotos() {
      const response = await fetch('https://jsonplaceholder.typicode.com/photos');
      const arrayAvFotoobjekt = await response.json();
      setRealdata(arrayAvFotoobjekt)
    }

    fetchPhotos()
  }, []);

  const [realData, setRealdata] = useState()

  console.log('realData', realData)

  let tesdata = [
    {
      "albumId": 1,
      "id": 1,
      "title": "accusamus beatae ad facilis cum similique qui sunt",
      "url": "https://via.placeholder.com/600/92c952",
      "thumbnailUrl": "https://via.placeholder.com/150/92c952"
    },
    {
      "albumId": 1,
      "id": 2,
      "title": "reprehenderit est deserunt velit ipsam",
      "url": "https://via.placeholder.com/600/771796",
      "thumbnailUrl": "https://via.placeholder.com/150/771796"
    }
  ]

  let arrayAvKomponenterEllerSträng 

  if ( realData ) {
    arrayAvKomponenterEllerSträng = realData.map(vadsomhelst => <BildKomponent key={vadsomhelst.id} title={vadsomhelst.title} url={vadsomhelst.url} />)
  }
  else {
    arrayAvKomponenterEllerSträng = 'Laddar'
  }


  return (
    <div>
      {arrayAvKomponenterEllerSträng}
    </div>
  );

  // return (
  //   <div>
  //     {tesdata.map(vadsomhelst => <BildKomponent key={vadsomhelst.id} title={vadsomhelst.title} url={vadsomhelst.url} />)}
  //   </div>
  // );

  // tesdata.map ger samma resultat som att manuellt skriva ut två komponenter
  // return (
  //   <div>
  //     {tesdata.map(vadsomhelst => <BildKomponent title={vadsomhelst.title} url={vadsomhelst.url} />)}
  //     <BildKomponent title={tesdata[0].title} url={tesdata[0].url}  />
  //     <BildKomponent title={tesdata[1].title} url={tesdata[1].url}  />
  //   </div>
  // );

  // De två BildKomponenterna visar olika data
  // return (
  //   <div>
  //     <BildKomponent title={tesdata[0].title} url={tesdata[0].url}  />
  //     <BildKomponent title={tesdata[1].title} url={tesdata[1].url}  />
  //   </div>
  // );

    // Skicka ner data till komponent
  // return (
  //   <div>
  //     <p>{tesdata[0].title}</p>
  //     <img src={tesdata[0].url} />
  //     <BildKomponent title={tesdata[0].title} henrik={'test henrik'} stefan={'test stefan'} />
  //   </div>
  // );

    // Se så en extern komponent fungerar
  // return (
  //   <div>
  //     <p>{tesdata[0].title}</p>
  //     <img src={tesdata[0].url} />
  //     <BildKomponent />
  //   </div>
  // );

  // steg 1 se så testada går att skriva ut
  // return (
  //   <div>
  //     <p>{tesdata[0].title}</p>
  //     <img src={tesdata[0].url} />
  //   </div>
  // );
}

export default App;
