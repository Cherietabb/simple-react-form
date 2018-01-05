import React, {Component} from 'react';
import './App.css';
import AppBar from 'material-ui/AppBar';
import Footer from './components/footer'
import MuiContactForm from './components/Contact'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {grey900, indigo900, pink300} from 'material-ui/styles/colors';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

class App extends Component {
	state = {
		fields: {}
	};

	onChange = updatedValue => {
		this.setState({
			fields: {
				...this.state.fields,
				...updatedValue
			}
		})
	};

	render() {
		return (
			<MuiThemeProvider muiTheme={muiTheme}>

				<div className="App">
					<div>
						<AppBarIcon />
					</div>
					<div>
						<div>
							<MuiContactForm onChange={fields => this.onChange(fields)} />
							<br />
							<p>
								{JSON.stringify(this.state.fields, null, 2)}
							</p>
						</div>
					</div>
					<div>
						<Footer />
					</div>
				</div>
			</MuiThemeProvider>
		);
	}
}

const AppBarIcon = () => (
	<AppBar
		title="Simple React Form"
		iconClassNameRight="muidocs-icon-navigation-expand-more"
	/>
);

const muiTheme = getMuiTheme({
	palette: {
		primary1Color: indigo900,
		accent1Color: pink300,
		textColor: grey900,

	},
	appBar: {
		height: 100
	},
	title: {
		fontSize: 30
	}
});


export default App;
