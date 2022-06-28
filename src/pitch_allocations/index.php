<?php

/**
 * Registers all block assets so that they can be enqueued through Gutenberg in
 * the corresponding context.
 */
function twrfc_pitch_allocations_block_init()
{
	register_block_type(__DIR__);
}
add_action('init', 'twrfc_pitch_allocations_block_init');

function twrfc_pitch_allocations_scripts()
{
	wp_enqueue_script('twrfc_textfill_script', plugin_dir_url(__FILE__) . '../../public/jquery.textfill.min.js', array(), '1.0.0', false);
	wp_enqueue_script('twrfc_pitchalloc_script', plugin_dir_url(__FILE__) . '../../public/pitchalloc.js', array(), '1.0.0', false);
}
add_action('wp_enqueue_scripts', 'twrfc_pitch_allocations_scripts');
