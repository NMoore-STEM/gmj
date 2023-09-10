import React from 'react';
import { Link } from "react-router-dom";

function Store() {

    return (
      <>
        <div className='store_menu'>
          <div className='page_title_frame'>
            <h2 className='page_title'>STORE</h2>
          </div>
          <div className='menu_bg_deco'>
            {/* <img
              className='menu_bg'
              src={require("../images/store/store-splash.png")}
              alt={"An assortment of jewelry."}
            /> */}
          </div>

          <div className='menu_black_box'>
            <div className='store_menu_item_area'>
              {/* script logic: for full resolution only: Hover menu item grows width while all others
                    shrink in equal widths to make space for hovered item - titles should be squeezed into two
                    lines when in initial position, when hovering, should stretch to fit in one line */}
              <div className="store_menu_item">
                <Link to='sale' className="menu_sale_link">
                </Link>
                <div className='page_title_frame top_title'>
                  <h5>SALE ITEMS</h5>
                </div>
              </div>
              <div className="store_menu_item">
                <Link to='/store/necklaces' className="menu_neck_link">
                </Link>
                <div className='page_title_frame top_title'>
                  <h5>NECKLACES</h5>
                </div>
              </div>
              <div className="store_menu_item">
                <Link to='bracelets' className="menu_brace_link">
                </Link>
                <div className='page_title_frame top_title'>
                  <h5>BRACELETS</h5>
                </div>
              </div>
              <div className="store_menu_item">
                <Link to='earrings' className="menu_ear_link">
                </Link>
                <div className='page_title_frame top_title'>
                  <h5>EARRINGS</h5>
                </div>
              </div>
              <div className="store_menu_item">
                <Link to='charms' className="menu_charm_link">
                </Link>
                <div className='page_title_frame top_title'>
                  <h5>CHARMS</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img src={require("../images/store/store_splash_2.png")} alt={""}></img>
      </>
    );
  }

export default Store;
