import { registerBlockType } from "@wordpress/blocks";
import {
	BaseControl,
	Button,
	ButtonGroup,
	ColorPicker,
	FocalPointPicker,
	PanelBody,
	Placeholder,
	SelectControl,
	TextControl,
	ToggleControl
} from "@wordpress/components";
import { InnerBlocks, InspectorControls, MediaUpload } from "@wordpress/editor";
import { __ } from "@wordpress/i18n";
import { options } from "./effectOptions";

const attributes = {
	isFirstTime: {
		type: "boolean",
		default: true
	},
	containerClass: {
		type: "string",
		default: "full"
	},
	containerWidth: {
		type: "string",
		default: ""
	},
	contentPosition: {
		type: "string",
		default: "middle-center"
	},
	background: {
		type: "object",
		default: {
			url: null,
			type: null,
			subtype: null
		}
	},
	isBackgroundFixed: {
		type: "boolean",
		default: false
	},
	focalPoint: {
		type: "object"
	},
	minHeight: {
		type: "number"
	},
	hasParallax: {
		type: "boolean",
		default: false
	},
	overlayColor: {
		type: "object",
		default: {
			r: 0,
			g: 0,
			b: 0,
			a: 0
		}
	},
	sectionHeight: {
		type: "string",
		default: "auto"
	},
	effect: {
		type: "string",
		default: null
	}
};

