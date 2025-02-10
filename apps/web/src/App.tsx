import { Button as TwButton } from "@ds/tw-button";
import { Button as MuiButton } from "@ds/mui-button";
import "@ds/tw-button/dist/index.css";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div style={{ padding: "16px" }}>
              <h2>Tailwind + Radix Button</h2>
              <div style={{ display: "flex", gap: "16px" }}>
                <TwButton variant="default">Default Button</TwButton>
                <TwButton variant="destructive">Destructive Button</TwButton>
                <TwButton variant="outline">Outline Button</TwButton>
                <TwButton variant="secondary">Secondary Button</TwButton>
                <TwButton variant="ghost">Ghost Button</TwButton>
                <TwButton variant="link">Link Button</TwButton>
              </div>

              <h2>MUI + Emotion Button</h2>
              <div style={{ display: "flex", gap: "16px" }}>
                <MuiButton variant="contained">Click me</MuiButton>
                <MuiButton variant="outlined">Click me</MuiButton>
                <MuiButton variant="text">Click me</MuiButton>
                <MuiButton variant="contained" color="primary">
                  Primary Button
                </MuiButton>
                <MuiButton variant="contained" color="secondary">
                  Secondary Button
                </MuiButton>
                <MuiButton variant="contained" color="error">
                  Error Button
                </MuiButton>
              </div>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
