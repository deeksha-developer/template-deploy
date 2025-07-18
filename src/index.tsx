import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { TemplateExample } from "./screens/TemplateExample";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <TemplateExample />
  </StrictMode>,
);
