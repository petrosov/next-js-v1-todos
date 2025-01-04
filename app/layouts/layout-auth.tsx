// app/layouts/layout-auth.tsx

import React from "react";

const LayoutAuth: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div>
        <div>Layout HEADER - AUTH</div>
            <main>{children}</main>
        <div>Layout FOOTER - AUTH</div>
    </div>
  );
};

export default LayoutAuth;