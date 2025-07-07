import './App.css';
import AppRoutes from './routes/AppRoutes';
import AuthMiddleware from './middleware/AuthMiddleware';
import { SnackbarProvider } from 'notistack';
import ErrorBoundary from './components/ErrorBoundary';

function App() {
  return (
    <>
      {/* <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
        <div className="flex flex-col gap-4  items-center"> */}
      <ErrorBoundary>
        <SnackbarProvider maxSnack={3}>
          <AuthMiddleware />
          <AppRoutes />
        </SnackbarProvider>
      </ErrorBoundary>

      {/* </div>
      </div> */}
    </>
  );
}

export default App;
