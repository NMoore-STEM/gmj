import { useRef } from 'react'

function IsMouseInBound(e) {
    const boxRef1 = useRef(null);
    const eleBounds = boxRef1.current.getBoundingClientRect();
    let ret = false;
    if (e.clientX >= eleBounds.left && e.clientX <= eleBounds.right) {
        ret = true;
    } else {
        ret = false;
    }
    console.log(ret);
};

export default IsMouseInBound