import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [length, setLength] = useState(8);
  const [num, setNum] = useState(false);
  const [char, setChar] = useState(false);

  const [password, setPassword] = useState('');

  const generatePassword = () => {
    let pass = '';
    let characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

    if (num) {
      characters += '1234567890';
    }

    if (char) {
      characters += '!@#$%^&*()-+';
    }

    for (let i = 0; i < length; i++) {
      let randomIndex = Math.floor(Math.random() * characters.length);
      pass += characters[randomIndex];
    }

    setPassword(pass);
  };

  useEffect(() => {
    generatePassword();
  }, [length, num, char]);

  return (
    <>
      <div id='outer'>
        <div id='input'>
          <input
            type='text'
            placeholder='Password'
            className='outline-none'
            readOnl
            value={password}
          />
          <button onClick={() => navigator.clipboard.writeText(password)}>Copy</button>
        </div>
        <div id='controller'>
          <div className='flex px-5' id='cc'>
            <input
              type='range'
              value={length}
              min={5}
              max={20}
              onChange={(e) => setLength(Number(e.target.value))}
              name='length'
              id='length'
            />
            <label htmlFor='length'>Length: {length}</label>
          </div>
          <div className='flex px-5' id='cc'>
            <input
              type='checkbox'
              name='num'
              id='num'
              checked={num}
              onChange={() => setNum((prev) => !prev)}
            />
            <label htmlFor='num'>Numbers</label>
          </div>
          <div className='flex px-5' id='cc'>
            <input
              type='checkbox'
              name='char'
              id='char'
              checked={char}
              onChange={() => setChar((prev) => !prev)}
            />
            <label htmlFor='char'>Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
