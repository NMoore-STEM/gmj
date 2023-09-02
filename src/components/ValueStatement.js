import { Component } from 'react';

// const valueArray = [
//     "YOU DESERVE\nTHE BEST.\nNOTHING LESS",
//     "NEVER SETTLE\nFOR ANYTHING\nLESS...",
//     "SPEND MONEY\nTO\nMAKE MONEY",
//     "DON'T REGRET\nPASSING THIS\nMOMENT BY",
//     "OWN JEWELRY\nAS UNIQUE\nAS YOU ARE",
//     "IT MAY NOT\nBE HERE\nTOMORROW..."
// ]

// const getrandomvalue = () => {
//     return valueArray[math.floor(math.random() * valueArray.length)];
//   };

// function valueblock() {
//     const [valuetitle, setvaluetitle] = usestate(getrandomvalue());
//     const randomvaluetitle = getrandomvalue();
//     setvaluetitle(randomvaluetitle);
// }

class ValueStatement extends Component {
    render() {
        return (
            <div className="value_frame collection_frame">
                <div className="value_statement">
                    {/* <h3>{valuetitle}</h3> */}
                    <h4>YOU DESERVE<br />THE BEST.<br />NOTHING LESS</h4>
                </div>
            </div>
        )
    }
}

export default ValueStatement