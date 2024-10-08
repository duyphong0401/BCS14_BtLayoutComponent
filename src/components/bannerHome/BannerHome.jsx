import React from 'react';

const BannerHome = () => {
    return (
        <div className="card bg-light" style={{ height: '300px' }}>
            <div className="d-flex justify-content-start align-items-center h-100 w-100">
                <div className="card-body text-start m-3 w-100">
                    <p className="card-title" style={{ fontSize: '4rem', fontWeight: 'normal', lineHeight: '1.4' }}>A Warm Welcome!</p>
                    <p className="card-text" style={{ whiteSpace: 'normal' }}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi asperiores molestiae, dicta amet dolorem aspernatur molestias cum assumenda veritatis sunt non mollitia, recusandae neque quod minus corporis nulla! Odit, nemo?.
                    </p>
                    <button type="button" className="btn btn-primary">Call to action!</button>
                </div>
            </div>
        </div>
    );
};

export default BannerHome;
