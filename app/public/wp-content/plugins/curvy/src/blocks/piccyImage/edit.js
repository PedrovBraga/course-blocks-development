
import { __ } from '@wordpress/i18n';
import { useBlockProps, MediaUploadCheck, InspectorControls, InnerBlocks, BlockControls, MediaUpload } from '@wordpress/block-editor';
import metadata from './block.json';
import { useSelect } from '@wordpress/data';
import { Icon } from '@wordpress/components';
import { ImageThumbnail } from '../../components/imageThumbnail';
import "./editor.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPanorama } from '@fortawesome/free-solid-svg-icons';
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false; // Prevent Font Awesome from adding its CSS automatically

import './editor.scss'
import { useImage } from '../../hooks/useImage';

export default function Edit(props) {
	const blockProps = useBlockProps();
	const image = useImage(props.attributes.imageId);

	console.log({image});
	const imageSelected = !!props.attributes.imageId && !!image?.source_url;

	return <div {...blockProps}>
		{!!imageSelected && (
			<ImageThumbnail imageId={props.attributes.imageId} height={75} width={100} />
		)}
		{!imageSelected && 
			<div style={{ display: "flex", height: 150, width: "100%", backgroundColor: "#f0f0f0" }} className="placeholder">
				<FontAwesomeIcon icon={faPanorama} style={{margin: "auto"}} />
			</div>
		}
		<MediaUploadCheck>
			<MediaUpload allowedTypes={["image"]} render={({open}) => {
				return (
					<button className="media-select" onClick={open}>
						{ imageSelected ? 
							__('Replace image', metadata.textdomain) : 
							__('Select an image', metadata.textdomain) }
					</button>
				)
			}}
			value={props.attributes.imageId}
			onSelect={(item) => {
				// console.log({item});
				props.setAttributes({imageId: item.id});
			}}
			/>
		</MediaUploadCheck>
	</div>;
}
