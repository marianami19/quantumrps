import React from "react";
// import "./GallerySection.scss";

function GallerySection() {
  // Sample data for different types of roofing images
  const roofingImages = [
    { id: 1, src: "roofing-1.png", alt: "Roofing Type 1" },
    { id: 2, src: "roofing-2.png", alt: "Roofing Type 2" },
    { id: 3, src: "roofing-3.png", alt: "Roofing Type 3" },
    { id: 4, src: "roofing-4.png", alt: "Roofing Type 4" },
    // Add more images as needed
  ];

  return (
    <section className="gallery-section">
      <div className="container">
        <h2 className="section-title">Roofing Types</h2>
        <div className="row">
          {roofingImages.map((image) => (
            <div key={image.id} className="col-md-4 mb-4">
              <div className="card">
                <img
                  src={require(`../assets/images/${image.src}`)}
                  alt={image.alt}
                  className="card-img-top"
                />
                <div className="card-body">
                  <p className="card-text">{image.alt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default GallerySection;
