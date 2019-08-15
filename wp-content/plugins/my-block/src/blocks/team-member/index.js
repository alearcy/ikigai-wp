import './style.editor.scss';
import {registerBlockType, createBlock} from '@wordpress/blocks';
import {__} from '@wordpress/i18n';
import {RichText} from '@wordpress/editor';
import edit from './edit';
import './parent';

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

registerBlockType('my-block/team-member', {
    title: __("Team member", "my-block"),
    description: __("Block showing a team member", "my-block"),
    category: "my-block-categories",
    icon: {
        background: "#ea732f",
        foreground: "#fff",
        src: 'admin-users'
    },
    // remove some properties in the dropdown of the block
    supports: {
      reusable: false,
      html: false
    },
    keywords: [__('team', 'my-block'), __('member', 'my-block'), __('person', 'my-block')],
    attributes,
    edit,
    save: ({attributes}) => {
        const {title, info, url, alt, id} = attributes;
        return (
            <div>
                {url && <img src={url} alt={alt} className={id ? `wp-image-${id}` : null} />}
                {title && <RichText.Content className={'wp-block-my-block-team-member__title'}
                                            tagName="h4"
                                            value={title}/>}
                {info && <RichText.Content className={'wp-block-my-block-team-member__info'}
                                           tagName="p"
                                           value={info}/>}

            </div>
        )
    }
});