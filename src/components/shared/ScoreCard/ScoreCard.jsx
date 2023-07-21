import AverageScore from '../AverageScore/AverageScore';
import './ScoreCard.css'

const ScoreCard = () => {
    return (
        <div className='scorecard-container'>
            <p className='result-heading'>Your Result</p>
            <AverageScore />
            <p className='greet-heading'>Great</p>
            <p className='summary-text'>You scored higher than 65% of the people who have taken these tests.</p>
        </div>
    )
}

export default ScoreCard;