import React, { Suspense } from 'react';
import Pageng from './pageng';

export default async function postDetials({ params }) {
  const postId = params.postId;
  const loding = <h2>The data page is loaded...</h2>;
  return (
    <div>
      <h1>post detials</h1>
      <Suspense fallback={loding}>
        <Pageng postId={postId} />
      </Suspense>
    </div>
  );
}
