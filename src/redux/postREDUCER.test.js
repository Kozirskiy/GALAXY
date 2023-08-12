import postREDUCER, { addPostActionCreator, deletePost } from "./postREDUCER";
let state = {
    myPostData: [{
            id: 1,
            message: "First post",
            iconLike: 12
        },
        {
            id: 2,
            message: "Second post",
            iconLike: 15
        },
        {
            id: 3,
            message: "Third post",
            iconLike: 23
        }
    ]
};

test('length of post should be increment', () => {

    //1. test data
    let action = addPostActionCreator('Top developer');

    //2.action
    let newState = postREDUCER(state, action);

    //3. expectation
   expect(newState.myPostData.length).toBe(4);
   

  });


  test('message', () => {

    //1. test data
    let action = addPostActionCreator('Top developer');

    //2.action
    let newState = postREDUCER(state, action);

    //3. expectation
  
   expect(newState.myPostData[4].message).toBe('Top developer');

  });

  test('after deleting length of message should be decrement', () => {

    //1. test data
    let action = deletePost(1);

    //2.action
    let newState = postREDUCER(state, action);

    //3. expectation
  
   expect(newState.myPostData.length).toBe(3);

  });
