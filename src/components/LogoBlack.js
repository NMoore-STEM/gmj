import React, {Component} from 'react'

class LogoBlack extends Component {
    render() {
        return (
            <svg className="logo_svg" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 500 500">
                <polygon points="208.618,159.238 178.62,158.988 288.042,341.044 311.04,341.294"/>
                <path id="eff" stroke="#000000" strokeWidth="1.7rem" fill="none" d="M458.014,40.566 c-27.616-22.825-44.546-26.136-72.235-26.391c-40.174-0.368-77.86,29.823-82.246,77.78c0,62.394,0,249.588,0,249.588"/>
                <path id="shi" stroke="#000000" strokeWidth="1.7rem" fill="none" d="M41.366,460.003 c27.63,22.824,44.56,26.143,72.25,26.385c40.175,0.375,77.859-29.81,82.246-77.762c0-62.399,0-249.593,0-249.593"/>
                <line id="shi_cross" stroke="#000000" strokeWidth="1.5rem" x1="108.656" y1="342.104" x2="225.644" y2="342.104"/>
                <line id="eff_cross" stroke="#000000" strokeWidth="1.5rem" x1="273.502" y1="159.453" x2="390.49" y2="159.453"/>
            </svg>
        );
    }
}

export default LogoBlack;