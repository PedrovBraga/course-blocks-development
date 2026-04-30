
import { registerBlockType, createBlock } from '@wordpress/blocks';

import './style.scss';

import edit from './edit';
import save from './save';
import metadata from './block.json';
import icon from './assets/clickyGroup.svg';

const deprecated = [
	{
		save() {
			return <div>click group save</div>;
		}
	}
];

registerBlockType( metadata.name, {
	edit,
	save,
	deprecated,
	icon: <img src={icon} alt="Clicky Group Icon" />
} );
