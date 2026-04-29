<?php
// This file is generated. Do not modify it manually.
return array(
	'clickyButton' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'blockylicious/clicky-button',
		'version' => '0.1.0',
		'title' => 'Clicky Button',
		'category' => 'blockylicious',
		'icon' => 'smiley',
		'description' => 'Example block for creating a clickable element.',
		'supports' => array(
			'html' => false
		),
		'textdomain' => 'blockylicious',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'render' => 'file:./render.php',
		'parent' => array(
			'blockylicious/clicky-group'
		)
	),
	'clickyGroup' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'blockylicious/clicky-group',
		'version' => '0.1.0',
		'title' => 'Clicky Group',
		'category' => 'blockylicious',
		'icon' => 'smiley',
		'description' => 'Example block for creating a group of clickable elements.',
		'supports' => array(
			'html' => false
		),
		'textdomain' => 'blockylicious',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'render' => 'file:./render.php'
	),
	'curvy' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'blockylicious/curvy',
		'version' => '0.1.0',
		'title' => 'Curvy',
		'category' => 'blockylicious',
		'icon' => 'smiley',
		'description' => 'Example block curvy shape to make dividing page content.',
		'supports' => array(
			'html' => false,
			'color' => array(
				'background' => true,
				'link' => true,
				'text' => true
			),
			'spacing' => array(
				'padding' => true
			)
		),
		'variations' => array(
			array(
				'name' => 'top-only',
				'title' => 'Top Curve Only',
				'attributes' => array(
					'enableBottomCurve' => false,
					'enableTopCurve' => true
				)
			),
			array(
				'name' => 'bottom-only',
				'title' => 'Bottom Curve Only',
				'attributes' => array(
					'enableBottomCurve' => true,
					'enableTopCurve' => false
				)
			)
		),
		'example' => array(
			'innerBlocks' => array(
				array(
					'name' => 'core/heading',
					'attributes' => array(
						'content' => 'Example Curvy Block'
					)
				),
				array(
					'name' => 'core/paragraph',
					'attributes' => array(
						'content' => 'This is a curvy block. You can add any content here and it will be wrapped with the curvy design.'
					)
				)
			),
			'attributes' => array(
				'style' => array(
					'color' => array(
						'background' => '#ec4899'
					),
					'spacing' => array(
						'padding' => array(
							'top' => '50px',
							'right' => '50px',
							'bottom' => '50px',
							'left' => '50px'
						)
					)
				),
				'enableTopCurve' => true,
				'topWidth' => 100,
				'topHeight' => 100,
				'topFlipX' => false,
				'topFlipY' => false,
				'topColor' => '#FFFFFF',
				'enableBottomCurve' => true,
				'bottomWidth' => 100,
				'bottomHeight' => 100,
				'bottomFlipX' => false,
				'bottomFlipY' => false,
				'bottomColor' => '#FFFFFF'
			)
		),
		'attributes' => array(
			'style' => array(
				'type' => 'object',
				'default' => array(
					'color' => array(
						'background' => '#ec4899'
					),
					'spacing' => array(
						'padding' => array(
							'top' => '50px',
							'right' => '50px',
							'bottom' => '50px',
							'left' => '50px'
						)
					)
				)
			),
			'enableTopCurve' => array(
				'type' => 'boolean',
				'default' => true
			),
			'topWidth' => array(
				'type' => 'number',
				'default' => 100
			),
			'topHeight' => array(
				'type' => 'number',
				'default' => 100
			),
			'topFlipX' => array(
				'type' => 'boolean',
				'default' => false
			),
			'topFlipY' => array(
				'type' => 'boolean',
				'default' => false
			),
			'topColor' => array(
				'type' => 'string',
				'default' => '#FFFFFF'
			),
			'enableBottomCurve' => array(
				'type' => 'boolean',
				'default' => true
			),
			'bottomWidth' => array(
				'type' => 'number',
				'default' => 100
			),
			'bottomHeight' => array(
				'type' => 'number',
				'default' => 100
			),
			'bottomFlipX' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bottomFlipY' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bottomColor' => array(
				'type' => 'string',
				'default' => '#FFFFFF'
			)
		),
		'textdomain' => 'blockylicious',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'viewScript' => 'file:./view.js',
		'render' => 'file:./render.php'
	)
);
