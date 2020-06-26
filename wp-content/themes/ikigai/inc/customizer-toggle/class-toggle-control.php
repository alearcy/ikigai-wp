<?php
/**
 * Toggle Customizer Control
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

// Exit if WP_Customize_Control does not exsist.
if ( ! class_exists( 'WP_Customize_Control' ) ) {
	return null;
}

/**
 * This class is for the toggle control in the Customizer.
 *
 * @access public
 */
class Toggle_Control extends WP_Customize_Control {

	/**
	 * The type of customize control.
	 *
	 * @access public
	 * @since  1.3.4
	 * @var    string
	 */
	public $type = 'toggle';

	/**
	 * Enqueue scripts and styles.
	 *
	 * @access public
	 * @return void
	 * @since  1.0.0
	 */
	public function enqueue() {
		wp_enqueue_style( 'toggle-control-styles', get_parent_theme_file_uri( 'inc/customizer-toggle/toggle.css' ), false, '1.0.0', 'all' );
		wp_enqueue_script( 'toggle-control-scripts', get_parent_theme_file_uri( 'inc/customizer-toggle/toggle.js' ), array( 'jquery' ), '1.0.0', true );
	}

	/**
	 * Add custom parameters to pass to the JS via JSON.
	 *
	 * @access public
	 * @return void
	 * @since  1.0.0
	 */
	public function to_json() {
		parent::to_json();

		// The setting value.
		$this->json['id']           = $this->id;
		$this->json['value']        = $this->value();
		$this->json['link']         = $this->get_link();
		$this->json['defaultValue'] = $this->setting->default;
	}

	/**
	 * Don't render the content via PHP.  This control is handled with a JS template.
	 *
	 * @access public
	 * @return void
	 * @since  1.0.0
	 */
	public function render_content() {
	}

	/**
	 * An Underscore (JS) template for this control's content.
	 *
	 * Class variables for this control class are available in the `data` JS object;
	 * export custom variables by overriding {@see WP_Customize_Control::to_json()}.
	 *
	 * @return void
	 * @since  1.3.4
	 * @see    WP_Customize_Control::print_template()
	 *
	 * @access protected
	 */
	protected function content_template() {
		?>
        <label class="toggle">
            <div class="toggle--wrapper">

                <# if ( data.label ) { #>
                <span class="customize-control-title">{{ data.label }}</span>
                <# } #>

                <input id="toggle-{{ data.id }}" type="checkbox" class="toggle--input" value="{{ data.value }}" {{{
                       data.link }}} <# if ( data.value ) { #> checked="checked" <# } #> />
                <label for="toggle-{{ data.id }}" class="toggle--label"></label>
            </div>

            <# if ( data.description ) { #>
            <span class="description customize-control-description">{{ data.description }}</span>
            <# } #>
        </label>
		<?php
	}
}
