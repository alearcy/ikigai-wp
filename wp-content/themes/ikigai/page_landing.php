<?php
/*
Template name: Landing
 */
get_header();
?>
    <div id="primary" class="content-area page-layout-landing">
        <main id="main" class="site-main">
	        <?php
	        while ( have_posts() ) :
		        the_post();

		        the_content();

	        endwhile; ?>
        </main>
    </div>
<?php
get_footer();
