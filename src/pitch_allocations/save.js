/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
import mapImage from "./map.jpeg"

const Save = (props) => {
	const {
		attributes: {
			pitch1a, pitch1b, pitch2a, pitch2b, pitch3a, pitch3b, pitch4a, pitch4b,
			training, upper1, bank, o2pitch, lower1, lower2, moxons1, moxons2
		}
	} = props;

	const blockProps = useBlockProps.save();
	return (
		<div {...blockProps}>
			<div class="allocationsmap">
				<img width="606" height="509" src={mapImage} class="attachment-large size-large wp-post-image" alt="" loading="lazy" />
				<div class="pitchlabel pitch1a">
					<span>{pitch1a}</span>
				</div>
				<div class="pitchlabel pitch1b">
					<span>{pitch1b}</span>
				</div>
				<div class="pitchlabel pitch2a">
					<span>{pitch2a}</span>
				</div>
				<div class="pitchlabel pitch2b">
					<span>{pitch2b}</span>
				</div>
				<div class="pitchlabel pitch3a">
					<span>{pitch3a}</span>
				</div>
				<div class="pitchlabel pitch3b">
					<span>{pitch3b}</span>
				</div>
				<div class="pitchlabel pitch4a">
					<span>{pitch4a}</span>
				</div>
				<div class="pitchlabel pitch4b">
					<span>{pitch4b}</span>
				</div>
				<div class="pitchlabel training">
					<span>{training}</span>
				</div>
				<div class="pitchlabel upper1">
					<span>{upper1}</span>
				</div>
				<div class="pitchlabel bank">
					<span>{bank}</span>
				</div>
				<div class="pitchlabel o2pitch">
					<span>{o2pitch}</span>
				</div>
				<div class="pitchlabel lower1">
					<span>{lower1}</span>
				</div>
				<div class="pitchlabel lower2">
					<span>{lower2}</span>
				</div>
				<div class="pitchlabel moxons1">
					<span>{moxons1}</span>
				</div>
				<div class="pitchlabel moxons2">
					<span>{moxons2}</span>
				</div>
			</div>
		</div>
	);
};

export default Save;
