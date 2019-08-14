import './styles.editor.scss';
import {registerBlockType} from '@wordpress/blocks';
import {__} from '@wordpress/i18n';
import {RichText, BlockControls, AlignmentToolbar} from '@wordpress/editor';
import {Toolbar, DropdownMenu} from '@wordpress/components';

registerBlockType("my-block/secondblock", {
    title: __("Second block", "my-block"),
    description: __("My second block", "my-block"),
    category: "layout",
    icon: {
        background: "#ea732f",
        foreground: "#fff",
        src:
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path fill="none" d="M0 0h24v24H0z"/>
                <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/>
            </svg>
    },
    keywords: [__('photo', 'my-block'), __('image', 'my-block')],
    attributes: {
        content: {
            type: 'string',
            selector: 'p',
            source: 'html'
        },
        alignment: {
            type: 'string',

        }
    },
    edit: ({className, attributes, setAttributes}) => {
        const {content, alignment} = attributes;
        const onChangeContent = content => {
            setAttributes({content})
        };
        const onChangeAlignment = alignment => {
            setAttributes({alignment})
        };
        return (
            <>
                <BlockControls
                    controls={[
                        {
                            icon: 'wordpress',
                            title: __('test', 'my-block'),
                            onClick: () => onChangeAlignment('right'),
                            isActive: false
                        },
                        {
                            icon: 'wordpress',
                            title: __('test', 'my-block'),
                            onClick: () => alert(true),
                            isActive: false
                        }
                    ]}>
                    <AlignmentToolbar
                        value={alignment}
                        onChange={onChangeAlignment}/>
                    <Toolbar>
                        <DropdownMenu
                            icon="editor-table"
                            label={__('test', 'my-block')}
                            controls={[
                                {
                                    icon: 'wordpress',
                                    title: __('test', 'my-block'),
                                    onClick: () => alert(true),
                                    isActive: false
                                },
                                {
                                    icon: 'wordpress',
                                    title: __('test', 'my-block'),
                                    onClick: () => alert(true),
                                    isActive: false
                                }
                            ]}
                        />
                    </Toolbar>
                </BlockControls>
                <RichText
                    style={{textAlign: alignment}}
                    tagName="p"
                    className={className}
                    onChange={onChangeContent}
                    value={content}/>
            </>
        )
    },
    save: ({attributes}) => {
        const {content, alignment} = attributes;
        return <RichText.Content
            style={{textAlign: alignment}}
            tagName="p"
            value={content}/>
    }
});
