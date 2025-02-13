import { createRoot } from 'react-dom/client'
import 'rsuite/dist/rsuite.min.css'
import { Provider } from 'react-redux'
import store from './features/store.ts'
import { BrowserRouter, } from 'react-router'
import { AppRoutes } from './routes/routes.module.tsx'

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <BrowserRouter>
      {<AppRoutes />}
    </BrowserRouter>
  </Provider>
)
