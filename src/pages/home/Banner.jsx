import React from 'react'

const Banner = () => {
    return (
        <div>
            {/* start banner area */}
            <div className="slider-one rn-section-gapTop">
                <div className="container">
                    <div className="row row-reverce-sm align-items-center">
                        <div className="col-lg-5 col-md-6 col-sm-12 mt_sm--50">
                            <h2 className="title" data-sal-delay={200} data-sal-duration={800}>Discover Digital Art, Collect and Sell Your Specific NFTs.</h2>
                            <p className="slide-disc" data-sal-delay={300} data-sal-duration={800}>Partner with one of the world’s largest retailers to showcase your brand and
                                products.</p>
                            <div className="button-group">
                                <a className="btn btn-large btn-primary" href="#/" data-sal-delay={400} data-sal-duration={800}>Get Started</a>
                                <a className="btn btn-large btn-primary-alta" href="create.html" data-sal-delay={500} data-sal-duration={800}>Create</a>
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-6 col-sm-12 offset-lg-1">
                            <div className="slider-thumbnail">
                                <img src="assets/images/slider/slider-1.png" alt="Slider Images" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End banner area */}
        </div>
    )
}

export default Banner
