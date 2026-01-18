<?php
/**
 * Theme functions and definitions
 *
 * @package Dating_Portal
 */

function dating_portal_setup() {
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
}
add_action('after_setup_theme', 'dating_portal_setup');

function dating_portal_scripts() {
    wp_enqueue_style('dating-portal-style', get_stylesheet_uri());
}
add_action('wp_enqueue_scripts', 'dating_portal_scripts');
?>
