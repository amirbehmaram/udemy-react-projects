import "./ChartBar.css";

function ChartBar(props) {
    let barStyles = {
        height: '0%'
    }

    if (props.maxValue > 0) {
        barStyles.height = Math.round((props.value / props.maxValue) * 100) + '%';
    }

    return (
        <div className="chart-bar">
            <div className="chart-bar__inner">
                <div className="chart-bar__fill" style={ barStyles }></div>
            </div>
            <div className="chart-bar__label">{ props.label }</div>
        </div>
    );
}

export default ChartBar;