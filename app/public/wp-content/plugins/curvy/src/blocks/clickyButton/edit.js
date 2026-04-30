
import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls, InnerBlocks, RichText } from '@wordpress/block-editor';
import { useSelect } from '@wordpress/data';
// import { PanelBody, ToggleControl } from "@wordpress/components";
import './editor.scss';

// import metadata from './block.json';
// import { Curve } from './components/curve';
// import { TopCurveSettings } from './components/topCurveSettings';
// import { BottomCurveSettings } from './components/bottomCurveSettings';
import { PanelBody, SelectControl } from '@wordpress/components';


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

	const posts = useSelect((select) => {
		const data = select("core").getEntityRecords("postType", props.attributes.postType, {
			per_page: -1,
		});
		return data;
	}, [props.attributes.postType]);

	console.log({posts});

	const blockProps = useBlockProps();
	return (
		<>
			<InspectorControls>
				<PanelBody title="destination">
					<SelectControl
						label="Type"
						value={props.attributes.postType}
						onChange={(newValue) => {
							props.setAttributes({
								postType: newValue
							})
						}}
						options={[{
							label: "Select a post type",
							value:""
						}, ...(postTypes || []).map((postType) => (
								{
									label: postType.labels.singular_name,
									value: postType.slug
								}
							))
						]}
					/>
					{!!props.attributes.postType && 
					<SelectControl
						label="{`Linked ${props.attributes.postType}`}"
						value={props.attributes.linkedPost}
						onChange={(newValue) => {
							props.setAttributes({
								linkedPost: newValue ? parseInt(newValue) : null
							})
						}}
						options={[{
							label: `Select a ${props.attributes.postType} to link to`,
							value:""
						}, ...(posts || []).map((post) => (
								{
									label: post.title.rendered,
									value: post.id
								}
							))
						]}
					/>
					}
				</PanelBody>
			</InspectorControls>
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
		</>
	);
}
