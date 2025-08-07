
import '../styles/HeroSection.css'
import TextPressure from './TextPressure'

const HeroSection = () => {
  
  return (
    <section className="hero-section">
      <div className="hero-content">
       
<div style={{position: 'relative', height: '200px',width:"200px"}}>
  <TextPressure
    text="Blog Post !"
    flex={true}
    alpha={false}
    stroke={false}
    width={true}
    weight={true}
    italic={true}
    textColor="#ffffff"
    strokeColor="#ff0000"
    minFontSize={36}
    className="hero-title"
  />
</div>

        <div className="hero-features">
          <div className="hero-feature">
            <span>⚡</span>
            <span>Perform optimisée</span>
          </div>
          <div className="hero-feature">
            <span>📱</span>
            <span>Design responsive</span>
          </div>
          <div className="hero-feature">
            <span>🎨</span>
            <span>Interface moderne</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
