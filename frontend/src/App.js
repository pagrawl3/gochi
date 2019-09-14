import React from 'react';
import Provider from './components/Context/Provider';
import Dashboard from './containers/Dashboard';
import DetailedView from './containers/DetailedView';

import './App.scss';

const INITIAL_STATE = {
  categories: [],
  statuses: [],
  statusFilter: 0,
};

function App() {
  const [detailedViewActive, setDetailedViewActive] = React.useState(false);
  return (
    <Provider value={INITIAL_STATE}>
      <div className="App">
        <Dashboard />
        <DetailedView active={detailedViewActive} onClose={() => setDetailedViewActive(false)} />
        <button onClick={() => setDetailedViewActive(true)}> Open Detailed View </button>
      </div>
    </Provider>
  );
}

export default App;
