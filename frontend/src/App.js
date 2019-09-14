import React from 'react';
import Dashboard from './containers/Dashboard';
import DetailedView from './containers/DetailedView';
import './App.scss';

function App() {
  const [detailedViewActive, setDetailedViewActive] = React.useState(false);
  return (
    <div className="App">
      <Dashboard />
      <DetailedView active={detailedViewActive} onClose={() => setDetailedViewActive(false)} />
      <button onClick={() => setDetailedViewActive(true)}> Open Detailed View </button>
    </div>
  );
}

export default App;
