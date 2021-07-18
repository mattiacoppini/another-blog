interface IPostsList {
  posts: Array<Post>;
}

interface Post {
  [key: string]: any
}

const PostsList: React.FC<IPostsList> = ({posts}) => {
  return <div>
    { posts.map( (post, index) => 
      <div key={index}>
        {post.label}
      </div>
    )}
  </div>
}

export default PostsList