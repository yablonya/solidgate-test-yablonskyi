import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import App from './app/App.tsx'
import "./i18n/config.ts";
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Suspense
      fallback={(
        <div
          style={{
            width: "100%",
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "24"
          }}
        >
          Loading...
        </div>
      )}
    >
      <App/>
    </Suspense>
  </StrictMode>,
)
