import React from "react";

import Chip from "./../components/Chip/Chip";

export default {
	title: "Components/Chip",
	component: Chip,
};

const Template = (args) => <Chip name="normal" {...args} />;

export const Normal = Template.bind({});
Normal.args = {
	name: "normal",
};

export const Water = Template.bind({});
Water.args = {
	name: "water",
};
