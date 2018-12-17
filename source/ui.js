'use strict';
const path = require('path');
const {h, Text} = require('ink');
const SelectInput = require('ink-select-input');
const opn = require('opn');
const terminalImage = require('terminal-image');

const open = url => opn(url, {wait: false});

const handleSelect = item => {
	if (item.url) {
		open(item.url);
	}

	if (item.action) {
		item.action();
	}
};

const items = [
	{
		label: 'Website',
		url: 'http://amorist.io'
	},
	{
		label: 'Twitter',
		url: 'https://twitter.com/amor90s'
	},
	{
		label: 'GitHub',
		url: 'https://github.com/amorist'
	},
	{
		label: 'About',
		url: 'http://amorist.io/about'
	},
	{
		label: 'Unicorns!',
		async action() {
			console.log(await terminalImage.file(path.join(__dirname, 'unicorn1.gif')));
			console.log(await terminalImage.file(path.join(__dirname, 'unicorn2.gif')));
			console.log(await terminalImage.file(path.join(__dirname, 'unicorn3.gif')));
		}
	},
	{
		label: 'Quit',
		action() {
			process.exit(); // eslint-disable-line unicorn/no-process-exit
		}
	}
];

module.exports = () => (
	<div>
		<br/>
		<div>
			<Text>{'I\'m a open-sourcerer making things like macOS apps, CLI tools, and modules.'}</Text>
		</div>
		<br/>
		<SelectInput items={items} onSelect={handleSelect}/>
	</div>
);
