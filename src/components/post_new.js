import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
class PostNew extends Component{

	renderField(field){
		const className = `form-group ${field.meta.touched && field.meta.error ? 'has-danger' : ''}`;
		return(
			<div className= {className}>
			<label>{field.label}</label>
				<input className="form-control" 
				type = "text" {...field.input} />
				<div className="text-help"> 
					{ field.meta.touched ? field.meta.error : '' }
				</div>
			</div>
		);
	}

	onSubmit(values){
		console.log(values);
	}

	render(){
		const { handleSubmit } = this.props;
		return(
			<div>
			<form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
				<Field name = "title" 
				label="Title"
				component={this.renderField} />
				<Field name = "categories" 
				label="Categories"
				component={this.renderField} />
				<Field name = "content" 
				label="Post Body"
				component={this.renderField} />
				<button type = "submit" className="btn btn-primary">
				Submit</button>
			</form>
			</div>
		);
	}
}

//if errors found, stop form submittal
function validate(values){
	const errors = {};
	if(!values.title){
		errors.title = "Enter a title!";
	}
	if(!values.categories){
		errors.categories = "Please add a category or two.";
	}
	if(!values.content){
		errors.content = "Your post is blank!";
	}
	return errors;
}

export default reduxForm({
	validate: validate,
	form: 'PostNewForm'
})(PostNew);