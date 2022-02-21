import { useState } from 'react';
import './App.css';
import TabContent from './components/TabContent/TabContent';

function App() {

  const [drag, setDrag] = useState<boolean>(false)
  const [active, setActive] = useState<any>(null);
  const openTab = (e: any) => setActive(+e.target.dataset.index);

  function dragStartHandler(e: any) {
    e.preventDefault()
    setDrag(true)
  }

  function dragLeaveHandler(e: any) {
    e.preventDefault()
    setDrag(false)
  }

  const showFile = (e: any) => {
    e.preventDefault();
    const reader = new FileReader();
    reader.onload = (e) => {
      const text = e.target?.result;
      console.log(text);
    };
    reader.readAsText(e.target.files[0]);
    setDrag(false)
  };

  let certificates = [
    {
      id: 1,
      name: 'Иван Иванов Иванович',
      issuer: 'АЦСК MATERKEY',
      validForm: '2016-12-18',
      validTill: '2017-12-18'
    },
    {
      id: 2,
      name: 'Петров Петр Петрович',
      issuer: 'ЦСК ПрАТ ІВК',
      validForm: '2016-09-06',
      validTill: '2017-09-06'
    },
    {
      id: 3,
      name: 'Сидоров Сидор Сидорович',
      issuer: 'ЦСК Минюст',
      validForm: '2017-03-25',
      validTill: '2018-03-25'
    },
  ]

  return (
    <div className="App">
      {drag
        ? <input type='file'
          className='drop-area'
          onDragStart={e => dragStartHandler(e)}
          onDragLeave={e => dragLeaveHandler(e)}
          onDragOver={e => dragStartHandler(e)}
          onChange={showFile}
        />
        : <input type='file'
          className='drag-area'
          onDragStart={e => dragStartHandler(e)}
          onDragLeave={e => dragLeaveHandler(e)}
          onDragOver={e => dragStartHandler(e)}
          onChange={showFile}
        />
      }
      <div>
        <div>
          {certificates.map((n, i) => (
            <button
              onClick={openTab}
              data-index={i}
            >{n.name}</button>
          ))}
        </div>
        {certificates[active] && <TabContent {...certificates[active]} />}
      </div>
    </div>
  );
}

export default App;
