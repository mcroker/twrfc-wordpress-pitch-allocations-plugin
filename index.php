<?php

/**
 * Plugin Name: TWRFC 
 * Plugin URI: https://github.com/
 * Description: This is a plugin specific to Tun Wells RFC website
 * Version: 1.1.0
 * Author: Martin Croker
 *
 * @package twrfc
 */

defined('ABSPATH') || exit;

error_reporting(-1); // reports all errors
ini_set("display_errors", "1"); // shows all errors
ini_set("log_errors", 1);
ini_set("error_log", "php-error.log");


// Adding a new category.
add_filter('block_categories_all', function ($categories) {
	$categories[] = array(
		'slug'  => 'twrfc',
		'title' => 'TWRFC'
	);

	return $categories;
});

function twrfc_enqueue_scripts()
{
	wp_enqueue_script("jquery");
}
add_action('wp_enqueue_scripts', 'twrfc_enqueue_scripts');

require_once plugin_dir_path(__FILE__) . 'build/pitch_allocations/index.php';
