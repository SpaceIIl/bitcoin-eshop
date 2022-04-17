import QRcode from 'qrcode';
import { useEffect, useState } from 'react';

const App = ({ text }) => {
  const [ src, setSrc] = useState("");


useEffect(() => {
  QRcode.toDataURL(text).then((data) => {
    setSrc(data);
  });
}, []);

return (
    <div>
        <img src={src}/>
    </div>
);
};
export default App;
