class Toggle extends React.Component {
	constructor() {
		super();
		this.state = {
			visibility: false
		};

		this.toggleVisibility = this.toggleVisibility.bind(this);
	}

	toggleVisibility() {
		this.setState({ visibility: !this.state.visibility });
	}

	render() {
		return (
			<div>
				<h1>Visibility Toggle</h1>
				<button onClick={this.toggleVisibility}>
					{this.state.visibility ? 'Hide details' : 'Show details'}
				</button>
				{this.state.visibility && (
					<div>
						<p>These are some details you can see now!!!</p>
					</div>
				)}
			</div>
		);
	}
}

ReactDOM.render(<Toggle />, document.getElementById('app'));
