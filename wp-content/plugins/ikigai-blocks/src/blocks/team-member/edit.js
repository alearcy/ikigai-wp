import {Component} from '@wordpress/element';
import {RichText, MediaPlaceholder, InspectorControls, BlockControls} from '@wordpress/editor';
import {__} from '@wordpress/i18n';
import {isBlobURL} from '@wordpress/blob';
import {
  Spinner,
  SelectControl,
  PanelBody,
  ButtonGroup,
  Button,
  BaseControl,
  Toolbar,
  IconButton
} from '@wordpress/components';
import {withSelect} from '@wordpress/data';

class TeamMemberEdit extends Component {

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

  onImageSizeChange = url => {
    this.props.setAttributes({
      url,
    })
  };

  onUploadError = message => {
    const {noticeOperations} = this.props;
    noticeOperations.createErrorNotice(message)
  };

  onChangeNameAlignment = value => {
    this.props.setAttributes({
      nameAlignment: this.props.attributes.nameAlignment === value ? null : value,
    })
  };

  onChangeOccupationAlignment = value => {
    this.props.setAttributes({
      occupationAlignment: this.props.attributes.occupationAlignment === value ? null : value,
    })
  };

  onChangeInfoAlignment = value => {
    this.props.setAttributes({
      infoAlignment: this.props.attributes.infoAlignment === value ? null : value,
    })
  };

  getImageSizes = () => {
    const {image, imageSizes} = this.props;
    if (!image) return [];
    let options = [];
    const sizes = image.media_details.sizes;
    for (let key in sizes) {
      const size = sizes[key];
      const imageSize = imageSizes.find(size => size.slug === key);
      if (imageSize) {
        options.push({
          label: imageSize.name,
          value: size.source_url
        });
      }
    }
    return options;
  };

  removeImage = () => {
    this.props.setAttributes({
      id: null,
      url: '',
      alt: '',
    })
  };

  render() {
    const {className, attributes, setAttributes} = this.props;
    const {title, info, occupation, id, url, alt, nameAlignment, occupationAlignment, infoAlignment} = attributes;
    return (
        <>
          <BlockControls>
            {url &&
            <Toolbar>
              <IconButton
                  className="components-icon-button components-toolbar__control"
                  label={__('Remove image', 'ikigai-blocks')}
                  icon="trash"
                  onClick={this.removeImage}/>
            </Toolbar>}
          </BlockControls>
          <InspectorControls>
            {id && <PanelBody title={__('Image settings', 'ikigai-blocks')}>
              <SelectControl
                  label={__('Image size', 'ikigai-blocks')}
                  options={this.getImageSizes()}
                  onChange={this.onImageSizeChange}
                  value={url}/>
            </PanelBody>
            }
            <PanelBody title={__('Content alignment', 'ikigai-blocks')}>
              <BaseControl
                  label="Title alignment"
              >
                <ButtonGroup>
                  <Button isPrimary={nameAlignment === "left"}
                          isDefault={nameAlignment !== "left"}
                          onClick={() => setAttributes({nameAlignment: "left"})}>Left</Button>
                  <Button isPrimary={nameAlignment === "center"}
                          isDefault={nameAlignment !== "center"}
                          onClick={() => setAttributes({nameAlignment: "center"})}>Center</Button>
                </ButtonGroup>
              </BaseControl>
              <BaseControl
                  label="Occupation alignment"
              >
                <ButtonGroup>
                  <Button isPrimary={occupationAlignment === "left"}
                          isDefault={occupationAlignment !== "left"}
                          onClick={() => setAttributes({occupationAlignment: "left"})}>Left</Button>
                  <Button isPrimary={occupationAlignment === "center"}
                          isDefault={occupationAlignment !== "center"}
                          onClick={() => setAttributes({occupationAlignment: "center"})}>Center</Button>
                </ButtonGroup>
              </BaseControl>
              <BaseControl
                  label="Info alignment"
              >
                <ButtonGroup>
                  <Button isPrimary={infoAlignment === "left"}
                          isDefault={infoAlignment !== "left"}
                          onClick={() => setAttributes({infoAlignment: "left"})}>Left</Button>
                  <Button isPrimary={infoAlignment === "center"}
                          isDefault={infoAlignment !== "center"}
                          onClick={() => setAttributes({infoAlignment: "center"})}>Center</Button>
                  <Button isPrimary={infoAlignment === "justify"}
                          isDefault={infoAlignment !== "justify"}
                          onClick={() => setAttributes({infoAlignment: "justify"})}>Justify</Button>
                </ButtonGroup>
              </BaseControl>
            </PanelBody>
          </InspectorControls>
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
                />
            }
            <RichText
                tagName="h3"
                className="team-member-title"
                onChange={this.onChangeTitle}
                value={title}
                placeholder={__('Member name', 'ikigai-blocks')}
                style={{textAlign: nameAlignment}}
                keepPlaceholderOnFocus
            />
            <RichText
                tagName="p"
                className="team-member-occupation"
                onChange={this.onChangeOccupation}
                value={occupation}
                placeholder={__('Member occupation', 'ikigai-blocks')}
                style={{textAlign: occupationAlignment}}
                keepPlaceholderOnFocus
            />
            <RichText
                tagName="div"
                multiline="p"
                className="team-member-info"
                onChange={this.onChangeInfo}
                value={info}
                placeholder={__('Member info', 'ikigai-blocks')}
                style={{textAlign: infoAlignment}}
                keepPlaceholderOnFocus
            />
          </div>
        </>
    )
  }
}

export default withSelect((select, props) => {
  const id = props.attributes.id;
  return {
    image: id ? select('core').getMedia(id) : null,
    imageSizes: select('core/editor').getEditorSettings().imageSizes
  }
})(TeamMemberEdit);