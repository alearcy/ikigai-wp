import './styles.editor.scss';
import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import { RichText } from '@wordpress/editor';

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
    edit: ({className}) => {
        return <RichText />
        // return <p className={className}>Second pippo Editor</p>;
    },
    save: props => {
        return <p>Saved second content</p>;
    }
});
