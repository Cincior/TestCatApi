import React, { useState } from 'react';
import { Oval } from 'react-loader-spinner'
import 'bootstrap/dist/css/bootstrap.css';
import Menu from '../components/Menu/Menu';

function CatGeneratorPage() {

  const [catImageUrl, setCatImageUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  async function generateCat() {
    setIsLoading(true);
    setIsError(false);
    setCatImageUrl('');
    const response = await fetch('https://cataas.com/cat');
    console.log(response);
    switch(response.status)
    {
      case 200:
        setCatImageUrl(response.url);
        break;
      case 500:
        setIsError(true)
        break;
      default:
        break;
    }
    setIsLoading(false)
  }

  return (
    <>
      <div className='container-fluid'>
        <Menu name='Home' path='/'/>
        <h1 className='text-center m-3'>You can chill here for a while and have a look at some random cats. Enjoy</h1>
        <div className='container-fluid d-flex justify-content-center mb-4'>
          <button className='btn btn-success' onClick={generateCat}>Give me my daily cat</button>
        </div>
        <div className='container-fluid d-flex justify-content-center'>
          {isLoading && <Oval
            height={80}
            width={80}
            color="black"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            ariaLabel='oval-loading'
            secondaryColor="grey"
            strokeWidth={2}
            strokeWidthSecondary={2}
          />}
          {catImageUrl && <img src={catImageUrl} alt="Kot" style={{maxHeight: 500}}/>}
        </div>
        {isError && <div className='d-flex justify-content-center text-danger'>We couldn't find any cat!</div>}
      </div>
    </>
  );
}

export default CatGeneratorPage;
