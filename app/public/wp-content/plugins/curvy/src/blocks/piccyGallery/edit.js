
import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls, InnerBlocks, useInnerBlocksProps, RichText, BlockControls } from '@wordpress/block-editor';
import { useSelect } from '@wordpress/data';
// import { PanelBody, ToggleControl } from "@wordpress/components";
import './editor.scss';

import { PanelBody, SelectControl } from '@wordpress/components';
import { ToolbarGroup } from '@wordpress/components';
import { ToolbarButton } from '@wordpress/components';
import { Icon } from '@wordpress/components';
import metadata from './block.json';
import {useState, useEffect} from '@wordpress/element';
import './editor.scss'
import { ImageThumbnail } from '../../components/imageThumbnail';

export default function Edit(props) {
	const blockProps = useBlockProps();
	const innerBlocksProps = useInnerBlocksProps({
		className: 'piccy-gallery-inner-blocks',
	}, {
		allowedBlocks: ['blockylicious/piccy-image']
	});
	const [editMode, setEditMode] = useState(true);
	const innerBlocks = useSelect((select) => {
		const {getBlocksByClientId} = select("core/block-editor");
		const block = getBlocksByClientId(props.clientId)?.[0];
		return block?.innerBlocks;
		
	}, [props.clientId]);

	const [previewModeImage, setPreviewModeImage] = useState(null);

	useEffect(() => {
		if (!previewModeImage && innerBlocks?.[0]) {
			setPreviewModeImage({
				imageId: innerBlocks[0].attributes.imageId,
				blockId: innerBlocks[0].clientId,
			});
		}
	}, [innerBlocks]);


	console.log({innerBlocks});
	return <>
		<div {...blockProps}>
			{!!editMode && <div className="edit-mode">
				<span className="piccy-label">{__('Piccy image gallery', metadata.textdomain)}</span>
				<div {...innerBlocksProps} />
			</div>}
			{!editMode && (
				<>
					<div style={{ display: "flex", gap: 8 }}>{(innerBlocks || []).map(innerBlock => (
						<ImageThumbnail
							key={innerBlock.clientId}
							imageId={innerBlock.attributes.imageId}
							height={75}
							width={100}
							onClick={() => {
								setPreviewModeImage({
									imageId: innerBlock.attributes.imageId,
									blockId: innerBlock.clientId,
								})
							}}
						/>
						))}
					</div>
					<div>
						<ImageThumbnail 
							imageId={previewModeImage?.imageId}
							height="initial"
						/>
					</div>
				</>
			)}
		</div>;
		<BlockControls>
			<ToolbarGroup>
				<ToolbarButton
					icon={editMode ? (<Icon icon="welcome-view-site" />) : (<Icon icon="edit" />)}
					label= { editMode ? __("Preview gallery", metadata.textdomain) 
									: __("Edit gallery", metadata.textdomain) }
					// title={__('Edit Curves', 'curvy')}
					onClick={() => setEditMode((prevState) => !prevState)}
					// isActive={isEditingCurves}
				/>
			</ToolbarGroup>
		</BlockControls>
	</>
}
