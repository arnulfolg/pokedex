import React from 'react';

import Form from '../components/Form/Form';

export default {
  title: 'Components/Form',
  component: Form
};

const Template = (args) => <Form {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  handleChange: (newNumber) => {
		return newNumber
	}
};

