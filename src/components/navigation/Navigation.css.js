import styled from "styled-components";
import Wrapper from '../wrapper';

//daje to mozliwość taką że można w rodku tej funkcji pisać css properites ale można też używać zmienych jak w template stringu bez łączenia stringów
export const Container = styled.div`
  display: flex;
  padding: ${props => props.theme.spacing.sm}px 0;
  justify-content: space-between;
  background-color: ${props => props.theme.colors.gray.light};
`;

export const NavigationWrapper = styled(Wrapper)`
    display: flex;
    justify-content: space-between;
`;

export const List = styled.ul`
  display: flex;
`;

