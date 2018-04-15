
import React, { Component } from 'react';
import bankStore from './../store/bankStore';
import constants from './../utils/constants';
import BankApp from './BankApp';

export default class BankAppContainer extends Component{

	constructor(){
		super();
		bankStore.dispatch({type:constants.CREATE_ACCOUNT});
		this.state = {
			balance: bankStore.getState().balance
		}

		console.log(bankStore.getState().balance)
	}

	componentDidMount(){
		this.unsubscribe = bankStore.subscribe(()=>
				this.setState({balance:bankStore.getState().balance})
			);
	}

	componentWillUnmount(){
		this.unsubscribe();
	}

	render(){
		return(
				<BankApp 
					balance = { bankStore.getState().balance}
					onDeposit = { (amount) => bankStore.dispatch(
						{type:constants.DEPOSIT_INTO_ACCOUNT, amount:amount})}
					onWithdraw= {(amount) => bankStore.dispatch(
						{ type:constants.WITHDRAW_FROM_ACCOUNT, amount:amount }) }
				/>

			)
	}
}