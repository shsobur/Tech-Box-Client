import "./Banner.css";

const Banner = () => {
  return (
    <>
      <section id="main_banner_container">
        <div className="banner_inner_container"></div>
        <div className="banner_overlay_container">
            <div className="banner_title_container">
                <h1><i>Smart Deals for <br/> Smart People.</i></h1>
                <p>Shop the newest gadgets with ease—bringing you the latest tech, unbeatable prices, and reliable service. From everyday essentials to premium devices, we make your shopping experience fast, simple, and secure.</p>
                <button>Get Started</button>
            </div>
        </div>
      </section>
    </>
  )
}

export default Banner