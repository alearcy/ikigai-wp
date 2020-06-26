import './style.editor.scss';
import {registerBlockType} from '@wordpress/blocks';
import {__} from '@wordpress/i18n';
import {RichText} from '@wordpress/editor';
import edit from './edit';

const attributes = {
    title: {
        type: 'string',
        source: 'html',
        selector: 'h4'
    },
    info: {
        type: 'string',
        source: 'html',
        selector: 'p'
    },
    occupation: {
        type: 'string',
        source: 'html',
        selector: 'p'
    },
    id: {
        type: 'number'
    },
    alt: {
        type: 'string',
        source: 'attribute',
        selector: 'img',
        attribute: 'alt',
        default: ''
    },
    url: {
        type: 'string',
        source: 'attribute',
        selector: 'img',
        attribute: 'src'
    }
};

registerBlockType('ikigai-blocks/cta', {
    title: __("Call to action", "ikigai-blocks"),
    description: __("Block showing a call to action", "ikigai-blocks"),
    category: "ikigai-blocks-category",
    icon: {
        background: "#fff",
        foreground: "#ff404c",
        src: 'megaphone'
    },
    supports: {
      html: false
    },
    keywords: [__('section', 'ikigai-blocks'), __('layout', 'ikigai-blocks'), __('header', 'ikigai-blocks')],
    attributes,
    edit,
    save: ({attributes}) => {
        const {title, info, occupation, url, alt, id} = attributes;
        return (
            <div>
                {url && <img src={url} alt={alt} className={id ? `wp-image-${id}` : null} />}
                {title && <RichText.Content className={'wp-block-ikigai-blocks-team-member__title'}
                                            tagName="h4"
                                            value={title}/>}
                {occupation && <RichText.Content className={'wp-block-ikigai-blocks-team-member__occupation'}
                                           tagName="p"
                                           value={occupation}/>}
                {info && <RichText.Content className={'wp-block-ikigai-blocks-team-member__info'}
                                           tagName="p"
                                           value={info}/>}
            </div>
        )
    }
});