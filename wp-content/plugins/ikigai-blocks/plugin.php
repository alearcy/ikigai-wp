<?php
/**
 * Plugin name: Ikigai blocks
 * Plugin URI: https://slashfactory.it
 * Description: Simple blocks for the Ikigai base theme
 * Author: /slashfactory
 * Author URI: https://slashfactory.it
 */

if (!defined('ABSPATH')) {
  exit;
}

function my_plugin_block_categories( $categories, $post ) {
    return array_merge(
        $categories,
        array(
            array(
                'slug' => 'ikigai-blocks-category',
                'title' => __( 'Ikigai blocks category', 'ikigai-blocks' ),
                'icon'  => 'wordpress',
            ),
        )
    );
}

add_filter('block_categories', 'my_plugin_block_categories', 10, 2);

function custom_register_block_type($block, $options=array()) {
    register_block_type(
        'ikigai-blocks/' . $block,
        array_merge(
            array(
                'editor_script' => 'ikigai-blocks-editor-script',
                'editor_style' => 'ikigai-blocks-editor-style',
                'script' => 'ikigai-blocks-script',
                'style' => 'ikigai-blocks-style',
            ),
            $options
        )
    );
}

function ikigai_blocks_register() {

    wp_register_script(
        'ikigai-blocks-editor-script',
        plugins_url('dist/editor.js', __FILE__),
        array('wp-blocks', 'wp-i18n', 'wp-editor', 'wp-components', 'wp-blob', 'wp-compose', 'wp-block-editor', 'wp-data')
    );

    wp_register_script(
        'ikigai-blocks-script',
        plugins_url('dist/script.js', __FILE__),
        array('')
    );

    wp_register_style(
        'ikigai-blocks-editor-style',
        plugins_url('dist/editor.css', __FILE__),
        array('wp-edit-blocks')
    );

    wp_register_style(
        'ikigai-blocks-style',
        plugins_url('dist/style.css', __FILE__)
    );

    custom_register_block_type('team-member');
    custom_register_block_type('sections');
    custom_register_block_type('cta');
}

function ikigai_equeue_external_scripts() {
    wp_register_style( 'AOS-STYLE', '//unpkg.com/aos@2.3.1/dist/aos.css', null, null, 'all' );
    wp_enqueue_style('AOS-STYLE');
    wp_register_script( 'AOS', '//unpkg.com/aos@2.3.1/dist/aos.js', null, null, false );
    wp_enqueue_script('AOS');
}

function aos_init_after_body_open_tag() {
    ?>
    <script>AOS.init();</script>
    <?php
}

add_action('init', 'ikigai_blocks_register');
add_action('enqueue_block_assets', 'ikigai_equeue_external_scripts');
add_action('wp_body_open', 'aos_init_after_body_open_tag');
