import PostDetails from "@/app/components/postDetails";
import { Suspense } from "react";
export default async function postDetailsPage(props) {
  const { postId } = await props.params;
  const loadingJsx = (
    <div>
      <h1>wait....</h1>
    </div>
  );
  return (
    <div>
      <h2>Post Details </h2>
      <Suspense fallback={loadingJsx}>
        <PostDetails postId={postId} />
      </Suspense>
    </div>
  );
}
