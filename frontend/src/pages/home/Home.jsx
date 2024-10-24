import './home.css'
import Feature from "../../components/feature/feature";
import features from "../../data/features.json";
import iconChat from "../../img/icon-chat.webp";
import iconMoney from "../../img/icon-money.webp";
import iconSecurity from "../../img/icon-security.webp";





const Home = () => {
    const imageFeature = {
        "icon-chat.webp": iconChat,
        "icon-money.webp": iconMoney,
        "icon-security.webp": iconSecurity
    }

    return (
            
            <main>
                <div class="home">
                    <section class="hero-content">
                        <p>No fees.</p>
                        <p>No minimum deposit.</p>
                        <p>High interest rates.</p>
                        <p>Open a savings account with Argent Bank today!</p>
                    </section>
                </div>

                <section class="features">
                    {features.map((feature) => (
                        <Feature
                        key={feature.title}
                        image={imageFeature[feature.image]}
                        alt={feature.title}
                        text={feature.text}
                        />
                    ))}
                    
                </section>
            </main>
        
    )

}
export default Home
