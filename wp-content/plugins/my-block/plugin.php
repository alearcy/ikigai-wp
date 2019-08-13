<?php
/**
 * Plugin name: My block
 * Plugin URI: http://pippo.it
 * Description: Pippo è un bel plugin
 * Author: arcy
 * Author URI: http://pippo.it/arcy
 */

if (!defined('ABSPATH')) {
  exit;
}

function custom_register_block_type($block, $options=array()) {
    register_block_type(
        'my-block/' . $block,
        array_merge(
            array(
                'editor_script' => 'my-block-editor-script',
                'editor_style' => 'my-block-editor-style',
                'script' => 'my-block-script',
                'style' => 'my-block-style'
            ),
            $options
        )
    );
}

function myblock_blocks_register() {

    wp_register_script(
        'my-block-editor-script',
        plugins_url('dist/editor.js', __FILE__),
        array('wp-blocks', 'wp-i18n', 'wp-editor', 'wp-components')
    );

    wp_register_script(
        'my-block-script',
        plugins_url('dist/script.js', __FILE__),
        array('')
    );

    wp_register_style(
        'my-block-editor-style',
        plugins_url('dist/editor.css', __FILE__),
        array('wp-edit-blocks')
    );

    wp_register_style(
        'my-block-style',
        plugins_url('dist/style.css', __FILE__)
    );

    custom_register_block_type('firstblock');
    custom_register_block_type('secondblock');
}

add_action('init', 'myblock_blocks_register');
