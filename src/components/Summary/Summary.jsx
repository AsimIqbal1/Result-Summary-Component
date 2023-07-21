import ScoreCard from "../shared/ScoreCard/ScoreCard";
import SummaryCard from "../shared/SummaryCard/SummaryCard";
import './Summary.css'

const Summary = () => {
    return (
        <div className="summary-container">
            <ScoreCard />
            <SummaryCard />
        </div>
    )
}

export default Summary;