const HeroSection = () => {
    return (
        <section className="hero">
            <div className="hero-content">
                <h1>Welcome to SwiftCart</h1>
                <p>Explore the best products tailored just for you!</p>
                <div className="hero-buttons">
                    <button onClick={() => window.location.href = "/"}>Shop Now</button>
                    <button onClick={() => window.location.href = "/about"}>Learn More</button>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;