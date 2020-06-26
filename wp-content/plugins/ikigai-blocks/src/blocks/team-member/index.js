import './style.editor.scss';
import {registerBlockType} from '@wordpress/blocks';
import {__} from '@wordpress/i18n';
import {RichText} from '@wordpress/editor';
import edit from './edit';

const attributes = {
  title: {
    type: 'string',
    source: 'html',
    selector: '.team-member-title'
  },
  occupation: {
    type: 'string',
    source: 'html',
    selector: '.team-member-occupation'
  },
  info: {
    type: 'array',
    source: 'children',
    selector: '.team-member-info'
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
  },
  nameAlignment: {
    type: 'string',
    default: 'left',
  },
  occupationAlignment: {
    type: 'string',
    default: 'left',
  },
  infoAlignment: {
    type: 'string',
    default: 'left',
  },
};

registerBlockType('ikigai-blocks/team-member', {
  title: __("Team member", "ikigai-blocks"),
  description: __("Block showing a team member card", "ikigai-blocks"),
  category: "ikigai-blocks-category",
  icon: {
    background: "#fff",
    foreground: "#ff404c",
    src: 'admin-users'
  },
  supports: {
    html: false
  },
  keywords: [__('team', 'ikigai-blocks'), __('member', 'ikigai-blocks'), __('person', 'ikigai-blocks')],
  attributes,
  edit,
  save: ({attributes}) => {
    const {title, info, occupation, url, alt, nameAlignment, occupationAlignment, infoAlignment} = attributes;
    return (
        <div>
          {url && <img src={url} alt={alt} />}
          {title && <RichText.Content tagName="h3"
                                      className="team-member-title"
                                      style={{textAlign: nameAlignment}}
                                      value={title}/>}
          {occupation && <RichText.Content tagName="p"
                                           className="team-member-occupation"
                                           style={{textAlign: occupationAlignment}}
                                           value={occupation}/>}
          {info && <RichText.Content tagName="div"
                                     className="team-member-info"
                                     style={{textAlign: infoAlignment}}
                                     value={info}/>}
        </div>
    )
  }
});