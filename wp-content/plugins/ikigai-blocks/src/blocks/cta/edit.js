import {Component} from '@wordpress/element';
import {RichText, MediaPlaceholder} from '@wordpress/editor';
import {__} from '@wordpress/i18n';
import {isBlobURL} from '@wordpress/blob';
import {Spinner, withNotices} from '@wordpress/components';

class CTAEdit extends Component {

    // remove pending upload operation
    componentDidMount() {
        const {attributes, setAttributes} = this.props;
        const {url, id} = attributes;
        if (url && isBlobURL(url) && !id) {
            setAttributes({
                url: '',
                alt: ''
            })
        }
    }

    onChangeTitle = title => {
        this.props.setAttributes({title})
    };

    onChangeInfo = info => {
        this.props.setAttributes({info})
    };

    onChangeOccupation = occupation => {
        this.props.setAttributes({occupation})
    };

    onSelectImage = ({id, url, alt}) => {
        this.props.setAttributes({
            id, url, alt
        })
    };

    onSelectURL = url => {
        this.props.setAttributes({
            url,
            id: null,
            alt: ''
        })
    };

    onUploadError = message => {
        const {noticeOperations} = this.props;
        noticeOperations.createErrorNotice(message)
    };

    render() {
        const {className, attributes, noticeUI} = this.props;
        const {title, info, occupation, url, alt} = attributes;
        return (
            <div className={className}>
                {url ?
                    <>
                        <img src={url} alt={alt}/>
                        {isBlobURL(url) && <Spinner/>}
                    </>
                    :
                    <MediaPlaceholder
                        icon="format-image"
                        onSelect={this.onSelectImage}
                        onSelectURL={this.onSelectURL}
                        onError={this.onUploadError}
                        accept="image/*"
                        allowedTypes={['image']}
                        notices={noticeUI}
                    />
                }
                <RichText
                    className={'wp-block-ikigai-blocks-team-member__title'}
                    tagName="h3"
                    onChange={this.onChangeTitle}
                    value={title}
                    placeholder={__('Member name', 'ikigai-blocks')}
                />
                <RichText
                    className={'wp-block-ikigai-blocks-team-member__occupation'}
                    tagName="p"
                    onChange={this.onChangeOccupation}
                    value={occupation}
                    placeholder={__('Member occupation', 'ikigai-blocks')}
                />
                <RichText
                    className={'wp-block-ikigai-blocks-team-member__info'}
                    tagName="p"
                    onChange={this.onChangeInfo}
                    value={info}
                    placeholder={__('Member info', 'ikigai-blocks')}
                />
            </div>
        )
    }
}

export default withNotices(CTAEdit);