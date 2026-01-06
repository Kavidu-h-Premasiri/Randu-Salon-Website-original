import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import '../css/HomeInside.css'

function HomeInside() {
  return (
    <div>
        <Card className="bg-dark text-white">
            <Card.Img src="https://static.wixstatic.com/media/592b9f_0fad8072a1574a9cab30433fbc5a6f7c~mv2.png/v1/crop/x_0,y_1,w_1920,h_852/fill/w_1351,h_381,fp_0.50_0.50,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/592b9f_0fad8072a1574a9cab30433fbc5a6f7c~mv2.png" alt="Card image" />
            <Card.ImgOverlay>
                <Card.Title>Randu Salon</Card.Title>
                <Card.Text >
                    Welcome to Randu Salon, your perfect place for modern haircuts and grooming.
                    We offer stylish haircuts, beard trimming, shaving, and kids' haircuts in a clean and friendly environment.
                    Our skilled barbers use quality tools and products to give you the best look and comfort.
                    Whether you want a classic style or a modern trend, we are here to help you feel confident.
                    Book your appointment today and enjoy professional service, great style, and a relaxing salon experience.
                </Card.Text>
            </Card.ImgOverlay>
        </Card>
        <br></br>
        <div className="vertical-cards">
            <Card className="custom-card">
            <Card.Img className="custom-card-img" variant="top" src="https://5.imimg.com/data5/IH/SF/ZZ/SELLER-45477378/professional-service-500x500.png" />
            <Card.Body className="custom-card-body">
                <Card.Title className="custom-card-title">Professional Service</Card.Title>
                <Card.Text className="custom-card-text">
                Skilled barbers and stylists provide expert haircuts and grooming tailored to your style.
                </Card.Text>
                {/* <Button className="custom-card-btn" variant="primary">Go somewhere</Button> */}
            </Card.Body>
            </Card><br></br>
            <Card className="custom-card">
            <Card.Img className="custom-card-img" variant="top" src="https://s3.ap-south-1.amazonaws.com/prod-media-vyaparify-com/vcards/blogs/164002/360_F_180709000_Ls5U3EqH9GiVF6BBRfvSeMq3lQDbSG0d.jpg" />
            <Card.Body className="custom-card-body">
                <Card.Title className="custom-card-title">High-Quality Products</Card.Title>
                <Card.Text className="custom-card-text">
                We use premium products to ensure healthy, shiny, and well-nourished hair.
                </Card.Text>
                {/* <Button className="custom-card-btn" variant="primary">Go somewhere</Button> */}
            </Card.Body>
            </Card><br></br>
            <Card className="custom-card">
            <Card.Img className="custom-card-img" variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkMbwaMIDfR0sjP8guRZW8mIbsvdrXANJmaQ&s" />
            <Card.Body className="custom-card-body">
                <Card.Title className="custom-card-title">Relaxing Experience</Card.Title>
                <Card.Text className="custom-card-text">
                Enjoy a calm and comfortable environment while getting pampered.
                </Card.Text>
                {/* <Button className="custom-card-btn" variant="primary">Go somewhere</Button> */}
            </Card.Body>
            </Card>
            <Card className="custom-card">
            <Card.Img className="custom-card-img" variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzPvIfVuCoij97Yw-d0Z0uUzbPOXR2SJ3Jnw&s" />
            <Card.Body className="custom-card-body">
                <Card.Title className="custom-card-title">Modern Hairstyles</Card.Title>
                <Card.Text className="custom-card-text">
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
                </Card.Text>
                {/* <Button className="custom-card-btn" variant="primary">Go somewhere</Button> */}
            </Card.Body>
            </Card><br></br>
            <Card className="custom-card">
            <Card.Img className="custom-card-img" variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSik9DMHN0kwKzgnEUSHHE7f2S8l-MRbA9PdA&s" />
            <Card.Body className="custom-card-body">
                <Card.Title className="custom-card-title">Affordable Prices</Card.Title>
                <Card.Text className="custom-card-text">
                Quality services at reasonable rates to suit every budget.
                </Card.Text>
                {/* <Button className="custom-card-btn" variant="primary">Go somewhere</Button> */}
            </Card.Body>
            </Card><br></br>
            <Card className="custom-card">
            <Card.Img className="custom-card-img" variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwlsK9PIR0dTqDXCjIpER8dqAljUNEHxiHHA&s" />
            <Card.Body className="custom-card-body">
                <Card.Title className="custom-card-title">Family Friendly</Card.Title>
                <Card.Text className="custom-card-text">
                Services available for men, women, and kids in a safe, welcoming atmosphere.
                </Card.Text>
                {/* <Button className="custom-card-btn" variant="primary">Go somewhere</Button> */}
            </Card.Body>
            </Card>
            <Card className="custom-card">
            <Card.Img className="custom-card-img" variant="top" src="https://royaltail.in/cdn/shop/files/the-best-men-s-sunglasses-to-match-every-event-and-outfit.png?v=1751709456&width=2400" />
            <Card.Body className="custom-card-body">
                <Card.Title className="custom-card-title">Special Occasion Styling</Card.Title>
                <Card.Text className="custom-card-text">
                Get the perfect hairstyle for weddings, parties, or events. Our expert stylists create elegant and personalized looks that make you shine.
                </Card.Text>
                {/* <Button className="custom-card-btn" variant="primary">Go somewhere</Button> */}
            </Card.Body>
            </Card><br></br>
            <Card className="custom-card">
            <Card.Img className="custom-card-img" variant="top" src="https://lk.spaceylon.com/cdn/shop/files/Neelyadi_-_Medicated_Scalp_Hair_Treatment_Oil_100ml_-_Spa_Ceylon_Sri_Lanka-4363245.png?v=1755753508&width=1946" />
            <Card.Body className="custom-card-body">
                <Card.Title className="custom-card-title">Scalp & Hair Care</Card.Title>
                <Card.Text className="custom-card-text">
                Our specialized scalp and hair care treatments nourish your roots, prevent hair damage, and promote healthy hair growth for a naturally vibrant look.
                </Card.Text>
                {/* <Button className="custom-card-btn" variant="primary">Go somewhere</Button> */}
            </Card.Body>
            </Card><br></br>
        </div>
    </div>
  )
}

export default HomeInside
