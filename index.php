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
            'nonce' => wp_create_nonce('wp_rest')
        ));
    }
    
    function theHTML($attributes) {
        ob_start(); ?>
        <div class="quiz-update"><pre style="display: none;"><?php echo wp_json_encode($attributes) ?></pre></div>
        <?php return ob_get_clean();
    }

    function add_admin_menu() {
        add_menu_page(
            'Personality Types',
            'Personality Types',
            'manage_options',
            'mrjplugin_personality_types',
            array($this, 'settings_page')
        );
    }

    function settings_page() {
        ?>
        <div class="wrap">
            <h1>Personality Types</h1>
            <form method="post" action="options.php">
                <?php
                settings_fields('mrjplugin_settings');
                do_settings_sections('mrjplugin_settings');
                submit_button();
                ?>
            </form>
        </div>
        <?php
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
}

$mrjQuiz = new MRJQuiz();