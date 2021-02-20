import React from 'react';

class Register extends React.Component{
	constructor(props){
		super(props);
		this.state={
			signInName:'',
			signInEmail: '',
			signInPassword:''
		}
		
	}
	onNameChange=(event)=>
	{
		this.setState({signInName: event.target.value});
	}
	onEmailChange=(event)=>
	{
		this.setState({signInEmail: event.target.value});
	}

	onPasswordChange=(event)=>
	{
		this.setState({signInPassword: event.target.value});
	}

	onSubmitRegister=()=>
	{
		fetch('http://localhost:3000/register',{
			method:'post',
			headers:{'Content-Type':'application/json'},
			body:JSON.stringify({
				name:this.state.signInName,	
				email: this.state.signInEmail,
				password:this.state.signInPassword
			})
		})
		.then((response)=>response.json())
		.then((user)=>
		{
			this.props.loadUser(user)
			if(user.id)
			{
				this.props.onRouteChange('home');	
			}
		})
		
	}
	render()
	{
		const {onRouteChange,loadUser} = this.props;
		return (
		<article className="br3 ba b--gray-10 mv4 w-50 w-50-m w-25-l mw10 center shadow-10">
			<main className="pa4 white">
			  <div className="measure ">
			    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
			      <legend className="f1 fw6 ph0 mh0">Register</legend>
			      <div className="mt3">
			        <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
			        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
			        type="text" 
			        name="name"  
			        id="name"
			        onChange={this.onNameChange} />
			      </div>
			      <div className="mt3">
			        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
			        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
			        type="email"
			        name="email-address"
			        id="email-address" 
			        onChange={this.onEmailChange}/>
			      </div>
			      <div className="mv3">
			        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
			        <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
			        type="password"
			        name="password"
			        id="password"
			        onChange={this.onPasswordChange} />
			      </div>
			    </fieldset>
			    <div className="">
			      <input className="b ph3 pv2 input-reset ba b--white bg-transparent grow pointer f6 dib white" 
			      type="submit"
			      value="Register"
			      onClick={this.onSubmitRegister}/>
			    </div>
			  </div>
			</main>
			</article>
		);
	}
}

export default Register;