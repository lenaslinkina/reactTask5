import React from 'react';

const CommentList = ({ comments }) => {
    console.log(comments)

    return (
        <div>
            <h2>Комментарии</h2>
            {comments.map((comment) => (
                <div key={comment.id} className='comment'>
                    <p style={{ fontSize: '10px' }}>{comment.user}</p>
                    <p style={{ fontSize: '14px' }}>{comment.commentText}</p>
                    <p className="dateComment" style={{ fontSize: '10px' }}>{comment.date}</p>
                </div>
            ))}
        </div>
    );
};

export default CommentList;
