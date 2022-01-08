import ChartBar from "./ChartBar";

import "./Chart.css";

function Chart(props) {
    const dataValues = props.data.map( data => data.value);
    const total = Math.max(...dataValues);

    return (
        <div className="chart">
            { props.data.map( data =>  ( 
                <ChartBar
                    key={ data.label } 
                    value={ data.value } 
                    maxValue={ total } 
                    label={ data.label }
                />) 
            )}
        </div>
    );
}

export default Chart;