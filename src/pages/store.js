// import React, { Component } from "react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import SubHeader from '../components/SubHeader';
// import CustomPitch from '../components/CustomPitch';
// import IsMouseInBound from "../components/StoreItemFx";

function Store() {
  //render() {

    // function below needs to create boolean value for elements within that pass arguments
    // for ((mouse is in container) & (element is not hovered) OR (mouse is over item)
    // const unfocusedItem = () => {
    //     if ( isMouseInBound === true && onMouseEnter === false ){
    //         return 1
    //     }
    //     if ( isMouseInBound === true && onMouseEnter === true ){
    //         return 2
    //     }
    //     return 3
    // }

    const [hovered, setHoveredClass] = React.useState("");
    const updateHovered = () => {
        setHoveredClass(true)
    }
     const removeHovered = () => {
        setHoveredClass(false)
    }

    // const [active, setHoveredClass] = React.useState("");
    // const updateHovered = (e) => {
    //     setHoveredClass(e.target.id)
    //     console.log(useState)   
    //   }
    //  const removeHovered = (e) => {
    //     setHoveredClass('')
    //  }


    // const boxRef1 = React.useRef(null);

    // const hoverItem = () => {
    //     console.log('hovered :', boxRef1, allWithClass.index);
    // }

    // To detect mouse inside of parent container of store items
    const allWithClass = Array.from(
        document.getElementsByClassName('store_menu_item')
      );
    useEffect(() => {
        const element = boxRef1.current;
        console.log(element);
    }, []);
    useEffect(() => {
        const allWithClass = Array.from(
          document.getElementsByClassName('store_menu_item')
        );
        console.log(allWithClass);
    });

    const boxRef1 = React.useRef(null);

    const hoverItem = () => {
        console.log('hovered :', boxRef1, allWithClass);
    }

    // let selectedIndex = -1;
    const isMouseInBound = (e) => {
      const eleBounds = boxRef1.current.getBoundingClientRect();
      let ret = false;
      if (e.clientX >= eleBounds.left && e.clientX <= eleBounds.right) {
        ret = true;
      } else {
        ret = false;
      }
      console.log(ret);
    };

    return (
      <>
        <div className='store_menu'>
          <div className='page_title_frame'>
            <h2 className='page_title'>STORE</h2>
          </div>
          <img
            className='menu_bg'
            src={require("../images/store/store-splash.png")}
            alt={"An assortment of jewelry."}
          />

          <div className='menu_black_box'>
            <div
              className='store_menu_item_area'
              id='boxRef1'
              ref={boxRef1}
              onMouseEnter={isMouseInBound}
            >
              {/* script logic: for full resolution only: Hover menu item grows width while all others
                    shrink in equal widths to make space for hovered item - titles should be squeezed into two
                    lines when in initial position, when hovering, should stretch to fit in one line */}
              <div 
                className='store_menu_item'
                // className={selectedIndex'store_menu_item'}
                ref={boxRef1}
                // onClick={()=>this.clickFunction}
                onMouseEnter={hoverItem}
                >
                <Link to='sale'>
                  <img
                    src={require("../images/necklaces/016.png")}
                    alt={""}
                  ></img>
                </Link>
                <div className='page_title_frame top_title'>
                  <h5>SALE ITEMS</h5>
                </div>
              </div>
              <div 
                className='store_menu_item'
                ref={boxRef1}
                // onClick={handleClick}
                // onMouseEnter={((e) => this.hover(e, data))}
                >
                <Link to='/store/necklaces'>
                  <img
                    src={require("../images/necklaces/006.png")}
                    alt={""}
                  ></img>
                </Link>
                <div className='page_title_frame top_title'>
                  <h5>NECKLACES</h5>
                </div>
              </div>
              <div 
                className={`store_menu_item ${hovered ? "hovered_item" : isMouseInBound ? "not_hovered_item" : "" }`}
                ref={boxRef1}
                // onClick={handleClick}
                // onMouseEnter={((e) => this.hover(e, data))}
                onMouseEnter={updateHovered}
                onMouseLeave={removeHovered}
                >
                <Link to='bracelets'>
                  <img
                    src={require("../images/bracelets/022.png")}
                    alt={""}
                  ></img>
                </Link>
                <div className='page_title_frame top_title'>
                  <h5>BRACELETS</h5>
                </div>
              </div>
              <div 
                className='store_menu_item'
                ref={boxRef1}
                // onClick={handleClick}
                // onMouseEnter={((e) => this.hover(e, data))}
                >
                <Link to='earrings'>
                  <img
                    src={require("../images/earrings/031.png")}
                    alt={""}
                  ></img>
                </Link>
                <div className='page_title_frame top_title'>
                  <h5>EARRINGS</h5>
                </div>
              </div>
              <div 
                className='store_menu_item'
                ref={boxRef1}
                // onClick={handleClick}
                // onMouseEnter={((e) => this.hover(e, data))}
                >
                <Link to='charms'>
                  <img src={require("../images/charms/051.png")} alt={""}></img>
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
//}

export default Store;
