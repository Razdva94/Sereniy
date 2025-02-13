import React from 'react';
import ReactDOM from 'react-dom/client';
import AppEnter from './app/AppEnter';
import { Provider } from 'react-redux';
import { store } from './store';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<Provider store={store}>
			<AppEnter />
		</Provider>
	</React.StrictMode>,
);
