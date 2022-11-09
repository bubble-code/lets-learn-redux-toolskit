import { useState } from 'react';
import { useAppDispatch, useAppSelector } from './app/hooks';
import { increment, addAmount } from './features/counter-slice';
import { useUsersQuery } from './features/dogs/dogs-api-slice';
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const value = useAppSelector();
  const dispatch = useAppDispatch();
  const { data = [], isFetching } = useUsersQuery();
  console.log(data);

  function handleClinck() {
    dispatch(addAmount(3));
  }

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={handleClinck}>
          count is {value}
        </button>
        <div>
          <p>
            {` Number of dogs fetched ${data?.id}`}
          </p>
        </div>
        <div>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Image</th>
              </tr>
            </thead>
            <tbody>
              {
                //   data.map((breed) => (
                //   <tr key={breed.id}>
                //     <td>{breed.name}</td>
                //     <td><img src={breed.image.url} alt={breed.name} height={250} /></td>
                //   </tr>
                // ))
              }
            </tbody>
          </table>
        </div>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
