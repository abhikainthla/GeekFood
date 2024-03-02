
import Button from "./Button"
import './Hero.css';
function Hero() {
  return (
    <div className="hero">
        <div className="hero-ele">
            <div className="hero-img">
                <img src="https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" className="img"></img>
            </div>
            <div className="hero-text">
                <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, debitis.</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, molestiae! Quidem est esse numquam odio deleniti, beatae, magni dolores provident quaerat totam eos, aperiam architecto eius quis quibusdam fugiat dicta.</p>
                <Button  fontSize={".875rem"} fontWeight={"500"} padding={"0.75rem 3rem"} fontColor={"#fff"} backgroundColor={"#4f46e5"} borderRadius={"8px"}>Get in Touch</Button>
            </div>
        </div>
    </div>
  )
}

export default Hero