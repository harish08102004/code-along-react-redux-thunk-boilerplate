function fetchUsers(){
    return async (dispatch) => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        )
        const data = await response.json();
        dispatch({ type: "ADD_DATA", payload: data });
      } catch (error) {
        console.log(error);
      }
    }
}

export {fetchUsers};