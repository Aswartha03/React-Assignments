
export const update = (payload) => ({
  type: "update",
  payload,
});
 function reset(){
    return ({type:"reset"})
}
export {reset}
