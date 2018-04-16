
import React, { Component } from 'react';
import bankStore from './../store/bankStore';
import constants from './../utils/constants';
import BankApp from './BankApp';
import bankActionCreator from './../actionCreators/bankActionCreator'

export default class BankAppContainer extends Component{
	
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
					onDeposit = {(amount) => bankStore.dispatch(bankActionCreator.depositIntoAccount(amount))}
					onWithdraw= {(amount) => bankStore.dispatch(bankActionCreator.withDrawFromAccount(amount)) }
				/>

			)
	}
}