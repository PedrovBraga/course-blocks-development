
import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls, InnerBlocks } from '@wordpress/block-editor';
// import { PanelBody, ToggleControl } from "@wordpress/components";
import './editor.scss';

// import metadata from './block.json';
// import { Curve } from './components/curve';
// import { TopCurveSettings } from './components/topCurveSettings';
// import { BottomCurveSettings } from './components/bottomCurveSettings';

export default function Edit(props) {
	// console.log({ ...props.attributes });
	const blockProps = useBlockProps();
	return (
			<div { ...blockProps }>click button</div>
	);
}
