import React from "react";
import { previewData } from "./preview-data.js";
import PreviewItem from "./PreviewItem.js";

const Preview = () => {
  return (
    <section className="section">
      <div className="section_in">
        <div className="preview">
          {previewData.length ? (
            previewData.map((item) => (
              <PreviewItem key={item.key} item={item} />
            ))
          ) : (
            <p>No items loaded</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Preview;
