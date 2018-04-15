/* 

*/
import React, {Component} from 'react';

export default class App extends Component{
	render(){
		let variable = 'test';
		return(
			<div style={{textAlign:'center'}}>
				<h1>Hello World From React {variable}</h1>
			</div>);
	}
}
