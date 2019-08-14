import './styles.editor.scss';
import {registerBlockType} from '@wordpress/blocks';
import {__} from '@wordpress/i18n';
import { RichText, getColorClassName } from '@wordpress/editor';
import Edit from "./edit";
import classnames from 'classnames';

registerBlockType("my-block/secondblock", {
    title: __("Second block", "my-block"),
    description: __("My second block", "my-block"),
    category: "my-block-categories",
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
    styles: [
        {
            name: 'rounded',
            label: __('Rounded', 'my-block'),
            isDefault: true
        },
        {
            name: 'outline',
            label: __('Outline', 'my-block'),
        },
        {
            name: 'squared',
            label: __('Squared', 'my-block'),
        },
    ],
    attributes: {
        content: {
            type: 'string',
            selector: 'p',
            source: 'html'
        },
        alignment: {
            type: 'string',
        },
        backgroundColor: {
            type: 'string'
        },
        textColor: {
            type: 'string'
        },
        customBackgroundColor: {
            type: 'string'
        },
        customTextColor: {
            type: 'string'
        },
    },
    edit: Edit,
    save: ({attributes}) => {
        const {content, alignment, customBackgroundColor, customTextColor, backgroundColor, textColor} = attributes;
        const backgroundClass = getColorClassName('background-color', backgroundColor);
        const textClass = getColorClassName('color', textColor);
        const classes = classnames({
            [backgroundClass]: backgroundClass,
            [textClass]: textClass,
        });
        return <RichText.Content
            className={classes}
            style={{
                textAlign: alignment,
                backgroundColor: backgroundClass ? undefined : customBackgroundColor,
                color: textClass ? undefined : customTextColor
            }}
            tagName="p"
            value={content}/>
    }
});
