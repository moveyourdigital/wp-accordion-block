/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, RichText, InnerBlocks, InspectorControls, MediaUpload } from '@wordpress/block-editor';
import { PanelBody, ToggleControl, SelectControl, Button } from '@wordpress/components';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit({ attributes, setAttributes }) {
	const { title, iconType, customIcon } = attributes;

	return (
		<>
			<InspectorControls>
				<PanelBody title={__('Settings')}>
					<SelectControl
						label={__('Icon Type', 'accordion-block')}
						value={iconType}
						options={[
							{ label: __('Chevron', 'accordion-block'), value: 'chevron' },
							{ label: __('Custom Icon', 'accordion-block'), value: 'custom' }
						]}
						onChange={(value) => setAttributes({ iconType: value })}
					/>
					{iconType === 'custom' && (
						<MediaUpload
							onSelect={(media) => setAttributes({ customIcon: media.url })}
							allowedTypes={['image', 'svg']}
							render={({ open }) => (
								<Button onClick={open} variant="primary">
									{customIcon ? __('Replace Icon', 'accordion-block') : __('Upload Custom Icon', 'accordion-block')}
								</Button>
							)}
						/>
					)}
				</PanelBody>
			</InspectorControls>
			<div {...useBlockProps({ className: 'wp-block-accordion' })}>
				<details className="wp-block-accordion__details">
					<summary className="wp-block-accordion__summary">
						<span className="wp-block-accordion__title">
							<RichText
								tagName="span"
								placeholder={__('Accordion Title', 'accordion-block')}
								value={title}
								onChange={(value) => setAttributes({ title: value })}
							/>
						</span>
						<span className="wp-block-accordion__icon">
							{iconType === 'chevron' ? '▼' : customIcon ? <img src={customIcon} alt="icon" /> : '▼'}
						</span>
					</summary>
					<div className="wp-block-accordion__content">
						<InnerBlocks />
					</div>
				</details>
			</div>
		</>
	);
}
