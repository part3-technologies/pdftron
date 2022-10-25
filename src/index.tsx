import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './polyfills';
import App from './App';

import './utils/request-idle-callback';
import 'react-nice-dates/build/style.css';

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);

root.render(
	<StrictMode>
		<App />
	</StrictMode>
);
