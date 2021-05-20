import React from 'react'

function Chip({item}) {
	return (
		<li className={"type " + item.type.name}>{item.type.name}</li>
	)
}

export default Chip
