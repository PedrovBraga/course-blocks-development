
import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	useInnerBlocksProps,
	InspectorControls,
	InnerBlocks,
	BlockControls,
	JustifyContentControl,
} from '@wordpress/block-editor';
// import { PanelBody, ToggleControl } from "@wordpress/components";
import './editor.scss';
import { parseValue } from '../../utils/parseValue';

// import metadata from './block.json';
// import { Curve } from './components/curve';
// import { TopCurveSettings } from './components/topCurveSettings';
// import { BottomCurveSettings } from './components/bottomCurveSettings';

export default function Edit(props) {
	// console.log({ ...props.attributes });
	const blockGap = parseValue(props.attributes.style?.spacing?.blockGap || "");
	const blockProps = useBlockProps({
		style: {
			gap: blockGap,
			justifyContent: props.attributes.justifyContent,
		}
	});
	const innerBlocksProps = useInnerBlocksProps(blockProps, {
		template: [['blockylicious/clicky-button', {}]],
		allowedBlocks: ['blockylicious/clicky-button'],
	});

	return ( <>
		<BlockControls>
			<JustifyContentControl
				value={ props.attributes.justifyContent }
				allowedControls={["left", "center", "right"]}
				onChange={ ( value ) => props.setAttributes( { justifyContent: value } ) }
			/>
		</BlockControls>
		<div { ...innerBlocksProps}></div>
	</>
	);
}
