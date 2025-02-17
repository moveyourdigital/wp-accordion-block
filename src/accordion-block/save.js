/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, RichText, InnerBlocks } from '@wordpress/block-editor';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {Element} Element to render.
 */
export default function Save({ attributes }) {
	const { title, iconType, customIcon } = attributes;

	return (
        <div {...useBlockProps.save({ className: 'wp-block-accordion' })}>
            <details className="wp-block-accordion__details">
                <summary className="wp-block-accordion__summary">
					<span className="wp-block-accordion__title">
                        <RichText.Content tagName="span" value={title || __('Accordion Title', 'accordion-block')} />
                    </span>
                    <span className="wp-block-accordion__icon">
						{iconType === 'chevron' ? '▼' : <img src={customIcon} alt="icon" />}
                    </span>
                </summary>
                <div className="wp-block-accordion__content">
                    <InnerBlocks.Content />
                </div>
            </details>
        </div>
    );
}
