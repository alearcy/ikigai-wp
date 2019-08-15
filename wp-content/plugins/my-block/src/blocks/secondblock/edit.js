import {
    AlignmentToolbar, BlockControls, ContrastChecker, InspectorControls, PanelColorSettings, RichText, withColors
} from "@wordpress/editor";
import {__} from "@wordpress/i18n";
import {DropdownMenu, Toolbar} from "@wordpress/components";
import {Component} from '@wordpress/element';
import {RangeControl, PanelBody} from '@wordpress/components';
import classnames from 'classnames';

class Edit extends Component {
    onChangeContent = content => {
        this.props.setAttributes({content});
    };
    onChangeAlignment = textAlignment => {
        this.props.setAttributes({textAlignment});
    };
    toggleShadow = () => {
        this.props.setAttributes({shadow: !this.props.attributes.shadow})
    };

    onChangeShadowOpacity = shadowOpacity => {
        this.props.setAttributes({shadowOpacity})
    };

    render() {
        const {className, attributes, setTextColor, setBackgroundColor, backgroundColor, textColor} = this.props;
        const {content, textAlignment, shadow, shadowOpacity} = attributes;
        const classes = classnames(className, {
            'has-shadow': shadow,
            [`shadow-opacity-${shadowOpacity * 100}`]: shadowOpacity
        });
        return (
            <>
                <InspectorControls>
                    <PanelBody title={__('Settings', 'my-block')}>
                        {shadow && <RangeControl
                            label={__('Shadow opacity', 'my-block')}
                            value={shadowOpacity}
                            onChange={this.onChangeShadowOpacity}
                            min={0.1}
                            max={0.4}
                            step={0.1}/>}

                    </PanelBody>
                    <PanelColorSettings
                        title={__('Panel', 'my-block')}
                        colorSettings={[
                            {
                                value: backgroundColor.color,
                                onChange: setBackgroundColor,
                                label: __('Background color', 'my-block')
                            },
                            {
                                value: textColor.color,
                                onChange: setTextColor,
                                label: __('Text color', 'my-block')
                            }
                        ]}>
                        <ContrastChecker
                            textColor={textColor.color}
                            backgroundColor={backgroundColor.color}
                        />
                    </PanelColorSettings>
                </InspectorControls>
                <BlockControls
                    controls={[
                        {
                            icon: "cloud",
                            title: __("Shadow", "my-block"),
                            onClick: () => this.toggleShadow(),
                            isActive: shadow
                        },
                    ]}
                >
                    <AlignmentToolbar
                        value={textAlignment}
                        onChange={this.onChangeAlignment}
                    />
                    <Toolbar>
                        <DropdownMenu
                            icon="editor-table"
                            label={__("test", "my-block")}
                            controls={[
                                {
                                    icon: "wordpress",
                                    title: __("test", "my-block"),
                                    onClick: () => alert(true),
                                    isActive: false
                                },
                                {
                                    icon: "wordpress",
                                    title: __("test", "my-block"),
                                    onClick: () => alert(true),
                                    isActive: false
                                }
                            ]}
                        />
                    </Toolbar>
                </BlockControls>
                <RichText
                    style={{
                        textAlign: textAlignment,
                        backgroundColor: backgroundColor.color,
                        color: textColor.color
                    }}
                    tagName="div"
                    className={classes}
                    onChange={this.onChangeContent}
                    value={content}
                />
            </>
        );
    }
}

export default withColors('backgroundColor', 'textColor')(Edit);
