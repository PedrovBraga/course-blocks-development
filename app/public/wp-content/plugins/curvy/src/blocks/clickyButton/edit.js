
import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls, InnerBlocks, RichText } from '@wordpress/block-editor';
import { useSelect } from '@wordpress/data';
// import { PanelBody, ToggleControl } from "@wordpress/components";
import './editor.scss';

// import metadata from './block.json';
// import { Curve } from './components/curve';
// import { TopCurveSettings } from './components/topCurveSettings';
// import { BottomCurveSettings } from './components/bottomCurveSettings';

export default function Edit(props) {
	// console.log({ ...props.attributes });
	const postTypes = useSelect((select) => {
		const data = select("core").getEntityRecords("root", "postType", {
			per_page: -1,
		});
		return data?.filter(
			(item) => item.visibility.show_in_nav_menus && item.visibility.show_ui
		);
	});
	console.log({postTypes});
	const blockProps = useBlockProps();
	return (
			<div { ...blockProps }>
				<RichText
					placeholder='Label'
					value={ props.attributes.labelText }
					allowedFormats={[]}
					multiline={ false }
					onSplit={() => {}}
					onReplace={() => {}}
					onChange={ ( value ) => props.setAttributes( { labelText: value } ) }
				/>
			</div>
	);
}
