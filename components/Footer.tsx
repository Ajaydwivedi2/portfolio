import React from "react";

function footer() {
  return (
    <>
      <div className="mb-4 mt-40 text-center leading-tight">
        <p>Developed by Ajay Dwivedi.</p>
        <p>
          Built with <span className="text-button1">Next.js</span> ,{" "}
          <span className="text-button1">Tailwind</span> &{" "}
          <span className="text-button1">Shadcn UI</span>. Hosted on{" "}
          <span className="text-button1">Vercel</span>.
        </p>
      </div>
    </>
  );
}

export default footer;
