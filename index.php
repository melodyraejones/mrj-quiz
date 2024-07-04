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
        add_action('admin_menu', array($this, 'add_admin_menu'));
        add_action('admin_init', array($this, 'settings_init'));
        add_action('enqueue_block_editor_assets', array($this, 'enqueue_block_editor_assets'));
        add_action('init', array($this, 'create_personality_post_type'));
        add_action('rest_api_init', array($this, 'register_custom_routes'));
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

    function add_admin_menu() {
        add_menu_page(
            'Personality Types', // Page title
            'Personality Types', // Menu title
            'manage_options', // Capability
            'edit.php?post_type=personality_type', // Menu slug
            '', // Function, leave empty as it redirects to post type
            'dashicons-admin-users', // Icon
            20 // Position
        );
    }

    function settings_init() {
        register_setting('mrjplugin_settings', 'mrjplugin_personality_types');

        add_settings_section(
            'mrjplugin_settings_section',
            __('Manage Personality Types', 'mrjplugin'),
            null,
            'mrjplugin_settings'
        );

        add_settings_field(
            'mrjplugin_personality_types',
            __('Personality Types', 'mrjplugin'),
            array($this, 'personality_types_render'),
            'mrjplugin_settings',
            'mrjplugin_settings_section'
        );
    }

    function personality_types_render() {
        $options = get_option('mrjplugin_personality_types');
        ?>
        <textarea name="mrjplugin_personality_types" rows="10" cols="50" class="large-text code"><?php echo isset($options) ? esc_textarea($options) : ''; ?></textarea>
        <p class="description">Enter personality types, one per line.</p>
        <?php
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

            return rest_ensure_response($response);
        } else {
            return new WP_Error('no_post', 'No post found', array('status' => 404));
        }
    }
}

$mrjQuiz = new MRJQuiz();
