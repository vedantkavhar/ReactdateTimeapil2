import React, { useState ,useEffect} from 'react';
// import './DateTime.css';

const DateTime = () => {
  const [localTime, setLocalTime] = useState('');
  const [utcTime, setUtcTime] = useState('');
  const [tokyoTime, setTokyoTime] = useState('');
  const [error, setError] = useState('');

  // async function to fetch time from the API
  const fetchTime = async (timezone, setTime) => {
    try {
      const res = await fetch(`https://timeapi.io/api/Time/current/zone?timeZone=${timezone}`);
      if (!res.ok) throw new Error(`Error: ${res.status}`);
      const data = await res.json();
      // console.log(data);
    setTime(`${data.date} ${data.time}:${data.seconds}`);
    } catch (err) {
      setError(err.message);
    }
  };
  // useEffect(()=>{
  //   fetchTime('Asia/Kolkata', setLocalTime);  // Local (India)
  //   fetchTime('UTC', setUtcTime);             // UTC
  //   fetchTime('Asia/Tokyo', setTokyoTime);    // Tokyo
  // },[]);
  useEffect(()=>{
    fetchTime('Asia/Kolkata', setLocalTime);  // Local (India)
    fetchTime('UTC', setUtcTime);             // UTC
    fetchTime('Asia/Tokyo', setTokyoTime);    // Tokyo

    setInterval(()=>{
      fetchTime('Asia/Kolkata', setLocalTime);  // Local (India)
      fetchTime('UTC', setUtcTime);             // UTC
      fetchTime('Asia/Tokyo', setTokyoTime);    // Tokyo

    },1000); 
  },[]);
  return (
    <div className='container' style={{ fontFamily: 'monospace', padding: '20px' }}>
      <div className='container2'>

        <h2>Current Date and Time</h2>

        { error && 
        <p style={{ color: 'red' }}>Error: {error}</p>
      }

        <p><strong>📍 Local (India) Time:</strong> {localTime || 'Loading...'}</p>
        <p><strong>🌍 UTC Time:</strong> {utcTime || 'Loading...'}</p>
        <p><strong>🇯🇵 Tokyo Time:</strong> {tokyoTime || 'Loading...'}</p>

    </div>
     
    </div>
  );
};

export default DateTime;
