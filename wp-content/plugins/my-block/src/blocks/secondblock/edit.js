import {
    AlignmentToolbar, BlockControls, ContrastChecker, InspectorControls, PanelColorSettings, RichText, withColors
} from "@wordpress/editor";
import {__} from "@wordpress/i18n";
import {DropdownMenu, Toolbar} from "@wordpress/components";
import {Component} from '@wordpress/element';

class Edit extends Component {
    onChangeContent = content => {
        this.props.setAttributes({content});
    };
    onChangeAlignment = alignment => {
        this.props.setAttributes({alignment});
    };

    render() {
        const {className, attributes, setTextColor, setBackgroundColor, backgroundColor, textColor} = this.props;
        const {content, alignment} = attributes;
        console.log(this.props)
        return (
            <>
                <InspectorControls>
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
                            icon: "wordpress",
                            title: __("test", "my-block"),
                            onClick: () => this.onChangeAlignment("right"),
                            isActive: false
                        },
                        {
                            icon: "wordpress",
                            title: __("test", "my-block"),
                            onClick: () => alert(true),
                            isActive: false
                        }
                    ]}
                >
                    <AlignmentToolbar
                        value={alignment}
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
                        textAlign: alignment,
                        backgroundColor: backgroundColor.color,
                        color: textColor.color
                    }}
                    tagName="p"
                    className={className}
                    onChange={this.onChangeContent}
                    value={content}
                />
            </>
        );
    }
}

export default withColors('backgroundColor', 'textColor')(Edit);
