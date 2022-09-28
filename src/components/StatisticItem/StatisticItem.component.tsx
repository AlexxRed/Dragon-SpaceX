import { IStatistic } from '../../services/types/statistic.type';
import {
    ItemContainer,
    ItemHeader,
    ItemInfo,
    ItemName,
    IdeaIcon,
    ThoughtIcon,
    TasksIcon,
    Wrapper,
} from './StatisticItem.styled';

export const StatisticItem = ({ item }: { item: IStatistic }) => {


    return (
        <ItemContainer>
            <ItemHeader>
                <Wrapper>
                    {item.category === 'Idea' && <IdeaIcon />}
                    {item.category === 'Task' && <TasksIcon />}
                    {item.category === 'Random Thought' && <ThoughtIcon/>}
                    <ItemName>{item.category}</ItemName>
                </Wrapper>

            </ItemHeader>
            <ItemInfo>ACTIVE: {item.active}</ItemInfo>
            <ItemInfo>ARCHIVED: {item.archived}</ItemInfo>
        </ItemContainer>
    );
};