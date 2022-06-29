/**
 * useBlockProps is a React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 *
 * RichText is a component that allows developers to render a contenteditable input,
 * providing users with the option to format block content to make it bold, italics,
 * linked, or use other formatting.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/richtext/
 */
import { useBlockProps } from '@wordpress/block-editor';
import { Card, CardBody, CardHeader, TextareaControl, TextControl } from '@wordpress/components';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './style.scss';
import mapImage from "./map.jpeg"

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @param {Object}   param0
 * @param {Object}   param0.attributes
 * @param {string}   param0.attributes.message
 * @param {Function} param0.setAttributes
 * @return {WPElement} Element to render.
 */

export default function Edit({ attributes: {
	pitch1a, pitch1b, pitch2a, pitch2b, pitch3a, pitch3b, pitch4a, pitch4b,
	training, upper1, bank, o2pitch, lower1, lower2, moxons1, moxons2
}, setAttributes }) {
	return (
		<Card
			{...useBlockProps({ className: 'twrfc-pitch-allocations-editor' })}
		>
			<CardHeader>
				TWRFC: Pitch Allocation
			</CardHeader>
			<CardBody>
				<div class="allocationsmap">
					<img width="606" height="509" src={mapImage} class="attachment-large size-large wp-post-image" alt="" loading="lazy" />
					<TextareaControl
						class="pitch1a pitchlabel"
						value={pitch1a}
						onChange={(value) => setAttributes({ pitch1a: value })}
					/>
					<TextareaControl
						class="pitch1b pitchlabel"
						value={pitch1b}
						onChange={(value) => setAttributes({ pitch1b: value })}
					/>
					<TextareaControl
						class="pitch2a pitchlabel"
						value={pitch2a}
						onChange={(value) => setAttributes({ pitch2a: value })}
					/>
					<TextareaControl
						class="pitch2b pitchlabel"
						value={pitch2b}
						onChange={(value) => setAttributes({ pitch2b: value })}
					/>
					<TextareaControl
						class="pitch3a pitchlabel"
						value={pitch3a}
						onChange={(value) => setAttributes({ pitch3a: value })}
					/>
					<TextareaControl
						class="pitch3b pitchlabel"
						value={pitch3b}
						onChange={(value) => setAttributes({ pitch3b: value })}
					/>
					<TextareaControl
						class="pitch4a pitchlabel"
						value={pitch4a}
						onChange={(value) => setAttributes({ pitch4a: value })}
					/>
					<TextareaControl
						class="pitch4b pitchlabel"
						value={pitch4b}
						onChange={(value) => setAttributes({ pitch4b: value })}
					/>
					<TextareaControl
						class="training pitchlabel"
						value={training}
						onChange={(value) => setAttributes({ training: value })}
					/>
					<TextareaControl
						class="upper1 pitchlabel"
						value={upper1}
						onChange={(value) => setAttributes({ upper1: value })}
					/>
					<TextareaControl
						class="bank pitchlabel"
						value={bank}
						onChange={(value) => setAttributes({ bank: value })}
					/>
					<TextareaControl
						class="o2pitch pitchlabel"
						value={o2pitch}
						onChange={(value) => setAttributes({ o2pitch: value })}
					/>
					<TextareaControl
						class="lower1 pitchlabel"
						value={lower1}
						onChange={(value) => setAttributes({ lower1: value })}
					/>
					<TextareaControl
						class="lower2 pitchlabel"
						value={lower2}
						onChange={(value) => setAttributes({ lower2: value })}
					/>
					<TextareaControl
						class="moxons1 pitchlabel"
						value={moxons1}
						onChange={(value) => setAttributes({ moxons1: value })}
					/>
					<TextareaControl
						class="moxons2 pitchlabel"
						value={moxons2}
						onChange={(value) => setAttributes({ moxons2: value })}
					/>
				</div>
				<div class="allocationstable">
					<TextControl
						label="Pitch 1a"
						value={pitch1a}
						onChange={(value) => setAttributes({ pitch1a: value })}
					/>
					<TextControl
						label="Pitch 1b"
						value={pitch1b}
						onChange={(value) => setAttributes({ pitch1b: value })}
					/>
					<TextControl
						label="Pitch 2a"
						value={pitch2a}
						onChange={(value) => setAttributes({ pitch2a: value })}
					/>
					<TextControl
						label="Pitch 2b"
						value={pitch2b}
						onChange={(value) => setAttributes({ pitch2b: value })}
					/>
					<TextControl
						label="Pitch 3a"
						value={pitch3a}
						onChange={(value) => setAttributes({ pitch3a: value })}
					/>
					<TextControl
						label="Pitch 3b"
						value={pitch3b}
						onChange={(value) => setAttributes({ pitch3b: value })}
					/>
					<TextControl
						label="Pitch 4a"
						value={pitch4a}
						onChange={(value) => setAttributes({ pitch4a: value })}
					/>
					<TextControl
						label="Pitch 4b"
						value={pitch4b}
						onChange={(value) => setAttributes({ pitch4b: value })}
					/>
					<TextControl
						label="Training"
						value={training}
						onChange={(value) => setAttributes({ training: value })}
					/>
					<TextControl
						label="Upper 1"
						value={upper1}
						onChange={(value) => setAttributes({ upper1: value })}
					/>
					<TextControl
						label="Bank"
						value={bank}
						onChange={(value) => setAttributes({ bank: value })}
					/>
					<TextControl
						label="O2 Pitch"
						value={o2pitch}
						onChange={(value) => setAttributes({ o2pitch: value })}
					/>
					<TextControl
						label="Lower 1"
						value={lower1}
						onChange={(value) => setAttributes({ lower1: value })}
					/>
					<TextControl
						label="Lower 2"
						value={lower2}
						onChange={(value) => setAttributes({ lower2: value })}
					/>
					<TextControl
						label="Moxons 1"
						value={moxons1}
						onChange={(value) => setAttributes({ moxons1: value })}
					/>
					<TextControl
						label="Moxons 2"
						value={moxons2}
						onChange={(value) => setAttributes({ moxons2: value })}
					/>
				</div>
			</CardBody>
		</Card>
	);
}
