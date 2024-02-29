import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './assets/index.css'
import { Provider } from 'react-redux'
import store from './redux/store.ts'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import "react-toastify/ReactToastify.css"

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <App />
        <ToastContainer />
      </BrowserRouter>
    </QueryClientProvider>
  </Provider>
);
