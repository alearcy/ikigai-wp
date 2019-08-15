import {registerBlockType, createBlock} from '@wordpress/blocks';
import {__} from '@wordpress/i18n';
import {InnerBlocks, InspectorControls} from '@wordpress/editor';
import {PanelBody, RangeControl} from "@wordpress/components";

const attributes = {
    columns: {
        type: 'number',
        default: 2
    }
};

registerBlockType('my-block/team-members', {
    title: __("Team members", "my-block"),
    description: __("Block showing team members", "my-block"),
    category: "my-block-categories",
    icon: {
        background: "#ea732f",
        foreground: "#fff",
        src: 'grid-view'
    },
    supports: {
        html: false
    },
    keywords: [__('team', 'my-block'), __('member', 'my-block'), __('person', 'my-block')],
    attributes,
    edit: ({className, attributes, setAttributes}) => {
        const {columns} = attributes;
        return (
            <div className={`${className} has-${columns}-columns`}>
                <InspectorControls>
                    <PanelBody>
                        <RangeControl
                            label={__('Columns', 'my-block')}
                            value={columns}
                            onChange={columns => setAttributes({columns})}
                            min={1}
                            max={6}
                        />
                    </PanelBody>
                </InspectorControls>
                <InnerBlocks allowedBlocks={[
                    'my-block/team-member'
                ]}
                template={[
                    ['my-block/team-member'],
                    ['my-block/team-member'],
                ]}/>
            </div>
        )
    },
    save: ({attributes}) => {
        const {columns} = attributes;
        return (
            <div className={`has-${columns}-columns`}>
                <InnerBlocks.Content />
            </div>
        )
    }
});