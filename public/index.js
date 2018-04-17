import React from 'react';
import ReactDOM from 'react-dom';
import { connect, Provider } from 'react-redux';
import BankApp from '../src/components/BankApp';
import './style.css';
import bankStore from '../src/store/bankStore';
import constants from '../src/utils/constants';
import bankActionCreator from '../src/actionCreators/bankActionCreator'


const mapStateToProps = (state) => {
						return {
							balance: state.balance,
							showExchange: state.ui.showExchange,
							}
						}
const mapDispatchToProps = (dispatch) => {
		return {
				onDeposit: (amount) => dispatch(bankActionCreator.depositIntoAccount(amount)),
				onWithdraw: (amount) => dispatch(bankActionCreator.withDrawFromAccount(amount)),
				onToggle:() => dispatch(bankActionCreator.toggleInfo()),
			}
		}
const BankAppContainer = connect(mapStateToProps, mapDispatchToProps)(BankApp)

ReactDOM.render(<Provider store={bankStore}>
					<BankAppContainer />
				</Provider>, document.getElementById('root'));


