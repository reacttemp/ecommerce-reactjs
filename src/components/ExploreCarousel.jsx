import React from 'react'
import Slider from "react-slick";

const ExploreCarousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slideToScroll: 1,
    }

    return (
        <div>
            {/* Explore Style Carousel */}
            <div className="rn-live-bidding-area rn-section-gapTop">
                <div className="container">
                    <div className="row mb--50">
                        <div className="col-lg-12 col-6">
                            <div className="section-title">
                                <h3 className="title mb--0 live-bidding-title" data-sal-delay={150} data-sal-duration={800}>Live Bidding</h3>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="banner-one-slick slick-activation-03 slick-arrow-style-one rn-slick-dot-style slick-gutter-15">
                                <Slider {...settings}>
                                    {/* start single product */}
                                    <div className="single-slide-product">
                                        <div className="product-style-one">
                                            <div className="card-thumbnail">
                                                <a href="product-details.html"><img src="assets/images/portfolio/portfolio-07.jpg" alt="NFT_portfolio" /></a>
                                                <div className="countdown" data-date="2022-11-09">
                                                    <div className="countdown-container days">
                                                        <span className="countdown-value">87</span>
                                                        <span className="countdown-heading">D's</span>
                                                    </div>
                                                    <div className="countdown-container hours">
                                                        <span className="countdown-value">23</span>
                                                        <span className="countdown-heading">H's</span>
                                                    </div>
                                                    <div className="countdown-container minutes">
                                                        <span className="countdown-value">38</span>
                                                        <span className="countdown-heading">Min's</span>
                                                    </div>
                                                    <div className="countdown-container seconds">
                                                        <span className="countdown-value">27</span>
                                                        <span className="countdown-heading">Sec</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="product-share-wrapper">
                                                <div className="profile-share">
                                                    <a href="author.html" className="avatar" data-tooltip="Mark JOrdan"><img src="assets/images/client/client-2.png" alt="Nft_Profile" /></a>
                                                    <a href="author.html" className="avatar" data-tooltip="Mark"><img src="assets/images/client/client-3.png" alt="Nft_Profile" /></a>
                                                    <a href="author.html" className="avatar" data-tooltip="Jordan"><img src="assets/images/client/client-5.png" alt="Nft_Profile" /></a>
                                                    <a className="more-author-text" href="#/">20+ Place Bit.</a>
                                                </div>
                                                <div className="share-btn share-btn-activation dropdown">
                                                    <button className="icon" data-bs-toggle="dropdown" aria-expanded="false">
                                                        <svg viewBox="0 0 14 4" fill="none" width={16} height={16} className="sc-bdnxRM sc-hKFxyN hOiKLt">
                                                            <path fillRule="evenodd" clipRule="evenodd" d="M3.5 2C3.5 2.82843 2.82843 3.5 2 3.5C1.17157 3.5 0.5 2.82843 0.5 2C0.5 1.17157 1.17157 0.5 2 0.5C2.82843 0.5 3.5 1.17157 3.5 2ZM8.5 2C8.5 2.82843 7.82843 3.5 7 3.5C6.17157 3.5 5.5 2.82843 5.5 2C5.5 1.17157 6.17157 0.5 7 0.5C7.82843 0.5 8.5 1.17157 8.5 2ZM11.999 3.5C12.8274 3.5 13.499 2.82843 13.499 2C13.499 1.17157 12.8274 0.5 11.999 0.5C11.1706 0.5 10.499 1.17157 10.499 2C10.499 2.82843 11.1706 3.5 11.999 3.5Z" fill="currentColor" />
                                                        </svg>
                                                    </button>
                                                    <div className="share-btn-setting dropdown-menu dropdown-menu-end">
                                                        <button type="button" className="btn-setting-text share-text" data-bs-toggle="modal" data-bs-target="#shareModal">
                                                            Share
                                                        </button>
                                                        <button type="button" className="btn-setting-text report-text" data-bs-toggle="modal" data-bs-target="#reportModal">
                                                            Report
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                            <a href="product-details.html"><span className="product-name">Preatent</span></a>
                                            <span className="latest-bid">Highest bid 1/20</span>
                                            <div className="bid-react-area">
                                                <div className="last-bid">0.244wETH</div>
                                                <div className="react-area">
                                                    <svg viewBox="0 0 17 16" fill="none" width={16} height={16} className="sc-bdnxRM sc-hKFxyN kBvkOu">
                                                        <path d="M8.2112 14L12.1056 9.69231L14.1853 7.39185C15.2497 6.21455 15.3683 4.46116 14.4723 3.15121V3.15121C13.3207 1.46757 10.9637 1.15351 9.41139 2.47685L8.2112 3.5L6.95566 2.42966C5.40738 1.10976 3.06841 1.3603 1.83482 2.97819V2.97819C0.777858 4.36443 0.885104 6.31329 2.08779 7.57518L8.2112 14Z" stroke="currentColor" strokeWidth={2} />
                                                    </svg>
                                                    <span className="number">322</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* end single product */}
                                    {/* start single product */}
                                    <div className="single-slide-product">
                                        <div className="product-style-one">
                                            <div className="card-thumbnail">
                                                <a href="product-details.html"><img src="assets/images/portfolio/portfolio-10.jpg" alt="NFT_portfolio" /></a>
                                                <div className="countdown" data-date="2022-10-09">
                                                    <div className="countdown-container days">
                                                        <span className="countdown-value">87</span>
                                                        <span className="countdown-heading">D's</span>
                                                    </div>
                                                    <div className="countdown-container hours">
                                                        <span className="countdown-value">23</span>
                                                        <span className="countdown-heading">H's</span>
                                                    </div>
                                                    <div className="countdown-container minutes">
                                                        <span className="countdown-value">38</span>
                                                        <span className="countdown-heading">Min's</span>
                                                    </div>
                                                    <div className="countdown-container seconds">
                                                        <span className="countdown-value">27</span>
                                                        <span className="countdown-heading">Sec</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="product-share-wrapper">
                                                <div className="profile-share">
                                                    <a href="author.html" className="avatar" data-tooltip="Farik Shaikh"><img src="assets/images/client/client-1.png" alt="Nft_Profile" /></a>
                                                    <a href="author.html" className="avatar" data-tooltip="Shaikh"><img src="assets/images/client/client-6.png" alt="Nft_Profile" /></a>
                                                    <a href="author.html" className="avatar" data-tooltip="Farik"><img src="assets/images/client/client-8.png" alt="Nft_Profile" /></a>
                                                    <a className="more-author-text" href="#/">15+ Place Bit.</a>
                                                </div>
                                                <div className="share-btn share-btn-activation dropdown">
                                                    <button className="icon" data-bs-toggle="dropdown" aria-expanded="false">
                                                        <svg viewBox="0 0 14 4" fill="none" width={16} height={16} className="sc-bdnxRM sc-hKFxyN hOiKLt">
                                                            <path fillRule="evenodd" clipRule="evenodd" d="M3.5 2C3.5 2.82843 2.82843 3.5 2 3.5C1.17157 3.5 0.5 2.82843 0.5 2C0.5 1.17157 1.17157 0.5 2 0.5C2.82843 0.5 3.5 1.17157 3.5 2ZM8.5 2C8.5 2.82843 7.82843 3.5 7 3.5C6.17157 3.5 5.5 2.82843 5.5 2C5.5 1.17157 6.17157 0.5 7 0.5C7.82843 0.5 8.5 1.17157 8.5 2ZM11.999 3.5C12.8274 3.5 13.499 2.82843 13.499 2C13.499 1.17157 12.8274 0.5 11.999 0.5C11.1706 0.5 10.499 1.17157 10.499 2C10.499 2.82843 11.1706 3.5 11.999 3.5Z" fill="currentColor" />
                                                        </svg>
                                                    </button>
                                                    <div className="share-btn-setting dropdown-menu dropdown-menu-end">
                                                        <button type="button" className="btn-setting-text share-text" data-bs-toggle="modal" data-bs-target="#shareModal">
                                                            Share
                                                        </button>
                                                        <button type="button" className="btn-setting-text report-text" data-bs-toggle="modal" data-bs-target="#reportModal">
                                                            Report
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                            <a href="product-details.html"><span className="product-name">#21 The Wonder</span></a>
                                            <span className="latest-bid">Highest bid 1/20</span>
                                            <div className="bid-react-area">
                                                <div className="last-bid">0.244wETH</div>
                                                <div className="react-area">
                                                    <svg viewBox="0 0 17 16" fill="none" width={16} height={16} className="sc-bdnxRM sc-hKFxyN kBvkOu">
                                                        <path d="M8.2112 14L12.1056 9.69231L14.1853 7.39185C15.2497 6.21455 15.3683 4.46116 14.4723 3.15121V3.15121C13.3207 1.46757 10.9637 1.15351 9.41139 2.47685L8.2112 3.5L6.95566 2.42966C5.40738 1.10976 3.06841 1.3603 1.83482 2.97819V2.97819C0.777858 4.36443 0.885104 6.31329 2.08779 7.57518L8.2112 14Z" stroke="currentColor" strokeWidth={2} />
                                                    </svg>
                                                    <span className="number">322</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* end single product */}
                                    {/* start single product */}
                                    <div className="single-slide-product">
                                        <div className="product-style-one">
                                            <div className="card-thumbnail">
                                                <a href="product-details.html"><img src="assets/images/portfolio/portfolio-03.jpg" alt="NFT_portfolio" /></a>
                                                <div className="countdown" data-date="2023-12-09">
                                                    <div className="countdown-container days">
                                                        <span className="countdown-value">87</span>
                                                        <span className="countdown-heading">D's</span>
                                                    </div>
                                                    <div className="countdown-container hours">
                                                        <span className="countdown-value">23</span>
                                                        <span className="countdown-heading">H's</span>
                                                    </div>
                                                    <div className="countdown-container minutes">
                                                        <span className="countdown-value">38</span>
                                                        <span className="countdown-heading">Min's</span>
                                                    </div>
                                                    <div className="countdown-container seconds">
                                                        <span className="countdown-value">27</span>
                                                        <span className="countdown-heading">Sec</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="product-share-wrapper">
                                                <div className="profile-share">
                                                    <a href="author.html" className="avatar" data-tooltip="Mona Lisa"><img src="assets/images/client/client-8.png" alt="Nft_Profile" /></a>
                                                    <a href="author.html" className="avatar" data-tooltip="Lisa"><img src="assets/images/client/client-4.png" alt="Nft_Profile" /></a>
                                                    <a href="author.html" className="avatar" data-tooltip="Mona"><img src="assets/images/client/client-9.png" alt="Nft_Profile" /></a>
                                                    <a className="more-author-text" href="#/">12+ Place Bit.</a>
                                                </div>
                                                <div className="share-btn share-btn-activation dropdown">
                                                    <button className="icon" data-bs-toggle="dropdown" aria-expanded="false">
                                                        <svg viewBox="0 0 14 4" fill="none" width={16} height={16} className="sc-bdnxRM sc-hKFxyN hOiKLt">
                                                            <path fillRule="evenodd" clipRule="evenodd" d="M3.5 2C3.5 2.82843 2.82843 3.5 2 3.5C1.17157 3.5 0.5 2.82843 0.5 2C0.5 1.17157 1.17157 0.5 2 0.5C2.82843 0.5 3.5 1.17157 3.5 2ZM8.5 2C8.5 2.82843 7.82843 3.5 7 3.5C6.17157 3.5 5.5 2.82843 5.5 2C5.5 1.17157 6.17157 0.5 7 0.5C7.82843 0.5 8.5 1.17157 8.5 2ZM11.999 3.5C12.8274 3.5 13.499 2.82843 13.499 2C13.499 1.17157 12.8274 0.5 11.999 0.5C11.1706 0.5 10.499 1.17157 10.499 2C10.499 2.82843 11.1706 3.5 11.999 3.5Z" fill="currentColor" />
                                                        </svg>
                                                    </button>
                                                    <div className="share-btn-setting dropdown-menu dropdown-menu-end">
                                                        <button type="button" className="btn-setting-text share-text" data-bs-toggle="modal" data-bs-target="#shareModal">
                                                            Share
                                                        </button>
                                                        <button type="button" className="btn-setting-text report-text" data-bs-toggle="modal" data-bs-target="#reportModal">
                                                            Report
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                            <a href="product-details.html"><span className="product-name">OrBid6</span></a>
                                            <span className="latest-bid">Highest bid 2/31</span>
                                            <div className="bid-react-area">
                                                <div className="last-bid">0.2128wETH</div>
                                                <div className="react-area">
                                                    <svg viewBox="0 0 17 16" fill="none" width={16} height={16} className="sc-bdnxRM sc-hKFxyN kBvkOu">
                                                        <path d="M8.2112 14L12.1056 9.69231L14.1853 7.39185C15.2497 6.21455 15.3683 4.46116 14.4723 3.15121V3.15121C13.3207 1.46757 10.9637 1.15351 9.41139 2.47685L8.2112 3.5L6.95566 2.42966C5.40738 1.10976 3.06841 1.3603 1.83482 2.97819V2.97819C0.777858 4.36443 0.885104 6.31329 2.08779 7.57518L8.2112 14Z" stroke="currentColor" strokeWidth={2} />
                                                    </svg>
                                                    <span className="number">12</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* end single product */}
                                    {/* start single product */}
                                    <div className="single-slide-product">
                                        <div className="product-style-one">
                                            <div className="card-thumbnail">
                                                <a href="product-details.html"><img src="assets/images/portfolio/portfolio-04.jpg" alt="NFT_portfolio" /></a>
                                                <div className="countdown" data-date="2024-10-08">
                                                    <div className="countdown-container days">
                                                        <span className="countdown-value">87</span>
                                                        <span className="countdown-heading">D's</span>
                                                    </div>
                                                    <div className="countdown-container hours">
                                                        <span className="countdown-value">23</span>
                                                        <span className="countdown-heading">H's</span>
                                                    </div>
                                                    <div className="countdown-container minutes">
                                                        <span className="countdown-value">38</span>
                                                        <span className="countdown-heading">Min's</span>
                                                    </div>
                                                    <div className="countdown-container seconds">
                                                        <span className="countdown-value">27</span>
                                                        <span className="countdown-heading">Sec</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="product-share-wrapper">
                                                <div className="profile-share">
                                                    <a href="author.html" className="avatar" data-tooltip="Falak Sabbir"><img src="assets/images/client/client-2.png" alt="Nft_Profile" /></a>
                                                    <a href="author.html" className="avatar" data-tooltip="Sabbir"><img src="assets/images/client/client-1.png" alt="Nft_Profile" /></a>
                                                    <a href="author.html" className="avatar" data-tooltip="Falak"><img src="assets/images/client/client-11.png" alt="Nft_Profile" /></a>
                                                    <a className="more-author-text" href="#/">16+ Place Bit.</a>
                                                </div>
                                                <div className="share-btn share-btn-activation dropdown">
                                                    <button className="icon" data-bs-toggle="dropdown" aria-expanded="false">
                                                        <svg viewBox="0 0 14 4" fill="none" width={16} height={16} className="sc-bdnxRM sc-hKFxyN hOiKLt">
                                                            <path fillRule="evenodd" clipRule="evenodd" d="M3.5 2C3.5 2.82843 2.82843 3.5 2 3.5C1.17157 3.5 0.5 2.82843 0.5 2C0.5 1.17157 1.17157 0.5 2 0.5C2.82843 0.5 3.5 1.17157 3.5 2ZM8.5 2C8.5 2.82843 7.82843 3.5 7 3.5C6.17157 3.5 5.5 2.82843 5.5 2C5.5 1.17157 6.17157 0.5 7 0.5C7.82843 0.5 8.5 1.17157 8.5 2ZM11.999 3.5C12.8274 3.5 13.499 2.82843 13.499 2C13.499 1.17157 12.8274 0.5 11.999 0.5C11.1706 0.5 10.499 1.17157 10.499 2C10.499 2.82843 11.1706 3.5 11.999 3.5Z" fill="currentColor" />
                                                        </svg>
                                                    </button>
                                                    <div className="share-btn-setting dropdown-menu dropdown-menu-end">
                                                        <button type="button" className="btn-setting-text share-text" data-bs-toggle="modal" data-bs-target="#shareModal">
                                                            Share
                                                        </button>
                                                        <button type="button" className="btn-setting-text report-text" data-bs-toggle="modal" data-bs-target="#reportModal">
                                                            Report
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                            <a href="product-details.html"><span className="product-name">Morgan11</span></a>
                                            <span className="latest-bid">Highest bid 3/16</span>
                                            <div className="bid-react-area">
                                                <div className="last-bid">0.265wETH</div>
                                                <div className="react-area">
                                                    <svg viewBox="0 0 17 16" fill="none" width={16} height={16} className="sc-bdnxRM sc-hKFxyN kBvkOu">
                                                        <path d="M8.2112 14L12.1056 9.69231L14.1853 7.39185C15.2497 6.21455 15.3683 4.46116 14.4723 3.15121V3.15121C13.3207 1.46757 10.9637 1.15351 9.41139 2.47685L8.2112 3.5L6.95566 2.42966C5.40738 1.10976 3.06841 1.3603 1.83482 2.97819V2.97819C0.777858 4.36443 0.885104 6.31329 2.08779 7.57518L8.2112 14Z" stroke="currentColor" strokeWidth={2} />
                                                    </svg>
                                                    <span className="number">20</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* end single product */}
                                    {/* start single product */}
                                    <div className="single-slide-product">
                                        <div className="product-style-one">
                                            <div className="card-thumbnail">
                                                <a href="product-details.html"><img src="assets/images/portfolio/portfolio-06.jpg" alt="NFT_portfolio" /></a>
                                                <div className="countdown" data-date="2023-11-08">
                                                    <div className="countdown-container days">
                                                        <span className="countdown-value">87</span>
                                                        <span className="countdown-heading">D's</span>
                                                    </div>
                                                    <div className="countdown-container hours">
                                                        <span className="countdown-value">23</span>
                                                        <span className="countdown-heading">H's</span>
                                                    </div>
                                                    <div className="countdown-container minutes">
                                                        <span className="countdown-value">38</span>
                                                        <span className="countdown-heading">Min's</span>
                                                    </div>
                                                    <div className="countdown-container seconds">
                                                        <span className="countdown-value">27</span>
                                                        <span className="countdown-heading">Sec</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="product-share-wrapper">
                                                <div className="profile-share">
                                                    <a href="author.html" className="avatar" data-tooltip="Oram Kasin"><img src="assets/images/client/client-8.png" alt="Nft_Profile" /></a>
                                                    <a href="author.html" className="avatar" data-tooltip="Kasin"><img src="assets/images/client/client-2.png" alt="Nft_Profile" /></a>
                                                    <a href="author.html" className="avatar" data-tooltip="Oram"><img src="assets/images/client/client-1.png" alt="Nft_Profile" /></a>
                                                    <a className="more-author-text" href="#/">10+ Place Bit.</a>
                                                </div>
                                                <div className="share-btn share-btn-activation dropdown">
                                                    <button className="icon" data-bs-toggle="dropdown" aria-expanded="false">
                                                        <svg viewBox="0 0 14 4" fill="none" width={16} height={16} className="sc-bdnxRM sc-hKFxyN hOiKLt">
                                                            <path fillRule="evenodd" clipRule="evenodd" d="M3.5 2C3.5 2.82843 2.82843 3.5 2 3.5C1.17157 3.5 0.5 2.82843 0.5 2C0.5 1.17157 1.17157 0.5 2 0.5C2.82843 0.5 3.5 1.17157 3.5 2ZM8.5 2C8.5 2.82843 7.82843 3.5 7 3.5C6.17157 3.5 5.5 2.82843 5.5 2C5.5 1.17157 6.17157 0.5 7 0.5C7.82843 0.5 8.5 1.17157 8.5 2ZM11.999 3.5C12.8274 3.5 13.499 2.82843 13.499 2C13.499 1.17157 12.8274 0.5 11.999 0.5C11.1706 0.5 10.499 1.17157 10.499 2C10.499 2.82843 11.1706 3.5 11.999 3.5Z" fill="currentColor" />
                                                        </svg>
                                                    </button>
                                                    <div className="share-btn-setting dropdown-menu dropdown-menu-end">
                                                        <button type="button" className="btn-setting-text share-text" data-bs-toggle="modal" data-bs-target="#shareModal">
                                                            Share
                                                        </button>
                                                        <button type="button" className="btn-setting-text report-text" data-bs-toggle="modal" data-bs-target="#reportModal">
                                                            Report
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                            <a href="product-details.html"><span className="product-name">mAtal8</span></a>
                                            <span className="latest-bid">Highest bid 6/50</span>
                                            <div className="bid-react-area">
                                                <div className="last-bid">0.244wETH</div>
                                                <div className="react-area">
                                                    <svg viewBox="0 0 17 16" fill="none" width={16} height={16} className="sc-bdnxRM sc-hKFxyN kBvkOu">
                                                        <path d="M8.2112 14L12.1056 9.69231L14.1853 7.39185C15.2497 6.21455 15.3683 4.46116 14.4723 3.15121V3.15121C13.3207 1.46757 10.9637 1.15351 9.41139 2.47685L8.2112 3.5L6.95566 2.42966C5.40738 1.10976 3.06841 1.3603 1.83482 2.97819V2.97819C0.777858 4.36443 0.885104 6.31329 2.08779 7.57518L8.2112 14Z" stroke="currentColor" strokeWidth={2} />
                                                    </svg>
                                                    <span className="number">205</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* end single product */}
                                    {/* start single product */}
                                    <div className="single-slide-product">
                                        <div className="product-style-one">
                                            <div className="card-thumbnail">
                                                <a href="product-details.html"><img src="assets/images/portfolio/portfolio-10.jpg" alt="NFT_portfolio" /></a>
                                                <div className="countdown" data-date="2023-11-08">
                                                    <div className="countdown-container days">
                                                        <span className="countdown-value">87</span>
                                                        <span className="countdown-heading">D's</span>
                                                    </div>
                                                    <div className="countdown-container hours">
                                                        <span className="countdown-value">23</span>
                                                        <span className="countdown-heading">H's</span>
                                                    </div>
                                                    <div className="countdown-container minutes">
                                                        <span className="countdown-value">38</span>
                                                        <span className="countdown-heading">Min's</span>
                                                    </div>
                                                    <div className="countdown-container seconds">
                                                        <span className="countdown-value">27</span>
                                                        <span className="countdown-heading">Sec</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="product-share-wrapper">
                                                <div className="profile-share">
                                                    <a href="author.html" className="avatar" data-tooltip="Oram Kasin"><img src="assets/images/client/client-10.png" alt="Nft_Profile" /></a>
                                                    <a href="author.html" className="avatar" data-tooltip="Kasin"><img src="assets/images/client/client-6.png" alt="Nft_Profile" /></a>
                                                    <a href="author.html" className="avatar" data-tooltip="Oram"><img src="assets/images/client/client-1.png" alt="Nft_Profile" /></a>
                                                    <a className="more-author-text" href="#/">11+ Place Bit.</a>
                                                </div>
                                                <div className="share-btn share-btn-activation dropdown">
                                                    <button className="icon" data-bs-toggle="dropdown" aria-expanded="false">
                                                        <svg viewBox="0 0 14 4" fill="none" width={16} height={16} className="sc-bdnxRM sc-hKFxyN hOiKLt">
                                                            <path fillRule="evenodd" clipRule="evenodd" d="M3.5 2C3.5 2.82843 2.82843 3.5 2 3.5C1.17157 3.5 0.5 2.82843 0.5 2C0.5 1.17157 1.17157 0.5 2 0.5C2.82843 0.5 3.5 1.17157 3.5 2ZM8.5 2C8.5 2.82843 7.82843 3.5 7 3.5C6.17157 3.5 5.5 2.82843 5.5 2C5.5 1.17157 6.17157 0.5 7 0.5C7.82843 0.5 8.5 1.17157 8.5 2ZM11.999 3.5C12.8274 3.5 13.499 2.82843 13.499 2C13.499 1.17157 12.8274 0.5 11.999 0.5C11.1706 0.5 10.499 1.17157 10.499 2C10.499 2.82843 11.1706 3.5 11.999 3.5Z" fill="currentColor" />
                                                        </svg>
                                                    </button>
                                                    <div className="share-btn-setting dropdown-menu dropdown-menu-end">
                                                        <button type="button" className="btn-setting-text share-text" data-bs-toggle="modal" data-bs-target="#shareModal">
                                                            Share
                                                        </button>
                                                        <button type="button" className="btn-setting-text report-text" data-bs-toggle="modal" data-bs-target="#reportModal">
                                                            Report
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                            <a href="product-details.html"><span className="product-name">Delta25</span></a>
                                            <span className="latest-bid">Highest bid 6/30</span>
                                            <div className="bid-react-area">
                                                <div className="last-bid">0.234wETH</div>
                                                <div className="react-area">
                                                    <svg viewBox="0 0 17 16" fill="none" width={16} height={16} className="sc-bdnxRM sc-hKFxyN kBvkOu">
                                                        <path d="M8.2112 14L12.1056 9.69231L14.1853 7.39185C15.2497 6.21455 15.3683 4.46116 14.4723 3.15121V3.15121C13.3207 1.46757 10.9637 1.15351 9.41139 2.47685L8.2112 3.5L6.95566 2.42966C5.40738 1.10976 3.06841 1.3603 1.83482 2.97819V2.97819C0.777858 4.36443 0.885104 6.31329 2.08779 7.57518L8.2112 14Z" stroke="currentColor" strokeWidth={2} />
                                                    </svg>
                                                    <span className="number">205</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* end single product */}
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Explore Style Carousel End*/}
        </div>
    )
}
export default ExploreCarousel;