registerBlockType("ikigai-blocks/sections", {
	title: __("Sections", "ikigai-blocks"),
	description: __("Sections layout", "ikigai-blocks"),
	category: "ikigai-blocks-category",
	icon: {
		background: "#fff",
		foreground: "#ff404c",
		src: "grid-view"
	},
	supports: {
		html: false,
		align: true,
		alignWide: true,
		anchor: true
	},
	keywords: [
		__("grid", "ikigai-blocks"),
		__("section", "ikigai-blocks"),
		__("layout", "ikigai-blocks")
	],
	attributes,
	edit: ({ className, attributes, setAttributes }) => {
		const {
			isFirstTime,
			containerClass,
			containerWidth,
			contentPosition,
			background,
			sectionHeight,
			effect,
			focalPoint,
			overlayColor,
			isBackgroundFixed
		} = attributes;

		const onChangeSelectField = v => {
			setAttributes({ containerClass: v });
		};

		const onChangeContainerWidth = v => {
			setAttributes({ containerWidth: v });
		};

		const onOverlayColorChange = v => {
			setAttributes({ overlayColor: v.rgb });
		};

		const onMediaSelect = media => {
			if (media.type === "video") {
				setAttributes({
					background: {
						url: media.url,
						type: media.type,
						subtype: media.subtype
					}
				});
			} else {
				setAttributes({
					background: {
						url: media.sizes.full.url,
						type: media.type
					}
				});
			}
		};

		const onFocalChange = v => {
			setAttributes({ focalPoint: v });
		};

		const onChangeSectionHeight = v => {
			setAttributes({ sectionHeight: v });
		};

		const onChangeEffect = v => {
			setAttributes({ effect: v });
		};

		const changeFixedBkg = v => {
			setAttributes({ isBackgroundFixed: v });
		};

		const resetMedia = () => {
			setAttributes({
				background: {
					url: null,
					type: null
				}
			});
		};

		const changeAlignment = v => {
			setAttributes({
				contentPosition: v
			});
		};

		const handleIsFirstTime = () => {
			setAttributes({
				isFirstTime: !isFirstTime
			});
		};

		return (
			<>
				<InspectorControls>
					<PanelBody title={__("Background properties", "ikigai-blocks")}>
						<ColorPicker
							color={overlayColor}
							onChangeComplete={onOverlayColorChange}
						/>
						<BaseControl
							label="Upload media"
							help="You can upload image or video."
						>
							<div
								style={{
									display: "flex",
									justifyContent: "space-between"
								}}
							>
								<MediaUpload
									onSelect={onMediaSelect}
									allowedTypes={["image", "video"]}
									type="image"
									value={background.url}
									render={({ open }) => (
										<Button isPrimary onClick={open}>
											Upload
										</Button>
									)}
								/>
								{background.url != null && (
									<Button isDefault onClick={resetMedia}>
										Reset
									</Button>
								)}
							</div>
						</BaseControl>
						{background.url != null && background.type === "image" && (
							<FocalPointPicker
								label={__("Focal Point Picker", "ikigai-blocks")}
								url={background.url}
								value={focalPoint}
								onChange={onFocalChange}
							/>
						)}
						{background.url != null && (
							<ToggleControl
								label="Fixed Background"
								checked={isBackgroundFixed}
								onChange={changeFixedBkg}
							/>
						)}
					</PanelBody>
					<PanelBody title={__("Content", "ikigai-blocks")}>
						<SelectControl
							label={__("Container style", "ikigai-blocks")}
							value={containerClass}
							options={[
								{
									value: "full",
									label: "Full"
								},
								{
									value: "centered",
									label: "Centered"
								}
							]}
							onChange={onChangeSelectField}
						/>
						{containerClass === "centered" && (
							<TextControl
								label="Container width"
								placeholder="1280px or 40rem"
								value={containerWidth}
								onChange={onChangeContainerWidth}
							/>
						)}
						<SelectControl
							label={__("Section height", "ikigai-blocks")}
							value={sectionHeight}
							options={[
								{
									value: "auto",
									label: "Auto"
								},
								{
									value: "100vh",
									label: "Screen height"
								},
								{
									value: "50vh",
									label: "Half screen"
								},
								{
									value: "15rem",
									label: "Short"
								}
							]}
							onChange={onChangeSectionHeight}
						/>
						<SelectControl
							label={__("On scroll animation", "ikigai-blocks")}
							value={effect}
							options={options}
							onChange={onChangeEffect}
						/>
						<BaseControl label="Top position" help="Top left, center and right">
							<br />
							<ButtonGroup>
								<Button
									isPrimary={contentPosition === "top-left" && true}
									isDefault={contentPosition !== "top-left" && true}
									onClick={() => changeAlignment("top-left")}
								>
									TL
								</Button>
								<Button
									isPrimary={contentPosition === "top-center" && true}
									isDefault={contentPosition !== "top-center" && true}
									onClick={() => changeAlignment("top-center")}
								>
									TC
								</Button>
								<Button
									isPrimary={contentPosition === "top-right" && true}
									isDefault={contentPosition !== "top-right" && true}
									onClick={() => changeAlignment("top-right")}
								>
									TR
								</Button>
							</ButtonGroup>
						</BaseControl>
						<BaseControl
							label="Middle position"
							help="Middle left, center and right"
						>
							<br />
							<ButtonGroup>
								<Button
									isPrimary={contentPosition === "middle-left" && true}
									isDefault={contentPosition !== "middle-left" && true}
									onClick={() => changeAlignment("middle-left")}
								>
									ML
								</Button>
								<Button
									isPrimary={contentPosition === "middle-center" && true}
									isDefault={contentPosition !== "middle-center" && true}
									onClick={() => changeAlignment("middle-center")}
								>
									MC
								</Button>
								<Button
									isPrimary={contentPosition === "middle-right" && true}
									isDefault={contentPosition !== "middle-right" && true}
									onClick={() => changeAlignment("middle-right")}
								>
									MR
								</Button>
							</ButtonGroup>
						</BaseControl>
						<BaseControl
							label="Bottom position"
							help="Bottom left, center and right"
						>
							<br />
							<ButtonGroup>
								<Button
									isPrimary={contentPosition === "bottom-left" && true}
									isDefault={contentPosition !== "bottom-left" && true}
									onClick={() => changeAlignment("bottom-left")}
								>
									BL
								</Button>
								<Button
									isPrimary={contentPosition === "bottom-center" && true}
									isDefault={contentPosition !== "bottom-center" && true}
									onClick={() => changeAlignment("bottom-center")}
								>
									BC
								</Button>
								<Button
									isPrimary={contentPosition === "bottom-right" && true}
									isDefault={contentPosition !== "bottom-right" && true}
									onClick={() => changeAlignment("bottom-right")}
								>
									BR
								</Button>
							</ButtonGroup>
						</BaseControl>
					</PanelBody>
				</InspectorControls>

				<section
					className={`${className} ikigai-section-wrapper`}
					style={{
						backgroundImage: background.url != null && `url(${background.url})`,
						backgroundSize: "cover",
						backgroundPosition: focalPoint
							? `${focalPoint.x * 100}% ${focalPoint.y * 100}%`
							: null,
						backgroundAttachment: isBackgroundFixed ? "fixed" : "unset",
						height: sectionHeight
					}}
				>
					<div
						className="overlay"
						style={{
							backgroundColor: `rgba(${overlayColor.r}, ${overlayColor.g}, ${overlayColor.b}, ${overlayColor.a}`
						}}
					></div>
					{background.url && background.type === "video" && (
						<video
							autoPlay
							muted
							loop
							id="video"
							className={isBackgroundFixed ? "fixed" : "absolute"}
						>
							<source
								src={background.url}
								type={`${background.type}/${background.subtype}`}
							/>
						</video>
					)}
					<div
						className={`ikigai-editor-container ikigai-container ${containerClass} ${contentPosition}`}
						style={{
							maxWidth: containerWidth ? containerWidth : null,
							margin: containerWidth ? "0 auto" : null
						}}
					>
						{isFirstTime ? (
							<Placeholder icon="plus" label="Add your first content">
								<Button isPrimary onClick={handleIsFirstTime}>
									Add content
								</Button>
							</Placeholder>
						) : (
							<div className="containerClass">
								<InnerBlocks />
							</div>
						)}
					</div>
				</section>
			</>
		);
	},
	save: ({ className, attributes }) => {
		const {
			containerClass,
			contentPosition,
			containerWidth,
			background,
			focalPoint,
			overlayColor,
			sectionHeight,
			isBackgroundFixed,
			effect
		} = attributes;
		return (
			<section
				className={`${className} ikigai-section-wrapper`}
				style={{
					backgroundImage: background.url != null && `url(${background.url})`,
					backgroundSize: "cover",
					backgroundPosition: focalPoint
						? `${focalPoint.x * 100}% ${focalPoint.y * 100}%`
						: null,
					backgroundAttachment: isBackgroundFixed ? "fixed" : "unset",
					height: sectionHeight
				}}
			>
				<div
					className="overlay"
					style={{
						backgroundColor: `rgba(${overlayColor.r}, ${overlayColor.g}, ${overlayColor.b}, ${overlayColor.a}`
					}}
				></div>
				{background.url && background.type === "video" && (
					<video
						autoPlay
						muted
						loop
						id="video"
						className={isBackgroundFixed ? "fixed" : "absolute"}
					>
						<source
							src={background.url}
							type={`${background.type}/${background.subtype}`}
						/>
					</video>
				)}
				<div
					className={`ikigai-container ${containerClass} ${contentPosition}`}
					style={{
						maxWidth: containerWidth ? containerWidth : null,
						margin: containerWidth ? "0 auto" : null
					}}
				>
					<div data-aos={effect} className="containerClass">
						<InnerBlocks.Content />
					</div>
				</div>
			</section>
		);
	}
});
