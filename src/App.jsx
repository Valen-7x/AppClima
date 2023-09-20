import React, { useEffect, useState } from 'react';
import Icons from './components/Icons';

function App() {
  const [search, setSearch] = useState('Buenos Aires');
  const [values, setValues] = useState('');
  const [icon, setIcon] = useState('');

  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${search}&lang=es&units=metric&appid=6fa0bd1d28bec2bd65ed0383ded9f110`;

  const getData = async () => {
    await fetch(URL)
      .then((response) => response.json())
      .then((data) => {
        if (data.cod >= 400) {
          setValues(false);
        } else {
          setIcon(data.weather[0].main);
          setValues(data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSearch = (e) => {
    if (e.key === 'Enter') {
      setSearch(e.target.value);
    }
  };

  useEffect(() => {
    getData();
  }, [search]);

  return (
    < div className='bg-cyan-600 w-[100%] h-[100vh]'>
      <div className="max-w-xl py-[2rem] mx-auto px-4 text-center">
        <h2 className="text-2xl font-bold">Clima <br /> Ingrese su Ciudad </h2>
        <div className="mt-4">
          <input
            onKeyDown={handleSearch}
            type="text"
            autoFocus
            className="border border-gray-300 rounded p-2 w-full"
          />
        </div>
      </div>

      <div className="w-[15rem] md:w-[20rem] mx-auto  bg-white shadow-md rounded-3xl">
        {values ? (
          <div className="text-center">
            <h1 className="text-2xl text-gray-700 font-bold">{values.name}</h1>
            <div className='flex  items-center px-[2rem]'>
            <p className="text-4xl font-bold">{values.main.temp.toFixed(0)}&deg;</p>
            <img
              className="mx-auto mt-4 w-[7rem] md:w-[10rem]"
              src={Icons(icon)}
              alt="icon-weather"
            />
            </div>
            <div className="flex justify-center items-center bg-blue-700 w-[100%] rounded-b-3xl h-[6rem]">
              <p className="text-3xl text-white">
                {values.main.temp_min.toFixed(0)}&deg; |{' '}
                {values.main.temp_max.toFixed(0)}&deg;
              </p>
            </div>
          </div>
        ) : (
          <h1 className="text-2xl font-bold">{"City not found"}</h1>
        )}
      </div>
    </div>
  );
}

export default App;
