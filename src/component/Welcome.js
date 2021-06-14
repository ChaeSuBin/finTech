const Welcome = ({username, age}) =>{
    console.log(username, age);
    return (
        <p>
          hello {username}!@!
        </p>
      );
  };//component 이름은 대문자로 해야함(Welcome처럼)

  export default Welcome;