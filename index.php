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
        add_action('init', array($this, 'create_personality_post_type'));
        add_action('rest_api_init', array($this, 'register_custom_routes'));
    }

    function adminAssets() {
        wp_register_style('quizEditCSS', plugin_dir_url(__FILE__) . 'build/index.css');
        wp_register_script('newBlockType', plugin_dir_url(__FILE__) . 'build/index.js', array('wp-blocks', 'wp-element', 'wp-editor'));

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
                'rewrite'     => array('slug' => 'personality_type'),
                'menu_icon'   => 'dashicons-admin-users',
                'menu_position' => 20,
            )
        );
    }

    function register_custom_routes() {
        register_rest_route('wp/v2', '/personality_type/(?P<slug>[a-zA-Z0-9-]+)', array(
            'methods' => 'GET',
            'callback' => array($this, 'get_personality_type_by_slug'),
            'permission_callback' => '__return_true'
        ));
    }

    function get_personality_type_by_slug($data) {
        $slug = sanitize_text_field($data['slug']);
        $query_args = array(
            'post_type' => 'personality_type',
            'name' => $slug,
            'post_status' => 'publish'
        );
        $query = new WP_Query($query_args);

        error_log('Query Args: ' . print_r($query_args, true));

        if ($query->have_posts()) {
            $posts = $query->posts;
            $post = $posts[0];
            $response = array(
                'id' => $post->ID,
                'title' => $post->post_title,
                'content' => $post->post_content,
                'featured_media' => get_post_thumbnail_id($post->ID),
                'featured_media_url' => get_the_post_thumbnail_url($post->ID, 'full')
            );

            error_log('Post found: ' . print_r($response, true));

            return rest_ensure_response($response);
        } else {
            error_log('No post found for slug: ' . $slug);
            return new WP_Error('no_post', 'No post found', array('status' => 404));
        }
    }
}

$mrjQuiz = new MRJQuiz();
