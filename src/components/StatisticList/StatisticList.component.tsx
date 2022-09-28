import { IStatistic } from '../../services/types/statistic.type';
import { StatisticItem } from '../StatisticItem/StatisticItem.component';
import { StyledNoteList } from './StatisticList.styled';

export const StatisticList = ({data}: {data: IStatistic[] | any}) => (
    <>
        <StyledNoteList>
        {data.map((item: IStatistic) => (
            <StatisticItem item={item} key={item.category} />
        ))}
        </StyledNoteList>
    </>
);
