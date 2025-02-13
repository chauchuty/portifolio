import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter, } from 'react-router'
import { AppRoutes } from './routes/routes.module.tsx'
import store from './features/store.ts'
import 'bulma/css/bulma.min.css'

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <BrowserRouter>
      {<AppRoutes />}
    </BrowserRouter>
  </Provider>
)
