const errorHandler = (err, req, res, next) => {
  let error = { ...err };
  
  //일단 콘솔에 표시
  console.log(err)
  console.log(err.message)

  //에러 종료에따라 ui컨트롤
  if(res.status = 404) {
    res.send("404Not Found")
  }
};

module.exports = errorHandler;
