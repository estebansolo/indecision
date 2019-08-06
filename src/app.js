class IndecisionApp extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			options: []
		};

		this.handlePick = this.handlePick.bind(this);
		this.handleAddOption = this.handleAddOption.bind(this);
		this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
	}

	handleDeleteOptions() {
		this.setState({ options: [] });
	}

	handlePick() {
		const randomNum = Math.floor(Math.random() * this.state.options.length);
		const option = this.state.options[randomNum];
		alert(option);
	}

	handleAddOption(option) {
		if (!option) {
			return 'Enter valid value to add item';
		} else if (this.state.options.indexOf(option) !== -1) {
			return 'This option already exists';
		}

		this.setState((prevState) => {
			return {
				options: prevState.options.concat([ option ])
			};
		});
	}

	render() {
		const title = 'Indecision App';
		const subtitle = 'Put your life in the hands of a computer';

		return (
			<React.Fragment>
				<Header title={title} subtitle={subtitle} />
				<Action hasOptions={this.state.options.length == 0} randomPick={this.handlePick} />
				<Options options={this.state.options} deleteOptions={this.handleDeleteOptions} />
				<AddOption handleAddOption={this.handleAddOption} />
			</React.Fragment>
		);
	}
}

class Header extends React.Component {
	render() {
		return (
			<div>
				<h1>{this.props.title}</h1>
				<h2>{this.props.subtitle}</h2>
			</div>
		);
	}
}

class Action extends React.Component {
	render() {
		return (
			<button disabled={this.props.hasOptions} onClick={this.props.randomPick}>
				What should I do?
			</button>
		);
	}
}

class Options extends React.Component {
	render() {
		return (
			<div>
				<button onClick={this.props.deleteOptions}>Remove All</button>
				{this.props.options.map((option) => <Option key={option} text={option} />)}
			</div>
		);
	}
}

class Option extends React.Component {
	render() {
		return <div>{this.props.text}</div>;
	}
}

class AddOption extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			error: undefined
		};

		this.addOption = this.addOption.bind(this);
	}

	addOption(e) {
		e.preventDefault();
		const option = e.target.elements.option.value.trim();
		const error = this.props.handleAddOption(option);

		this.setState({ error });
		e.target.elements.option.value = '';
	}

	render() {
		return (
			<div>
				{this.state.error && <p>{this.state.error}</p>}
				<form onSubmit={this.addOption}>
					<input type="text" name="option" />
					<button>Add Option</button>
				</form>
			</div>
		);
	}
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
