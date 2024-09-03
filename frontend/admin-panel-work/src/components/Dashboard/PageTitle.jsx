import React from 'react';
import './PageTitle.css';
function PageTitle() {
  return (
    <>
    <div className="page-title">
        <h1>DashBoard</h1>
        <nav>
            <ol className='breadcrumb'>
                <li className='breadcrumb-item'>
                    <a href="/">
                    <i className='bi bi-house-door'></i>
                    </a>
                </li>
                <li className='breadcrumb-item active'>DashBoard</li>
            </ol>
        </nav>
    </div>
    </>
  );
}

export default PageTitle;