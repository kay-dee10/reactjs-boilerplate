import { createRoot } from 'react-dom/client';
import RootContainer from './pages/Root';

const root = createRoot(document.getElementById('main'));

root.render(<RootContainer/>);