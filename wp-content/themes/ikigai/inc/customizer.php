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
function ikigai_customize_register( $wp_customize ) {


	// Add custom control.
	require get_parent_theme_file_path( 'inc/customizer-toggle/class-toggle-control.php' );
	require get_parent_theme_file_path( 'inc/customizer-toggle/sanitization.php' );

	// Register the custom control type.
	$wp_customize->register_control_type( 'Toggle_Control' );


	// settings
	$wp_customize->get_setting( 'blogname' )->transport         = 'postMessage';
	$wp_customize->get_setting( 'blogdescription' )->transport  = 'postMessage';
	$wp_customize->get_setting( 'header_textcolor' )->transport = 'postMessage';

	$wp_customize->add_setting( 'mobile_logo' )->transport = 'refresh';
	$wp_customize->add_setting( 'toggle', array(
		'default'           => false,
		'type'              => 'theme_mod',
		'transport'         => 'postMessage',
		'capability'        => 'edit_theme_options',
		'sanitize_callback' => 'ikigai_sanitize_checkbox',
	) );

	// sections
	$wp_customize->add_section( 'ikigai_mobile_logo', array(
		'title'    => 'Mobile logo',
		'priority' => 30,
	) );

	$wp_customize->add_section( 'ikigai_toggle', array(
		'title'    => 'Dev toggle',
		'priority' => 30,
	) );

	// controls
	$wp_customize->add_control(
		new WP_Customize_Image_Control(
			$wp_customize,
			'mobile_logo',
			array(
				'label'    => 'Upload the mobile logo',
				'section'  => 'ikigai_mobile_logo',
				'settings' => 'mobile_logo',
			)
		)
	);

	$wp_customize->add_control(
		new Toggle_Control(
			$wp_customize,
			'toggle',
			array(
				'label'       => esc_html__( 'Enable dev visual', 'ikigai' ),
				'description' => __( 'Show the various sections like header, footer, sidebar etc.', 'ikigai' ),
				'section'     => 'ikigai_toggle',
				'type'        => 'toggle',
				'settings'    => 'toggle',
			)
		)
	);

	if ( isset( $wp_customize->selective_refresh ) ) {
		$wp_customize->selective_refresh->add_partial( 'blogname', array(
			'selector'        => '.site-title a',
			'render_callback' => 'ikigai_customize_partial_blogname',
		) );
		$wp_customize->selective_refresh->add_partial( 'blogdescription', array(
			'selector'        => '.site-description',
			'render_callback' => 'ikigai_customize_partial_blogdescription',
		) );
	}
}

add_action( 'customize_register', 'ikigai_customize_register' );

/**
 * Render the site title for the selective refresh partial.
 *
 * @return void
 */
function ikigai_customize_partial_blogname() {
	bloginfo( 'name' );
}

/**
 * Render the site tagline for the selective refresh partial.
 *
 * @return void
 */
function ikigai_customize_partial_blogdescription() {
	bloginfo( 'description' );
}

/**
 * Binds JS handlers to make Theme Customizer preview reload changes asynchronously.
 */
function ikigai_customize_preview_js() {
	wp_enqueue_script( 'ikigai-customizer', get_template_directory_uri() . '/js/customizer.js', array( 'customize-preview' ), '20151215', true );
}

add_action( 'customize_preview_init', 'ikigai_customize_preview_js' );
