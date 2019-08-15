import {Component} from '@wordpress/element';
import {RichText, MediaPlaceholder} from '@wordpress/editor';
import {__} from '@wordpress/i18n';
import {isBlobURL} from '@wordpress/blob';
import {Spinner, withNotices} from '@wordpress/components';

class TeamMemberEdit extends Component {

    // remove pending upload operation
    componentDidMount() {
        const {attributes, setAttributes} = this.props;
        const {url, id} = attributes;
        if (url && isBlobURL(url) && !id) {
            this.setAttributes({
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

    onSelectImage = ({id, utl, alt}) => {
        this.props.setAttributes({
            id, utl, alt
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
        const {className, attributes, setAttributes, noticeUI} = this.props;
        const {title, info, url, alt} = attributes;
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
                    className={'wp-block-my-block-team-member__title'}
                    tagName="h4"
                    onChange={this.onChangeTitle}
                    value={title}
                    placeholder={__('Member name', 'my-block')}
                    formattingControls={[]}
                />
                <RichText
                    className={'wp-block-my-block-team-member__info'}
                    tagName="p"
                    onChange={this.onChangeInfo}
                    value={info}
                    placeholder={__('Member info', 'my-block')}
                    formattingControls={[]}
                />
            </div>
        )
    }
}

export default withNotices(TeamMemberEdit);