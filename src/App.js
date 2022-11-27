import { useState } from 'react';


function App() {
  const [color, setColor] = useState("");
  const changeColor = (e) => {
    setColor(e.target.value)
  }
  return (
    <div className="vh-100 d-flex justify-content-center align-items-center bg-secondary">
      <div className='w-25'>
        <h1 data-aos="fade-down"
          data-aos-duration="3000">Maliha Poly Tex Fiber Industry Limited.</h1>
        <p className='text-warning' data-aos="fade-right"
          data-aos-duration="3000" >Technical Task</p>
        <textarea class="form-control" style={{ backgroundColor: `${color}` }} name="" id="" cols="30" rows="10" data-aos="fade-left"
          data-aos-duration="3000"></textarea><br />

        <input class="form-control" onChange={(e) => changeColor(e)} type="text" placeholder='Input Color name or code' data-aos="fade-up"
          data-aos-duration="3000" />

      </div>
    </div>
  );
}

export default App;
