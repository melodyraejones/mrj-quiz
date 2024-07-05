<?php
/*
Plugin Name: MRJ Quiz
Description: A Quiz to tell what personality a user has.
Version: 1.0
Author: Akshay Sharma
Author URI: https://akshays05.github.io/portfolio/
*/

if (!defined('ABSPATH')) exit;

class MRJQuiz {
    function __construct() {
        add_action('init', array($this, 'adminAssets'));
        add_action('wp_enqueue_scripts', array($this, 'enqueue_frontend_assets'));
        add_action('enqueue_block_editor_assets', array($this, 'enqueue_block_editor_assets'));
        add_action('init', array($this, 'create_personality_post_type'));
        add_filter('rest_prepare_personality_type', array($this, 'add_featured_image_to_rest'), 10, 3);
    }
    
    function adminAssets() {
        // Register styles and scripts for the editor
        wp_register_style('quizEditCSS', plugin_dir_url(__FILE__) . 'build/index.css');
        wp_register_script('newBlockType', plugin_dir_url(__FILE__) . 'build/index.js', array('wp-blocks', 'wp-element', 'wp-editor'));

        // Register block type with style and script
        register_block_type('mrjplugin/quiz', array(
            'editor_script' => 'newBlockType',
            'editor_style' => 'quizEditCSS',
            'render_callback' => array($this, 'theHTML')
        ));
    }

    function enqueue_frontend_assets() {
        wp_enqueue_script('attentionFrontend', plugin_dir_url(__FILE__) . 'build/frontend.js', array('wp-element'), '1.0', true);
        wp_enqueue_style('attentionFrontendStyles', plugin_dir_url(__FILE__) . 'build/frontend.css', array(), '1.0');
        wp_localize_script('attentionFrontend', 'appData', array(
            'imagesUrl' => plugin_dir_url(__FILE__) . 'images/',
            'nonce' => wp_create_nonce('wp_rest'),
            'siteUrl' => get_site_url()
        ));
    }

    function theHTML($attributes) {
        ob_start(); ?>
        <div class="quiz-update"><pre style="display: none;"><?php echo wp_json_encode($attributes) ?></pre></div>
        <?php return ob_get_clean();
    }

    function enqueue_block_editor_assets() {
        $personality_types = get_option('mrjplugin_personality_types', '');
        $personality_types_array = array_map('trim', explode("\n", $personality_types));
        $personality_types_array = array_filter($personality_types_array); // Remove any empty values
        wp_localize_script('newBlockType', 'mrjplugin_data', array(
            'personality_types' => $personality_types_array
        ));
    }

    function create_personality_post_type() {
        register_post_type('personality_type',
            array(
                'labels'      => array(
                    'name'          => __('Personality Types'),
                    'singular_name' => __('Personality Type'),
                ),
                'public'      => true,
                'has_archive' => true,
                'show_in_rest' => true,
                'supports'    => array('title', 'editor', 'thumbnail'),
                'rewrite'     => array('slug' => 'personality_type'), // Ensure the slug is set correctly
            )
        );
    }

    function add_featured_image_to_rest($response, $post, $request) {
        if (function_exists('get_post_thumbnail_id') && function_exists('wp_get_attachment_image_src')) {
            $featured_image_id = get_post_thumbnail_id($post->ID);
            if ($featured_image_id) {
                $image = wp_get_attachment_image_src($featured_image_id, 'full');
                if ($image) {
                    $response->data['featured_media_url'] = $image[0];
                }
            }
        }
        return $response;
    }
}

$mrjQuiz = new MRJQuiz();
