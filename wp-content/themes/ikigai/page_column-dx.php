<?php
/*
Template name: Blog dx
 */
get_header();
?>
    <div id="primary" class="content-area">
        <div class="container page-layout-blog-dx">
            <main id="main" class="site-main">
                <?php
                while ( have_posts() ) :
                    the_post();

                    get_template_part( 'template-parts/content', 'page' );

                    // If comments are open or we have at least one comment, load up the comment template.
                    if ( comments_open() || get_comments_number() ) {
                        comments_template();
                    }

                endwhile; // End of the loop.
                ?>
            </main><!-- #main -->
            <?php get_sidebar(); ?>
        </div>
    </div><!-- #primary -->
<?php
get_footer();
