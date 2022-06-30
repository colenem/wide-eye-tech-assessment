import 'bootstrap';

const apiURL                = "https://mockend.com/Wide-Eye-Creative/technical-test-2022/posts";
const archivePostsContainer = document.querySelector( '.posts__container' );

let archivePostsTemplate = require( '../partials/single-post-item.hbs' );
let allPosts             = null;
let postsSubset          = null;
let postIndex            = 0;
let sortedPostsSubset    = null;
// let loadMorePosts        = document.querySelector( '.load-more-posts' );

/**
 * TODO:
 * 1. hookup event listener to load more posts when link is click (must append)
 * 2. add navigation template
 * 3. add cta section
 * 4. add footer section
 * 5. style site
 * 6. wrap partials in main tag
 */

fetch( apiURL )
  .then( ( response ) => {
    return response.json();
  })
  .then( ( data ) => {
    allPosts          = data;
    postsSubset       = getPostSubset( allPosts, postIndex );
    sortedPostsSubset = getSortedPostsSubset( postsSubset );

    renderHTML();
  })
  .then();

function renderHTML() {
  // compile and render HTML using handlebars template partial
  archivePostsContainer.innerHTML = archivePostsTemplate( sortedPostsSubset );
}

// Get six posts at a time based on last index position
function getPostSubset( posts, index ) {
  return allPosts.slice( postIndex, index + 6, posts );
}

function getSortedPostsSubset( posts ) {
  return posts.sort( ( a, b ) => ( a.authorName.toUpperCase() < b.authorName.toUpperCase() ) ? -1 : 
    ( a.authorName.toUpperCase() > b.authorName.toUpperCase() ) ? 1 : 0 );
}

// loadMorePosts.addEventListener( 'click', () => {
  // subPostCollection = getSubPostCollection( allPosts, postIndex );
  //some other stuff needs to happen
// });
