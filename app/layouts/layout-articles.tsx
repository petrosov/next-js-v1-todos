// app/layouts/layout-articles.tsx

import React from "react";

const LayoutArticles: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div>
        <div>Layout HEADER - ARTICLES</div>
            <main>{children}</main>
        <div>Layout FOOTER - ARTICLES</div>
    </div>
  );
};

export default LayoutArticles;