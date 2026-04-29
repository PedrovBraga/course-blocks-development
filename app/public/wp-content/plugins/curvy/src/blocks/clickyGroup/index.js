
import { registerBlockType, createBlock } from '@wordpress/blocks';

import './style.scss';

import edit from './edit';
import save from './save';
import metadata from './block.json';
// import icon from './assets/icon.svg';

registerBlockType( metadata.name, {
	/**
	 * @see ./edit.js
	 */
	edit,

	/**
	 * @see ./save.js
	 */
	save,	
} );
