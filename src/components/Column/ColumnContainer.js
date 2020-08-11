import { connect } from 'react-redux';
import Column from './Column';
import { getCardsForColumn, createActionAddCard } from '../../../src/redux/cardsRedux.js';

const mapStateToProps = (state, props) => ({
  columns: getCardsForColumn(state, props.id),
});
const mapDispatchToProps = (dispatch, props) => ({
  addCard: title => dispatch(createActionAddCard({
    cardId: props.id,
    title,
  })),
});
export default connect(mapStateToProps, mapDispatchToProps)(Column);