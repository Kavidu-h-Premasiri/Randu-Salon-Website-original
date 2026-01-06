import React from "react";
import Card from 'react-bootstrap/Card';
import '../css/ServicesBody.css'; 

function ServicesBody() {

  return (
    <div className="services-container">
        <Card className="service-card">
          <Card.Img className="service-card-img" variant="top" src="https://rafaelsbarbershop.com/storage/photos/1/posts/mens-haircuts/mens-haircuts-1.jpg" />
          <Card.Body className="service-card-body">
            <Card.Title className="service-card-title">Haircuts</Card.Title>
            <Card.Text className="service-card-text">
              Stylish haircuts for men, women, and kids to match your personality.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card className="service-card">
          <Card.Img className="service-card-img" variant="top" src="https://cdn.shopify.com/s/files/1/1006/0930/files/how-to-trim-beard-with-Scissors_large.jpg?4877835811754740397" />
          <Card.Body className="service-card-body">
            <Card.Title className="service-card-title">Beard Trimming</Card.Title>
            <Card.Text className="service-card-text">
              Keep your beard neat, sharp, and stylish with our professional trimming.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card className="service-card">
          <Card.Img className="service-card-img" variant="top" src="https://stjohnsbayrum.com/cdn/shop/articles/shaving-boynew_1600x.jpg?v=1632138074" />
          <Card.Body className="service-card-body">
            <Card.Title className="service-card-title">Shaving</Card.Title>
            <Card.Text className="service-card-text">
              Experience smooth and clean shaving with high-quality tools.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card className="service-card">
          <Card.Img className="service-card-img" variant="top" src="https://luciaclinic.com/wp-content/uploads/2022/07/hair-loss-1-scaled-e1724223363132.jpg" />
          <Card.Body className="service-card-body">
            <Card.Title className="service-card-title">Hair Treatments</Card.Title>
            <Card.Text className="service-card-text">
              Nourish and repair your hair for healthy, shiny, and strong hair.
            </Card.Text>
          </Card.Body>
        </Card>
    </div>
  );
}

export default ServicesBody