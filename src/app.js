class IndecisionApp extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			options: props.options
		};

		this.handlePick = this.handlePick.bind(this);
		this.handleAddOption = this.handleAddOption.bind(this);
		this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
		this.handleDeleteSingleOption = this.handleDeleteSingleOption.bind(this);
	}

	componentDidMount() {
		try {
			const json = localStorage.getItem('indecisionOptions');
			const options = JSON.parse(json);
			if (options) {
				this.setState({ options });
			}
		} catch (error) {
			console.log('Nothing but error');
		}

		console.log('fetching data');
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevState.options.length !== this.state.options.length) {
			const json = JSON.stringify(this.state.options);
			localStorage.setItem('indecisionOptions', json);
		}
		console.log('saving data');
	}

	componentWillUnmount() {
		console.log('Component Will Unmount');
	}

	handleDeleteOptions() {
		this.setState({ options: [] });
	}

	handleDeleteSingleOption(option) {
		this.setState({ options: this.state.options.filter((opt) => opt !== option) });
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

		this.setState({ options: this.state.options.concat([ option ]) });
	}

	render() {
		return (
			<React.Fragment>
				<Header />
				<Action hasOptions={this.state.options.length == 0} randomPick={this.handlePick} />
				<Options
					options={this.state.options}
					deleteOptions={this.handleDeleteOptions}
					handleDeleteSingleOption={this.handleDeleteSingleOption}
				/>
				<AddOption handleAddOption={this.handleAddOption} />
			</React.Fragment>
		);
	}
}

IndecisionApp.defaultProps = {
	options: []
};

const Header = ({ title, subtitle }) => {
	return (
		<div>
			<h1>{title}</h1>
			{subtitle && <h2>{subtitle}</h2>}
		</div>
	);
};

Header.defaultProps = {
	title: 'Indecision',
	subtitle: 'Put your life in the hands of a computer'
};

const Action = ({ hasOptions, randomPick }) => {
	return (
		<button disabled={hasOptions} onClick={randomPick}>
			What should I do?
		</button>
	);
};

const Options = ({ deleteOptions, options, handleDeleteSingleOption }) => {
	return (
		<div>
			<button onClick={deleteOptions}>Remove All</button>
			{options.length === 0 && <p>Please add an option to get started!</p>}
			{options.map((option) => (
				<Option key={option} text={option} deleteSingleOption={handleDeleteSingleOption} />
			))}
		</div>
	);
};

const Option = ({ text, deleteSingleOption }) => (
	<div>
		{text}
		<button onClick={() => deleteSingleOption(text)}>remove</button>
	</div>
);

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
		if (!error) e.target.elements.option.value = '';
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
