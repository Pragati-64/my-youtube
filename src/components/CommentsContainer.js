import React from 'react';


const commentsData = [
    {
        name: "Umang Aggarwal",
        text: "lorem ipsum abc xyz",
        replies: [
            {
                name: "Mahima",
                text: "jdfhjk dfhjk jfhkj iweyi cbmz uy khf",
                replies: [

                ]
            },
            {
                name: "Pankhuri",
                text: "wetrp ery oie fhj ncbzm gdhs wretwye",
                replies: [
                    {
                        name: "Nidhi",
                        text: "wehfis jhfkj  aehkj",
                        replies: [
                            {
                                name: "Mahima",
                                text: "jdfhjk dfhjk jfhkj iweyi cbmz uy khf",
                                replies: [
                
                                ]
                            },
                            {
                                name: "Mahima",
                                text: "jdfhjk dfhjk jfhkj iweyi cbmz uy khf",
                                replies: []
                            }

                        ]
                    }
                ]
            }
        ]
    },
    {
        name: "Ojasvi",
        text: "lorem ipsum abc xyz",
        replies: [
            {
                name: "Umang",
                text: "jdfhjk dfhjk jfhkj iweyi cbmz uy khf",
                replies: [

                ]
            },
            {
                name: "Pankhuri",
                text: "wetrp ery oie fhj ncbzm gdhs wretwye",
                replies: [
                    {
                        name: "Priyanshi",
                        text: "wehfis jhfkj  aehkj",
                        replies: [
                            {
                                name: "Mahima",
                                text: "jdfhjk dfhjk jfhkj iweyi cbmz uy khf",
                                replies: [
                
                                ]
                            },
                            {
                                name: "Pragati",
                                text: "jdfhjk dfhjk jfhkj iweyi cbmz uy khf",
                                replies: []
                            }

                        ]
                    }
                ]
            }
        ]
    }
];



const Comment = ({data}) => {
    const {name, text, replies} = data;

  return (
    <div className='flex p-3 shadow-sm bg-gray-100 rounded-md mt-5'>
         <img src="/images/profile-user.png" alt="user-profile-icon"  className='h-10' />

         <div className='px-3'>
            <p className='font-bold'>{name}</p>
            <p>{text}</p>
            {/* <Comment data={replies[0]}/> */}
         </div>
    </div>
  )
};


const CommentsList = ({comments}) => {
    return comments.map((comment, index) =>(
        <div>
            <Comment key={index} data={comment} />
            <div className='pl-5 ml-5 border border-l-black'>
            <CommentsList comments={comment.replies}/>
            </div>
        </div>
    ))
}

const CommentsContainer = () => {
  return (
    <div className='m-12 p-2'>
        <h1 className='font-bold text-2xl'>Comments: </h1>
        <CommentsList comments={commentsData}/>
    </div>
  )
}

export default CommentsContainer