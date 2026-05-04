<?php
$image_id  = isset( $attributes['imageId'] ) ? (int) $attributes['imageId'] : 0;
$image_url = $image_id ? wp_get_attachment_image_url( $image_id, 'full' ) : '';
$image_alt = $image_id ? get_post_meta( $image_id, '_wp_attachment_image_alt', true ) : '';
?>
<div <?php echo get_block_wrapper_attributes(); ?>>
	<?php if ( $image_url ) : ?>
		<img src="<?php echo esc_url( $image_url ); ?>" alt="<?php echo esc_attr( $image_alt ); ?>" style="width:100%;height:100%;object-fit:cover;" />
	<?php endif; ?>
</div>
