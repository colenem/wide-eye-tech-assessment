import 'bootstrap';

const apiURL                = "https://mockend.com/Wide-Eye-Creative/technical-test-2022/posts";
const archivePostsTemplate  = require( '../partials/single-post-item.hbs' );
const archivePostsContainer = document.querySelector( '.posts__container' );

let allPosts          = null;
let postsSubset       = null;
let sortedPostsSubset = null;
let previousPostId    = 0;
// let loadMorePosts        = document.querySelector( '.load-more-posts' );

/**
 * TODO:
 * 1. add hover effect for mobile menu icon
 * 2. hookup event listener to load more posts when link is clicked if time permits (must append)
 * 3. make sure read more/more posts redirect to google.com
 * 4. use title as img alt text
 */

fetch( apiURL )
  .then( ( response ) => {
    return response.json();
  })
  .then( ( data ) => {
    allPosts          = data;
    postsSubset       = getPostSubset( allPosts, previousPostId );
    sortedPostsSubset = getSortedPostsSubset( postsSubset );

    renderHTML( sortedPostsSubset );
  });

function renderHTML( posts ) {
  // compile and render HTML using handlebars template partial
  archivePostsContainer.insertAdjacentHTML( 'beforeend', archivePostsTemplate( posts ) );
}

// Get six posts at a time based on last index position
function getPostSubset( posts, index ) {
  previousPostId += 6;
  let subset = allPosts.slice( index, index + 6, posts );

  // change date format to Month Day, Year ( March 05, 2011 )
  changePusblishDateFormat( subset );
  return subset;
}

function getSortedPostsSubset( posts ) {
  return posts.sort( ( a, b ) => ( a.authorName.toUpperCase() < b.authorName.toUpperCase() ) ? -1 : 
    ( a.authorName.toUpperCase() > b.authorName.toUpperCase() ) ? 1 : 0 );
}

function changePusblishDateFormat( posts ) {
  posts.forEach( post => {
    const publishedDate = new Date( post.publishedDate );
    const dateFormatOptions = { month: 'long', day: 'numeric', year: 'numeric' };
    post.publishedDate = publishedDate.toLocaleDateString( 'en-us', dateFormatOptions );
  });
}

// loadMorePosts.addEventListener( 'click', () => {
  // subPostCollection = getSubPostCollection( allPosts, postIndex );
  //some other stuff needs to happen
// });
