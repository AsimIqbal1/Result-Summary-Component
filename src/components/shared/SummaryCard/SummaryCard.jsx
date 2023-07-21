import { useContext } from 'react';
import SummaryRow from '../SummaryRow/SummaryRow';
import Button from '../Button/Button';
import { ThemeContext } from '../../..';
import data from '../../../data';
import './SummaryCard.css'

const SummaryCard = () => {
    const theme = useContext(ThemeContext);

    return (
        <div className='sc-container'>
            <p className='sc-heading'>Summary</p>
            <SummaryRow
                color={theme.color.lightRed}
                backgroundColor={theme.color.oplightRed}
                data={data[0]}
            />
            <SummaryRow
                color={theme.color.orangeyYellow}
                backgroundColor={theme.color.opOrangeyYellow}
                data={data[1]}
            />
            <SummaryRow
                color={theme.color.greenTeal}
                backgroundColor={theme.color.opGreenTeal}
                data={data[2]}
            />
            <SummaryRow
                color={theme.color.cobaltBlue}
                backgroundColor={theme.color.opCobaltBlue}
                data={data[3]}
            />
            <Button />
        </div>
    )
}

export default SummaryCard;