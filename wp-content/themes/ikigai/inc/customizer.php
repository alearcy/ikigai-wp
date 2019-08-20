<?php
/**
 * ikigai Theme Customizer
 *
 * @package ikigai
 */

/**
 * Add postMessage support for site title and description for the Theme Customizer.
 *
 * @param WP_Customize_Manager $wp_customize Theme Customizer object.
 */
function ikigai_customize_register($wp_customize)
{
    $wp_customize->get_setting('blogname')->transport = 'postMessage';
    $wp_customize->get_setting('blogdescription')->transport = 'postMessage';
    $wp_customize->get_setting('header_textcolor')->transport = 'postMessage';

    $wp_customize->add_setting( 'mobile_logo')->transport = 'refresh';

    $wp_customize->add_section('ikigai_mobile_logo', array(
        'title' => 'Mobile logo',
        'priority' => 30,
    ));

    $wp_customize->add_control(
        new WP_Customize_Image_Control(
            $wp_customize,
            'mobile_logo',
            array(
                'label' => 'Upload a logo',
                'section' => 'ikigai_mobile_logo',
                'settings' => 'mobile_logo',
            )
        )
    );

    $wp_customize->add_section('ikigai_colors', array(
        'title' => 'Colors',
        'priority' => 30,
    ));
    $wp_customize->add_setting('background_color', array(
        'default' => '#43C6E4',
        'transport' => 'refresh',
    ));
    $wp_customize->add_control(
        new WP_Customize_Color_Control(
            $wp_customize,
            'background_color',
            array(
                'label' => 'Background Color',
                'section' => 'ikigai_colors',
                'settings' => 'background_color',
            )
        )
    );


    if (isset($wp_customize->selective_refresh)) {
        $wp_customize->selective_refresh->add_partial('blogname', array(
            'selector' => '.site-title a',
            'render_callback' => 'ikigai_customize_partial_blogname',
        ));
        $wp_customize->selective_refresh->add_partial('blogdescription', array(
            'selector' => '.site-description',
            'render_callback' => 'ikigai_customize_partial_blogdescription',
        ));
    }
}

add_action('customize_register', 'ikigai_customize_register');

/**
 * Render the site title for the selective refresh partial.
 *
 * @return void
 */
function ikigai_customize_partial_blogname()
{
    bloginfo('name');
}

/**
 * Render the site tagline for the selective refresh partial.
 *
 * @return void
 */
function ikigai_customize_partial_blogdescription()
{
    bloginfo('description');
}

/**
 * Binds JS handlers to make Theme Customizer preview reload changes asynchronously.
 */
function ikigai_customize_preview_js()
{
    wp_enqueue_script('ikigai-customizer', get_template_directory_uri() . '/js/customizer.js', array('customize-preview'), '20151215', true);
}

add_action('customize_preview_init', 'ikigai_customize_preview_js');
