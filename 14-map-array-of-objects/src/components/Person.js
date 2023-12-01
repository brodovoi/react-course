function Person(props) {
  const { firstName, lastName, email, image } = props;

  return (
    <div className="card">
      <img src={image} alt="" />
      <h3>
        {firstName} {lastName}
      </h3>
      <div>Email: {email}</div>
    </div>
  );
}

export default Person;
