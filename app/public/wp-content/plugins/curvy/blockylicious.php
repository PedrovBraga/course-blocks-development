<?php
namespace DevPedroBraga;
/**
 * Plugin Name:       blockylicious
 * Description:       Example block of funky blocks.
 * Version:           0.1.0
 * Requires at least: 6.8
 * Requires PHP:      7.4
 * Author:            Dev Pedro Braga
 * Author URI:        https://www.github.com/PedrovBraga
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       blockylicious
 *
 * @package CreateBlock
 */

if ( ! defined( 'ABSPATH' ) ) {
	die('silence!'); // Exit if accessed directly.
}
/**
 * Registers the block(s) metadata from the `blocks-manifest.php` and registers the block type(s)
 * based on the registered block metadata. Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://make.wordpress.org/core/2025/03/13/more-efficient-block-type-registration-in-6-8/
 * @see https://make.wordpress.org/core/2024/10/17/new-block-type-registration-apis-to-improve-performance-in-wordpress-6-7/
 */

final class Blockylicious {
	static function init(){	
		add_action('enqueue_block_assets', function(){
			// $style_url = plugins_url("build/style-index.css", __FILE__);
			wp_enqueue_style(
				'dashicons'
			);
		});
		add_action( 'init', function(){
			add_filter('block_categories_all', function($categories){
				// Adiciona nova categoria de blocos "Blockylicious" no início da lista de categorias.
				array_unshift(
					$categories,
					[
						'slug'  => 'blockylicious',
						'title' => 'Blockylicious',
					]
				);
				return $categories;
			});
			wp_register_block_types_from_metadata_collection( __DIR__ . '/build/blocks', __DIR__ . '/build/blocks-manifest.php' );
		});
	}

	static function convert_custom_properties($value){
		$prefix = 'var-';
		$prefix_len = strlen($prefix);
		$token_in = '|';
		$token_out = '--';
		if(str_starts_with($value, $prefix)){
			$unwrapped_name = str_replace(
				$token_in,
				$token_out,
				substr($value, $prefix_len)
			);
			$value = "var(--wp--$unwrapped_name)";	
		}

		return $value;
	}

}

Blockylicious::init();
