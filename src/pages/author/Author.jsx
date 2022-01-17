import React from 'react'

const Author = () => {
    return (
        <div>
            <div className="rn-author-bg-area bg_image--9 bg_image ptb--150">
                <div className="container">
                    <div className="row">
                    </div>
                </div>
            </div>
            <div className="rn-author-area mb--30 mt_dec--120">
                <div className="container">
                    <div className="row padding-tb-50 align-items-center d-flex">
                        <div className="col-lg-12">
                            <div className="author-wrapper">
                                <div className="author-inner">
                                    <div className="user-thumbnail">
                                        <img src="assets/images/slider/banner-06.png" alt="" />
                                    </div>
                                    <div className="rn-author-info-content">
                                        <h4 className="title">MRS SUNAYRA AHSAN</h4>
                                        <a href="#/" className="social-follw">
                                            <i data-feather="twitter" />
                                            <span className="user-name">it0bsession</span>
                                        </a>
                                        <div className="follow-area">
                                            <div className="follow followers">
                                                <span>186k <a href="#/" className="color-body">followers</a></span>
                                            </div>
                                            <div className="follow following">
                                                <span>156 <a href="#/" className="color-body">following</a></span>
                                            </div>
                                        </div>
                                        <div className="author-button-area">
                                            <span className="btn at-follw follow-button"><i data-feather="user-plus" />
                                                Follow</span>
                                            <span className="btn at-follw share-button" data-bs-toggle="modal" data-bs-target="#shareModal"><i class="fas fa-share-alt"></i></span>
                                            <div className="count at-follw">
                                                <div className="share-btn share-btn-activation dropdown">
                                                    <button className="icon" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                        <svg viewBox="0 0 14 4" fill="none" width={16} height={16} className="sc-bdnxRM sc-hKFxyN hOiKLt">
                                                            <path fillRule="evenodd" clipRule="evenodd" d="M3.5 2C3.5 2.82843 2.82843 3.5 2 3.5C1.17157 3.5 0.5 2.82843 0.5 2C0.5 1.17157 1.17157 0.5 2 0.5C2.82843 0.5 3.5 1.17157 3.5 2ZM8.5 2C8.5 2.82843 7.82843 3.5 7 3.5C6.17157 3.5 5.5 2.82843 5.5 2C5.5 1.17157 6.17157 0.5 7 0.5C7.82843 0.5 8.5 1.17157 8.5 2ZM11.999 3.5C12.8274 3.5 13.499 2.82843 13.499 2C13.499 1.17157 12.8274 0.5 11.999 0.5C11.1706 0.5 10.499 1.17157 10.499 2C10.499 2.82843 11.1706 3.5 11.999 3.5Z" fill="currentColor" />
                                                        </svg>
                                                    </button>
                                                    <div className="share-btn-setting dropdown-menu dropdown-menu-end">
                                                        <button type="button" className="btn-setting-text report-text" data-bs-toggle="modal" data-bs-target="#reportModal">
                                                            Report
                                                        </button>
                                                        <button type="button" className="btn-setting-text report-text">
                                                            Claim Owenership
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="rn-authore-profile-area">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="tab-wrapper-one">
                                <nav className="tab-button-one">
                                    <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                        <button className="nav-link" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="false">On Sale</button>
                                        <button className="nav-link active" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="true">Owned</button>
                                        <button className="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Created</button>
                                        <button className="nav-link" id="nav-liked-tab" data-bs-toggle="tab" data-bs-target="#nav-liked" type="button" role="tab" aria-controls="nav-liked" aria-selected="false">Liked</button>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                    <div className="tab-content rn-bid-content" id="nav-tabContent">
                        <div className="tab-pane row g-5 d-flex fade" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                            {/* start single product */}
                            <div className="col-5 col-lg-4 col-md-6 col-sm-6 col-12">
                                <div className="product-style-one no-overlay with-placeBid">
                                    <div className="card-thumbnail">
                                        <a href="product-details.html">
                                            <img src="assets/images/portfolio/portfolio-09.jpg" alt="NFT_portfolio" />
                                        </a>
                                        <a href="product-details.html" className="btn btn-primary">Place Bid</a>
                                    </div>
                                    <div className="product-share-wrapper">
                                        <div className="profile-share">
                                            <a href="author.html" className="avatar" data-tooltip="Sadikur Ali"><img src="assets/images/client/client-2.png" alt="Nft_Profile" /></a>
                                            <a href="author.html" className="avatar" data-tooltip="Ali"><img src="assets/images/client/client-3.png" alt="Nft_Profile" /></a>
                                            <a href="author.html" className="avatar" data-tooltip="Sadikur"><img src="assets/images/client/client-4.png" alt="Nft_Profile" /></a>
                                            <a className="more-author-text" href="#/">9+ Place Bit.</a>
                                        </div>
                                        <div className="share-btn share-btn-activation dropdown">
                                            <button className="icon" type="button" data-bs-toggle="dropdown" aria-expanded="false">
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
                                    <a href="product-details.html"><span className="product-name">BadBo66</span></a>
                                    <span className="latest-bid">Highest bid 6/20</span>
                                    <div className="bid-react-area">
                                        <div className="last-bid">0.234wETH</div>
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
                            <div className="col-5 col-lg-4 col-md-6 col-sm-6 col-12">
                                <div className="product-style-one no-overlay with-placeBid">
                                    <div className="card-thumbnail">
                                        <a href="product-details.html">
                                            <img src="assets/images/portfolio/portfolio-10.jpg" alt="NFT_portfolio" />
                                        </a>
                                        <a href="product-details.html" className="btn btn-primary">Place Bid</a>
                                    </div>
                                    <div className="product-share-wrapper">
                                        <div className="profile-share">
                                            <a href="author.html" className="avatar" data-tooltip="Updane Jack"><img src="assets/images/client/client-1.png" alt="Nft_Profile" /></a>
                                            <a href="author.html" className="avatar" data-tooltip="Jack"><img src="assets/images/client/client-10.png" alt="Nft_Profile" /></a>
                                            <a href="author.html" className="avatar" data-tooltip="Updane"><img src="assets/images/client/client-11.png" alt="Nft_Profile" /></a>
                                            <a className="more-author-text" href="#/">10+ Place Bit.</a>
                                        </div>
                                        <div className="share-btn share-btn-activation dropdown">
                                            <button className="icon" type="button" data-bs-toggle="dropdown" aria-expanded="false">
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
                            <div className="col-5 col-lg-4 col-md-6 col-sm-6 col-12">
                                <div className="product-style-one no-overlay with-placeBid">
                                    <div className="card-thumbnail">
                                        <a href="product-details.html">
                                            <img src="assets/images/portfolio/portfolio-06.jpg" alt="NFT_portfolio" />
                                        </a>
                                        <a href="product-details.html" className="btn btn-primary">Place Bid</a>
                                    </div>
                                    <div className="product-share-wrapper">
                                        <div className="profile-share">
                                            <a href="author.html" className="avatar" data-tooltip="Rabbanin"><img src="assets/images/client/client-1.png" alt="Nft_Profile" /></a>
                                            <a href="author.html" className="avatar" data-tooltip="Sadik Rabbanin"><img src="assets/images/client/client-10.png" alt="Nft_Profile" /></a>
                                            <a href="author.html" className="avatar" data-tooltip="Sadika"><img src="assets/images/client/client-11.png" alt="Nft_Profile" /></a>
                                            <a className="more-author-text" href="#/">10+ Place Bit.</a>
                                        </div>
                                        <div className="share-btn share-btn-activation dropdown">
                                            <button className="icon" type="button" data-bs-toggle="dropdown" aria-expanded="false">
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
                                    <a href="product-details.html"><span className="product-name">ModaL6</span></a>
                                    <span className="latest-bid">Highest bid 2/20</span>
                                    <div className="bid-react-area">
                                        <div className="last-bid">0.344wETH</div>
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
                            <div className="col-5 col-lg-4 col-md-6 col-sm-6 col-12">
                                <div className="product-style-one no-overlay with-placeBid">
                                    <div className="card-thumbnail">
                                        <a href="product-details.html">
                                            <img src="assets/images/portfolio/portfolio-04.jpg" alt="NFT_portfolio" />
                                        </a>
                                        <a href="product-details.html" className="btn btn-primary">Place Bid</a>
                                    </div>
                                    <div className="product-share-wrapper">
                                        <div className="profile-share">
                                            <a href="author.html" className="avatar" data-tooltip="Saladin"><img src="assets/images/client/client-1.png" alt="Nft_Profile" /></a>
                                            <a href="author.html" className="avatar" data-tooltip="David Saladin"><img src="assets/images/client/client-10.png" alt="Nft_Profile" /></a>
                                            <a href="author.html" className="avatar" data-tooltip="David"><img src="assets/images/client/client-9.png" alt="Nft_Profile" /></a>
                                            <a className="more-author-text" href="#/">21+ Place Bit.</a>
                                        </div>
                                        <div className="share-btn share-btn-activation dropdown">
                                            <button className="icon" type="button" data-bs-toggle="dropdown" aria-expanded="false">
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
                                    <a href="product-details.html"><span className="product-name">Tabs38</span></a>
                                    <span className="latest-bid">Highest bid 3/30</span>
                                    <div className="bid-react-area">
                                        <div className="last-bid">0.544wETH</div>
                                        <div className="react-area">
                                            <svg viewBox="0 0 17 16" fill="none" width={16} height={16} className="sc-bdnxRM sc-hKFxyN kBvkOu">
                                                <path d="M8.2112 14L12.1056 9.69231L14.1853 7.39185C15.2497 6.21455 15.3683 4.46116 14.4723 3.15121V3.15121C13.3207 1.46757 10.9637 1.15351 9.41139 2.47685L8.2112 3.5L6.95566 2.42966C5.40738 1.10976 3.06841 1.3603 1.83482 2.97819V2.97819C0.777858 4.36443 0.885104 6.31329 2.08779 7.57518L8.2112 14Z" stroke="currentColor" strokeWidth={2} />
                                            </svg>
                                            <span className="number">422</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* end single product */}
                            {/* start single product */}
                            <div className="col-5 col-lg-4 col-md-6 col-sm-6 col-12">
                                <div className="product-style-one no-overlay with-placeBid">
                                    <div className="card-thumbnail">
                                        <a href="product-details.html">
                                            <img src="assets/images/portfolio/portfolio-05.jpg" alt="NFT_portfolio" />
                                        </a>
                                        <a href="product-details.html" className="btn btn-primary">Place Bid</a>
                                    </div>
                                    <div className="product-share-wrapper">
                                        <div className="profile-share">
                                            <a href="author.html" className="avatar" data-tooltip="Jope Baiden"><img src="assets/images/client/client-10.png" alt="Nft_Profile" /></a>
                                            <a href="author.html" className="avatar" data-tooltip="Jope"><img src="assets/images/client/client-11.png" alt="Nft_Profile" /></a>
                                            <a href="author.html" className="avatar" data-tooltip="Baiden"><img src="assets/images/client/client-9.png" alt="Nft_Profile" /></a>
                                            <a className="more-author-text" href="#/">12+ Place Bit.</a>
                                        </div>
                                        <div className="share-btn share-btn-activation dropdown">
                                            <button className="icon" type="button" data-bs-toggle="dropdown" aria-expanded="false">
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
                                    <a href="product-details.html"><span className="product-name">TopBad</span></a>
                                    <span className="latest-bid">Highest bid 6/20</span>
                                    <div className="bid-react-area">
                                        <div className="last-bid">0.244wETH</div>
                                        <div className="react-area">
                                            <svg viewBox="0 0 17 16" fill="none" width={16} height={16} className="sc-bdnxRM sc-hKFxyN kBvkOu">
                                                <path d="M8.2112 14L12.1056 9.69231L14.1853 7.39185C15.2497 6.21455 15.3683 4.46116 14.4723 3.15121V3.15121C13.3207 1.46757 10.9637 1.15351 9.41139 2.47685L8.2112 3.5L6.95566 2.42966C5.40738 1.10976 3.06841 1.3603 1.83482 2.97819V2.97819C0.777858 4.36443 0.885104 6.31329 2.08779 7.57518L8.2112 14Z" stroke="currentColor" strokeWidth={2} />
                                            </svg>
                                            <span className="number">124</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* end single product */}
                            {/* start single product */}
                            <div className="col-5 col-lg-4 col-md-6 col-sm-6 col-12">
                                <div className="product-style-one no-overlay with-placeBid">
                                    <div className="card-thumbnail">
                                        <a href="product-details.html">
                                            <img src="assets/images/portfolio/portfolio-06.jpg" alt="NFT_portfolio" />
                                        </a>
                                        <a href="product-details.html" className="btn btn-primary">Place Bid</a>
                                    </div>
                                    <div className="product-share-wrapper">
                                        <div className="profile-share">
                                            <a href="author.html" className="avatar" data-tooltip="Tawhid Sabir"><img src="assets/images/client/client-1.png" alt="Nft_Profile" /></a>
                                            <a href="author.html" className="avatar" data-tooltip="Tawhid"><img src="assets/images/client/client-10.png" alt="Nft_Profile" /></a>
                                            <a href="author.html" className="avatar" data-tooltip="Sabir"><img src="assets/images/client/client-11.png" alt="Nft_Profile" /></a>
                                            <a className="more-author-text" href="#/">5+ Place Bit.</a>
                                        </div>
                                        <div className="share-btn share-btn-activation dropdown">
                                            <button className="icon" type="button" data-bs-toggle="dropdown" aria-expanded="false">
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
                                    <a href="product-details.html"><span className="product-name">NameStroam</span></a>
                                    <span className="latest-bid">Highest bid 1/20</span>
                                    <div className="bid-react-area">
                                        <div className="last-bid">0.244wETH</div>
                                        <div className="react-area">
                                            <svg viewBox="0 0 17 16" fill="none" width={16} height={16} className="sc-bdnxRM sc-hKFxyN kBvkOu">
                                                <path d="M8.2112 14L12.1056 9.69231L14.1853 7.39185C15.2497 6.21455 15.3683 4.46116 14.4723 3.15121V3.15121C13.3207 1.46757 10.9637 1.15351 9.41139 2.47685L8.2112 3.5L6.95566 2.42966C5.40738 1.10976 3.06841 1.3603 1.83482 2.97819V2.97819C0.777858 4.36443 0.885104 6.31329 2.08779 7.57518L8.2112 14Z" stroke="currentColor" strokeWidth={2} />
                                            </svg>
                                            <span className="number">532</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* end single product */}
                            {/* start single product */}
                            <div className="col-5 col-lg-4 col-md-6 col-sm-6 col-12">
                                <div className="product-style-one no-overlay with-placeBid">
                                    <div className="card-thumbnail">
                                        <a href="product-details.html">
                                            <img src="assets/images/portfolio/portfolio-07.jpg" alt="NFT_portfolio" />
                                        </a>
                                        <a href="product-details.html" className="btn btn-primary">Place Bid</a>
                                    </div>
                                    <div className="product-share-wrapper">
                                        <div className="profile-share">
                                            <a href="author.html" className="avatar" data-tooltip="Total Mars"><img src="assets/images/client/client-6.png" alt="Nft_Profile" /></a>
                                            <a href="author.html" className="avatar" data-tooltip="Total"><img src="assets/images/client/client-5.png" alt="Nft_Profile" /></a>
                                            <a href="author.html" className="avatar" data-tooltip="Mars"><img src="assets/images/client/client-10.png" alt="Nft_Profile" /></a>
                                            <a className="more-author-text" href="#/">9+ Place Bit.</a>
                                        </div>
                                        <div className="share-btn share-btn-activation dropdown">
                                            <button className="icon" type="button" data-bs-toggle="dropdown" aria-expanded="false">
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
                                    <a href="product-details.html"><span className="product-name">Scourd</span></a>
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
                            <div className="col-5 col-lg-4 col-md-6 col-sm-6 col-12">
                                <div className="product-style-one no-overlay with-placeBid">
                                    <div className="card-thumbnail">
                                        <a href="product-details.html">
                                            <img src="assets/images/portfolio/portfolio-05.jpg" alt="NFT_portfolio" />
                                        </a>
                                        <a href="product-details.html" className="btn btn-primary">Place Bid</a>
                                    </div>
                                    <div className="product-share-wrapper">
                                        <div className="profile-share">
                                            <a href="author.html" className="avatar" data-tooltip="David Worner"><img src="assets/images/client/client-1.png" alt="Nft_Profile" /></a>
                                            <a href="author.html" className="avatar" data-tooltip="Worner"><img src="assets/images/client/client-10.png" alt="Nft_Profile" /></a>
                                            <a href="author.html" className="avatar" data-tooltip="David"><img src="assets/images/client/client-11.png" alt="Nft_Profile" /></a>
                                            <a className="more-author-text" href="#/">16+ Place Bit.</a>
                                        </div>
                                        <div className="share-btn share-btn-activation dropdown">
                                            <button className="icon" type="button" data-bs-toggle="dropdown" aria-expanded="false">
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
                                    <a href="product-details.html"><span className="product-name">Resord</span></a>
                                    <span className="latest-bid">Highest bid 1/20</span>
                                    <div className="bid-react-area">
                                        <div className="last-bid">0.264wETH</div>
                                        <div className="react-area">
                                            <svg viewBox="0 0 17 16" fill="none" width={16} height={16} className="sc-bdnxRM sc-hKFxyN kBvkOu">
                                                <path d="M8.2112 14L12.1056 9.69231L14.1853 7.39185C15.2497 6.21455 15.3683 4.46116 14.4723 3.15121V3.15121C13.3207 1.46757 10.9637 1.15351 9.41139 2.47685L8.2112 3.5L6.95566 2.42966C5.40738 1.10976 3.06841 1.3603 1.83482 2.97819V2.97819C0.777858 4.36443 0.885104 6.31329 2.08779 7.57518L8.2112 14Z" stroke="currentColor" strokeWidth={2} />
                                            </svg>
                                            <span className="number">622</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* end single product */}
                            {/* start single product */}
                            <div className="col-5 col-lg-4 col-md-6 col-sm-6 col-12">
                                <div className="product-style-one no-overlay with-placeBid">
                                    <div className="card-thumbnail">
                                        <a href="product-details.html">
                                            <img src="assets/images/portfolio/portfolio-09.jpg" alt="NFT_portfolio" />
                                        </a>
                                        <a href="product-details.html" className="btn btn-primary">Place Bid</a>
                                    </div>
                                    <div className="product-share-wrapper">
                                        <div className="profile-share">
                                            <a href="author.html" className="avatar" data-tooltip="Sobuj Shaikh"><img src="assets/images/client/client-10.png" alt="Nft_Profile" /></a>
                                            <a href="author.html" className="avatar" data-tooltip="Sobuj"><img src="assets/images/client/client-11.png" alt="Nft_Profile" /></a>
                                            <a href="author.html" className="avatar" data-tooltip="Shaikh"><img src="assets/images/client/client-1.png" alt="Nft_Profile" /></a>
                                            <a className="more-author-text" href="#/">22+ Place Bit.</a>
                                        </div>
                                        <div className="share-btn share-btn-activation dropdown">
                                            <button className="icon" type="button" data-bs-toggle="dropdown" aria-expanded="false">
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
                                    <a href="product-details.html"><span className="product-name">Jackpot</span></a>
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
                            <div className="col-5 col-lg-4 col-md-6 col-sm-6 col-12">
                                <div className="product-style-one no-overlay with-placeBid">
                                    <div className="card-thumbnail">
                                        <a href="product-details.html">
                                            <img src="assets/images/portfolio/portfolio-10.jpg" alt="NFT_portfolio" />
                                        </a>
                                        <a href="product-details.html" className="btn btn-primary">Place Bid</a>
                                    </div>
                                    <div className="product-share-wrapper">
                                        <div className="profile-share">
                                            <a href="author.html" className="avatar" data-tooltip="MArk Jone"><img src="assets/images/client/client-4.png" alt="Nft_Profile" /></a>
                                            <a href="author.html" className="avatar" data-tooltip="MArk"><img src="assets/images/client/client-5.png" alt="Nft_Profile" /></a>
                                            <a href="author.html" className="avatar" data-tooltip="Jone"><img src="assets/images/client/client-8.png" alt="Nft_Profile" /></a>
                                            <a className="more-author-text" href="#/">13+ Place Bit.</a>
                                        </div>
                                        <div className="share-btn share-btn-activation dropdown">
                                            <button className="icon" type="button" data-bs-toggle="dropdown" aria-expanded="false">
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
                                    <a href="product-details.html"><span className="product-name">Xtreames</span></a>
                                    <span className="latest-bid">Highest bid 1/20</span>
                                    <div className="bid-react-area">
                                        <div className="last-bid">0.244wETH</div>
                                        <div className="react-area">
                                            <svg viewBox="0 0 17 16" fill="none" width={16} height={16} className="sc-bdnxRM sc-hKFxyN kBvkOu">
                                                <path d="M8.2112 14L12.1056 9.69231L14.1853 7.39185C15.2497 6.21455 15.3683 4.46116 14.4723 3.15121V3.15121C13.3207 1.46757 10.9637 1.15351 9.41139 2.47685L8.2112 3.5L6.95566 2.42966C5.40738 1.10976 3.06841 1.3603 1.83482 2.97819V2.97819C0.777858 4.36443 0.885104 6.31329 2.08779 7.57518L8.2112 14Z" stroke="currentColor" strokeWidth={2} />
                                            </svg>
                                            <span className="number">922</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* end single product */}
                        </div>
                        <div className="tab-pane row g-5 d-flex fade show active" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                            {/* start single product */}
                            <div className="col-5 col-lg-4 col-md-6 col-sm-6 col-12">
                                <div className="product-style-one no-overlay with-placeBid">
                                    <div className="card-thumbnail">
                                        <a href="product-details.html">
                                            <img src="assets/images/portfolio/portfolio-06.jpg" alt="NFT_portfolio" />
                                        </a>
                                        <a href="product-details.html" className="btn btn-primary">Place Bid</a>
                                    </div>
                                    <div className="product-share-wrapper">
                                        <div className="profile-share">
                                            <a href="author.html" className="avatar" data-tooltip="Tawhid Sabir"><img src="assets/images/client/client-1.png" alt="Nft_Profile" /></a>
                                            <a href="author.html" className="avatar" data-tooltip="Tawhid"><img src="assets/images/client/client-10.png" alt="Nft_Profile" /></a>
                                            <a href="author.html" className="avatar" data-tooltip="Sabir"><img src="assets/images/client/client-11.png" alt="Nft_Profile" /></a>
                                            <a className="more-author-text" href="#/">5+ Place Bit.</a>
                                        </div>
                                        <div className="share-btn share-btn-activation dropdown">
                                            <button className="icon" type="button" data-bs-toggle="dropdown" aria-expanded="false">
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
                                    <a href="product-details.html"><span className="product-name">NameStroam</span></a>
                                    <span className="latest-bid">Highest bid 1/20</span>
                                    <div className="bid-react-area">
                                        <div className="last-bid">0.244wETH</div>
                                        <div className="react-area">
                                            <svg viewBox="0 0 17 16" fill="none" width={16} height={16} className="sc-bdnxRM sc-hKFxyN kBvkOu">
                                                <path d="M8.2112 14L12.1056 9.69231L14.1853 7.39185C15.2497 6.21455 15.3683 4.46116 14.4723 3.15121V3.15121C13.3207 1.46757 10.9637 1.15351 9.41139 2.47685L8.2112 3.5L6.95566 2.42966C5.40738 1.10976 3.06841 1.3603 1.83482 2.97819V2.97819C0.777858 4.36443 0.885104 6.31329 2.08779 7.57518L8.2112 14Z" stroke="currentColor" strokeWidth={2} />
                                            </svg>
                                            <span className="number">532</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* end single product */}
                            {/* start single product */}
                            <div className="col-5 col-lg-4 col-md-6 col-sm-6 col-12">
                                <div className="product-style-one no-overlay with-placeBid">
                                    <div className="card-thumbnail">
                                        <a href="product-details.html">
                                            <img src="assets/images/portfolio/portfolio-07.jpg" alt="NFT_portfolio" />
                                        </a>
                                        <a href="product-details.html" className="btn btn-primary">Place Bid</a>
                                    </div>
                                    <div className="product-share-wrapper">
                                        <div className="profile-share">
                                            <a href="author.html" className="avatar" data-tooltip="Total Mars"><img src="assets/images/client/client-6.png" alt="Nft_Profile" /></a>
                                            <a href="author.html" className="avatar" data-tooltip="Total"><img src="assets/images/client/client-5.png" alt="Nft_Profile" /></a>
                                            <a href="author.html" className="avatar" data-tooltip="Mars"><img src="assets/images/client/client-10.png" alt="Nft_Profile" /></a>
                                            <a className="more-author-text" href="#/">9+ Place Bit.</a>
                                        </div>
                                        <div className="share-btn share-btn-activation dropdown">
                                            <button className="icon" type="button" data-bs-toggle="dropdown" aria-expanded="false">
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
                                    <a href="product-details.html"><span className="product-name">Scourd</span></a>
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
                            <div className="col-5 col-lg-4 col-md-6 col-sm-6 col-12">
                                <div className="product-style-one no-overlay with-placeBid">
                                    <div className="card-thumbnail">
                                        <a href="product-details.html">
                                            <img src="assets/images/portfolio/portfolio-05.jpg" alt="NFT_portfolio" />
                                        </a>
                                        <a href="product-details.html" className="btn btn-primary">Place Bid</a>
                                    </div>
                                    <div className="product-share-wrapper">
                                        <div className="profile-share">
                                            <a href="author.html" className="avatar" data-tooltip="David Worner"><img src="assets/images/client/client-1.png" alt="Nft_Profile" /></a>
                                            <a href="author.html" className="avatar" data-tooltip="Worner"><img src="assets/images/client/client-10.png" alt="Nft_Profile" /></a>
                                            <a href="author.html" className="avatar" data-tooltip="David"><img src="assets/images/client/client-11.png" alt="Nft_Profile" /></a>
                                            <a className="more-author-text" href="#/">16+ Place Bit.</a>
                                        </div>
                                        <div className="share-btn share-btn-activation dropdown">
                                            <button className="icon" type="button" data-bs-toggle="dropdown" aria-expanded="false">
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
                                    <a href="product-details.html"><span className="product-name">Resord</span></a>
                                    <span className="latest-bid">Highest bid 1/20</span>
                                    <div className="bid-react-area">
                                        <div className="last-bid">0.264wETH</div>
                                        <div className="react-area">
                                            <svg viewBox="0 0 17 16" fill="none" width={16} height={16} className="sc-bdnxRM sc-hKFxyN kBvkOu">
                                                <path d="M8.2112 14L12.1056 9.69231L14.1853 7.39185C15.2497 6.21455 15.3683 4.46116 14.4723 3.15121V3.15121C13.3207 1.46757 10.9637 1.15351 9.41139 2.47685L8.2112 3.5L6.95566 2.42966C5.40738 1.10976 3.06841 1.3603 1.83482 2.97819V2.97819C0.777858 4.36443 0.885104 6.31329 2.08779 7.57518L8.2112 14Z" stroke="currentColor" strokeWidth={2} />
                                            </svg>
                                            <span className="number">622</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* end single product */}
                            {/* start single product */}
                            <div className="col-5 col-lg-4 col-md-6 col-sm-6 col-12">
                                <div className="product-style-one no-overlay with-placeBid">
                                    <div className="card-thumbnail">
                                        <a href="product-details.html">
                                            <img src="assets/images/portfolio/portfolio-09.jpg" alt="NFT_portfolio" />
                                        </a>
                                        <a href="product-details.html" className="btn btn-primary">Place Bid</a>
                                    </div>
                                    <div className="product-share-wrapper">
                                        <div className="profile-share">
                                            <a href="author.html" className="avatar" data-tooltip="Sobuj Shaikh"><img src="assets/images/client/client-10.png" alt="Nft_Profile" /></a>
                                            <a href="author.html" className="avatar" data-tooltip="Sobuj"><img src="assets/images/client/client-11.png" alt="Nft_Profile" /></a>
                                            <a href="author.html" className="avatar" data-tooltip="Shaikh"><img src="assets/images/client/client-1.png" alt="Nft_Profile" /></a>
                                            <a className="more-author-text" href="#/">22+ Place Bit.</a>
                                        </div>
                                        <div className="share-btn share-btn-activation dropdown">
                                            <button className="icon" type="button" data-bs-toggle="dropdown" aria-expanded="false">
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
                                    <a href="product-details.html"><span className="product-name">Jackpot</span></a>
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
                            <div className="col-5 col-lg-4 col-md-6 col-sm-6 col-12">
                                <div className="product-style-one no-overlay with-placeBid">
                                    <div className="card-thumbnail">
                                        <a href="product-details.html">
                                            <img src="assets/images/portfolio/portfolio-10.jpg" alt="NFT_portfolio" />
                                        </a>
                                        <a href="product-details.html" className="btn btn-primary">Place Bid</a>
                                    </div>
                                    <div className="product-share-wrapper">
                                        <div className="profile-share">
                                            <a href="author.html" className="avatar" data-tooltip="MArk Jone"><img src="assets/images/client/client-4.png" alt="Nft_Profile" /></a>
                                            <a href="author.html" className="avatar" data-tooltip="MArk"><img src="assets/images/client/client-5.png" alt="Nft_Profile" /></a>
                                            <a href="author.html" className="avatar" data-tooltip="Jone"><img src="assets/images/client/client-8.png" alt="Nft_Profile" /></a>
                                            <a className="more-author-text" href="#/">13+ Place Bit.</a>
                                        </div>
                                        <div className="share-btn share-btn-activation dropdown">
                                            <button className="icon" type="button" data-bs-toggle="dropdown" aria-expanded="false">
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
                                    <a href="product-details.html"><span className="product-name">Xtreames</span></a>
                                    <span className="latest-bid">Highest bid 1/20</span>
                                    <div className="bid-react-area">
                                        <div className="last-bid">0.244wETH</div>
                                        <div className="react-area">
                                            <svg viewBox="0 0 17 16" fill="none" width={16} height={16} className="sc-bdnxRM sc-hKFxyN kBvkOu">
                                                <path d="M8.2112 14L12.1056 9.69231L14.1853 7.39185C15.2497 6.21455 15.3683 4.46116 14.4723 3.15121V3.15121C13.3207 1.46757 10.9637 1.15351 9.41139 2.47685L8.2112 3.5L6.95566 2.42966C5.40738 1.10976 3.06841 1.3603 1.83482 2.97819V2.97819C0.777858 4.36443 0.885104 6.31329 2.08779 7.57518L8.2112 14Z" stroke="currentColor" strokeWidth={2} />
                                            </svg>
                                            <span className="number">922</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* end single product */}
                            {/* start single product */}
                            <div className="col-5 col-lg-4 col-md-6 col-sm-6 col-12">
                                <div className="product-style-one no-overlay with-placeBid">
                                    <div className="card-thumbnail">
                                        <a href="product-details.html">
                                            <img src="assets/images/portfolio/portfolio-06.jpg" alt="NFT_portfolio" />
                                        </a>
                                        <a href="product-details.html" className="btn btn-primary">Place Bid</a>
                                    </div>
                                    <div className="product-share-wrapper">
                                        <div className="profile-share">
                                            <a href="author.html" className="avatar" data-tooltip="Tawhid Sabir"><img src="assets/images/client/client-1.png" alt="Nft_Profile" /></a>
                                            <a href="author.html" className="avatar" data-tooltip="Tawhid"><img src="assets/images/client/client-10.png" alt="Nft_Profile" /></a>
                                            <a href="author.html" className="avatar" data-tooltip="Sabir"><img src="assets/images/client/client-11.png" alt="Nft_Profile" /></a>
                                            <a className="more-author-text" href="#/">5+ Place Bit.</a>
                                        </div>
                                        <div className="share-btn share-btn-activation dropdown">
                                            <button className="icon" type="button" data-bs-toggle="dropdown" aria-expanded="false">
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
                                    <a href="product-details.html"><span className="product-name">NameStroam</span></a>
                                    <span className="latest-bid">Highest bid 1/20</span>
                                    <div className="bid-react-area">
                                        <div className="last-bid">0.244wETH</div>
                                        <div className="react-area">
                                            <svg viewBox="0 0 17 16" fill="none" width={16} height={16} className="sc-bdnxRM sc-hKFxyN kBvkOu">
                                                <path d="M8.2112 14L12.1056 9.69231L14.1853 7.39185C15.2497 6.21455 15.3683 4.46116 14.4723 3.15121V3.15121C13.3207 1.46757 10.9637 1.15351 9.41139 2.47685L8.2112 3.5L6.95566 2.42966C5.40738 1.10976 3.06841 1.3603 1.83482 2.97819V2.97819C0.777858 4.36443 0.885104 6.31329 2.08779 7.57518L8.2112 14Z" stroke="currentColor" strokeWidth={2} />
                                            </svg>
                                            <span className="number">532</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* end single product */}
                            {/* start single product */}
                            <div className="col-5 col-lg-4 col-md-6 col-sm-6 col-12">
                                <div className="product-style-one no-overlay with-placeBid">
                                    <div className="card-thumbnail">
                                        <a href="product-details.html">
                                            <img src="assets/images/portfolio/portfolio-07.jpg" alt="NFT_portfolio" />
                                        </a>
                                        <a href="product-details.html" className="btn btn-primary">Place Bid</a>
                                    </div>
                                    <div className="product-share-wrapper">
                                        <div className="profile-share">
                                            <a href="author.html" className="avatar" data-tooltip="Total Mars"><img src="assets/images/client/client-6.png" alt="Nft_Profile" /></a>
                                            <a href="author.html" className="avatar" data-tooltip="Total"><img src="assets/images/client/client-5.png" alt="Nft_Profile" /></a>
                                            <a href="author.html" className="avatar" data-tooltip="Mars"><img src="assets/images/client/client-10.png" alt="Nft_Profile" /></a>
                                            <a className="more-author-text" href="#/">9+ Place Bit.</a>
                                        </div>
                                        <div className="share-btn share-btn-activation dropdown">
                                            <button className="icon" type="button" data-bs-toggle="dropdown" aria-expanded="false">
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
                                    <a href="product-details.html"><span className="product-name">Scourd</span></a>
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
                            <div className="col-5 col-lg-4 col-md-6 col-sm-6 col-12">
                                <div className="product-style-one no-overlay with-placeBid">
                                    <div className="card-thumbnail">
                                        <a href="product-details.html">
                                            <img src="assets/images/portfolio/portfolio-05.jpg" alt="NFT_portfolio" />
                                        </a>
                                        <a href="product-details.html" className="btn btn-primary">Place Bid</a>
                                    </div>
                                    <div className="product-share-wrapper">
                                        <div className="profile-share">
                                            <a href="author.html" className="avatar" data-tooltip="David Worner"><img src="assets/images/client/client-1.png" alt="Nft_Profile" /></a>
                                            <a href="author.html" className="avatar" data-tooltip="Worner"><img src="assets/images/client/client-10.png" alt="Nft_Profile" /></a>
                                            <a href="author.html" className="avatar" data-tooltip="David"><img src="assets/images/client/client-11.png" alt="Nft_Profile" /></a>
                                            <a className="more-author-text" href="#/">16+ Place Bit.</a>
                                        </div>
                                        <div className="share-btn share-btn-activation dropdown">
                                            <button className="icon" type="button" data-bs-toggle="dropdown" aria-expanded="false">
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
                                    <a href="product-details.html"><span className="product-name">Resord</span></a>
                                    <span className="latest-bid">Highest bid 1/20</span>
                                    <div className="bid-react-area">
                                        <div className="last-bid">0.264wETH</div>
                                        <div className="react-area">
                                            <svg viewBox="0 0 17 16" fill="none" width={16} height={16} className="sc-bdnxRM sc-hKFxyN kBvkOu">
                                                <path d="M8.2112 14L12.1056 9.69231L14.1853 7.39185C15.2497 6.21455 15.3683 4.46116 14.4723 3.15121V3.15121C13.3207 1.46757 10.9637 1.15351 9.41139 2.47685L8.2112 3.5L6.95566 2.42966C5.40738 1.10976 3.06841 1.3603 1.83482 2.97819V2.97819C0.777858 4.36443 0.885104 6.31329 2.08779 7.57518L8.2112 14Z" stroke="currentColor" strokeWidth={2} />
                                            </svg>
                                            <span className="number">622</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* end single product */}
                            {/* start single product */}
                            <div className="col-5 col-lg-4 col-md-6 col-sm-6 col-12">
                                <div className="product-style-one no-overlay with-placeBid">
                                    <div className="card-thumbnail">
                                        <a href="product-details.html">
                                            <img src="assets/images/portfolio/portfolio-09.jpg" alt="NFT_portfolio" />
                                        </a>
                                        <a href="product-details.html" className="btn btn-primary">Place Bid</a>
                                    </div>
                                    <div className="product-share-wrapper">
                                        <div className="profile-share">
                                            <a href="author.html" className="avatar" data-tooltip="Sobuj Shaikh"><img src="assets/images/client/client-10.png" alt="Nft_Profile" /></a>
                                            <a href="author.html" className="avatar" data-tooltip="Sobuj"><img src="assets/images/client/client-11.png" alt="Nft_Profile" /></a>
                                            <a href="author.html" className="avatar" data-tooltip="Shaikh"><img src="assets/images/client/client-1.png" alt="Nft_Profile" /></a>
                                            <a className="more-author-text" href="#/">22+ Place Bit.</a>
                                        </div>
                                        <div className="share-btn share-btn-activation dropdown">
                                            <button className="icon" type="button" data-bs-toggle="dropdown" aria-expanded="false">
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
                                    <a href="product-details.html"><span className="product-name">Jackpot</span></a>
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
                            <div className="col-5 col-lg-4 col-md-6 col-sm-6 col-12">
                                <div className="product-style-one no-overlay with-placeBid">
                                    <div className="card-thumbnail">
                                        <a href="product-details.html">
                                            <img src="assets/images/portfolio/portfolio-10.jpg" alt="NFT_portfolio" />
                                        </a>
                                        <a href="product-details.html" className="btn btn-primary">Place Bid</a>
                                    </div>
                                    <div className="product-share-wrapper">
                                        <div className="profile-share">
                                            <a href="author.html" className="avatar" data-tooltip="MArk Jone"><img src="assets/images/client/client-4.png" alt="Nft_Profile" /></a>
                                            <a href="author.html" className="avatar" data-tooltip="MArk"><img src="assets/images/client/client-5.png" alt="Nft_Profile" /></a>
                                            <a href="author.html" className="avatar" data-tooltip="Jone"><img src="assets/images/client/client-8.png" alt="Nft_Profile" /></a>
                                            <a className="more-author-text" href="#/">13+ Place Bit.</a>
                                        </div>
                                        <div className="share-btn share-btn-activation dropdown">
                                            <button className="icon" type="button" data-bs-toggle="dropdown" aria-expanded="false">
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
                                    <a href="product-details.html"><span className="product-name">Xtreames</span></a>
                                    <span className="latest-bid">Highest bid 1/20</span>
                                    <div className="bid-react-area">
                                        <div className="last-bid">0.244wETH</div>
                                        <div className="react-area">
                                            <svg viewBox="0 0 17 16" fill="none" width={16} height={16} className="sc-bdnxRM sc-hKFxyN kBvkOu">
                                                <path d="M8.2112 14L12.1056 9.69231L14.1853 7.39185C15.2497 6.21455 15.3683 4.46116 14.4723 3.15121V3.15121C13.3207 1.46757 10.9637 1.15351 9.41139 2.47685L8.2112 3.5L6.95566 2.42966C5.40738 1.10976 3.06841 1.3603 1.83482 2.97819V2.97819C0.777858 4.36443 0.885104 6.31329 2.08779 7.57518L8.2112 14Z" stroke="currentColor" strokeWidth={2} />
                                            </svg>
                                            <span className="number">922</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* end single product */}
                        </div>
                        <div className="tab-pane row g-5 d-flex fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
                            {/* start single product */}
                            <div className="col-5 col-lg-4 col-md-6 col-sm-6 col-12">
                                <div className="product-style-one no-overlay with-placeBid">
                                    <div className="card-thumbnail">
                                        <a href="product-details.html">
                                            <img src="assets/images/portfolio/portfolio-09.jpg" alt="NFT_portfolio" />
                                        </a>
                                        <a href="product-details.html" className="btn btn-primary">Place Bid</a>
                                    </div>
                                    <div className="product-share-wrapper">
                                        <div className="profile-share">
                                            <a href="author.html" className="avatar" data-tooltip="Sadikur Ali"><img src="assets/images/client/client-2.png" alt="Nft_Profile" /></a>
                                            <a href="author.html" className="avatar" data-tooltip="Ali"><img src="assets/images/client/client-3.png" alt="Nft_Profile" /></a>
                                            <a href="author.html" className="avatar" data-tooltip="Sadikur"><img src="assets/images/client/client-4.png" alt="Nft_Profile" /></a>
                                            <a className="more-author-text" href="#/">9+ Place Bit.</a>
                                        </div>
                                        <div className="share-btn share-btn-activation dropdown">
                                            <button className="icon" type="button" data-bs-toggle="dropdown" aria-expanded="false">
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
                                    <a href="product-details.html"><span className="product-name">BadBo66</span></a>
                                    <span className="latest-bid">Highest bid 6/20</span>
                                    <div className="bid-react-area">
                                        <div className="last-bid">0.234wETH</div>
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
                            <div className="col-5 col-lg-4 col-md-6 col-sm-6 col-12">
                                <div className="product-style-one no-overlay with-placeBid">
                                    <div className="card-thumbnail">
                                        <a href="product-details.html">
                                            <img src="assets/images/portfolio/portfolio-10.jpg" alt="NFT_portfolio" />
                                        </a>
                                        <a href="product-details.html" className="btn btn-primary">Place Bid</a>
                                    </div>
                                    <div className="product-share-wrapper">
                                        <div className="profile-share">
                                            <a href="author.html" className="avatar" data-tooltip="Updane Jack"><img src="assets/images/client/client-1.png" alt="Nft_Profile" /></a>
                                            <a href="author.html" className="avatar" data-tooltip="Jack"><img src="assets/images/client/client-10.png" alt="Nft_Profile" /></a>
                                            <a href="author.html" className="avatar" data-tooltip="Updane"><img src="assets/images/client/client-11.png" alt="Nft_Profile" /></a>
                                            <a className="more-author-text" href="#/">10+ Place Bit.</a>
                                        </div>
                                        <div className="share-btn share-btn-activation dropdown">
                                            <button className="icon" type="button" data-bs-toggle="dropdown" aria-expanded="false">
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
                            <div className="col-5 col-lg-4 col-md-6 col-sm-6 col-12">
                                <div className="product-style-one no-overlay with-placeBid">
                                    <div className="card-thumbnail">
                                        <a href="product-details.html">
                                            <img src="assets/images/portfolio/portfolio-06.jpg" alt="NFT_portfolio" />
                                        </a>
                                        <a href="product-details.html" className="btn btn-primary">Place Bid</a>
                                    </div>
                                    <div className="product-share-wrapper">
                                        <div className="profile-share">
                                            <a href="author.html" className="avatar" data-tooltip="Rabbanin"><img src="assets/images/client/client-1.png" alt="Nft_Profile" /></a>
                                            <a href="author.html" className="avatar" data-tooltip="Sadik Rabbanin"><img src="assets/images/client/client-10.png" alt="Nft_Profile" /></a>
                                            <a href="author.html" className="avatar" data-tooltip="Sadika"><img src="assets/images/client/client-11.png" alt="Nft_Profile" /></a>
                                            <a className="more-author-text" href="#/">10+ Place Bit.</a>
                                        </div>
                                        <div className="share-btn share-btn-activation dropdown">
                                            <button className="icon" type="button" data-bs-toggle="dropdown" aria-expanded="false">
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
                                    <a href="product-details.html"><span className="product-name">ModaL6</span></a>
                                    <span className="latest-bid">Highest bid 2/20</span>
                                    <div className="bid-react-area">
                                        <div className="last-bid">0.344wETH</div>
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
                            <div className="col-5 col-lg-4 col-md-6 col-sm-6 col-12">
                                <div className="product-style-one no-overlay with-placeBid">
                                    <div className="card-thumbnail">
                                        <a href="product-details.html">
                                            <img src="assets/images/portfolio/portfolio-04.jpg" alt="NFT_portfolio" />
                                        </a>
                                        <a href="product-details.html" className="btn btn-primary">Place Bid</a>
                                    </div>
                                    <div className="product-share-wrapper">
                                        <div className="profile-share">
                                            <a href="author.html" className="avatar" data-tooltip="Saladin"><img src="assets/images/client/client-1.png" alt="Nft_Profile" /></a>
                                            <a href="author.html" className="avatar" data-tooltip="David Saladin"><img src="assets/images/client/client-10.png" alt="Nft_Profile" /></a>
                                            <a href="author.html" className="avatar" data-tooltip="David"><img src="assets/images/client/client-9.png" alt="Nft_Profile" /></a>
                                            <a className="more-author-text" href="#/">21+ Place Bit.</a>
                                        </div>
                                        <div className="share-btn share-btn-activation dropdown">
                                            <button className="icon" type="button" data-bs-toggle="dropdown" aria-expanded="false">
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
                                    <a href="product-details.html"><span className="product-name">Tabs38</span></a>
                                    <span className="latest-bid">Highest bid 3/30</span>
                                    <div className="bid-react-area">
                                        <div className="last-bid">0.544wETH</div>
                                        <div className="react-area">
                                            <svg viewBox="0 0 17 16" fill="none" width={16} height={16} className="sc-bdnxRM sc-hKFxyN kBvkOu">
                                                <path d="M8.2112 14L12.1056 9.69231L14.1853 7.39185C15.2497 6.21455 15.3683 4.46116 14.4723 3.15121V3.15121C13.3207 1.46757 10.9637 1.15351 9.41139 2.47685L8.2112 3.5L6.95566 2.42966C5.40738 1.10976 3.06841 1.3603 1.83482 2.97819V2.97819C0.777858 4.36443 0.885104 6.31329 2.08779 7.57518L8.2112 14Z" stroke="currentColor" strokeWidth={2} />
                                            </svg>
                                            <span className="number">422</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* end single product */}
                            {/* start single product */}
                            <div className="col-5 col-lg-4 col-md-6 col-sm-6 col-12">
                                <div className="product-style-one no-overlay with-placeBid">
                                    <div className="card-thumbnail">
                                        <a href="product-details.html">
                                            <img src="assets/images/portfolio/portfolio-05.jpg" alt="NFT_portfolio" />
                                        </a>
                                        <a href="product-details.html" className="btn btn-primary">Place Bid</a>
                                    </div>
                                    <div className="product-share-wrapper">
                                        <div className="profile-share">
                                            <a href="author.html" className="avatar" data-tooltip="Jope Baiden"><img src="assets/images/client/client-10.png" alt="Nft_Profile" /></a>
                                            <a href="author.html" className="avatar" data-tooltip="Jope"><img src="assets/images/client/client-11.png" alt="Nft_Profile" /></a>
                                            <a href="author.html" className="avatar" data-tooltip="Baiden"><img src="assets/images/client/client-9.png" alt="Nft_Profile" /></a>
                                            <a className="more-author-text" href="#/">12+ Place Bit.</a>
                                        </div>
                                        <div className="share-btn share-btn-activation dropdown">
                                            <button className="icon" type="button" data-bs-toggle="dropdown" aria-expanded="false">
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
                                    <a href="product-details.html"><span className="product-name">TopBad</span></a>
                                    <span className="latest-bid">Highest bid 6/20</span>
                                    <div className="bid-react-area">
                                        <div className="last-bid">0.244wETH</div>
                                        <div className="react-area">
                                            <svg viewBox="0 0 17 16" fill="none" width={16} height={16} className="sc-bdnxRM sc-hKFxyN kBvkOu">
                                                <path d="M8.2112 14L12.1056 9.69231L14.1853 7.39185C15.2497 6.21455 15.3683 4.46116 14.4723 3.15121V3.15121C13.3207 1.46757 10.9637 1.15351 9.41139 2.47685L8.2112 3.5L6.95566 2.42966C5.40738 1.10976 3.06841 1.3603 1.83482 2.97819V2.97819C0.777858 4.36443 0.885104 6.31329 2.08779 7.57518L8.2112 14Z" stroke="currentColor" strokeWidth={2} />
                                            </svg>
                                            <span className="number">124</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* end single product */}
                            {/* start single product */}
                            <div className="col-5 col-lg-4 col-md-6 col-sm-6 col-12">
                                <div className="product-style-one no-overlay with-placeBid">
                                    <div className="card-thumbnail">
                                        <a href="product-details.html">
                                            <img src="assets/images/portfolio/portfolio-06.jpg" alt="NFT_portfolio" />
                                        </a>
                                        <a href="product-details.html" className="btn btn-primary">Place Bid</a>
                                    </div>
                                    <div className="product-share-wrapper">
                                        <div className="profile-share">
                                            <a href="author.html" className="avatar" data-tooltip="Tawhid Sabir"><img src="assets/images/client/client-1.png" alt="Nft_Profile" /></a>
                                            <a href="author.html" className="avatar" data-tooltip="Tawhid"><img src="assets/images/client/client-10.png" alt="Nft_Profile" /></a>
                                            <a href="author.html" className="avatar" data-tooltip="Sabir"><img src="assets/images/client/client-11.png" alt="Nft_Profile" /></a>
                                            <a className="more-author-text" href="#/">5+ Place Bit.</a>
                                        </div>
                                        <div className="share-btn share-btn-activation dropdown">
                                            <button className="icon" type="button" data-bs-toggle="dropdown" aria-expanded="false">
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
                                    <a href="product-details.html"><span className="product-name">NameStroam</span></a>
                                    <span className="latest-bid">Highest bid 1/20</span>
                                    <div className="bid-react-area">
                                        <div className="last-bid">0.244wETH</div>
                                        <div className="react-area">
                                            <svg viewBox="0 0 17 16" fill="none" width={16} height={16} className="sc-bdnxRM sc-hKFxyN kBvkOu">
                                                <path d="M8.2112 14L12.1056 9.69231L14.1853 7.39185C15.2497 6.21455 15.3683 4.46116 14.4723 3.15121V3.15121C13.3207 1.46757 10.9637 1.15351 9.41139 2.47685L8.2112 3.5L6.95566 2.42966C5.40738 1.10976 3.06841 1.3603 1.83482 2.97819V2.97819C0.777858 4.36443 0.885104 6.31329 2.08779 7.57518L8.2112 14Z" stroke="currentColor" strokeWidth={2} />
                                            </svg>
                                            <span className="number">532</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* end single product */}
                            {/* start single product */}
                            <div className="col-5 col-lg-4 col-md-6 col-sm-6 col-12">
                                <div className="product-style-one no-overlay with-placeBid">
                                    <div className="card-thumbnail">
                                        <a href="product-details.html">
                                            <img src="assets/images/portfolio/portfolio-07.jpg" alt="NFT_portfolio" />
                                        </a>
                                        <a href="product-details.html" className="btn btn-primary">Place Bid</a>
                                    </div>
                                    <div className="product-share-wrapper">
                                        <div className="profile-share">
                                            <a href="author.html" className="avatar" data-tooltip="Total Mars"><img src="assets/images/client/client-6.png" alt="Nft_Profile" /></a>
                                            <a href="author.html" className="avatar" data-tooltip="Total"><img src="assets/images/client/client-5.png" alt="Nft_Profile" /></a>
                                            <a href="author.html" className="avatar" data-tooltip="Mars"><img src="assets/images/client/client-10.png" alt="Nft_Profile" /></a>
                                            <a className="more-author-text" href="#/">9+ Place Bit.</a>
                                        </div>
                                        <div className="share-btn share-btn-activation dropdown">
                                            <button className="icon" type="button" data-bs-toggle="dropdown" aria-expanded="false">
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
                                    <a href="product-details.html"><span className="product-name">Scourd</span></a>
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
                            <div className="col-5 col-lg-4 col-md-6 col-sm-6 col-12">
                                <div className="product-style-one no-overlay with-placeBid">
                                    <div className="card-thumbnail">
                                        <a href="product-details.html">
                                            <img src="assets/images/portfolio/portfolio-05.jpg" alt="NFT_portfolio" />
                                        </a>
                                        <a href="product-details.html" className="btn btn-primary">Place Bid</a>
                                    </div>
                                    <div className="product-share-wrapper">
                                        <div className="profile-share">
                                            <a href="author.html" className="avatar" data-tooltip="David Worner"><img src="assets/images/client/client-1.png" alt="Nft_Profile" /></a>
                                            <a href="author.html" className="avatar" data-tooltip="Worner"><img src="assets/images/client/client-10.png" alt="Nft_Profile" /></a>
                                            <a href="author.html" className="avatar" data-tooltip="David"><img src="assets/images/client/client-11.png" alt="Nft_Profile" /></a>
                                            <a className="more-author-text" href="#/">16+ Place Bit.</a>
                                        </div>
                                        <div className="share-btn share-btn-activation dropdown">
                                            <button className="icon" type="button" data-bs-toggle="dropdown" aria-expanded="false">
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
                                    <a href="product-details.html"><span className="product-name">Resord</span></a>
                                    <span className="latest-bid">Highest bid 1/20</span>
                                    <div className="bid-react-area">
                                        <div className="last-bid">0.264wETH</div>
                                        <div className="react-area">
                                            <svg viewBox="0 0 17 16" fill="none" width={16} height={16} className="sc-bdnxRM sc-hKFxyN kBvkOu">
                                                <path d="M8.2112 14L12.1056 9.69231L14.1853 7.39185C15.2497 6.21455 15.3683 4.46116 14.4723 3.15121V3.15121C13.3207 1.46757 10.9637 1.15351 9.41139 2.47685L8.2112 3.5L6.95566 2.42966C5.40738 1.10976 3.06841 1.3603 1.83482 2.97819V2.97819C0.777858 4.36443 0.885104 6.31329 2.08779 7.57518L8.2112 14Z" stroke="currentColor" strokeWidth={2} />
                                            </svg>
                                            <span className="number">622</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* end single product */}
                            {/* start single product */}
                            <div className="col-5 col-lg-4 col-md-6 col-sm-6 col-12">
                                <div className="product-style-one no-overlay with-placeBid">
                                    <div className="card-thumbnail">
                                        <a href="product-details.html">
                                            <img src="assets/images/portfolio/portfolio-09.jpg" alt="NFT_portfolio" />
                                        </a>
                                        <a href="product-details.html" className="btn btn-primary">Place Bid</a>
                                    </div>
                                    <div className="product-share-wrapper">
                                        <div className="profile-share">
                                            <a href="author.html" className="avatar" data-tooltip="Sobuj Shaikh"><img src="assets/images/client/client-10.png" alt="Nft_Profile" /></a>
                                            <a href="author.html" className="avatar" data-tooltip="Sobuj"><img src="assets/images/client/client-11.png" alt="Nft_Profile" /></a>
                                            <a href="author.html" className="avatar" data-tooltip="Shaikh"><img src="assets/images/client/client-1.png" alt="Nft_Profile" /></a>
                                            <a className="more-author-text" href="#/">22+ Place Bit.</a>
                                        </div>
                                        <div className="share-btn share-btn-activation dropdown">
                                            <button className="icon" type="button" data-bs-toggle="dropdown" aria-expanded="false">
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
                                    <a href="product-details.html"><span className="product-name">Jackpot</span></a>
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
                            <div className="col-5 col-lg-4 col-md-6 col-sm-6 col-12">
                                <div className="product-style-one no-overlay with-placeBid">
                                    <div className="card-thumbnail">
                                        <a href="product-details.html">
                                            <img src="assets/images/portfolio/portfolio-10.jpg" alt="NFT_portfolio" />
                                        </a>
                                        <a href="product-details.html" className="btn btn-primary">Place Bid</a>
                                    </div>
                                    <div className="product-share-wrapper">
                                        <div className="profile-share">
                                            <a href="author.html" className="avatar" data-tooltip="MArk Jone"><img src="assets/images/client/client-4.png" alt="Nft_Profile" /></a>
                                            <a href="author.html" className="avatar" data-tooltip="MArk"><img src="assets/images/client/client-5.png" alt="Nft_Profile" /></a>
                                            <a href="author.html" className="avatar" data-tooltip="Jone"><img src="assets/images/client/client-8.png" alt="Nft_Profile" /></a>
                                            <a className="more-author-text" href="#/">13+ Place Bit.</a>
                                        </div>
                                        <div className="share-btn share-btn-activation dropdown">
                                            <button className="icon" type="button" data-bs-toggle="dropdown" aria-expanded="false">
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
                                    <a href="product-details.html"><span className="product-name">Xtreames</span></a>
                                    <span className="latest-bid">Highest bid 1/20</span>
                                    <div className="bid-react-area">
                                        <div className="last-bid">0.244wETH</div>
                                        <div className="react-area">
                                            <svg viewBox="0 0 17 16" fill="none" width={16} height={16} className="sc-bdnxRM sc-hKFxyN kBvkOu">
                                                <path d="M8.2112 14L12.1056 9.69231L14.1853 7.39185C15.2497 6.21455 15.3683 4.46116 14.4723 3.15121V3.15121C13.3207 1.46757 10.9637 1.15351 9.41139 2.47685L8.2112 3.5L6.95566 2.42966C5.40738 1.10976 3.06841 1.3603 1.83482 2.97819V2.97819C0.777858 4.36443 0.885104 6.31329 2.08779 7.57518L8.2112 14Z" stroke="currentColor" strokeWidth={2} />
                                            </svg>
                                            <span className="number">922</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* end single product */}
                        </div>
                        <div className="tab-pane row g-5 d-flex fade" id="nav-liked" role="tabpanel" aria-labelledby="nav-contact-tab">
                            {/* start single product */}
                            <div className="col-5 col-lg-4 col-md-6 col-sm-6 col-12">
                                <div className="product-style-one no-overlay with-placeBid">
                                    <div className="card-thumbnail">
                                        <a href="product-details.html">
                                            <img src="assets/images/portfolio/portfolio-06.jpg" alt="NFT_portfolio" />
                                        </a>
                                        <a href="product-details.html" className="btn btn-primary">Place Bid</a>
                                    </div>
                                    <div className="product-share-wrapper">
                                        <div className="profile-share">
                                            <a href="author.html" className="avatar" data-tooltip="Tawhid Sabir"><img src="assets/images/client/client-1.png" alt="Nft_Profile" /></a>
                                            <a href="author.html" className="avatar" data-tooltip="Tawhid"><img src="assets/images/client/client-10.png" alt="Nft_Profile" /></a>
                                            <a href="author.html" className="avatar" data-tooltip="Sabir"><img src="assets/images/client/client-11.png" alt="Nft_Profile" /></a>
                                            <a className="more-author-text" href="#/">5+ Place Bit.</a>
                                        </div>
                                        <div className="share-btn share-btn-activation dropdown">
                                            <button className="icon" type="button" data-bs-toggle="dropdown" aria-expanded="false">
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
                                    <a href="product-details.html"><span className="product-name">NameStroam</span></a>
                                    <span className="latest-bid">Highest bid 1/20</span>
                                    <div className="bid-react-area">
                                        <div className="last-bid">0.244wETH</div>
                                        <div className="react-area">
                                            <svg viewBox="0 0 17 16" fill="none" width={16} height={16} className="sc-bdnxRM sc-hKFxyN kBvkOu">
                                                <path d="M8.2112 14L12.1056 9.69231L14.1853 7.39185C15.2497 6.21455 15.3683 4.46116 14.4723 3.15121V3.15121C13.3207 1.46757 10.9637 1.15351 9.41139 2.47685L8.2112 3.5L6.95566 2.42966C5.40738 1.10976 3.06841 1.3603 1.83482 2.97819V2.97819C0.777858 4.36443 0.885104 6.31329 2.08779 7.57518L8.2112 14Z" stroke="currentColor" strokeWidth={2} />
                                            </svg>
                                            <span className="number">532</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* end single product */}
                            {/* start single product */}
                            <div className="col-5 col-lg-4 col-md-6 col-sm-6 col-12">
                                <div className="product-style-one no-overlay with-placeBid">
                                    <div className="card-thumbnail">
                                        <a href="product-details.html">
                                            <img src="assets/images/portfolio/portfolio-07.jpg" alt="NFT_portfolio" />
                                        </a>
                                        <a href="product-details.html" className="btn btn-primary">Place Bid</a>
                                    </div>
                                    <div className="product-share-wrapper">
                                        <div className="profile-share">
                                            <a href="author.html" className="avatar" data-tooltip="Total Mars"><img src="assets/images/client/client-6.png" alt="Nft_Profile" /></a>
                                            <a href="author.html" className="avatar" data-tooltip="Total"><img src="assets/images/client/client-5.png" alt="Nft_Profile" /></a>
                                            <a href="author.html" className="avatar" data-tooltip="Mars"><img src="assets/images/client/client-10.png" alt="Nft_Profile" /></a>
                                            <a className="more-author-text" href="#/">9+ Place Bit.</a>
                                        </div>
                                        <div className="share-btn share-btn-activation dropdown">
                                            <button className="icon" type="button" data-bs-toggle="dropdown" aria-expanded="false">
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
                                    <a href="product-details.html"><span className="product-name">Scourd</span></a>
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
                            <div className="col-5 col-lg-4 col-md-6 col-sm-6 col-12">
                                <div className="product-style-one no-overlay with-placeBid">
                                    <div className="card-thumbnail">
                                        <a href="product-details.html">
                                            <img src="assets/images/portfolio/portfolio-05.jpg" alt="NFT_portfolio" />
                                        </a>
                                        <a href="product-details.html" className="btn btn-primary">Place Bid</a>
                                    </div>
                                    <div className="product-share-wrapper">
                                        <div className="profile-share">
                                            <a href="author.html" className="avatar" data-tooltip="David Worner"><img src="assets/images/client/client-1.png" alt="Nft_Profile" /></a>
                                            <a href="author.html" className="avatar" data-tooltip="Worner"><img src="assets/images/client/client-10.png" alt="Nft_Profile" /></a>
                                            <a href="author.html" className="avatar" data-tooltip="David"><img src="assets/images/client/client-11.png" alt="Nft_Profile" /></a>
                                            <a className="more-author-text" href="#/">16+ Place Bit.</a>
                                        </div>
                                        <div className="share-btn share-btn-activation dropdown">
                                            <button className="icon" type="button" data-bs-toggle="dropdown" aria-expanded="false">
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
                                    <a href="product-details.html"><span className="product-name">Resord</span></a>
                                    <span className="latest-bid">Highest bid 1/20</span>
                                    <div className="bid-react-area">
                                        <div className="last-bid">0.264wETH</div>
                                        <div className="react-area">
                                            <svg viewBox="0 0 17 16" fill="none" width={16} height={16} className="sc-bdnxRM sc-hKFxyN kBvkOu">
                                                <path d="M8.2112 14L12.1056 9.69231L14.1853 7.39185C15.2497 6.21455 15.3683 4.46116 14.4723 3.15121V3.15121C13.3207 1.46757 10.9637 1.15351 9.41139 2.47685L8.2112 3.5L6.95566 2.42966C5.40738 1.10976 3.06841 1.3603 1.83482 2.97819V2.97819C0.777858 4.36443 0.885104 6.31329 2.08779 7.57518L8.2112 14Z" stroke="currentColor" strokeWidth={2} />
                                            </svg>
                                            <span className="number">622</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* end single product */}
                            {/* start single product */}
                            <div className="col-5 col-lg-4 col-md-6 col-sm-6 col-12">
                                <div className="product-style-one no-overlay with-placeBid">
                                    <div className="card-thumbnail">
                                        <a href="product-details.html">
                                            <img src="assets/images/portfolio/portfolio-09.jpg" alt="NFT_portfolio" />
                                        </a>
                                        <a href="product-details.html" className="btn btn-primary">Place Bid</a>
                                    </div>
                                    <div className="product-share-wrapper">
                                        <div className="profile-share">
                                            <a href="author.html" className="avatar" data-tooltip="Sobuj Shaikh"><img src="assets/images/client/client-10.png" alt="Nft_Profile" /></a>
                                            <a href="author.html" className="avatar" data-tooltip="Sobuj"><img src="assets/images/client/client-11.png" alt="Nft_Profile" /></a>
                                            <a href="author.html" className="avatar" data-tooltip="Shaikh"><img src="assets/images/client/client-1.png" alt="Nft_Profile" /></a>
                                            <a className="more-author-text" href="#/">22+ Place Bit.</a>
                                        </div>
                                        <div className="share-btn share-btn-activation dropdown">
                                            <button className="icon" type="button" data-bs-toggle="dropdown" aria-expanded="false">
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
                                    <a href="product-details.html"><span className="product-name">Jackpot</span></a>
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
                            <div className="col-5 col-lg-4 col-md-6 col-sm-6 col-12">
                                <div className="product-style-one no-overlay with-placeBid">
                                    <div className="card-thumbnail">
                                        <a href="product-details.html">
                                            <img src="assets/images/portfolio/portfolio-10.jpg" alt="NFT_portfolio" />
                                        </a>
                                        <a href="product-details.html" className="btn btn-primary">Place Bid</a>
                                    </div>
                                    <div className="product-share-wrapper">
                                        <div className="profile-share">
                                            <a href="author.html" className="avatar" data-tooltip="MArk Jone"><img src="assets/images/client/client-4.png" alt="Nft_Profile" /></a>
                                            <a href="author.html" className="avatar" data-tooltip="MArk"><img src="assets/images/client/client-5.png" alt="Nft_Profile" /></a>
                                            <a href="author.html" className="avatar" data-tooltip="Jone"><img src="assets/images/client/client-8.png" alt="Nft_Profile" /></a>
                                            <a className="more-author-text" href="#/">13+ Place Bit.</a>
                                        </div>
                                        <div className="share-btn share-btn-activation dropdown">
                                            <button className="icon" type="button" data-bs-toggle="dropdown" aria-expanded="false">
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
                                    <a href="product-details.html"><span className="product-name">Xtreames</span></a>
                                    <span className="latest-bid">Highest bid 1/20</span>
                                    <div className="bid-react-area">
                                        <div className="last-bid">0.244wETH</div>
                                        <div className="react-area">
                                            <svg viewBox="0 0 17 16" fill="none" width={16} height={16} className="sc-bdnxRM sc-hKFxyN kBvkOu">
                                                <path d="M8.2112 14L12.1056 9.69231L14.1853 7.39185C15.2497 6.21455 15.3683 4.46116 14.4723 3.15121V3.15121C13.3207 1.46757 10.9637 1.15351 9.41139 2.47685L8.2112 3.5L6.95566 2.42966C5.40738 1.10976 3.06841 1.3603 1.83482 2.97819V2.97819C0.777858 4.36443 0.885104 6.31329 2.08779 7.57518L8.2112 14Z" stroke="currentColor" strokeWidth={2} />
                                            </svg>
                                            <span className="number">922</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* end single product */}
                            {/* start single product */}
                            <div className="col-5 col-lg-4 col-md-6 col-sm-6 col-12">
                                <div className="product-style-one no-overlay with-placeBid">
                                    <div className="card-thumbnail">
                                        <a href="product-details.html">
                                            <img src="assets/images/portfolio/portfolio-06.jpg" alt="NFT_portfolio" />
                                        </a>
                                        <a href="product-details.html" className="btn btn-primary">Place Bid</a>
                                    </div>
                                    <div className="product-share-wrapper">
                                        <div className="profile-share">
                                            <a href="author.html" className="avatar" data-tooltip="Tawhid Sabir"><img src="assets/images/client/client-1.png" alt="Nft_Profile" /></a>
                                            <a href="author.html" className="avatar" data-tooltip="Tawhid"><img src="assets/images/client/client-10.png" alt="Nft_Profile" /></a>
                                            <a href="author.html" className="avatar" data-tooltip="Sabir"><img src="assets/images/client/client-11.png" alt="Nft_Profile" /></a>
                                            <a className="more-author-text" href="#/">5+ Place Bit.</a>
                                        </div>
                                        <div className="share-btn share-btn-activation dropdown">
                                            <button className="icon" type="button" data-bs-toggle="dropdown" aria-expanded="false">
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
                                    <a href="product-details.html"><span className="product-name">NameStroam</span></a>
                                    <span className="latest-bid">Highest bid 1/20</span>
                                    <div className="bid-react-area">
                                        <div className="last-bid">0.244wETH</div>
                                        <div className="react-area">
                                            <svg viewBox="0 0 17 16" fill="none" width={16} height={16} className="sc-bdnxRM sc-hKFxyN kBvkOu">
                                                <path d="M8.2112 14L12.1056 9.69231L14.1853 7.39185C15.2497 6.21455 15.3683 4.46116 14.4723 3.15121V3.15121C13.3207 1.46757 10.9637 1.15351 9.41139 2.47685L8.2112 3.5L6.95566 2.42966C5.40738 1.10976 3.06841 1.3603 1.83482 2.97819V2.97819C0.777858 4.36443 0.885104 6.31329 2.08779 7.57518L8.2112 14Z" stroke="currentColor" strokeWidth={2} />
                                            </svg>
                                            <span className="number">532</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* end single product */}
                            {/* start single product */}
                            <div className="col-5 col-lg-4 col-md-6 col-sm-6 col-12">
                                <div className="product-style-one no-overlay with-placeBid">
                                    <div className="card-thumbnail">
                                        <a href="product-details.html">
                                            <img src="assets/images/portfolio/portfolio-07.jpg" alt="NFT_portfolio" />
                                        </a>
                                        <a href="product-details.html" className="btn btn-primary">Place Bid</a>
                                    </div>
                                    <div className="product-share-wrapper">
                                        <div className="profile-share">
                                            <a href="author.html" className="avatar" data-tooltip="Total Mars"><img src="assets/images/client/client-6.png" alt="Nft_Profile" /></a>
                                            <a href="author.html" className="avatar" data-tooltip="Total"><img src="assets/images/client/client-5.png" alt="Nft_Profile" /></a>
                                            <a href="author.html" className="avatar" data-tooltip="Mars"><img src="assets/images/client/client-10.png" alt="Nft_Profile" /></a>
                                            <a className="more-author-text" href="#/">9+ Place Bit.</a>
                                        </div>
                                        <div className="share-btn share-btn-activation dropdown">
                                            <button className="icon" type="button" data-bs-toggle="dropdown" aria-expanded="false">
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
                                    <a href="product-details.html"><span className="product-name">Scourd</span></a>
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
                            <div className="col-5 col-lg-4 col-md-6 col-sm-6 col-12">
                                <div className="product-style-one no-overlay with-placeBid">
                                    <div className="card-thumbnail">
                                        <a href="product-details.html">
                                            <img src="assets/images/portfolio/portfolio-05.jpg" alt="NFT_portfolio" />
                                        </a>
                                        <a href="product-details.html" className="btn btn-primary">Place Bid</a>
                                    </div>
                                    <div className="product-share-wrapper">
                                        <div className="profile-share">
                                            <a href="author.html" className="avatar" data-tooltip="David Worner"><img src="assets/images/client/client-1.png" alt="Nft_Profile" /></a>
                                            <a href="author.html" className="avatar" data-tooltip="Worner"><img src="assets/images/client/client-10.png" alt="Nft_Profile" /></a>
                                            <a href="author.html" className="avatar" data-tooltip="David"><img src="assets/images/client/client-11.png" alt="Nft_Profile" /></a>
                                            <a className="more-author-text" href="#/">16+ Place Bit.</a>
                                        </div>
                                        <div className="share-btn share-btn-activation dropdown">
                                            <button className="icon" type="button" data-bs-toggle="dropdown" aria-expanded="false">
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
                                    <a href="product-details.html"><span className="product-name">Resord</span></a>
                                    <span className="latest-bid">Highest bid 1/20</span>
                                    <div className="bid-react-area">
                                        <div className="last-bid">0.264wETH</div>
                                        <div className="react-area">
                                            <svg viewBox="0 0 17 16" fill="none" width={16} height={16} className="sc-bdnxRM sc-hKFxyN kBvkOu">
                                                <path d="M8.2112 14L12.1056 9.69231L14.1853 7.39185C15.2497 6.21455 15.3683 4.46116 14.4723 3.15121V3.15121C13.3207 1.46757 10.9637 1.15351 9.41139 2.47685L8.2112 3.5L6.95566 2.42966C5.40738 1.10976 3.06841 1.3603 1.83482 2.97819V2.97819C0.777858 4.36443 0.885104 6.31329 2.08779 7.57518L8.2112 14Z" stroke="currentColor" strokeWidth={2} />
                                            </svg>
                                            <span className="number">622</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* end single product */}
                            {/* start single product */}
                            <div className="col-5 col-lg-4 col-md-6 col-sm-6 col-12">
                                <div className="product-style-one no-overlay with-placeBid">
                                    <div className="card-thumbnail">
                                        <a href="product-details.html">
                                            <img src="assets/images/portfolio/portfolio-09.jpg" alt="NFT_portfolio" />
                                        </a>
                                        <a href="product-details.html" className="btn btn-primary">Place Bid</a>
                                    </div>
                                    <div className="product-share-wrapper">
                                        <div className="profile-share">
                                            <a href="author.html" className="avatar" data-tooltip="Sobuj Shaikh"><img src="assets/images/client/client-10.png" alt="Nft_Profile" /></a>
                                            <a href="author.html" className="avatar" data-tooltip="Sobuj"><img src="assets/images/client/client-11.png" alt="Nft_Profile" /></a>
                                            <a href="author.html" className="avatar" data-tooltip="Shaikh"><img src="assets/images/client/client-1.png" alt="Nft_Profile" /></a>
                                            <a className="more-author-text" href="#/">22+ Place Bit.</a>
                                        </div>
                                        <div className="share-btn share-btn-activation dropdown">
                                            <button className="icon" type="button" data-bs-toggle="dropdown" aria-expanded="false">
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
                                    <a href="product-details.html"><span className="product-name">Jackpot</span></a>
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
                            <div className="col-5 col-lg-4 col-md-6 col-sm-6 col-12">
                                <div className="product-style-one no-overlay with-placeBid">
                                    <div className="card-thumbnail">
                                        <a href="product-details.html">
                                            <img src="assets/images/portfolio/portfolio-10.jpg" alt="NFT_portfolio" />
                                        </a>
                                        <a href="product-details.html" className="btn btn-primary">Place Bid</a>
                                    </div>
                                    <div className="product-share-wrapper">
                                        <div className="profile-share">
                                            <a href="author.html" className="avatar" data-tooltip="MArk Jone"><img src="assets/images/client/client-4.png" alt="Nft_Profile" /></a>
                                            <a href="author.html" className="avatar" data-tooltip="MArk"><img src="assets/images/client/client-5.png" alt="Nft_Profile" /></a>
                                            <a href="author.html" className="avatar" data-tooltip="Jone"><img src="assets/images/client/client-8.png" alt="Nft_Profile" /></a>
                                            <a className="more-author-text" href="#/">13+ Place Bit.</a>
                                        </div>
                                        <div className="share-btn share-btn-activation dropdown">
                                            <button className="icon" type="button" data-bs-toggle="dropdown" aria-expanded="false">
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
                                    <a href="product-details.html"><span className="product-name">Xtreames</span></a>
                                    <span className="latest-bid">Highest bid 1/20</span>
                                    <div className="bid-react-area">
                                        <div className="last-bid">0.244wETH</div>
                                        <div className="react-area">
                                            <svg viewBox="0 0 17 16" fill="none" width={16} height={16} className="sc-bdnxRM sc-hKFxyN kBvkOu">
                                                <path d="M8.2112 14L12.1056 9.69231L14.1853 7.39185C15.2497 6.21455 15.3683 4.46116 14.4723 3.15121V3.15121C13.3207 1.46757 10.9637 1.15351 9.41139 2.47685L8.2112 3.5L6.95566 2.42966C5.40738 1.10976 3.06841 1.3603 1.83482 2.97819V2.97819C0.777858 4.36443 0.885104 6.31329 2.08779 7.57518L8.2112 14Z" stroke="currentColor" strokeWidth={2} />
                                            </svg>
                                            <span className="number">922</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* end single product */}
                        </div>
                    </div>
                </div>
            </div>
            {/* Modal */}
            <div className="rn-popup-modal share-modal-wrapper modal fade" id="shareModal" tabIndex={-1} aria-hidden="true">
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"><i data-feather="x" /></button>
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content share-wrapper">
                        <div className="modal-header share-area">
                            <h5 className="modal-title">Share this NFT</h5>
                        </div>
                        <div className="modal-body">
                            <ul className="social-share-default">
                                <li><a href="#/"><span className="icon"><i data-feather="facebook" /></span><span className="text">facebook</span></a></li>
                                <li><a href="#/"><span className="icon"><i data-feather="twitter" /></span><span className="text">twitter</span></a></li>
                                <li><a href="#/"><span className="icon"><i data-feather="linkedin" /></span><span className="text">linkedin</span></a></li>
                                <li><a href="#/"><span className="icon"><i data-feather="instagram" /></span><span className="text">instagram</span></a></li>
                                <li><a href="#/"><span className="icon"><i data-feather="youtube" /></span><span className="text">youtube</span></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {/* Modal */}
            <div className="rn-popup-modal report-modal-wrapper modal fade" id="reportModal" tabIndex={-1} aria-hidden="true">
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"><i data-feather="x" /></button>
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content report-content-wrapper">
                        <div className="modal-header report-modal-header">
                            <h5 className="modal-title">Why are you reporting?
                            </h5>
                        </div>
                        <div className="modal-body">
                            <p>Describe why you think this item should be removed from marketplace</p>
                            <div className="report-form-box">
                                <h6 className="title">Message</h6>
                                <textarea name="message" placeholder="Write issues" defaultValue={""} />
                                <div className="report-button">
                                    <button type="button" className="btn btn-primary mr--10 w-auto">Report</button>
                                    <button type="button" className="btn btn-primary-alta w-auto" data-bs-dismiss="modal">Cancel</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Author
