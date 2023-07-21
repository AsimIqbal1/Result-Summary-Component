import './SummaryRow.css';

const SummaryRow = (props) => {
    const { color, backgroundColor, data } = props;
    const { category, score, icon } = data;
    return (
        <div className='sr-row-container' style={{ color, backgroundColor }}>
            <div className='sr-icon-name-container'>
                <img src={icon} alt="icon" />
                <p className='sr-category'>{category}</p>
            </div>
            <p className='sr-score'>
                {score}&nbsp;<p className='sr-total-score'>/&nbsp;100</p>
            </p>
        </div>
    )
}

export default SummaryRow;