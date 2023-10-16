import React from 'react'
import './StyleGuide.css'

const StyleGuide = () => {
    return (
        <main>
            <div className="guide-main">
                <div className="guide-main-caption d-f">
                    <div className="guide-main-pattern"></div>
                    <div className="guide-main-above">TransitFlow Default Tags</div>
                </div>
                <h2 className="guide-main-title">Style Guide</h2>
            </div>
            <div className="guide-color d-f jc-sb">
                <div className="guide-bl-title">Color</div>
                <div><img src="images/color.png" alt="color" /></div>
            </div>
            <div className="guide-text d-f">
                <div className="guide-bl-title">Text</div>
                <div><img src="images/text.png" alt="text" /></div>
            </div>
            <div className="guide-paragraph d-f">
                <div className="guide-bl-title">Paragraph</div>
                <div><img src="images/paragraph.png" alt="paragraph" /></div>
            </div>
            <div className="guide-buttons d-f">
                <div className="guide-bl-title">Button</div>
                <div><img src="images/buttons.png" alt="buttons" /></div>
            </div>
            <div className="guide-icon d-f">
                <div className="guide-bl-title">Icon</div>
                <div><img src="images/icon.png" alt="icon" /></div>
            </div>
            <div style={{ marginBottom: "100px" }}></div>
        </main>
    )
}

export default StyleGuide