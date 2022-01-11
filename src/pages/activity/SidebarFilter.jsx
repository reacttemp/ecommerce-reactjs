import React from 'react'

const SidebarFilter = () => {
    return (
        <div className="col-lg-4">
            <div className="filter-wrapper">
                <div className="widge-wrapper rbt-sticky-top-adjust">
                    <div className="inner">
                        <h3>Market filter</h3>
                        <div className="sing-filter">
                            <button>Purchases</button>
                            <button>Sales</button>
                            <button>Followers</button>
                            <button>Following</button>
                            <button>Reserved</button>
                            <button>Live Auction</button>
                        </div>
                    </div>
                    <div className="inner">
                        <h3>Filter by users</h3>
                        <div className="sing-filter">
                            <button>Love</button>
                            <button>Saved</button>
                            <button>Support us</button>
                            <button>Report</button>
                            <button>Vedio</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SidebarFilter
