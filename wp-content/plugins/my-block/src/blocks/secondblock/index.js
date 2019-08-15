import './styles.editor.scss';
import {registerBlockType, createBlock} from '@wordpress/blocks';
import {__} from '@wordpress/i18n';
import {RichText, getColorClassName} from '@wordpress/editor';
import Edit from "./edit";
import classnames from 'classnames';

const attributes = {
    content: {
        type: 'string',
        selector: 'div',
        source: 'html'
    },
    textAlignment: {
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
    shadow: {
        type: 'boolean',
        default: false
    },
    shadowOpacity: {
        type: 'number',
        default: .3
    }
};

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
    attributes,
    transforms: {
      from: [
          {
              // transform a paragraph block into my block
              type: 'block',
              blocks: ['core/paragraph'],
              transform: ({content, align}) => {
                return createBlock('my-block/secondblock', {
                    content: content,
                    textAlignment: align
                })
              }
          },
          {
              // a shortcut to create my block
              type: 'prefix',
              prefix: '#',
              transform: () => {
                  return createBlock('my-block/secondblock')
              }
          },
      ],
      to: [
          {
              // transform our block in a paragraph
              type: 'block',
              blocks: ['core/paragraph'],
              isMatch: ({ content }) => {
                  return !!content;
              },
              transform: ({content, textAlignment}) => {
                  return createBlock('core/paragraph', {
                      content: content,
                      align: textAlignment
                  })
              }
          }
      ]
    },
    edit: Edit,
    save: ({attributes}) => {
        const {content, textAlignment, customBackgroundColor, customTextColor, backgroundColor, textColor, shadow, shadowOpacity} = attributes;
        const backgroundClass = getColorClassName('background-color', backgroundColor);
        const textClass = getColorClassName('color', textColor);
        const classes = classnames({
            [backgroundClass]: backgroundClass,
            [textClass]: textClass,
            'has-shadow': shadow,
            [`shadow-opacity-${shadowOpacity * 100}`]: shadowOpacity
        });
        return <RichText.Content
            className={classes}
            style={{
                textAlign: textAlignment,
                backgroundColor: backgroundClass ? undefined : customBackgroundColor,
                color: textClass ? undefined : customTextColor
            }}
            tagName="div"
            value={content}/>
    }
});
