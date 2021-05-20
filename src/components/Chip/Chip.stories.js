import React from 'react';

import { Chip } from './Chip';

export default {
  title: 'Components/Chip',
  component: Chip
};

const Template = (args) => <Chip {...args} />;

export const Normal = Template.bind({});
Normal.args = {
	item: {
		type: {
			name: "normal"
		}
	}
};

export const Water = Template.bind({});
Water.args = {
	item: {
		type: {
			name: "water"
		}
	}
};

