import { useImage } from "../hooks/useImage"

export const ImageThumbnail = (props) => {
    const image = useImage(props.imageId);

    if (!image?.source_url) return null;

    return <img src={image.source_url}
            alt={image.alt_text || ""}
            style={{ display: "block", width: props.width || "100%", height: props.height || 150, objectFit: "cover" }}
            onClick={props.onClick}/>;
}